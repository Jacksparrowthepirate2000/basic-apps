import changeControllerReducer from "../Control/changeControlReducer";
import updatePlayerDataReducer from "../PlayerProgress/updatePlayerDataReducer";
import winnerReducer from "../Winner/winnerReducer";
import changeTodoListReducer from "../Todo/todoReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeControllerReducer,
    updatePlayerDataReducer,
    winnerReducer,
    changeTodoListReducer
})

export default rootReducer;