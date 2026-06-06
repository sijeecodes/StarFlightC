import * as THREE from "three";
import updatePCShipBoost from "./pcObjects/updatePCShipBoost";
import updatePCShipLR from "./pcObjects/updatePCShipLR";
import updatePCShipUD from "./pcObjects/updatePCShipUD";
import updatePCShipRoll from "./pcObjects/updatePCShipRoll";
import updatePCBlasters from "./pcObjects/updatePCBlasters";
import type { GameScene, PCObjects, KeyStates } from "../types";

const updatePCObjects = function (
    scene: GameScene,
    camera: THREE.Camera,
    { pcShip, pcBlasters }: PCObjects,
    keyStates: KeyStates
): void {
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
        pcShip.rotation.y = speedX / maxX / 50 * Math.PI;
        pcShip.rotation.x = -speedY / maxY / 50 * Math.PI;
    }
    
    //update camera position to follow the ship
    const targetX = pcShip.position.x * 0.85;
    const targetY = pcShip.position.y * 0.85 + 10;
    camera.position.x -= (camera.position.x - targetX) * 0.1;
    camera.position.y -= (camera.position.y - targetY) * 0.1;

    //update camera rotation based on ship movement speed
    const prevRotZ = camera.rotation.z;
    const targetRotZ = Math.PI + speedX / maxX / 25 * Math.PI;
    camera.lookAt(0, 0, 700);

    camera.rotation.x = Math.PI - (pcShip.position.y - 50) / 1000;
    camera.rotation.z = prevRotZ;
    camera.rotation.z += (targetRotZ - camera.rotation.z) * 0.3;

    updatePCBlasters(scene, pcShip, pcBlasters, keyStates);
};

export default updatePCObjects;