import * as THREE from "three";
import type { GameScene } from "../types";

const updateStars = function (scene: GameScene, starGeo: THREE.BufferGeometry): void {
    const positions = starGeo.attributes.position.array as Float32Array;
    const boost = scene.boostSpeed;

    for (let i = 2; i < positions.length + 1; i += 3) {
        if (positions[i] < -700) {
            positions[i - 2] = Math.random() * 150 - 75;
            positions[i - 1] = Math.random() * 150 - 75;
            positions[i] = 1000;
        } else {
            positions[i] -= 20 + boost * 12;
        }
    }
    starGeo.attributes.position.needsUpdate = true;
};

export default updateStars;

