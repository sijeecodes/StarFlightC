import * as THREE from "three";
import loadMusic from "../../effects/loadMusic";
import type { GameScene, PCShip } from "../../types";

export default function startingGame(scene: GameScene, camera: THREE.Camera, document: Document, pcShip: PCShip): () => void {
    document.getElementById("inGame")!.style.opacity = "1";
    pcShip.position.set(0, 0, 0);
    camera.position.set(0, 10, -200);
    camera.lookAt(0, 0, 0);
    scene.timeStamp = 0;
    scene.gameState = "playing";

    return loadMusic();
}