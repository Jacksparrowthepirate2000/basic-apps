export function findWinner(a,b){
    return {
        type: "Winner/findWinner",
        payload: [a,b]
    }
}

export function resetWinnerToDefault () {
    return {
        type: "Winner/resetWinnerToDefault"
    }
}