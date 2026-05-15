import { createPCShip } from "./pc/createPCObjects";
import initiatePCShip from "./pc/pcObjects/initiatePCShip";
import disposeObject from "./misc/disposeObject";
import disposeSprite from "./misc/disposeSprite";
import createBackground from "./environment/createBackground";
import createLevelArr from "./level/createLevelArr";

function initiateGame(scene, pcObjects, npcObjects, explosionObjects, camera) {

    if (scene.backgroundObjs.length > 0) scene.backgroundObjs.forEach(e => disposeSprite(scene, e.uuid));
    if (pcObjects.pcBlasters.length > 0) pcObjects.pcBlasters.forEach(e => disposeObject(scene, e));
    if (npcObjects.npcs.length > 0) npcObjects.npcs.forEach(e => disposeObject(scene, e));
    if (npcObjects.npcBlasters.length > 0) npcObjects.npcBlasters.forEach(e => disposeObject(scene, e));
    if (explosionObjects.sprites.length > 0) explosionObjects.sprites.forEach(e => disposeSprite(scene, e.uuid));

    scene.backgroundObjs = [];
    scene.levelArr = undefined;
    scene.gameState = "titleScreen";
    scene.timeStamp = 0;
    scene.boostSpeed = 0;
    scene.boostalbe = true;

    reloadPCShip(scene, pcObjects)
    createBackground(scene);
    createLevelArr(scene)
    camera.position.set(50, 25, 192);
    camera.lookAt(0, 0, 0);
}

function reloadPCShip(scene, pcObjects) {
    disposeObject(scene, pcObjects.pcShip);
    pcObjects.pcShip = undefined;
    pcObjects.pcShip = createPCShip(scene.shipNumber);
    scene.add(pcObjects.pcShip);
    initiatePCShip(pcObjects.pcShip, scene.shipNumber);
}

export { initiateGame, reloadPCShip };