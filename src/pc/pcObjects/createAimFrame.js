import * as THREE from "three";
import { LineMaterial } from "three/addons/lines/LineMaterial";
import { LineGeometry } from "three/addons/lines/LineGeometry.js";
import { Line2 } from "three/addons/lines/Line2.js";

export default function createAimFrame() {
    const frameGeo1 = new LineGeometry();
    frameGeo1.setPositions([
        2.8, -2.4, 0,
        -2.8, -2.4, 0,
        0, 2.0, 0,
        2.8, -2.4, 0
    ]);
    const frameGeo2 = new LineGeometry();
    frameGeo2.setPositions([
        1.4, -1.2, 50,
        -1.4, -1.2, 50,
        0, 1.0, 50,
        1.47, -1.2, 50
    ]);
    const lineMaterial = new LineMaterial({
        color: 0x42ff00,
        opacity: 0.6,
        linewidth: 5,
        depthTest: false,
        transparent: true,
        resolution: new THREE.Vector2(window.innerWidth, window.innerHeight)
    });
    const aimFrame = new THREE.Group();
    aimFrame.add(new Line2(frameGeo1, lineMaterial));
    aimFrame.add(new Line2(frameGeo2, lineMaterial));
    aimFrame.position.set(0, 0, 120);

    return aimFrame;
}