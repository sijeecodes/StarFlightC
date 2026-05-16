import * as THREE from "three";
import { setKeyState, resetKeyState } from "./setKeyStates";
import type { KeyStates } from "../../types";

export default function setWindow(
    window: Window,
    document: Document,
    keyStates: KeyStates,
    camera: THREE.PerspectiveCamera,
    renderer: THREE.WebGLRenderer
): void {
    window.addEventListener("keydown", (e) => keyStates = setKeyState(keyStates, e));
    window.addEventListener("keyup", (e) => keyStates = resetKeyState(keyStates, e));
    window.addEventListener("resize", () => sizeRenderer(window, document, camera, renderer), false);
    sizeRenderer(window, document, camera, renderer);
}

function sizeRenderer(
    window: Window,
    document: Document,
    camera: THREE.PerspectiveCamera,
    renderer: THREE.WebGLRenderer
): void {
    let newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    if (newWidth > newHeight * 2.2) {
        newWidth = newHeight * 2.2;
    }
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);

    document.getElementById("gameUI")!.style.width = newWidth + "px";
    document.getElementById("gameUI")!.style.height = newHeight + "px";
}