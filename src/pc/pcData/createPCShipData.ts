import csvRaw from "../../gameData/pcShipData.csv?raw";
import type { PCShipConfig, BlasterColor, BlasterShape } from "../../types";

function parsePCShipCSV(csv: string): PCShipConfig[] {
    return csv
        .split("\n")
        .slice(1)
        .filter(line => line.trim() !== "")
        .map(line => {
            const parts = line.split(",");
            const [
                name, src,
                collisionSize, blasterDelay,
                maxSpeedX, maxSpeedY, maxSpeedZ,
                speedAccelX, speedAccelY, speedAccelZ,
                speedDecelX, speedDecelY, speedDecelZ,
                rollDelay, rollCost, boostCost,
                hpMax, energyMax, energyDelay, energyRecharge,
                blasterSoundSrc, blasterSpeed, blasterPower,
                blasterShape, blasterColor, blasterSize,
            ] = parts.map(s => s.trim());
            const desc = parts.slice(26).join(",").trim();

            const hp = parseInt(hpMax);
            const energy = parseInt(energyMax);

            return {
                name,
                src,
                desc,
                data: {
                    collisionSize: parseFloat(collisionSize),
                    blasterDelay: parseInt(blasterDelay),
                    maxSpeed: [parseFloat(maxSpeedX), parseFloat(maxSpeedY), parseFloat(maxSpeedZ)],
                    speedAccel: [parseFloat(speedAccelX), parseFloat(speedAccelY), parseFloat(speedAccelZ)],
                    speedDecel: [parseFloat(speedDecelX), parseFloat(speedDecelY), parseFloat(speedDecelZ)],
                    rollDelay: parseInt(rollDelay),
                    rollCost: parseInt(rollCost),
                    boostCost: parseInt(boostCost),
                    hpMax: hp,
                    hp,
                    hpDisplayed: hp,
                    energyMax: energy,
                    energy: 50,
                    energyDisplayed: 50,
                    energyDelay: parseInt(energyDelay),
                    energyRecharge: parseInt(energyRecharge),
                },
                blaster: {
                    soundSrc: blasterSoundSrc,
                    speed: parseFloat(blasterSpeed),
                    power: parseFloat(blasterPower),
                    shape: blasterShape as BlasterShape,
                    color: blasterColor as BlasterColor,
                    size: parseFloat(blasterSize),
                },
            };
        });
}

const pcShipData: PCShipConfig[] = parsePCShipCSV(csvRaw);

export default pcShipData;
