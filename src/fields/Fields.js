export const RadioButton = () => {
  return (
    <>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="gridRadios"
          id="gridRadios1"
          value="option1"
          checked
        />
        <label class="form-check-label" for="gridRadios1">
          First radio
        </label>
      </div>
    </>
  );
};

export const CheckBox = () => {
  return (
    <div class="form-group">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck" />
        <label class="form-check-label" for="gridCheck">
          Revieve Status Updates
        </label>
      </div>
    </div>
  );
};

export const InputText = ({name,inputValue,handleChange,label,type="text"}) => {
  return (
    <div class="form-group">
      <label for="inputState">{label}</label>
      <input type={type} name={name} value={inputValue} onChange={handleChange} className="form-control" placeholder={name} />
    </div>
  );
};

export const ContactInput = () => {
  return (
    <div class="form-group">
      <label for="inputState">Estimated Delevery</label>
      <input type="tel" className="form-control" placeholder="Tax" />
    </div>
  );
};

export const DateInput = () => {
  return (
    <div class="form-group">
      <label for="inputState">Estimated Delevery</label>
      <input type="date" className="form-control" placeholder="Tax" />
    </div>
  );
};

export const SelectInput = ({ options, label,handleChange,inputValue,name }) => {
  return (
    <div class="form-group">
      <label for="inputState">{label}</label>
      <select name={name} onChange={handleChange} value={inputValue} id="inputState" class="form-control">
        <option>Choose...</option>
        {options &&
          options.length > 0 &&
          options.map((item) => <option value={item.value}>{item.name}</option>)}
      </select>
    </div>
  );
};
