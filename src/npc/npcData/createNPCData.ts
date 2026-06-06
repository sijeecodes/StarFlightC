import aiDataCSV from "../../gameData/npcAIData.csv?raw";
import aiPatternCSV from "../../gameData/npcAIPattern.csv?raw";
import basicDataCSV from "../../gameData/npcBasicData.csv?raw";
import type {
    NPCAIConfig, AIPattern, AIAction,
    NPCBasicConfig, NPCShipBasic, NPCAsteroidBasic,
    BlasterColor, BlasterShape,
} from "../../types";

// ── npcAIData ─────────────────────────────────────────────────────────────────

function parseNPCAICSV(csv: string): Record<string, NPCAIConfig> {
    const result: Record<string, NPCAIConfig> = {};
    let currentName = "";

    csv
        .split("\n")
        .slice(1)
        .filter(line => line.trim() !== "")
        .forEach(line => {
            const [nameCol, triggerType, triggerValue, aiPattern] =
                line.split(",").map(s => s.trim());

            if (nameCol) currentName = nameCol;
            if (!currentName) return;

            if (!result[currentName]) result[currentName] = { timeTriggered: [], hpTriggered: [] };

            if (triggerType === "time") {
                result[currentName].timeTriggered.push({ triggerTime: parseInt(triggerValue), aiPattern });
            } else if (triggerType === "hp") {
                result[currentName].hpTriggered.push({ triggerHP: parseInt(triggerValue), aiPattern });
            }
        });

    return result;
}

// ── npcAIPattern ──────────────────────────────────────────────────────────────

function parseValue(val: string): number[] | string | number {
    if (!val || val === "pc" || val === "front" || val === "none") return val;
    if (val.includes(" ")) return val.split(" ").map(Number);
    return parseFloat(val);
}

function parseNPCAIPatternCSV(csv: string): Record<string, AIPattern> {
    const result: Record<string, AIPattern> = {};
    let currentPattern = "";

    csv
        .split("\n")
        .slice(1)
        .filter(line => line.trim() !== "")
        .forEach(line => {
            const [nameCol, actionTime, action, value] =
                line.split(",").map(s => s.trim());

            if (nameCol) currentPattern = nameCol;
            if (!currentPattern) return;

            if (!result[currentPattern]) result[currentPattern] = [];

            if (!actionTime) return;

            result[currentPattern].push({
                actionTime: parseInt(actionTime),
                action: action as AIAction,
                value: parseValue(value),
            });
        });

    return result;
}

// ── npcBasicData ──────────────────────────────────────────────────────────────

function parseNPCBasicCSV(csv: string): Record<string, NPCBasicConfig> {
    const result: Record<string, NPCBasicConfig> = {};

    csv
        .split("\n")
        .slice(1)
        .filter(line => line.trim() !== "")
        .forEach(line => {
            const [
                name, type, npcGlb, collisionSize, hp, power,
                maxSpeed, speedAccel, speedDecel,
                blasterColor, blasterShape, blasterRadius, blasterLength,
                blasterSpeed, blasterPower, blasterSoundSrc,
                unpassable, defaultSpeed, rotatingSpeed,
            ] = line.split(",").map(s => s.trim());

            if (type === "asteroid") {
                const entry: NPCAsteroidBasic = {
                    npcGlb,
                    type: "asteroid",
                    collisionSize: parseFloat(collisionSize),
                    hp: parseInt(hp),
                    power: parseInt(power),
                    defaultSpeed: defaultSpeed.split(" ").map(Number) as [number, number, number],
                    rotatingSpeed: rotatingSpeed
                        ? rotatingSpeed.split(" ").map(Number) as [number, number, number]
                        : [0, 0, 0],
                };
                result[name] = entry;
            } else {
                const accel = parseFloat(speedAccel);
                const decel = parseFloat(speedDecel);
                const entry: NPCShipBasic = {
                    npcGlb,
                    type: type as "npcShip" | "npcHeavy",
                    collisionSize: parseFloat(collisionSize),
                    hp: parseInt(hp),
                    power: parseInt(power),
                    maxSpeed: parseFloat(maxSpeed),
                    speedAccel: [accel, accel, accel],
                    speedDecel: [decel, decel, decel],
                    speed: [0, 0, 0],
                    defaultSpeed: [0, 0, 0],
                    targetPosition: [],
                    targetRotation: [0, 0, 0],
                    blasterColor: blasterColor as BlasterColor,
                    blasterShape: blasterShape as BlasterShape,
                    blasterRadius: parseFloat(blasterRadius),
                    blasterLength: parseFloat(blasterLength),
                    blasterSpeed: parseFloat(blasterSpeed),
                    blasterPower: parseFloat(blasterPower),
                    blasterSoundSrc,
                };
                if (unpassable === "true") entry.unpassable = true;
                result[name] = entry;
            }
        });

    return result;
}

// ── Exports ───────────────────────────────────────────────────────────────────

const npcAIData: Record<string, NPCAIConfig> = parseNPCAICSV(aiDataCSV);
const npcAIPattern: Record<string, AIPattern> = parseNPCAIPatternCSV(aiPatternCSV);
const npcBasicData: Record<string, NPCBasicConfig> = parseNPCBasicCSV(basicDataCSV);

export { npcAIPattern, npcBasicData };
export default npcAIData;
