import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import createAimFrame from "./pcObjects/createAimFrame";
import initiatePCShip from "./pcObjects/initiatePCShip";
import pcShipData from "./pcData/pcShipData";
import playSound from "../effects/playSound";
import type { PCShip, PCBlaster } from "../types";

const BLASTER_VOLUME = 0.2;

function createPCShip(shipNumber = 0): PCShip {
    const loader = new GLTFLoader();
    const pcShip = new THREE.Group() as unknown as PCShip;
    const aimFrame = createAimFrame();

    loader.load(
        pcShipData[shipNumber].src,
        (gltf) => pcShip.add(gltf.scene),
        undefined,
        (err: unknown) => console.error("Player ship model load failed", err)
    );
    pcShip.add(aimFrame);
    initiatePCShip(pcShip, shipNumber);

    return pcShip;
}

function createPCBlaster(pcShip: PCShip): PCBlaster {
    playSound(pcShipData[pcShip.shipNumber].blaster.soundSrc, BLASTER_VOLUME);

    const blasterData = pcShipData[pcShip.shipNumber].blaster;
    let geometry: THREE.BufferGeometry | undefined;
    let blasterColor: number | undefined;
    let blasterColiSize = 15;

    if (blasterData.shape == "sphere") {
        geometry = new THREE.SphereGeometry(blasterData.size, 5, 5);
        blasterColiSize = blasterData.size / 2 + 1;
    } else if (blasterData.shape == "capsule") {
        geometry = new THREE.CapsuleGeometry(blasterData.size, 27, 2, 8);
        (geometry as THREE.CapsuleGeometry).rotateX(Math.PI / 2);
        blasterColiSize = 15;
    }

    if (blasterData.color == "blue")      blasterColor = 0x00ffff;
    if (blasterData.color == "green")     blasterColor = 0x00ff00;
    if (blasterData.color == "orange")    blasterColor = 0xff9900;
    if (blasterData.color == "violet")    blasterColor = 0xbb00ff;
    if (blasterData.color == "bubbleGum") blasterColor = 0xff0081;

    const material = new THREE.MeshBasicMaterial({
        color: blasterColor,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
    });

    const blaster = new THREE.Mesh(geometry!, material) as unknown as PCBlaster;
    blaster.position.copy(pcShip.position);
    blaster.rotation.copy(pcShip.rotation);
    blaster.collisionSize = blasterColiSize;
    blaster.power = blasterData.power;
    blaster.speed = [pcShip.speed[0], pcShip.speed[1], 0];
    blaster.speed[2] = Math.sqrt(Math.pow(blasterData.speed, 2)
        - Math.pow(blaster.speed[0], 2)
        - Math.pow(blaster.speed[1], 2));

    return blaster;
}

export { createPCShip, createPCBlaster };