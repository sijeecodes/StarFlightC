export default function updatePCShipBoost(scene, pcShip, keyStates) {
    let accelZ = pcShip.speedAccel[2];
    let decelZ = pcShip.speedDecel[2];
    let maxZ = pcShip.maxSpeed[2];

    if (keyStates.boost && pcShip.energy > 0 && scene.boostalbe) {
        pcShip.energy -= pcShip.boostCost;
        scene.timeStamp += 2;

        if (keyStates.boost && scene.boostSpeed < maxZ) {
            scene.boostSpeed += accelZ / 2;
            if (scene.boostSpeed > maxZ) scene.boostSpeed = maxZ;
        }
    } else if (scene.boostSpeed > 0) {
        scene.boostSpeed = scene.boostSpeed * decelZ;
        if (scene.boostSpeed < 0.01) scene.boostSpeed = 0;
    }
}