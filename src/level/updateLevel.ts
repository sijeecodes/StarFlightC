import { createNPCObject } from "../npc/createNPCObjects";
import type { GameScene, NPCObjects } from "../types";

export default function updateLevel(scene: GameScene, npcObjects: NPCObjects): void {
    scene.timeStamp++;
    if (scene.levelArr.length < 1) return;

    while (scene.levelArr.length > 0
        && scene.levelArr[0].eventTime <= scene.timeStamp) {

        const objData = scene.levelArr[0];
        createNPCObject(scene, npcObjects, objData);
        scene.levelArr.shift();
        scene.timeStamp = 0;
    }
}