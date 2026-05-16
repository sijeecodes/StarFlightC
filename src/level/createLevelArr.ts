import levelData from "./levelData";
import type { GameScene } from "../types";

export default function createLevelArr(scene: GameScene): void {
    scene.levelArr = levelData.map(e => e);
}