export function addTodo (x) {
    return {
        type: "Todo/addTodo",
        payload: x
    }
}

export function deleteTodo (x) {
    return {
        type: "Todo/deleteTodo",
        payload: x
    }
}