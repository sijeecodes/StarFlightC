import * as THREE from "three";
import { LineMaterial } from "three/addons/lines/LineMaterial.js";
import { LineGeometry } from "three/addons/lines/LineGeometry.js";
import { Line2 } from "three/addons/lines/Line2.js";

export default function createTargetMarker(): Line2 {
    const segments = 32;
    const radius = 5;
    const positions: number[] = [];

    for (let i = 0; i <= segments; i++) {
        const angle = (i / segments) * Math.PI * 2;
        positions.push(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
    }

    const geometry = new LineGeometry();
    geometry.setPositions(positions);

    const material = new LineMaterial({
        color: 0x42ff00,
        linewidth: 3,
        depthTest: false,
        transparent: true,
        opacity: 0.9,
        resolution: new THREE.Vector2(window.innerWidth, window.innerHeight),
    });

    const marker = new Line2(geometry, material);
    marker.renderOrder = 999;
    marker.visible = false;

    return marker;
}
