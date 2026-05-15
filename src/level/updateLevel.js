import { createNPCObject } from "../npc/createNPCObjects";

export default function updateLevel(scene, npcObjects) {
    scene.timeStamp++;
    if (scene.levelArr.length < 1) return npcObjects;

    while (scene.levelArr.length > 0
        && scene.levelArr[0].eventTime <= scene.timeStamp) {

        const objData = scene.levelArr[0];
        createNPCObject(scene, npcObjects, objData);
        scene.levelArr.shift();
        scene.timeStamp = 0;
    }
}