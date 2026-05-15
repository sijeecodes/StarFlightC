const pcShipData = [
    {
        name: "Regular-Joe",
        src: "artSrc/ship1.glb",
        desc: "Average balanced ship for most users.",
        data: {
            collisionSize: 8,
            blasterDelay: 1,
            maxSpeed: [2.4, 1.35, 4],
            speedAccel: [0.4, 0.3, 0.5],
            speedDecel: [0.92, 0.92, 0.91],
            rollDelay: 15,
            rollCost: 15,
            boostCost: 2,
            hpMax: 350,
            hp: 350,
            hpDisplayed: 350,
            energyMax: 100,
            energy: 50,
            energyDisplayed: 50,
            energyDelay: 60,
            energyRecharge: 15,
        },
        blaster: {
            soundSrc: "soundSrc/pcBlastJoe.mp3",
            speed: 9,
            power: 1,
            shape: "sphere",
            color: "blue",
            size: 4
        }
    },
    {
        name: "Bubbles",
        src: "artSrc/ship2.glb",
        desc: "Easily pops enemies. Slow but sturdy and easy to hit enemies.",
        data: {
            collisionSize: 9,
            blasterDelay: 3,
            maxSpeed: [1.8, 1.1, 3],
            speedAccel: [0.3, 0.2, 0.4],
            speedDecel: [0.93, 0.93, 0.92],
            rollDelay: 25,
            rollCost: 20,
            boostCost: 4,
            hpMax: 450,
            hp: 450,
            hpDisplayed: 450,
            energyMax: 200,
            energy: 50,
            energyDisplayed: 50,
            energyDelay: 60,
            energyRecharge: 15,
        },
        blaster: {
            soundSrc: "soundSrc/pcBlastBubble.mp3",
            speed: 7,
            power: 2,
            shape: "sphere",
            color: "bubbleGum",
            size: 6
        }
    },
    {
        name: "Sparrow",
        src: "artSrc/ship3.glb",
        desc: "Hard to handle, but swift and powerful.",
        data: {
            collisionSize: 7,
            blasterDelay: 4,
            maxSpeed: [3.0, 1.8, 5],
            speedAccel: [0.6, 0.4, 0.6],
            speedDecel: [0.91, 0.91, 0.90],
            rollDelay: 5,
            rollCost: 5,
            boostCost: 2,
            hpMax: 200,
            hp: 200,
            hpDisplayed: 200,
            energyMax: 75,
            energy: 50,
            energyDisplayed: 50,
            energyDelay: 15,
            energyRecharge: 10,
        },
        blaster: {
            soundSrc: "soundSrc/pcBlastSparrow.mp3",
            speed: 10,
            power: 5,
            shape: "capsule",
            color: "orange",
            size: 1.5
        }
    }
]

export default pcShipData;