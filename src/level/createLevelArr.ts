import csvRaw from "../gameData/levelData.csv?raw";
import type { GameScene, LevelEvent } from "../types";

function parseLevelCSV(csv: string): LevelEvent[] {
    return csv
        .split("\n")
        .slice(1)
        .filter(line => line.trim() !== "" && line.split(",")[0].trim() !== "")
        .map(line => {
            const [eventTime, npcAIname, npcBasic, posX, posY, posZ] =
                line.split(",").map(s => s.trim());

            const startingPosition: LevelEvent["startingPosition"] =
                posX === "random"
                    ? "random"
                    : [parseFloat(posX), parseFloat(posY), parseFloat(posZ)];

            return { eventTime: parseInt(eventTime), npcAIname, npcBasic, startingPosition };
        });
}

export default function createLevelArr(scene: GameScene): void {
    scene.levelArr = parseLevelCSV(csvRaw);
}
