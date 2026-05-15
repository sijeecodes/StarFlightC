import npcAIPatternLoader from "./npcAIPatternLoader";

export default function updateNPCAI(obj, pcPos) {
    npcAIPatternLoader(obj);

    if (!obj.aiPattern || !obj.aiPattern[obj.aiPatternCurrentStep + 1]) return;
    
    if (obj.aiPattern[obj.aiPatternCurrentStep + 1].actionTime <= obj.aiPatternTime) {
        obj.aiPatternCurrentStep++;
        const action = obj.aiPattern[obj.aiPatternCurrentStep].action;
        const value = obj.aiPattern[obj.aiPatternCurrentStep].value;

        if (action == "move")               setTargetPosition(obj, value);
        if (action == "moveTo")             setTargetPositionTo(obj, value);
        if (action == "randomMoveTo")       setRandomTargetPositionTo(obj, value);
        if (action == "blaster")            setNPCBlaster(obj, value);
        if (action == "setPatternTime")     setPatternTime(obj, value);
        if (action == "setDefaultSpeed")    setDefaultSpeed(obj, value);
        if (action == "setRotation")        setTargetRotation(obj, value, pcPos);
    }
}

function setPatternTime(obj, time) {
    obj.aiPatternTime = time;
    for (let i = 0; i < obj.aiPattern.length; i++) {
        if (obj.aiPattern[i].actionTime >= time) {
            obj.aiPatternCurrentStep = i - 1;
            return;
        }
    }
}

function setNPCBlaster(obj, value) {
    obj.fireBlaster = value;
}

function setTargetPosition(obj, value) {
    obj.targetPosition[0] = obj.position.x + value[0];
    obj.targetPosition[1] = obj.position.y + value[1];
    obj.targetPosition[2] = obj.position.z + value[2];
}

function setTargetPositionTo(obj, value) {
    obj.targetPosition[0] = value[0];
    obj.targetPosition[1] = value[1];
    obj.targetPosition[2] = value[2];
}

function setRandomTargetPositionTo(obj, value) {
    const newValueX = Math.random() * Math.abs(value[1] - value[0]) + value[0];
    const newValueY = Math.random() * Math.abs(value[3] - value[2]) + value[2];
    const newValueZ = Math.random() * Math.abs(value[5] - value[4]) + value[4];
    
    setTargetPositionTo(obj, [newValueX, newValueY, newValueZ]);
}

function setTargetRotation(obj, value, pcPos) {
    if (value == "pc") {
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
    } else {
        obj.targetRotation[0] = value[0];
        obj.targetRotation[1] = value[1];
        obj.targetRotation[2] = value[2];
    }
}

function setDefaultSpeed(obj, value) {
    obj.defaultSpeed[0] = value[0];
    obj.defaultSpeed[1] = value[1];
    obj.defaultSpeed[2] = value[2];
}