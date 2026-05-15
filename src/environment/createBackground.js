import * as THREE from "three";
import backgroundData from "./backgroundData";

export default function createBackground(scene) {
    let dataset = backgroundData.map(e => e);
    dataset.forEach(data => {
        makeBackgroundObject(scene, scene.backgroundObjs, ...data);
    });
}

function makeBackgroundObject(
    scene,
    backgroundObjs,
    fileName,
    {
        size: [sizeX, sizeY],
        position: [positionX, positionY, positionZ],
        rotationY,
        speed
    }
) {
    const backgroundGeo = new THREE.PlaneGeometry(sizeX, sizeY);
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(fileName,
        function () {
            const material = new THREE.MeshBasicMaterial({
                map: texture,
                side: THREE.DoubleSide,
                transparent: true
            });
            const backgroundObj = new THREE.Mesh(backgroundGeo, material);
            backgroundObj.position.set(positionX, positionY, positionZ);
            backgroundObj.lookAt(0, 0, 0);
            backgroundObj.rotation.y = rotationY;
            backgroundObj.speed = speed;
            scene.add(backgroundObj);
            backgroundObjs.push(backgroundObj);
        },
        undefined,
        function (err) {
            console.error("Background load failed", err);
        }
    );
}