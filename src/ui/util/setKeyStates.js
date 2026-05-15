const initKeyState = function () {
    return {
        right: false,
        left: false,
        up: false,
        down: false,
        rightRoll: false,
        leftRoll: false,
        boost: false,
        blaster: false,
        enter: false,
        esc: false,
        upDownKey: "inverted",
        pressed: false
    };
};

const setKeyState = function (keyStates, event) {
    let upKey1 = "KeyW";
    let upKey2 = "ArrowUp";
    let downKey1 = "KeyS";
    let downKey2 = "ArrowDown";
    if (keyStates.upDownKey == "unInverted") {
        upKey1 = "KeyS";
        upKey2 = "ArrowDown";
        downKey1 = "KeyW";
        downKey2 = "ArrowUp";
    }
    keyStates.pressed = true;
    
    if (event.code == "KeyD") { keyStates.right = true; return keyStates; }
    if (event.code == "KeyA") { keyStates.left = true; return keyStates; }
    if (event.code == upKey1) { keyStates.up = true; return keyStates; }
    if (event.code == downKey1) { keyStates.down = true; return keyStates; }
    if (event.code == "ArrowRight") { keyStates.right = true; return keyStates; }
    if (event.code == "ArrowLeft") { keyStates.left = true; return keyStates; }
    if (event.code == upKey2) { keyStates.up = true; return keyStates; }
    if (event.code == downKey2) { keyStates.down = true; return keyStates; }
    if (event.code == "KeyV") { keyStates.rightRoll = true; return keyStates; }
    if (event.code == "KeyE") { keyStates.rightRoll = true; return keyStates; }
    if (event.code == "KeyM") { keyStates.rightRoll = true; return keyStates; }
    if (event.code == "KeyC") { keyStates.leftRoll = true; return keyStates; }
    if (event.code == "KeyQ") { keyStates.leftRoll = true; return keyStates; }
    if (event.code == "KeyN") { keyStates.leftRoll = true; return keyStates; }
    if (event.code == "KeyX") { keyStates.boost = true; return keyStates; }
    if (event.code == "Comma") { keyStates.boost = true; return keyStates; }
    if (event.code == "Space") { keyStates.blaster = true; return keyStates; }
    if (event.code == "Enter") { keyStates.enter = true; return keyStates; }
    if (event.code == "Escape") { keyStates.esc = true; return keyStates; }

    return keyStates;
};

const resetKeyState = function (keyStates, event, upDownKey) {
    let upKey1 = "KeyW";
    let upKey2 = "ArrowUp";
    let downKey1 = "KeyS";
    let downKey2 = "ArrowDown";
    if (keyStates.upDownKey == "unInverted") {
        upKey1 = "KeyS";
        upKey2 = "ArrowDown";
        downKey1 = "KeyW";
        downKey2 = "ArrowUp";
    }
    keyStates.pressed = true;

    if (event.code == "KeyD") { keyStates.right = false; return keyStates; }
    if (event.code == "KeyA") { keyStates.left = false; return keyStates; }
    if (event.code == upKey1) { keyStates.up = false; return keyStates; }
    if (event.code == downKey1) { keyStates.down = false; return keyStates; }
    if (event.code == "ArrowRight") { keyStates.right = false; return keyStates; }
    if (event.code == "ArrowLeft") { keyStates.left = false; return keyStates; }
    if (event.code == upKey2) { keyStates.up = false; return keyStates; }
    if (event.code == downKey2) { keyStates.down = false; return keyStates; }
    if (event.code == "KeyV") { keyStates.rightRoll = false; return keyStates; }
    if (event.code == "KeyE") { keyStates.rightRoll = false; return keyStates; }
    if (event.code == "KeyM") { keyStates.rightRoll = false; return keyStates; }
    if (event.code == "KeyC") { keyStates.leftRoll = false; return keyStates; }
    if (event.code == "KeyQ") { keyStates.leftRoll = false; return keyStates; }
    if (event.code == "KeyN") { keyStates.leftRoll = false; return keyStates; }
    if (event.code == "KeyX") { keyStates.boost = false; return keyStates; }
    if (event.code == "Comma") { keyStates.boost = false; return keyStates; }
    if (event.code == "Space") { keyStates.blaster = false; return keyStates; }
    if (event.code == "Enter") { keyStates.enter = false; return keyStates; }
    if (event.code == "Escape") { keyStates.esc = false; return keyStates; }

    return keyStates;
};

export { initKeyState, setKeyState, resetKeyState };