import updatePCShipBoost from "./pcObjects/updatePCShipBoost";
import updatePCShipLR from "./pcObjects/updatePCShipLR";
import updatePCShipUD from "./pcObjects/updatePCShipUD";
import updatePCShipRoll from "./pcObjects/updatePCShipRoll";
import updatePCBlasters from "./pcObjects/updatePCBlasters";

const updatePCObjects = function (scene, camera, { pcShip, pcBlasters }, keyStates) {
    const maxWidth = 35;
    const maxHeight = 15;
    let diagonal = false;

    if (!pcShip.rolling) {
        updatePCShipBoost(scene, pcShip, keyStates);
        //move ship left/right
        diagonal = updatePCShipLR(pcShip, keyStates, maxWidth, diagonal);
        //move ship up/down
        diagonal = updatePCShipUD(pcShip, keyStates, maxHeight, diagonal);
    }
    updatePCShipRoll(scene, pcShip, keyStates, maxWidth);

    //update energy
    pcShip.energyCoolTime--;
    if (pcShip.energy <= pcShip.energyMax && pcShip.energyCoolTime <= 0) {
        pcShip.energy += pcShip.energyRecharge;
        pcShip.energyCoolTime = pcShip.energyDelay;
        if (pcShip.energy > pcShip.energyMax) pcShip.energy = pcShip.energyMax;
    }

    let [maxX, maxY] = pcShip.maxSpeed;
    let [speedX, speedY, speedZ] = pcShip.speed;
    //update ship position based on speed
    pcShip.position.x += speedX;
    pcShip.position.y += speedY;
    pcShip.position.z = scene.boostSpeed * 15;

    //update ship rotation based on speed
    if (!pcShip.rolling) {
        pcShip.rotation.z = -speedX / maxX / 7 * Math.PI;
        pcShip.rotation.y = speedX / maxX / 30 * Math.PI;
        pcShip.rotation.x = -speedY / maxY / 30 * Math.PI;
    }

    //update camera rotation based on ship movement speed
    camera.rotation.z = Math.PI + speedX / maxX / 50 * Math.PI;
    camera.rotation.y = -pcShip.position.x / 1000;
    camera.rotation.x = Math.PI - (pcShip.position.y - 50) / 1000;

    updatePCBlasters(scene, pcShip, pcBlasters, keyStates);
};

export default updatePCObjects;