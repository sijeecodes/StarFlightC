import type { GameScene, PCShip } from "../../types";

export default function updatePCIdle(scene: GameScene, pcShip: PCShip): void {
    scene.timeStamp++;
    pcShip.position.y = Math.sin(scene.timeStamp / 25);
}