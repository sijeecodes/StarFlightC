import collisionCheck from "./collision/collisionCheck";
import updateBackground from "./environment/updateBackground";
import updateLevel from "./level/updateLevel";
import updatePCObjects from "./pc/updatePCObjects";
import updateNPCObjects from "./npc/updateNPCObjects";
import updateExplosions from "./effects/updateExplosions";
import updateGauge from "./ui/inGame/updateGauge";

export default function gameLogic(scene, npcObjects, pcObjects, explosionObjects, document, camera, keyStates) {
    updateBackground(scene, scene.backgroundObjs);
    updateLevel(scene, npcObjects);
    updateNPCObjects(scene, pcObjects.pcShip.position, npcObjects);
    updatePCObjects(scene, camera, pcObjects, keyStates);

    collisionCheck(scene, pcObjects, npcObjects, explosionObjects);
    updateExplosions(scene, explosionObjects)

    updateGauge(document, pcObjects);
    if (keyStates.esc) scene.gameState = "pause";
    if (pcObjects.pcShip.hp <= 0) pcObjects.pcShip.visible = false;
    if (pcObjects.pcShip.hpDisplayed <= 0) scene.gameState = "gameOver";
    if (scene.levelArr.length <= 0 && 
        npcObjects.npcs.length <= 0) scene.gameState = "missionComplete";
}