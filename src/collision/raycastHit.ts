import * as THREE from "three";
import type { Collidable, Hittable } from "../types";

const VERTEX_INTERVAL_NORM = 1;
const VERTEX_INTERVAL_BIG = 15;
const HITMARK_DURATION = 15;
const RAYCASTER_THRESHOLD = 0.01;
const HIT_COLOR = 0xff0000;

const _raycaster = new THREE.Raycaster();
const _direction = new THREE.Vector3();
const _vertexTemp = new THREE.Vector3();
_raycaster.params.Mesh.threshold = RAYCASTER_THRESHOLD;

export default function raycastHit(origin: Collidable, target: Hittable): boolean {
    const vertices = getVertices(origin);
    let collided = false;

    for (const vertex of vertices) {
        _raycaster.set(vertex, _direction.subVectors(vertex, target.position).normalize());
        _raycaster.far = origin.collisionSize;

        const intersects = _raycaster.intersectObject(target, true);
        if (intersects.length > 0) {
            collided = true;
            break;
        }
    }

    if (collided) {
        if (target.hitMark <= 0) {
            target.traverse((child) => {
            const mesh = child as THREE.Mesh;
            if (mesh.isMesh && !Array.isArray(mesh.material))
                (mesh.material as THREE.MeshBasicMaterial).color.set(HIT_COLOR);
        });
        }
        target.hitMark = HITMARK_DURATION;
        return true;
    }
    return false;
}

function getVertices(obj: Collidable): THREE.Vector3[] {
    const vertices: THREE.Vector3[] = [];
    let interval = VERTEX_INTERVAL_NORM;
    if (obj.type == "npcHeavy" || obj.type == "asteroid") interval = VERTEX_INTERVAL_BIG;

    obj.traverse((child) => {
        const mesh = child as THREE.Mesh;
        if (mesh.isMesh && mesh.geometry) {
            const position = mesh.geometry.attributes.position;
            const matrix = mesh.matrixWorld;

            for (let i = 0; i < position.count; i += interval) {
                _vertexTemp.fromBufferAttribute(position, i);
                _vertexTemp.applyMatrix4(matrix);
                vertices.push(_vertexTemp.clone());
            }
        }
    });
    return vertices;
}