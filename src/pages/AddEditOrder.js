import React, { useEffect, useState } from "react";
import {
  CheckBox,
  ContactInput,
  DateInput,
  InputText,
  RadioButton,
  SelectInput,
} from "../fields/Fields";
import {
  SKU,
  categoryOptions,
  discountOptions,
  productOptions,
  quantityOptions,
  shippingCharges,
  shippingOptions,
  taxOptions,
} from "../Dropdowndata/DropdownData";

const AddEditOrder = () => {
  const [cascadeProduct, setcascadeProduct] = useState([]);
  const [formData, setformData] = useState({
    category: "",
    product: "",
    sku: "",
    description: "",
    price: "",
    discount: 10,
    net_price: null,
    tax:null,
    shipping:'',
    shipping_charges:null,
    quantity:null
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };
  useEffect(() => {
    if (formData.category) {
      const cascadeValue = productOptions.filter(
        (item) => item.category === formData.category
      );
      setcascadeProduct(cascadeValue);
    }
    if (formData.product) {
      const updatedsku = SKU.find((item) => item.name === formData.product);
      setformData({ ...formData, sku: updatedsku.value });
    }
    if(formData.price)
    {
        setformData({ ...formData, net_price: formData.price - (formData.price/100)*formData.discount });
    }
    if(formData.category)
    {
        const findTax = taxOptions.find((item)=>(item.name===formData.category))
        setformData({...formData,tax:findTax.value})
    }
    if(formData.shipping)
    {
        const findShippingCharge = shippingOptions.find((item)=>(item.name===formData.shipping))
        setformData({...formData,tax:findShippingCharge.value})
    }
  }, [formData.category, formData.product,formData.price,formData.shipping]);
  return (
    <div className="form-row">
      <form className="container ">
        <SelectInput
          inputValue={formData.category}
          handleChange={handleChange}
          options={categoryOptions}
          label="Category"
          name="category"
        />
        <SelectInput
          inputValue={formData.product}
          handleChange={handleChange}
          options={cascadeProduct}
          label="Product"
          name="product"
        />
        <InputText name="sku" label="SKU" inputValue={formData.sku} />
        <InputText
          name="description"
          label="Description"
          inputValue={formData.description}
          handleChange={handleChange}
        />
        <InputText
          type="number"
          name="price"
          label="Price"
          inputValue={formData.price}
          handleChange={handleChange}
        />
        <InputText
          type="number"
          name="discount"
          inputValue={formData.discount}
          label="Discount (in percentage)"
        />
        <InputText 
         type="number"
         name="net price"
         inputValue={formData.net_price}
         label="Net Price "
        />
         <InputText 
         type="number"
         name="tax"
         inputValue={formData.tax}
         label="Tax (in percentage)"
        />
         <SelectInput
          inputValue={formData.quantity}
          handleChange={handleChange}
          options={quantityOptions}
          label="Quantity"
          name="quantity"
        />
        <button type="submit" class="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddEditOrder;
