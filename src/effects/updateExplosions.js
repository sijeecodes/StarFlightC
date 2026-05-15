import disposeSprite from "../misc/disposeSprite";

export default function updateExplosions(scene, { sprites, materials, velocities, lifetimes, rotations }) {
    if (!sprites || sprites.length < 1) return;

    const newSprites = [];
    const newMaterials = [];
    const newVelocities = [];
    const newLifetimes = [];
    const newRotations = [];

    sprites.forEach((s, i) => {
        if (lifetimes[i] <= 0) {
            disposeSprite(scene, s.uuid);
            return;
        }

        s.position.x += velocities[i].x;
        s.position.y += velocities[i].y;
        s.position.z += velocities[i].z;

        let r = s.material.color.r * lifetimes[i] / 2;
        let g = s.material.color.g * lifetimes[i] / 2;
        let b = s.material.color.b * lifetimes[i] / 2;
        r > 1 ? r = 1 : r;
        g > 1 ? g = 1 : g;
        b > 1 ? b = 1 : b;

        let scale = 50 * Math.sin(lifetimes[i] * 9);
        if (scale > 0) {
            scale = 0;
            lifetimes[i] = 0;
        } else lifetimes[i] -= 0.015;

        sprites[i].material.color.set(r, g, b);
        sprites[i].scale.set(scale, scale, scale);
        materials[i].rotation = lifetimes[i] * rotations[i] / 3;
        newSprites.push(s);
        newMaterials.push(materials[i]);
        newVelocities.push({ x: velocities[i].x, y: velocities[i].y, z: velocities[i].z })
        newLifetimes.push(lifetimes[i]);
        newRotations.push(rotations[i]);
    });

    sprites.length = 0;
    materials.length = 0;
    velocities.length = 0;
    lifetimes.length = 0;
    rotations.length = 0;

    sprites.push(...newSprites);
    materials.push(...newMaterials);
    velocities.push(...newVelocities);
    lifetimes.push(...newLifetimes);
    rotations.push(...newRotations);
}