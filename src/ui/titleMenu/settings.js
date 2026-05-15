import selectMenu from "../util/selectMenu";
import playSound from "../../effects/playSound";

export default function settings(scene, document, keyStates) {
    if (!keyStates.pressed) return;
    document.getElementById("canvas").style.opacity = 0.5;
    document.getElementById("titleScreen").style.opacity = 0;
    document.getElementById("settings").style.opacity = 1;

    const options = [...document.querySelectorAll(".settingsOption")];
    let id = selectMenu(options, keyStates);

    if (id == "returnToTitle") {
        scene.gameState = "titleScreen";
        playSound("confirm");
    }
    if (id == "invertUpDown") {
        let text = "inverted(default)";
        let upKey = "s or ↓";
        let downKey = "w or ↑";

        if (keyStates.upDownKey == "inverted") {
            keyStates.upDownKey = "unInverted";
            text = "not inverted";
            upKey = "w or ↑";
            downKey = "s or ↓";
        } else {
            keyStates.upDownKey = "inverted";
            text = " inverted(default)";
            upKey = "s or ↓";
            downKey = "w or ↑";
        }
        document.getElementById("upDownSettings").textContent = text;
        document.getElementById("upKey").textContent = upKey;
        document.getElementById("downKey").textContent = downKey;
        playSound("adjust");
    }
    keyStates.pressed = false;
}