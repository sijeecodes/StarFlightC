import * as THREE from "three";
import npcAIPatternLoader from "./npcAIPatternLoader";
import type { NPCObject, FireTarget } from "../../types";

export default function updateNPCAI(obj: NPCObject, pcPos?: THREE.Vector3): void {
    npcAIPatternLoader(obj);

    if (!obj.aiPattern || !obj.aiPattern[obj.aiPatternCurrentStep + 1]) return;
    
    if (obj.aiPattern[obj.aiPatternCurrentStep + 1].actionTime <= obj.aiPatternTime) {
        obj.aiPatternCurrentStep++;
        const action = obj.aiPattern[obj.aiPatternCurrentStep].action;
        const value = obj.aiPattern[obj.aiPatternCurrentStep].value;

        if (action == "move")               setTargetPosition(obj, value as number[]);
        if (action == "moveTo")             setTargetPositionTo(obj, value as number[]);
        if (action == "randomMoveTo")       setRandomTargetPositionTo(obj, value as number[]);
        if (action == "blaster")            setNPCBlaster(obj, value as FireTarget);
        if (action == "setPatternTime")     setPatternTime(obj, value as number);
        if (action == "setDefaultSpeed")    setDefaultSpeed(obj, value as number[]);
        if (action == "setRotation")        setTargetRotation(obj, value as number[] | string, pcPos);
    }
}

function setPatternTime(obj: NPCObject, time: number): void {
    obj.aiPatternTime = time;
    if (!obj.aiPattern) return;
    for (let i = 0; i < obj.aiPattern.length; i++) {
        if (obj.aiPattern[i].actionTime >= time) {
            obj.aiPatternCurrentStep = i - 1;
            return;
        }
    }
}

function setNPCBlaster(obj: NPCObject, value: FireTarget): void {
    obj.fireBlaster = value;
}

function setTargetPosition(obj: NPCObject, value: number[]): void {
    obj.targetPosition[0] = obj.position.x + value[0];
    obj.targetPosition[1] = obj.position.y + value[1];
    obj.targetPosition[2] = obj.position.z + value[2];
}

function setTargetPositionTo(obj: NPCObject, value: number[]): void {
    obj.targetPosition[0] = value[0];
    obj.targetPosition[1] = value[1];
    obj.targetPosition[2] = value[2];
}

function setRandomTargetPositionTo(obj: NPCObject, value: number[]): void {
    const newValueX = Math.random() * Math.abs(value[1] - value[0]) + value[0];
    const newValueY = Math.random() * Math.abs(value[3] - value[2]) + value[2];
    const newValueZ = Math.random() * Math.abs(value[5] - value[4]) + value[4];
    
    setTargetPositionTo(obj, [newValueX, newValueY, newValueZ]);
}

function setTargetRotation(obj: NPCObject, value: number[] | string, pcPos?: THREE.Vector3): void {
    if (value == "pc" && pcPos) {
        const dx = pcPos.x - obj.position.x;
        const dy = pcPos.y - obj.position.y;
        const dz = pcPos.z - obj.position.z;
        const dxz = Math.sqrt(Math.pow(pcPos.z - obj.position.z, 2)
                             + Math.pow(pcPos.x - obj.position.x, 2));
        const targetY = Math.atan2(dx, dz);
        const targetX = Math.atan2(dy, dxz);

        obj.targetRotation[0] = targetX;
        obj.targetRotation[1] = targetY + Math.PI;
        obj.targetRotation[2] = 0;
    } else if (Array.isArray(value)) {
        obj.targetRotation[0] = value[0];
        obj.targetRotation[1] = value[1];
        obj.targetRotation[2] = value[2];
    }
}

function setDefaultSpeed(obj: NPCObject, value: number[]): void {
    obj.defaultSpeed[0] = value[0];
    obj.defaultSpeed[1] = value[1];
    obj.defaultSpeed[2] = value[2];
}