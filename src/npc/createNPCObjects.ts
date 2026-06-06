import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import npcAIData, { npcBasicData } from "./npcData/createNPCData";
import updateNPCAI from "./npcAI/updateNPCAI";
import playSound from "../effects/playSound";
import type { GameScene, NPCObject, NPCObjects, NPCBlaster, NPCAIConfig, LevelEvent } from "../types";

const BLASTER_VOLUME = 0.3;

function createNPCObject(scene: GameScene, npcObjects: NPCObjects, { npcAIname, npcBasic, startingPosition }: LevelEvent): void {
    const objBasic = npcBasicData[npcBasic];
    const loader = new GLTFLoader();
    const obj = deepCopy(new THREE.Group() as unknown as NPCObject, objBasic);

    loader.load(
        objBasic.npcGlb,
        (gltf) => obj.add(gltf.scene),
        undefined,
        (err: unknown) => console.error("NPC model load failed", err)
    );
    obj.npcAI = deepCopy({} as NPCAIConfig, npcAIData[npcAIname]);
    obj.elapsedTime = 0;
    obj.aiPatternTime = 0;
    obj.aiPatternCurrentStep = 0;
    obj.fireBlaster = "none";
    obj.hitMark = 0;

    if (obj.type == "asteroid") {
        obj.scale.set(Math.random() * 1.2 + 0.4, Math.random() * 1.2 + 0.4, Math.random() * 1.2 + 0.4);
        const maxScale = Math.max(obj.scale.x, obj.scale.y, obj.scale.z);
        obj.collisionSize = maxScale * obj.collisionSize;
        obj.hp = Math.ceil(maxScale * 2) * obj.hp;
        obj.rotatingSpeed = [Math.random() / 10 - 0.05, Math.random() / 10 - 0.05, Math.random() / 10 - 0.05];
    }

    const position: [number, number, number] = startingPosition == "random"
        ? [Math.random() * 75 - 37.5, Math.random() * 35 - 12.5, 700]
        : startingPosition;

    if (obj.unpassable) scene.boostalbe = false;

    obj.position.set(position[0], position[1], position[2]);
    npcObjects.npcs.push(obj);
    updateNPCAI(obj);
    scene.add(obj);
}

function createNPCBlaster(scene: GameScene, pcPos: THREE.Vector3, npc: NPCObject, npcBlasters: NPCBlaster[]): void {
    if (npc.fireBlaster == "none") return;

    playSound(npc.blasterSoundSrc!, BLASTER_VOLUME);

    let blasterColor = 0xff2222;
    let geometry: THREE.BufferGeometry | undefined;

    if (npc.blasterShape == "sphere") {
        geometry = new THREE.SphereGeometry(npc.blasterRadius, 8, 8);
    } else if (npc.blasterShape == "capsule") {
        geometry = new THREE.CapsuleGeometry(npc.blasterRadius, npc.blasterLength, 2, 8);
        geometry.rotateX(Math.PI / 2);
    }

    if (npc.blasterColor == "violet") blasterColor = 0xbb00ff;
    if (npc.blasterColor == "blue")   blasterColor = 0x00ffff;
    if (npc.blasterColor == "green")  blasterColor = 0x00ff00;
    if (npc.blasterColor == "orange") blasterColor = 0xff9900;

    const material = new THREE.MeshBasicMaterial({
        color: blasterColor,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
    });
    const blaster = new THREE.Mesh(geometry!, material) as unknown as NPCBlaster;
    blaster.position.copy(npc.position);
    blaster.rotation.copy(npc.rotation);
    blaster.rotation.y += Math.PI;
    blaster.speed = npc.blasterSpeed!;
    blaster.power = npc.blasterPower!;
    blaster.collisionSize = npc.blasterLength!;
    blaster.translateZ(npc.collisionSize);
    blaster.translateY(-npc.collisionSize / 5);

    if (npc.fireBlaster == "pc") blaster.lookAt(pcPos.x, pcPos.y, pcPos.z);

    npc.fireBlaster = "none";
    npcBlasters.push(blaster);
    scene.add(blaster);
}

function deepCopy<T>(target: T, data: object | null | undefined): T {
    if (typeof data != "object" || data == null) return target;

    const t = target as Record<string, unknown>;
    for (const [key, value] of Object.entries(data)) {
        if (Array.isArray(value)) {
            t[key] = value.map(item => {
                if (typeof item == "object" && item != null) {
                    return deepCopy({}, item);
                } else return item;
            });
        } else if (typeof value == "object" && value != null) {
            deepCopy((t[key] as Record<string, unknown>) || {}, value);
        } else {
            t[key] = value;
        }
    }
    return target;
}

export { createNPCObject, createNPCBlaster };