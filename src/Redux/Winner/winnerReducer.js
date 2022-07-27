import { checkWinner } from "../PlayerProgress/logicForWinner";

const initialState = "None";

function winnerReducer (state = initialState, action) {
    if (action.type === "Winner/findWinner") {
        return checkWinner(action.payload[0], action.payload[1])
    } 
    else if (action.type === "Winner/resetWinnerToDefault") {
        return initialState
    }
    else {
        return state
    }
}

export default winnerReducer;