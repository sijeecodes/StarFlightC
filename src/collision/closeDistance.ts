import type { Collidable } from "../types";

export default function closeDistance(a: Collidable, b: Collidable): boolean {
    return a.position.distanceTo(b.position) <= a.collisionSize + b.collisionSize;
}