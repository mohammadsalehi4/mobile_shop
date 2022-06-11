const initialState={
    SelectedMax:1000,
    SelectedMin:0,
    cartProduuct:[]
}

const reducer=(state=initialState,action)=>{
    if(action.type==="CHANGEMAX"){
        return {
            ...state,
            SelectedMax:action.value
        }
    }
    if(action.type==="CHANGEMIN"){
        return {
            ...state,
            SelectedMin:action.value
        }
    }
    if(action.type==="ADDTOCART"){
        return {
            ...state,
            cartProduuct:[...state.cartProduuct,action.newItem]
        }
    }
    return state
}

export default reducer