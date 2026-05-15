import { setKeyState, resetKeyState } from "./setKeyStates";

export default function setWindow(window, document, keyStates, camera, renderer) {
    window.addEventListener("keydown", (e) => keyStates = setKeyState(keyStates, e));
    window.addEventListener("keyup", (e) => keyStates = resetKeyState(keyStates, e));
    window.addEventListener("resize", () => sizeRenderer(window, document, camera, renderer), false);
    sizeRenderer(window, document, camera, renderer);
}

function sizeRenderer(window, document, camera, renderer) {
    let newWidth = window.innerWidth;
    let newHeight = window.innerHeight;

    if (newWidth > newHeight * 2.2) {
        newWidth = newHeight * 2.2;
    }
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);

    document.getElementById("gameUI").style.width = newWidth + "px";
    document.getElementById("gameUI").style.height = newHeight + "px";
};