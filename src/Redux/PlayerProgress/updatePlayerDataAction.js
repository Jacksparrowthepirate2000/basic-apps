export function updatePlayerData (player , element) {
    return {
        type: "PlayerProgress/updatePlayerData",
        payload: {
            player,
            element
        }
    }
}

export function resetPlayerData () {
    return {
        type: "PlayerProgress/resetPlayerData"
    }
}

//export default updatePlayerData;

