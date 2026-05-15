import * as THREE from "three";

const createLights = function (scene) {
    scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 7));

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1);
    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight1.position.set(30, 10, 100);
    directionalLight2.position.set(-30, -10, 100);
    scene.add(directionalLight1);
    scene.add(directionalLight2);
}

export default createLights;