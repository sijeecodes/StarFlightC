import disposeObject from "./disposeObject";

export default function disposeSprite(scene, spriteUUID) {
    const sprite = scene.getObjectByProperty("uuid", spriteUUID);

    if (sprite) {
        if (sprite.material.map) sprite.material.map.dispose();

        disposeObject(scene, sprite);
    }
}