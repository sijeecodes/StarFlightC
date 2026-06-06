import * as THREE from "three";
import disposeObject from "../../misc/disposeObject";
import { createPCBlaster } from "../createPCObjects";
import pcShipData from "../pcData/createPCShipData";
import type { GameScene, PCShip, PCBlaster, KeyStates } from "../../types";

export default function updatePCBlasters(
    scene: GameScene,
    pcShip: PCShip,
    pcBlasters: PCBlaster[],
    keyStates: KeyStates
): void {
    const blasterRange = 700;
    const blasterCoolTime = pcShip.blasterCoolTime;
    const blasterDelay = pcShip.blasterDelay;
    let newBlasters: PCBlaster[] = [];

    if (blasterCoolTime > 0) pcShip.blasterCoolTime -= 1;

    if (keyStates.blaster && blasterCoolTime == 0 && !keyStates.boost) {
        const newBlaster = createPCBlaster(pcShip);
        if (pcShip.autoTarget) {
            const blasterSpeed = pcShipData[pcShip.shipNumber].blaster.speed;
            const dir = new THREE.Vector3()
                .subVectors(pcShip.autoTarget.position, newBlaster.position)
                .normalize()
                .multiplyScalar(blasterSpeed);
            newBlaster.speed = [dir.x, dir.y, dir.z];
        }
        scene.add(newBlaster);
        pcBlasters.push(newBlaster);
        pcShip.blasterCoolTime = blasterDelay;
    }

    if (pcBlasters.length > 0) {
        newBlasters = pcBlasters.filter((blaster) => {
            if (blaster.position.z < blasterRange) {
                blaster.position.x += blaster.speed[0];
                blaster.position.y += blaster.speed[1];
                blaster.position.z += blaster.speed[2] - scene.boostSpeed;
                return blaster;
            }
            disposeObject(scene, blaster);
            return false;
        });
    }
    pcBlasters.length = 0;
    pcBlasters.push(...newBlasters);
}