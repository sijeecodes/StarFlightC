import * as THREE from "three";
import disposeObject from "../misc/disposeObject";
import closeDistance from "./closeDistance";
import raycastHit from "./raycastHit";
import createExplosion from "../effects/createExplosion";
import type { GameScene, PCObjects, NPCObjects, ExplosionObjects, Hittable } from "../types";

export default function collisionCheck(
    scene: GameScene,
    pcObjects: PCObjects,
    npcObjects: NPCObjects,
    explosionObjects: ExplosionObjects
): void {
    const pcShip = pcObjects.pcShip;
    const pcBlasters = pcObjects.pcBlasters;
    const npcs = npcObjects.npcs;
    const npcBlasters = npcObjects.npcBlasters;
    let newBlasters: typeof pcObjects.pcBlasters = [];
    let newNpcs: typeof npcObjects.npcs = [];

    //check all pcBlasters vs enemies
    pcBlasters.forEach((pcBlaster) => {
        const innerNpcs: typeof npcObjects.npcs = [];
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
                    } else innerNpcs.push(npc);
                } else innerNpcs.push(npc);
            } else {
                innerNpcs.push(npc);
            }
        });
        !pcBlasterGone && newBlasters.push(pcBlaster);
        npcs.length = 0;
        npcs.push(...innerNpcs);
    });
    pcBlasters.length = 0;
    pcBlasters.push(...newBlasters);

    if (pcShip.rolling) return;
    //check all npcs vs pc
    npcs.forEach((npc) => {
        if (closeDistance(npc, pcShip)) {
            if (raycastHit(npc, pcShip.children[1].children[0] as unknown as Hittable)) {
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
                    const mesh = child as THREE.Mesh;
                    if (mesh.isMesh && !Array.isArray(mesh.material))
                        (mesh.material as THREE.MeshBasicMaterial).color.set(0xffffff);
                })
            }
        }
    });
    npcs.length = 0;
    npcs.push(...newNpcs);

    //check all enemy blasters vs pc
    const survivingNpcBlasters: typeof npcObjects.npcBlasters = [];
    npcBlasters.forEach((blaster) => {
        if (closeDistance(blaster, pcShip)) {
            if (raycastHit(blaster, pcShip.children[1].children[0] as unknown as Hittable)) {
                createExplosion(scene, pcShip, "hit", explosionObjects);
                pcShip.hp -= blaster.power;
                disposeObject(scene, blaster);
            } else survivingNpcBlasters.push(blaster);
        } else survivingNpcBlasters.push(blaster);
    });
    npcBlasters.length = 0;
    npcBlasters.push(...survivingNpcBlasters);

    if (pcShip.hp < 0) pcShip.hp = 0;
}