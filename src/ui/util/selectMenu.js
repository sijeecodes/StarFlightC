import playSound from "../../effects/playSound";

const selectMenu = (options, keyStates) => {
    let selected = options.findIndex(e => e.classList.contains("selected"));
    let upKey = keyStates.up;
    let downKey = keyStates.down;
    if (keyStates.upDownKey == "unInverted") {
        upKey = keyStates.down;
        downKey = keyStates.up;
    }

    if (downKey) {
        options[selected].classList.remove("selected");
        selected = (selected + 1) % options.length;
        options[selected].classList.add("selected");
        playSound("select", 0.4);

    } else if (upKey) {
        options[selected].classList.remove("selected");
        selected = (selected - 1 + options.length) % options.length;
        options[selected].classList.add("selected");
        playSound("select", 0.4);

    } else if (keyStates.enter) {
        const id = options[selected].id;
        return id;
    }

    keyStates.pressed = false;
    return false;
}

export default selectMenu;