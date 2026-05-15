import pcShipData from "../pcData/pcShipData";

export default function initiatePCShip (pcShip, shipNumber = 0) {
    const shipData = pcShipData[shipNumber].data;

    pcShip.position.set(0, 0, 0);
    pcShip.rotation.set(0, 0, 0);
    pcShip.blasterCoolTime = 0;
    pcShip.rollCoolTime = 0;
    pcShip.energyCoolTime = 0;
    pcShip.speed = [0, 0, 0];
    pcShip.rolling = false;
    pcShip.visible = true;

    pcShip.collisionSize    = shipData.collisionSize;
    pcShip.blasterDelay     = shipData.blasterDelay;
    pcShip.maxSpeed         = shipData.maxSpeed;
    pcShip.speedAccel       = shipData.speedAccel;
    pcShip.speedDecel       = shipData.speedDecel;
    pcShip.rollDelay        = shipData.rollDelay;
    pcShip.rollCost         = shipData.rollCost;
    pcShip.boostCost        = shipData.boostCost;
    pcShip.hpMax            = shipData.hpMax;
    pcShip.hp               = shipData.hp;
    pcShip.hpDisplayed      = shipData.hpDisplayed;
    pcShip.energyMax        = shipData.energyMax;
    pcShip.energy           = shipData.energy;
    pcShip.energyDisplayed  = shipData.energyDisplayed;
    pcShip.energyDelay      = shipData.energyDelay;
    pcShip.energyRecharge   = shipData.energyRecharge;
    pcShip.shipNumber       = shipNumber;
}