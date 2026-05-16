import disposeObject from "../../misc/disposeObject";
import type { GameScene, NPCBlaster } from "../../types";

export default function updateNPCBlasters(scene: GameScene, npcBlasters: NPCBlaster[]): void {
    if (!npcBlasters) return;

    let newBlasters: NPCBlaster[] = [];
    if (npcBlasters.length > 0) {
        newBlasters = npcBlasters.filter((blaster) => {
            if (blaster.position.z < -200 || Math.abs(blaster.position.y) > 70 || Math.abs(blaster.position.x) > 200) {
                disposeObject(scene, blaster);
                return false;
            }
            blaster.position.z -= scene.boostSpeed;
            return blaster.translateZ(blaster.speed);
        });
    }
    npcBlasters.length = 0;
    npcBlasters.push(...newBlasters);
}