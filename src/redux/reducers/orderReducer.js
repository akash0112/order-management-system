const initialState={
    orders:[]
}

const orderReducer=(state=initialState,action)=>{
    const {type,payload} = action
    switch (type) {
        case "value":
            
            return state;
    
        default:
            return state;
    }
}

export default orderReducer