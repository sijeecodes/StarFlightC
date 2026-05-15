import disposeObject from "../misc/disposeObject";
import closeDistance from "./closeDistance";
import raycastHit from "./raycastHit";
import createExplosion from "../effects/createExplosion";

export default function collisionCheck(scene, pcObjects, npcObjects, explosionObjects) {
    const pcShip = pcObjects.pcShip;
    const pcBlasters = pcObjects.pcBlasters;
    const npcs = npcObjects.npcs;
    const npcBlasters = npcObjects.npcBlasters;
    let newBlasters = [];
    let newNpcs = [];

    //check all pcBlasters vs enemies
    pcBlasters.forEach((pcBlaster) => {
        let newNpcs = [];
        let pcBlasterGone = false;

        npcs.forEach((npc) => {
            if (closeDistance(pcBlaster, npc)) {
                if (raycastHit(pcBlaster, npc)) {
                    createExplosion(scene, pcBlaster, "hit", explosionObjects);
                    disposeObject(scene, pcBlaster);
                    pcBlasterGone = true;

                    npc.hp -= pcBlaster.power;
                    if (npc.hp <= 0) {
                        createExplosion(scene, npc, "explode", explosionObjects);
                        if (npc.unpassable) scene.boostalbe = true;
                        disposeObject(scene, npc);
                    } else newNpcs.push(npc);
                } else newNpcs.push(npc);
            } else {
                newNpcs.push(npc);
            }
        });
        !pcBlasterGone && newBlasters.push(pcBlaster);
        npcs.length = 0;
        npcs.push(...newNpcs);
    });
    pcBlasters.length = 0;
    pcBlasters.push(...newBlasters);

    if (pcShip.rolling) return;
    //check all npcs vs pc
    npcs.forEach((npc) => {
        if (closeDistance(npc, pcShip)) {
            if (raycastHit(npc, pcShip.children[1].children[0])) {
                createExplosion(scene, pcShip, "hit", explosionObjects);
                createExplosion(scene, npc, "hit", explosionObjects);
                pcShip.hp -= npc.power;
                npc.hp -= 1;

                if (npc.hp <= 0) {
                    createExplosion(scene, npc, "explode", explosionObjects);
                    if (npc.unpassable) scene.boostalbe = true;

                    disposeObject(scene, npc);
                } else newNpcs.push(npc);
            } else newNpcs.push(npc);
        } else newNpcs.push(npc);

        if (npc.hitMark > 0) {
            npc.hitMark -= 1;
            if (npc.hitMark == 0) {
                npc.traverse((child) => {
                    if (child.isMesh) child.material.color.set(0xffffff)
                })
            }
        }
    });
    npcs.length = 0;
    npcs.push(...newNpcs);

    //check all enemy blasters vs pc
    newBlasters.length = 0;
    npcBlasters.forEach((blaster) => {
        if (closeDistance(blaster, pcShip)) {
            if (raycastHit(blaster, pcShip.children[1].children[0])) {
                createExplosion(scene, pcShip, "hit", explosionObjects);
                pcShip.hp -= blaster.power;

                disposeObject(scene, blaster);
            } else newBlasters.push(blaster);
        } else newBlasters.push(blaster);
    });
    npcBlasters.length = 0;
    npcBlasters.push(...newBlasters);

    if (pcShip.hp < 0) pcShip.hp = 0;
}