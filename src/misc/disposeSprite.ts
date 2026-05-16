import * as THREE from "three";
import disposeObject from "./disposeObject";

export default function disposeSprite(scene: THREE.Scene, spriteUUID: string): void {
    const sprite = scene.getObjectByProperty("uuid", spriteUUID);

    if (sprite) {
        const spriteMesh = sprite as THREE.Sprite;
        if (spriteMesh.material.map) spriteMesh.material.map.dispose();
        disposeObject(scene, sprite);
    }
}