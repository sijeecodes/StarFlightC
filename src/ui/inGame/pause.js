import selectMenu from "../util/selectMenu";
import playSound from "../../effects/playSound";

export default function pause(scene, document, keyStates) {
    if (!keyStates.pressed) return;
    document.getElementById("canvas").style.opacity = 0.5;
    document.getElementById("inGame").style.opacity = 0.2;
    document.getElementById("pause").style.opacity = 1;
    
    const options = [...document.querySelectorAll(".pauseOption")];
    let id = selectMenu(options, keyStates);

    if (id == "returnToTitle") {
        document.getElementById("canvas").style.opacity = 1;
        document.getElementById("inGame").style.opacity = 0;
        document.getElementById("pause").style.opacity = 0;
        document.getElementById("titleScreen").style.opacity = 1;
        scene.gameState = "initiateGame";
    }
    if (id == "resume") {
        document.getElementById("canvas").style.opacity = 1;
        document.getElementById("inGame").style.opacity = 1;
        document.getElementById("pause").style.opacity = 0;
        scene.gameState = "playing";
        playSound("confirm");
    }
    keyStates.pressed = false;
}