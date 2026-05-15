import { speedDecelerateX } from "./updatePCShipSpeed";

export default function updatePCShipRoll(scene, pcShip, keyStates, maxWidth) {
    let decelX = pcShip.speedDecel[0];
    let pos = pcShip.position;
    let rot = pcShip.rotation;
    let maxX = pcShip.maxSpeed[1];
    let [speedX, speedY] = pcShip.speed;

    //update roll cool-time
    if (pcShip.rollCoolTime > 0) pcShip.rollCoolTime--;

    if (pcShip.rolling) {
        if (pcShip.rolling == "rightRoll") {
            (pos.x > -maxWidth) ? speedX = -maxX * 2.3 : speedX = speedX * decelX;
            rot.z += (Math.PI * 2 - rot.z) * 0.24;

            if (rot.z >= Math.PI * 1.9) {
                rot.z -= Math.PI * 2;
                pcShip.rolling = false;
                speedX = speedDecelerateX(speedX, decelX);
            }
        }
        if (pcShip.rolling == "leftRoll") {
            (pos.x < maxWidth) ? speedX = maxX * 2.3 : speedX = speedX * decelX;
            rot.z += (-Math.PI * 2 - rot.z) * 0.24;

            if (rot.z <= -Math.PI * 1.9) {
                rot.z += Math.PI * 2;
                pcShip.rolling = false;
                speedX = speedDecelerateX(speedX, decelX);
            }
        }

    } else {
        if (keyStates.rightRoll && pcShip.rollCoolTime == 0
            && pcShip.energy >= pcShip.rollCost && !scene.boostSpeed) {

            pcShip.rolling = "rightRoll";
            pcShip.rollCoolTime = pcShip.rollDelay;
            pcShip.energy -= pcShip.rollCost;
            speedY = 0;
            (pos.x > -maxWidth) ? speedX = -maxX * 2 : speedX = speedX * decelX;
        }
        if (keyStates.leftRoll && pcShip.rollCoolTime == 0
            && pcShip.energy >= pcShip.rollCost && !scene.boostSpeed) {

            pcShip.rolling = "leftRoll";
            pcShip.rollCoolTime = pcShip.rollDelay;
            pcShip.energy -= pcShip.rollCost;
            speedY = 0;
            (pos.x < maxWidth) ? speedX = maxX * 2 : speedX = speedX * decelX;
        }
    }

    pcShip.speed = [speedX, speedY, pcShip.speed[2]];
}