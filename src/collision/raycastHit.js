import * as THREE from "three";

const VERTEX_INTERVAL_NORM = 1;
const VERTEX_INTERVAL_BIG = 15;
const HITMARK_DURATION = 15;
const RAYCASTER_THRESHOLD = 0.01;
const HIT_COLOR = 0xff0000;

export default function raycastHit(origin, target) {
    const raycaster = new THREE.Raycaster();
    const direction = new THREE.Vector3();
    const vertices = getVertices(origin);
    let collided = false;
    raycaster.params.Mesh.threshold = RAYCASTER_THRESHOLD;

    for (const vertex of vertices) {
        // set raycast - origin, direction
        raycaster.set(vertex, direction.subVectors(vertex, target.position).normalize());
        raycaster.far = origin.collisionSize;

        const intersects = raycaster.intersectObject(target, true);
        if (intersects.length > 0) {
            collided = true;
            break;
        }
    }

    if (collided) {
        if (target.hitMark <= 0) {
            target.traverse(
                (child) => child.isMesh ?
                           child.material.color.set(HIT_COLOR)
                           : null);
        }
        target.hitMark = HITMARK_DURATION;
        return true;
    }
    return false;
}

function getVertices(obj) {
    const vertices = [];
    let interval = VERTEX_INTERVAL_NORM;
    if (obj.type == "npcHeavy" || obj.type == "asteroid") interval = VERTEX_INTERVAL_BIG;


    obj.traverse((child) => {
        if (child.isMesh && child.geometry) {
            const geo = child.geometry;
            const matrix = child.matrixWorld;
            const position = geo.attributes.position;

            for (let i = 0; i < position.count; i += interval) {
                const vertex = new THREE.Vector3();
                // set vertex point from model
                vertex.fromBufferAttribute(position, i);
                // apply world coordinate to vertex points
                vertex.applyMatrix4(matrix);
                vertices.push(vertex);
            }
        }
    });
    return vertices;
}