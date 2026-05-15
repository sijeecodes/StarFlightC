export default function disposeObject(scene, obj) {
    obj.traverse((child) => {
        if (child.isMesh) {
            child.geometry.dispose();

            if (Array.isArray(child.material)) {
                child.material.forEach(m => m.dispose());

            } else {
                child.material.dispose();
            }
        }
    });
    scene.remove(obj);
}