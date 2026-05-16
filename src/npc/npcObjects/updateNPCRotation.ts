import type { NPCObject } from "../../types";

export default function updateNPCRotation(obj: NPCObject): void {
    const targetR = obj.targetRotation;
    const r = [obj.rotation.x, obj.rotation.y, obj.rotation.z];

    if (obj.type == "asteroid") {
        obj.rotateX(obj.rotatingSpeed![0]);
        obj.rotateY(obj.rotatingSpeed![1]);
        obj.rotateZ(obj.rotatingSpeed![2]);
        return;
    }

    if ((obj as unknown) == targetR) return;

    const needR = r.map((r, i) => {
        if (Math.abs(r - targetR[i]) < Math.PI) return targetR[i] - r;
        return differenceWithPI(r) + differenceWithPI(targetR[i]);
    });

    obj.rotation.x += needR[0] * (1 - obj.speedDecel![0]);
    obj.rotation.y += needR[1] * (1 - obj.speedDecel![1]);
    obj.rotation.z += needR[2] * (1 - obj.speedDecel![2]);
}

function differenceWithPI(n: number): number {
    if (n > Math.PI) return n - 2 * Math.PI;
    return -n;
}