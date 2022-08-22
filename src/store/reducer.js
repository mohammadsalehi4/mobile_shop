const initialState={
    SelectedMax:1000,
    SelectedMin:0,
    cartProduuct:[],
    openMenu:false,
    productPage:true,
    cartPNumber:3,    
    ShowPlan:0,
    messages:2,
    loading:true
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
    if(action.type==="CHANGEOPENMENU"){
        return {
            ...state,
            openMenu:action.value
        }
    }
    if(action.type==="CHANGEPRODUCTPAGE"){
        return {
            ...state,
            productPage:action.value
        }
    }
    if(action.type==="CHANGECARTPNUMBER"){
        return {
            ...state,
            cartPNumber:action.value
        }
    }
    if(action.type==="CHANGELOADING"){
        return {
            ...state,
            loading:action.value
        }
    }
    return state
}

export default reducer