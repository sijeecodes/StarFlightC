import { reloadPCShip } from "../../initiateGame";
import selectMenu from "../util/selectMenu";
import pcShipData from "../../pc/pcData/pcShipData";
import playSound from "../../effects/playSound";

export default function changeShip(scene, document, keyStates, pcObjects) {
    if (!keyStates.pressed) return;

    document.getElementById("titleScreen").style.opacity = 0;
    document.getElementById("changeShip").style.opacity = 1;

    const options = [...document.querySelectorAll(".changeShipOption")];
    let id = selectMenu(options, keyStates);

    if (keyStates.right) {
        scene.shipNumber++;
        if (scene.shipNumber >= pcShipData.length) scene.shipNumber = 0;

        document.getElementById("shipName").textContent = pcShipData[scene.shipNumber].name;
        document.getElementById("shipDesc").textContent = pcShipData[scene.shipNumber].desc;
        reloadPCShip(scene, pcObjects);
        playSound("adjust")
    }
    if (keyStates.left) {
        scene.shipNumber--;
        if (scene.shipNumber < 0) scene.shipNumber = pcShipData.length - 1;

        document.getElementById("shipName").textContent = pcShipData[scene.shipNumber].name;
        document.getElementById("shipDesc").textContent = pcShipData[scene.shipNumber].desc;
        reloadPCShip(scene, pcObjects);
        playSound("adjust");
    }

    if (id == "returnToTitle") {
        scene.gameState = "titleScreen";
        playSound("confirm");
    }
    keyStates.pressed = false;
}