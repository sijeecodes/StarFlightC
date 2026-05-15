import disposeObject from "../misc/disposeObject";
import updateNPCAI from "./npcAI/updateNPCAI";
import updateNPCPosition from "./npcObjects/updateNPCPosition";
import updateNPCRotation from "./npcObjects/updateNPCRotation";
import updateNPCBlasters from "./npcObjects/updateNPCBlasters";
import { createNPCBlaster } from "./createNPCObjects";

export default function updateNPCObjects(scene, pcPos, { npcs, npcBlasters }) {
    if (npcs.length < 1 && npcBlasters.length < 1) {
        scene.timeStamp += 2;
        return;
    }

    let newNPCList = npcs
        .filter(npc => {

            npc.elapsedTime++;
            npc.aiPatternTime++;

            updateNPCAI(npc, pcPos);
            updateNPCPosition(scene, npc);
            updateNPCRotation(npc);
            createNPCBlaster(scene, pcPos, npc, npcBlasters);

            // set npcs to head behind when passed
            if (npc.position.z < 0 && npc.type != "asteroid") {
                npc.aiPattern = [];
                npc.targetRotation = [0, 0, 0];
                npc.targetPosition[2] = -300;
            }

            // unstage passed npcs
            if (npc.position.z < -200
                || Math.abs(npc.position.x) > 300
                || Math.abs(npc.position.y) > 150) {

                if (npc.unpassable) scene.boostalbe = true;

                disposeObject(scene, npc);
                return false;
            }
            return true;
        });
    npcs.length = 0;
    npcs.push(...newNPCList);

    updateNPCBlasters(scene, npcBlasters);
};