import * as THREE from "three";

const STARCOUNT = 200;

const createStarGeo = function () {
    const starCount = 200;
    const starGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(STARCOUNT * 3);

    for (let i = 0; i < STARCOUNT; i++) {
        positions[i * 3] = Math.random() * 280 - 140;
        positions[i * 3 + 1] = Math.random() * 200 - 100;
        positions[i * 3 + 2] = (Math.random() * 1700 - 700);
    }
    starGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return starGeo;
};

const createStarMaterial = function () {
    return new THREE.PointsMaterial({
        color: 0xffffff,
        size: 3.3,
        transparent: true,
        map: new THREE.TextureLoader().load("artSrc/star.png"),
    });
};

export { createStarGeo, createStarMaterial };