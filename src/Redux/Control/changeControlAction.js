export function changeController (presentController) {
    return {
        type: "Control/changeController",
        payload: presentController
    }
}

export function resetToDefault () {
    return {
        type: "Control/resetToDefault"
    }
}