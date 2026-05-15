import disposeObject from "../../misc/disposeObject";
import { createPCBlaster } from "../createPCObjects";

export default function updatePCBlasters(scene, pcShip, pcBlasters, keyStates) {
    const blasterRange = 700;
    const blasterCoolTime = pcShip.blasterCoolTime;
    const blasterDelay = pcShip.blasterDelay;
    let newBlasters = [];

    if (blasterCoolTime > 0) pcShip.blasterCoolTime -= 1;

    if (keyStates.blaster && blasterCoolTime == 0 && !keyStates.boost) {
        const newBlaster = createPCBlaster(pcShip);
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
                blaster.position.needsUpdate = true;
                return blaster;
            }
            disposeObject(scene, blaster);
            return false;
        });
    }
    pcBlasters.length = 0;
    pcBlasters.push(...newBlasters);
}