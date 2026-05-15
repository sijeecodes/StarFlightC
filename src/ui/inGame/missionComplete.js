import selectMenu from "../util/selectMenu";
import playSound from "../../effects/playSound";

export default function missionComplete(scene, document, keyStates) {
    if (!keyStates.pressed) return;
    document.getElementById("canvas").style.opacity = 0.5;
    document.getElementById("inGame").style.opacity = 0;
    document.getElementById("missionComplete").style.opacity = 1;

    const options = [...document.querySelectorAll(".missionCompleteOption")];
    let id = selectMenu(options, keyStates);

    if (id == "returnToTitle") {
        document.getElementById("canvas").style.opacity = 1;
        document.getElementById("inGame").style.opacity = 0;
        document.getElementById("missionComplete").style.opacity = 0;
        document.getElementById("titleScreen").style.opacity = 1;
        scene.gameState = "initiateGame";
        playSound("confirm");
    }
    keyStates.pressed = false;
}