import selectMenu from "../util/selectMenu";
import playSound from "../../effects/playSound";

export default function titleScreen(scene, document, keyStates) {
    if (!keyStates.pressed) return;
    document.getElementById("canvas").style.opacity = 1;
    document.getElementById("inGame").style.opacity = 0;
    document.getElementById("titleScreen").style.opacity = 1;
    document.getElementById("changeShip").style.opacity = 0;
    document.getElementById("settings").style.opacity = 0;
    document.getElementById("instructions").style.opacity = 0;
    
    const options = [...document.querySelectorAll(".titleScreenOption")];
    let id = selectMenu(options, keyStates);

    if (id == "toChangeShip")   { scene.gameState = "changeShip";   playSound("confirm", 0.4); }
    if (id == "toSettings")     { scene.gameState = "settings";     playSound("confirm", 0.4); }
    if (id == "toInstructions") { scene.gameState = "instructions"; playSound("confirm", 0.4); }
    if (id == "startGame") {
        document.getElementById("titleScreen").style.opacity = 0;
        scene.gameState = "intro";
        scene.timeStamp = 0;
    }
    
    keyStates.pressed = false;
}