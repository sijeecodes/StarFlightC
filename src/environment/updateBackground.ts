import * as THREE from "three";
import type { BackgroundObject } from "../types";

export default function updateBackgrounds(scene: THREE.Scene, bgObjs: BackgroundObject[]): void {
    if (!bgObjs || bgObjs.length < 1) return;

    const newBgObjs = bgObjs.filter(bg => {
        if (bg.speed) {
            bg.position.z -= bg.speed;

            bg.position.y > 0 ?
                bg.position.y += bg.speed / 2 :
                bg.position.y -= bg.speed / 2;

            bg.position.x > 0 ?
                bg.position.x += bg.speed / 3 :
                bg.position.x += bg.speed / 3;

            if (bg.position.z < -200) {
                scene.remove(bg);
                return false;
            }
        }
        return true;
    });

    bgObjs.length = 0;
    bgObjs.push(...newBgObjs);
}