import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import createAimFrame from "./pcObjects/createAimFrame";
import initiatePCShip from "./pcObjects/initiatePCShip";
import pcShipData from "./pcData/pcShipData";
import playSound from "../effects/playSound";

const BLASTER_VOLUME = 0.2;

function createPCShip(shipNumber = 0) {
    const loader = new GLTFLoader();
    const pcShip = new THREE.Group();
    const aimFrame = createAimFrame();

    loader.load(pcShipData[shipNumber].src, (object) => pcShip.add(object.scene));
    pcShip.add(aimFrame);
    initiatePCShip(pcShip, shipNumber);

    return pcShip;
};

function createPCBlaster(pcShip) {
    playSound(pcShipData[pcShip.shipNumber].blaster.soundSrc, BLASTER_VOLUME);

    const blasterData = pcShipData[pcShip.shipNumber].blaster;
    let geometry, blasterColor, blasterColiSize;

    if (blasterData.shape == "sphere") {
        geometry = new THREE.SphereGeometry(blasterData.size, 5, 5);  //rad, width seg, height seg
        blasterColiSize = blasterData.size / 2 + 1;

    } else if (blasterData.shape == "capsule") {
        geometry = new THREE.CapsuleGeometry(blasterData.size, 27, 2, 8); //rad, h, cap seg, rad seg
        geometry.rotateX(Math.PI / 2);
        blasterColiSize = 15;
    }

    if (blasterData.color == "blue") blasterColor = 0x00ffff;
    if (blasterData.color == "green") blasterColor = 0x00ff00;
    if (blasterData.color == "orange") blasterColor = 0xff9900;
    if (blasterData.color == "violet") blasterColor = 0xbb00ff;
    if (blasterData.color == "bubbleGum") blasterColor = 0xff0081;

    const material = new THREE.MeshBasicMaterial({
        color: blasterColor,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
    });

    const blaster = new THREE.Mesh(geometry, material);
    blaster.position.copy(pcShip.position);
    blaster.rotation.copy(pcShip.rotation);
    blaster.collisionSize = blasterColiSize;
    blaster.power = blasterData.power;
    blaster.speed = [0, 0, 0];
    blaster.speed[0] = pcShip.speed[0];
    blaster.speed[1] = pcShip.speed[1];
    blaster.speed[2] = Math.sqrt(Math.pow(blasterData.speed, 2)
        - Math.pow(blaster.speed[0], 2)
        - Math.pow(blaster.speed[1], 2));

    return blaster;
}

export { createPCShip, createPCBlaster };