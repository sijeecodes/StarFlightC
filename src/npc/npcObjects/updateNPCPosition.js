export default function updateNPCPosition(scene, obj) {
    if (obj.type == "asteroid") {
        obj.position.x += obj.defaultSpeed[0]; 
        obj.position.y += obj.defaultSpeed[1]; 
        obj.position.z += obj.defaultSpeed[2]; 
    }

    if (!obj.targetPosition || obj.targetPosition.length < 3) return;

    let currentPos = [obj.position.x, obj.position.y, obj.position.z];
    if (currentPos == obj.targetPosition 
        && obj.speed == [0, 0, 0]) return;
        
    let speed = obj.speed;
    let arrived = false;
    let estTime = estimateTime(currentPos, obj.targetPosition, obj.maxSpeed);

    if (estTime > obj.maxSpeed/2) {
        let targetSpeed = obj.targetPosition
                             .map((p, i) => (p - currentPos[i]) / estTime);

        targetSpeed.forEach((target, i) => {
            if (target * speed[i] < 0) arrived = true;
        });

        if (!arrived) {
            targetSpeed.forEach((target, i) => {
                if (target >= 0) {
                    if (target > speed[i]) {
                        speed[i] += obj.speedAccel[i];
                        if (speed[i] > target) speed[i] = target;
                    }
                } else {
                    if (target < speed[i]) {
                        speed[i] -= obj.speedAccel[i];
                        if (speed[i] < target) speed[i] = target;
                    }
                }
            });
        } else decelerate()
    } else decelerate();

    function decelerate() {
        speed.forEach((speedOfAxis, i) => {
            speed[i] = speedOfAxis * obj.speedDecel[i];
        });

        if (speed.filter((speedOfAxis) => Math.abs(speedOfAxis) > 0.01)
                 .length == 0) {

            speed = [0, 0, 0];
            obj.targetPosition = currentPos;
        };
    }

    obj.position.x = currentPos[0] + speed[0];
    obj.position.y = currentPos[1] + speed[1];
    obj.position.z = currentPos[2] + speed[2] - scene.boostSpeed * 1.5;
    obj.speed = [speed[0], speed[1], speed[2]];

    obj.translateX(obj.defaultSpeed[0]);
    obj.translateY(obj.defaultSpeed[1]);
    obj.translateZ(-obj.defaultSpeed[2]);
}

function estimateTime(currentPos, targetPos, maxSpeed) {
    let x = Math.pow((currentPos[0] - targetPos[0]), 2);
    let y = Math.pow((currentPos[1] - targetPos[1]), 2);
    let z = Math.pow((currentPos[2] - targetPos[2]), 2);
    let distance = Math.sqrt(x + y + z);

    return distance / maxSpeed;
}