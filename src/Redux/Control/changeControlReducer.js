const initialState = {
    backgroundColor: "DeepSkyBlue",
    color: "white",
    pattern: 'X',
    disabled: true,
    currentPlayer: "P1"
}

function changeControllerReducer (state=initialState, action) {
    switch (action.type) {
        case "Control/changeController": {
            if (action.payload === "P1" || action.payload === "p1") {
                return initialState
            }

            else if (action.payload === "P2" || action.payload === "p2") {
                return {
                    backgroundColor: "red",
                    color: "white",
                    pattern: "O",
                    disabled: true,
                    currentPlayer: "P2"
                }
            }

            else {
                return state
            }
        }

        case ("Control/resetToDefault") : {
            return initialState
        }

        default: {
            return state
        }
    }
}


export default changeControllerReducer;