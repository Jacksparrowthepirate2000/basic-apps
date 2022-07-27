
const initialState = {
    P1: [],
    P2: []
}


function updatePlayerDataReducer (state=initialState, action) {
    if (action.type === "PlayerProgress/updatePlayerData") {
        const player = action.payload.player
        let jj;
        if(player === "P1"){
            jj = {
                ...state,
                P1: [...(state.P1), Number(action.payload.element)]
            }
        } else {
            jj = {
                ...state,
                P2: [...(state.P2), Number(action.payload.element)]
            }
        }
        return jj
    } 
    
    else if (action.type === "PlayerProgress/resetPlayerData") {
        return initialState
    } 
    
    else {
        return state
    }
}

export default updatePlayerDataReducer;