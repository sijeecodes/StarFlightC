import * as THREE from "three";
import pcShipData from "../pcData/createPCShipData";
import type { PCShip, NPCObject } from "../../types";

const PERP_THRESHOLD = 9;

export default function updatePCAutoTarget(pcShip: PCShip, npcs: NPCObject[]): void {
    const bd = pcShipData[pcShip.shipNumber].blaster;
    const sx = pcShip.speed[0];
    const sy = pcShip.speed[1];
    const sz = Math.sqrt(Math.max(0, bd.speed ** 2 - sx ** 2 - sy ** 2));
    const forward = new THREE.Vector3(sx, sy, sz).normalize();

    let bestNPC: NPCObject | null = null;
    let bestDist = Infinity;

    for (const npc of npcs) {
        const delta = new THREE.Vector3().subVectors(npc.position, pcShip.position);
        const projLen = delta.dot(forward);
        if (projLen <= 0) continue;

        const perp = delta.clone().sub(forward.clone().multiplyScalar(projLen));
        if (perp.length() > PERP_THRESHOLD) continue;

        const dist = delta.length();
        if (dist < bestDist) {
            bestDist = dist;
            bestNPC = npc;
        }
    }

    pcShip.autoTarget = bestNPC;

    if (bestNPC) {
        pcShip.targetMarker.position.copy(bestNPC.position);
        // console.log("Auto-targeting NPC at", bestNPC);
        pcShip.targetMarker.position.z -= bestNPC.collisionSize; // Slightly above the target
        pcShip.targetMarker.visible = true;
    } else {
        pcShip.targetMarker.visible = false;
    }
}
