import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import npcBasicData from "./npcData/npcBasicData";
import npcAIData from "./npcData/npcAIData";
import updateNPCAI from "./npcAI/updateNPCAI";
import playSound from "../effects/playSound";

const BLASTER_VOLUME = 0.3;
function createNPCObject(scene, npcObjects, { npcAIname, npcBasic, startingPosition }) {
    const objBasic = npcBasicData[npcBasic];
    const loader = new GLTFLoader();
    let obj = new THREE.Group();

    loader.load(objBasic.npcGlb, (object) => obj.add(object.scene));
    obj = deepCopy(obj, objBasic);
    obj.npcAI = deepCopy(obj.npcAI, npcAIData[npcAIname]);
    obj.elapsedTime = 0;
    obj.aiPatternTime = 0;
    obj.aiPatternCurrentStep = 0;
    obj.fireBlaster = "none";
    obj.hitMark = 0;

    if (obj.type == "asteroid") {
        obj.scale.set(Math.random() * 1.2 + 0.4, Math.random() * 1.2 + 0.4, Math.random() * 1.2 + 0.4);

        let maxScale = Math.max(obj.scale.x, obj.scale.y, obj.scale.z);
        obj.collisionSize = maxScale * obj.collisionSize;
        obj.hp = Math.ceil(maxScale * 2) * obj.hp;
        obj.rotatingSpeed = [Math.random() / 10 - 0.05, Math.random() / 10 - 0.05, Math.random() / 10 - 0.05];
    }
    if (startingPosition == "random") {
        startingPosition =
            [
                Math.random() * 75 - 37.5,
                Math.random() * 35 - 12.5,
                700
            ];
    }
    if (obj.unpassable) scene.boostalbe = false;

    obj.position.set(startingPosition[0], startingPosition[1], startingPosition[2]);
    npcObjects.npcs.push(obj);
    updateNPCAI(obj);
    scene.add(obj);
};

function createNPCBlaster(scene, pcPos, npc, npcBlasters) {
    if (npc.fireBlaster == "none") return;

    playSound(npc.blasterSoundSrc, BLASTER_VOLUME);

    let blasterColor = 0xff2222;
    let geometry;
    if (npc.blasterShape == "sphere") {
        geometry = new THREE.SphereGeometry(npc.blasterRadius, 8, 8); //rad, width seg, height seg

    } else if (npc.blasterShape == "capsule") {
        geometry = new THREE.CapsuleGeometry(npc.blasterRadius, npc.blasterLength, 2, 8); //rad, h, cap seg, rad seg
        geometry.rotateX(Math.PI / 2);
    }

    if (npc.blasterColor == "violet") blasterColor = 0xbb00ff;
    if (npc.blasterColor == "blue") blasterColor = 0x00ffff;
    if (npc.blasterColor == "green") blasterColor = 0x00ff00;
    if (npc.lasterColor == "orange") blasterColor = 0xff9900;

    const material = new THREE.MeshBasicMaterial({
        color: blasterColor,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
    });
    const blaster = new THREE.Mesh(geometry, material);
    blaster.position.copy(npc.position);
    blaster.rotation.copy(npc.rotation);
    blaster.rotation.y += Math.PI;
    blaster.speed = npc.blasterSpeed;
    blaster.power = npc.blasterPower;
    blaster.collisionSize = npc.blasterLength;
    blaster.translateZ(npc.collisionSize);
    blaster.translateY(-npc.collisionSize / 5);

    if (npc.fireBlaster == "pc") blaster.lookAt(pcPos.x, pcPos.y, pcPos.z);

    npc.fireBlaster = "none";
    npcBlasters.push(blaster);
    scene.add(blaster);
}

function deepCopy(target = {}, data = {}) {
    if (typeof data != "object" || data == null) return target;

    for (const [key, value] of Object.entries(data)) {
        if (Array.isArray(value)) {
            target[key] = value.map(item => {
                if (typeof item == "object" && item != null) {
                    return deepCopy({}, item);
                } else return item;
            });
        } else if (typeof value == "object" && value != null) {
            deepCopy(target[key] || {}, value);
        } else {
            target[key] = value;
        }
    }
    return target;
}

export { createNPCObject, createNPCBlaster };