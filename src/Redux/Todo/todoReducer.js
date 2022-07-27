const initialState = [];

function elementInArray (element, arr) {
    for (let i of arr){
        if(i === element){return true}
    }
    return false
}





function changeTodoListReducer ( state = initialState , action ) {
    if (action.type === "Todo/addTodo") {
        if (action.payload === "") {return state}
        else if (elementInArray(action.payload, state)){
            return state
        }
        return [...state , action.payload]
    }

    else if (action.type === "Todo/deleteTodo") {
        return state.filter(function(x){return x !== action.payload})
    }

    else {
        return state;
    }
}

export default changeTodoListReducer;