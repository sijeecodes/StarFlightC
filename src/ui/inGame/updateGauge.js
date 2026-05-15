export default function updateGauge(document, pcObjects) {
    updateHP(document, pcObjects);
    updateEnergy(document, pcObjects);
}

function updateHP(document, pcObjects) {
    let hp = pcObjects.pcShip.hp;
    let hpDisplayed = pcObjects.pcShip.hpDisplayed;

    hpDisplayed -= (hpDisplayed - hp) * 0.2;
    if (Math.abs(hp - hpDisplayed) < 0.01) hpDisplayed = hp;

    pcObjects.pcShip.hpDisplayed = hpDisplayed;
    document.getElementById("hp").style.width = hpDisplayed * 4 + "px";
}

function updateEnergy(document, pcObjects) {
    let energy = pcObjects.pcShip.energy;
    let energyDisplayed = pcObjects.pcShip.energyDisplayed;

    energyDisplayed -= (energyDisplayed - energy) * 0.2;
    if (Math.abs(energy - energyDisplayed) < 0.01) energyDisplayed = energy;

    pcObjects.pcShip.energyDisplayed = energyDisplayed;
    document.getElementById("energy").style.width = energyDisplayed * 4 + "px";
}