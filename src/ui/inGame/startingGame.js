import loadMusic from "../../effects/loadMusic";

export default function startingGame(scene, camera, document, pcShip) {
    document.getElementById("inGame").style.opacity = 1;
    pcShip.position.set(0, 0, 0);
    camera.position.set(0, 10, -200);
    camera.lookAt(0, 0, 0);
    scene.timeStamp = 0;
    scene.gameState = "playing";

    return loadMusic();
}