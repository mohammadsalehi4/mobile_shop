const initialState={
    SelectedMax:1000,
    SelectedMin:0,
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
    return state
}

export default reducer