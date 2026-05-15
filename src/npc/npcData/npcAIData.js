const npcAIData = {
    defaultAI: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "basicPattern" },
            { triggerTime: 250, aiPattern: "loopPattern" },
            { triggerTime: 300, aiPattern: "randomMove" },
        ],
        hpTriggered: [
            // { triggerHP: 10,  aiPattern: "basicPattern" }, 
            // { triggerHP: 90,  aiPattern: "loopPattern" }, 
        ],
    },

    droneAI: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 500, aiPattern: "randomMove" },
        ],
        hpTriggered: [
            // { triggerHP: 10,  aiPattern: "basicPattern" }, 
            // { triggerHP: 90,  aiPattern: "loopPattern" }, 
        ],
    },

    // Drone
    droneAIrandom: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 30, aiPattern: "droneBlastLoop" },   
            { triggerTime: 200, aiPattern: "droneRandomMove" },
        ],
        hpTriggered: [],
    },
    droneAIrandom1H: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove1H" },
        ],
        hpTriggered: [],
    },
    droneAIrandom2H: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove2H" },
        ],
        hpTriggered: [],
    },
    droneAIrandom1Q: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove1Q" },
        ],
        hpTriggered: [],
    },
    droneAIrandom2Q: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove2Q" },
        ],
        hpTriggered: [],
    },
    droneAIrandom3Q: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove3Q" },
        ],
        hpTriggered: [],
    },
    droneAIrandom4Q: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove4Q" },
        ],
        hpTriggered: [],
    },
    droneAIrandom1hQ: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove1hQ" },
        ],
        hpTriggered: [],
    },
    droneAIrandom2hQ: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove2hQ" },
        ],
        hpTriggered: [],
    },
    droneAIrandom3hQ: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove3hQ" },
        ],
        hpTriggered: [],
    },
    droneAIrandom4hQ: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove4hQ" },
        ],
        hpTriggered: [],
    },
    droneAIrandom5hQ: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove5hQ" },
        ],
        hpTriggered: [],
    },
    droneAIrandom6hQ: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove6hQ" },
        ],
        hpTriggered: [],
    },
    droneAIrandom7hQ: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove7hQ" },
        ],
        hpTriggered: [],
    },
    droneAIrandom8hQ: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove8hQ" },
        ],
        hpTriggered: [],
    },
    // Drone Front Line
    droneAIrandom1HF: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove1HF" },
        ],
        hpTriggered: [],
    },
    droneAIrandom2HF: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove2HF" },
        ],
        hpTriggered: [],
    },
    droneAIrandom1QF: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove1QF" },
        ],
        hpTriggered: [],
    },
    droneAIrandom2QF: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove2QF" },
        ],
        hpTriggered: [],
    },
    droneAIrandom3QF: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove3QF" },
        ],
        hpTriggered: [],
    },
    droneAIrandom4QF: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove4QF" },
        ],
        hpTriggered: [],
    },
    droneAIrandom1hQF: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove1hQF" },
        ],
        hpTriggered: [],
    },
    droneAIrandom2hQF: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove2hQF" },
        ],
        hpTriggered: [],
    },
    droneAIrandom3hQF: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove3hQF" },
        ],
        hpTriggered: [],
    },
    droneAIrandom4hQF: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove4hQF" },
        ],
        hpTriggered: [],
    },
    droneAIrandom5hQF: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove5hQF" },
        ],
        hpTriggered: [],
    },
    droneAIrandom6hQF: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove6hQF" },
        ],
        hpTriggered: [],
    },
    droneAIrandom7hQF: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove7hQF" },
        ],
        hpTriggered: [],
    },
    droneAIrandom8hQF: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove8hQF" },
        ],
        hpTriggered: [],
    },
    // Drone Front Line Sortie from Right
    droneAIrandom1HR: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove1HR" },
        ],
        hpTriggered: [],
    },
    droneAIrandom2HR: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove2HR" },
        ],
        hpTriggered: [],
    },
    droneAIrandom1hQFRS: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromR" },
            { triggerTime: 15, aiPattern: "droneSortieFromRAfter" },
            { triggerTime: 160, aiPattern: "droneRandomMove1hQF" },
        ],
        hpTriggered: [],
    },
    droneAIrandom2hQFRS: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromR" },
            { triggerTime: 15, aiPattern: "droneSortieFromRAfter" },
            { triggerTime: 130, aiPattern: "droneRandomMove2hQF" },
        ],
        hpTriggered: [],
    },
    droneAIrandom3hQFRS: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromR" },
            { triggerTime: 15, aiPattern: "droneSortieFromRAfter" },
            { triggerTime: 180, aiPattern: "droneRandomMove3hQF" },
        ],
        hpTriggered: [],
    },
    droneAIrandom4hQFRS: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromR" },
            { triggerTime: 15, aiPattern: "droneSortieFromRAfter" },
            { triggerTime: 150, aiPattern: "droneRandomMove4hQF" },
        ],
        hpTriggered: [],
    },
    droneAIrandom5hQFRS: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromR" },
            { triggerTime: 15, aiPattern: "droneSortieFromRAfter" },
            { triggerTime: 120, aiPattern: "droneRandomMove5hQF" },
        ],
        hpTriggered: [],
    },
    droneAIrandom6hQFRS: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromR" },
            { triggerTime: 15, aiPattern: "droneSortieFromRAfter" },
            { triggerTime: 170, aiPattern: "droneRandomMove6hQF" },
        ],
        hpTriggered: [],
    },
    droneAIrandom7hQFRS: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromR" },
            { triggerTime: 15, aiPattern: "droneSortieFromRAfter" },
            { triggerTime: 140, aiPattern: "droneRandomMove7hQF" },
        ],
        hpTriggered: [],
    },
    droneAIrandom8hQFRS: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromR" },
            { triggerTime: 15, aiPattern: "droneSortieFromRAfter" },
            { triggerTime: 190, aiPattern: "droneRandomMove8hQF" },
        ],
        hpTriggered: [],
    },
    // Drone Front Line Sortie from Left
    droneAIrandom1hQFLS: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromL" },
            { triggerTime: 15, aiPattern: "droneSortieFromLAfter" },
            { triggerTime: 160, aiPattern: "droneRandomMove1hQF" },
        ],
        hpTriggered: [],
    },
    droneAIrandom2hQFLS: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromL" },
            { triggerTime: 15, aiPattern: "droneSortieFromLAfter" },
            { triggerTime: 130, aiPattern: "droneRandomMove2hQF" },
        ],
        hpTriggered: [],
    },
    droneAIrandom3hQFLS: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromL" },
            { triggerTime: 15, aiPattern: "droneSortieFromLAfter" },
            { triggerTime: 180, aiPattern: "droneRandomMove3hQF" },
        ],
        hpTriggered: [],
    },
    droneAIrandom4hQFLS: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromL" },
            { triggerTime: 15, aiPattern: "droneSortieFromLAfter" },
            { triggerTime: 150, aiPattern: "droneRandomMove4hQF" },
        ],
        hpTriggered: [],
    },
    droneAIrandom5hQFLS: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromL" },
            { triggerTime: 15, aiPattern: "droneSortieFromLAfter" },
            { triggerTime: 120, aiPattern: "droneRandomMove5hQF" },
        ],
        hpTriggered: [],
    },
    droneAIrandom6hQFLS: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromL" },
            { triggerTime: 15, aiPattern: "droneSortieFromLAfter" },
            { triggerTime: 170, aiPattern: "droneRandomMove6hQF" },
        ],
        hpTriggered: [],
    },
    droneAIrandom7hQFLS: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromL" },
            { triggerTime: 15, aiPattern: "droneSortieFromLAfter" },
            { triggerTime: 140, aiPattern: "droneRandomMove7hQF" },
        ],
        hpTriggered: [],
    },
    droneAIrandom8hQFLS: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromL" },
            { triggerTime: 15, aiPattern: "droneSortieFromLAfter" },
            { triggerTime: 190, aiPattern: "droneRandomMove8hQF" },
        ],
        hpTriggered: [],
    },
        // Drone Front Line Sortie from Right Charger
    droneAIrandom1hQFRSC: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromR" },
            { triggerTime: 15, aiPattern: "droneSortieFromRAfter" },
            { triggerTime: 160, aiPattern: "droneRandomMove1hQF" },
            { triggerTime: 490, aiPattern: "charge" },
        ],
        hpTriggered: [],
    },
    droneAIrandom2hQFRSC: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromR" },
            { triggerTime: 15, aiPattern: "droneSortieFromRAfter" },
            { triggerTime: 130, aiPattern: "droneRandomMove2hQF" },
            { triggerTime: 490, aiPattern: "charge" },
        ],
        hpTriggered: [],
    },
    droneAIrandom3hQFRSC: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromR" },
            { triggerTime: 15, aiPattern: "droneSortieFromRAfter" },
            { triggerTime: 180, aiPattern: "droneRandomMove3hQF" },
            { triggerTime: 490, aiPattern: "charge" },
        ],
        hpTriggered: [],
    },
    droneAIrandom4hQFRSC: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromR" },
            { triggerTime: 15, aiPattern: "droneSortieFromRAfter" },
            { triggerTime: 150, aiPattern: "droneRandomMove4hQF" },
            { triggerTime: 490, aiPattern: "charge" },
        ],
        hpTriggered: [],
    },
    droneAIrandom5hQFRSC: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromR" },
            { triggerTime: 15, aiPattern: "droneSortieFromRAfter" },
            { triggerTime: 120, aiPattern: "droneRandomMove5hQF" },
            { triggerTime: 490, aiPattern: "charge" },
        ],
        hpTriggered: [],
    },
    droneAIrandom6hQFRSC: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromR" },
            { triggerTime: 15, aiPattern: "droneSortieFromRAfter" },
            { triggerTime: 170, aiPattern: "droneRandomMove6hQF" },
            { triggerTime: 490, aiPattern: "charge" },
        ],
        hpTriggered: [],
    },
    droneAIrandom7hQFRSC: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromR" },
            { triggerTime: 15, aiPattern: "droneSortieFromRAfter" },
            { triggerTime: 140, aiPattern: "droneRandomMove7hQF" },
            { triggerTime: 490, aiPattern: "charge" },
        ],
        hpTriggered: [],
    },
    droneAIrandom8hQFRSC: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromR" },
            { triggerTime: 15, aiPattern: "droneSortieFromRAfter" },
            { triggerTime: 190, aiPattern: "droneRandomMove8hQF" },
            { triggerTime: 490, aiPattern: "charge" },
        ],
        hpTriggered: [],
    },
    // Drone Front Line Sortie from Left Charger
    droneAIrandom1hQFLSC: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromL" },
            { triggerTime: 15, aiPattern: "droneSortieFromLAfter" },
            { triggerTime: 160, aiPattern: "droneRandomMove1hQF" },
            { triggerTime: 490, aiPattern: "charge" },
        ],
        hpTriggered: [],
    },
    droneAIrandom2hQFLSC: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromL" },
            { triggerTime: 15, aiPattern: "droneSortieFromLAfter" },
            { triggerTime: 130, aiPattern: "droneRandomMove2hQF" },
            { triggerTime: 490, aiPattern: "charge" },
        ],
        hpTriggered: [],
    },
    droneAIrandom3hQFLSC: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromL" },
            { triggerTime: 15, aiPattern: "droneSortieFromLAfter" },
            { triggerTime: 180, aiPattern: "droneRandomMove3hQF" },
            { triggerTime: 490, aiPattern: "charge" },
        ],
        hpTriggered: [],
    },
    droneAIrandom4hQFLSC: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromL" },
            { triggerTime: 15, aiPattern: "droneSortieFromLAfter" },
            { triggerTime: 150, aiPattern: "droneRandomMove4hQF" },
            { triggerTime: 490, aiPattern: "charge" },
        ],
        hpTriggered: [],
    },
    droneAIrandom5hQFLSC: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromL" },
            { triggerTime: 15, aiPattern: "droneSortieFromLAfter" },
            { triggerTime: 120, aiPattern: "droneRandomMove5hQF" },
            { triggerTime: 490, aiPattern: "charge" },
        ],
        hpTriggered: [],
    },
    droneAIrandom6hQFLSC: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromL" },
            { triggerTime: 15, aiPattern: "droneSortieFromLAfter" },
            { triggerTime: 170, aiPattern: "droneRandomMove6hQF" },
            { triggerTime: 490, aiPattern: "charge" },
        ],
        hpTriggered: [],
    },
    droneAIrandom7hQFLSC: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromL" },
            { triggerTime: 15, aiPattern: "droneSortieFromLAfter" },
            { triggerTime: 140, aiPattern: "droneRandomMove7hQF" },
            { triggerTime: 490, aiPattern: "charge" },
        ],
        hpTriggered: [],
    },
    droneAIrandom8hQFLSC: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromL" },
            { triggerTime: 15, aiPattern: "droneSortieFromLAfter" },
            { triggerTime: 190, aiPattern: "droneRandomMove8hQF" },
            { triggerTime: 490, aiPattern: "charge" },
        ],
        hpTriggered: [],
    },
    // Drone Rear Line
    droneAIrandom1QR: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove1QR" },
        ],
        hpTriggered: [],
    },
    droneAIrandom2QR: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove2QR" },
        ],
        hpTriggered: [],
    },
    droneAIrandom3QR: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove3QR" },
        ],
        hpTriggered: [],
    },
    droneAIrandom4QR: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove4QR" },
        ],
        hpTriggered: [],
    },
    droneAIrandom1hQR: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove1hQR" },
        ],
        hpTriggered: [],
    },
    droneAIrandom2hQR: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove2hQR" },
        ],
        hpTriggered: [],
    },
    droneAIrandom3hQR: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove3hQR" },
        ],
        hpTriggered: [],
    },
    droneAIrandom4hQR: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove4hQR" },
        ],
        hpTriggered: [],
    },
    droneAIrandom5hQR: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove5hQR" },
        ],
        hpTriggered: [],
    },
    droneAIrandom6hQR: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove6hQR" },
        ],
        hpTriggered: [],
    },
    droneAIrandom7hQR: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove7hQR" },
        ],
        hpTriggered: [],
    },
    droneAIrandom8hQR: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove8hQR" },
        ],
        hpTriggered: [],
    },
    // Drone Rear Line Charger   
    droneAIrandom1QRC: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove1QR" },
            { triggerTime: 450,  aiPattern: "charge" },
        ],
        hpTriggered: [],
    },
    droneAIrandom2QRC: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove2QR" },
            { triggerTime: 450,  aiPattern: "charge" },
        ],
        hpTriggered: [],
    },
    droneAIrandom3QRC: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove3QR" },
            { triggerTime: 450,  aiPattern: "charge" },
        ],
        hpTriggered: [],
    },
    droneAIrandom4QRC: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove4QR" },
            { triggerTime: 450,  aiPattern: "charge" },
        ],
        hpTriggered: [],
    },
    // Drone Front Line Sortie from Right
    droneAIrandom1hQRS: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromR" },
            { triggerTime: 15, aiPattern: "droneSortieFromRAfter" },
            { triggerTime: 220, aiPattern: "droneRandomMove1hQR" },
        ],
        hpTriggered: [],
    },
    droneAIrandom2hQRS: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromR" },
            { triggerTime: 15, aiPattern: "droneSortieFromRAfter" },
            { triggerTime: 210, aiPattern: "droneRandomMove2hQR" },
        ],
        hpTriggered: [],
    },
    droneAIrandom3hQRS: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromR" },
            { triggerTime: 15, aiPattern: "droneSortieFromRAfter" },
            { triggerTime: 220, aiPattern: "droneRandomMove3hQR" },
        ],
        hpTriggered: [],
    },
    droneAIrandom4hQRS: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromR" },
            { triggerTime: 15, aiPattern: "droneSortieFromRAfter" },
            { triggerTime: 210, aiPattern: "droneRandomMove4hQR" },
        ],
        hpTriggered: [],
    },
    droneAIrandom5hQRS: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromR" },
            { triggerTime: 15, aiPattern: "droneSortieFromRAfter" },
            { triggerTime: 200, aiPattern: "droneRandomMove5hQR" },
        ],
        hpTriggered: [],
    },
    droneAIrandom6hQRS: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromR" },
            { triggerTime: 15, aiPattern: "droneSortieFromRAfter" },
            { triggerTime: 190, aiPattern: "droneRandomMove6hQR" },
        ],
        hpTriggered: [],
    },
    droneAIrandom7hQRS: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromR" },
            { triggerTime: 15, aiPattern: "droneSortieFromRAfter" },
            { triggerTime: 200, aiPattern: "droneRandomMove7hQR" },
        ],
        hpTriggered: [],
    },
    droneAIrandom8hQRS: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromR" },
            { triggerTime: 15, aiPattern: "droneSortieFromRAfter" },
            { triggerTime: 190, aiPattern: "droneRandomMove8hQR" },
        ],
        hpTriggered: [],
    },
    // Drone Front Line Sortie from Left
    droneAIrandom1hQLS: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromL" },
            { triggerTime: 15, aiPattern: "droneSortieFromLAfter" },
            { triggerTime: 220, aiPattern: "droneRandomMove1hQR" },
        ],
        hpTriggered: [],
    },
    droneAIrandom2hQLS: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromL" },
            { triggerTime: 15, aiPattern: "droneSortieFromLAfter" },
            { triggerTime: 210, aiPattern: "droneRandomMove2hQR" },
        ],
        hpTriggered: [],
    },
    droneAIrandom3hQLS: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromL" },
            { triggerTime: 15, aiPattern: "droneSortieFromLAfter" },
            { triggerTime: 220, aiPattern: "droneRandomMove3hQR" },
        ],
        hpTriggered: [],
    },
    droneAIrandom4hQLS: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromL" },
            { triggerTime: 15, aiPattern: "droneSortieFromLAfter" },
            { triggerTime: 210, aiPattern: "droneRandomMove4hQR" },
        ],
        hpTriggered: [],
    },
    droneAIrandom5hQLS: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromL" },
            { triggerTime: 15, aiPattern: "droneSortieFromLAfter" },
            { triggerTime: 200, aiPattern: "droneRandomMove5hQR" },
        ],
        hpTriggered: [],
    },
    droneAIrandom6hQLS: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromL" },
            { triggerTime: 15, aiPattern: "droneSortieFromLAfter" },
            { triggerTime: 190, aiPattern: "droneRandomMove6hQR" },
        ],
        hpTriggered: [],
    },  
    droneAIrandom7hQLS: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromL" },
            { triggerTime: 15, aiPattern: "droneSortieFromLAfter" },
            { triggerTime: 200, aiPattern: "droneRandomMove7hQR" },
        ],
        hpTriggered: [],
    },
    droneAIrandom8hQLS: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneSortieFromL" },
            { triggerTime: 15, aiPattern: "droneSortieFromLAfter" },
            { triggerTime: 190, aiPattern: "droneRandomMove8hQR" },
        ],
        hpTriggered: [],
    },

    // Bomber
    bomberAI: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "bomberIntroPattern" },
            { triggerTime: 550, aiPattern: "loopPattern" },
            { triggerTime: 900, aiPattern: "randomMove" },
        ],
        hpTriggered: [],
    },
    bomberAIstatic: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "bomberIntroPattern" },
            { triggerTime: 60, aiPattern: "bomberBlastLoop" },
            { triggerTime: 500, aiPattern: "bomberDefaultMoveZ" },
            { triggerTime: 500, aiPattern: "bomberBlastLoop" },
        ],
        hpTriggered: [],
    },

    // Fighter
    fighterAIrandom: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "fighterIntroPattern" },
            { triggerTime: 30, aiPattern: "fighterBlastLoop" },
            { triggerTime: 180, aiPattern: "fighterRandomMove" },
        ],
        hpTriggered: [],
    },
    fighterAIrandom1H: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "fighterIntroPattern" },
            { triggerTime: 180, aiPattern: "fighterRandomMove1H" },
        ],
        hpTriggered: [],
    },
    fighterAIrandom2H: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "fighterIntroPattern" },
            { triggerTime: 180, aiPattern: "fighterRandomMove2H" },
        ],
        hpTriggered: [],
    },
    fighterAIrandom1Q: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "fighterIntroPattern" },
            { triggerTime: 180, aiPattern: "fighterRandomMove1Q" },
        ],
        hpTriggered: [],
    },
    fighterAIrandom2Q: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "fighterIntroPattern" },
            { triggerTime: 180, aiPattern: "fighterRandomMove2Q" },
        ],
        hpTriggered: [],
    },
    fighterAIrandom3Q: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "fighterIntroPattern" },
            { triggerTime: 180, aiPattern: "fighterRandomMove3Q" },
        ],
        hpTriggered: [],
    },
    fighterAIrandom4Q: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "fighterIntroPattern" },
            { triggerTime: 180, aiPattern: "fighterRandomMove4Q" },
        ],
        hpTriggered: [],
    },
    // Fighter Front Line
    fighterAIrandom1HF: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "fighterIntroPattern" },
            { triggerTime: 180, aiPattern: "fighterRandomMove1HF" },
        ],
        hpTriggered: [],
    },
    fighterAIrandom2HF: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "fighterIntroPattern" },
            { triggerTime: 180, aiPattern: "fighterRandomMove2HF" },
        ],
        hpTriggered: [],
    },
    fighterAIrandom1QF: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "fighterIntroPattern" },
            { triggerTime: 180, aiPattern: "fighterRandomMove1QF" },
        ],
        hpTriggered: [],
    },
    fighterAIrandom2QF: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "fighterIntroPattern" },
            { triggerTime: 180, aiPattern: "fighterRandomMove2QF" },
        ],
        hpTriggered: [],
    },
    fighterAIrandom3QF: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "fighterIntroPattern" },
            { triggerTime: 180, aiPattern: "fighterRandomMove3QF" },
        ],
        hpTriggered: [],
    },
    fighterAIrandom4QF: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "fighterIntroPattern" },
            { triggerTime: 180, aiPattern: "fighterRandomMove4QF" },
        ],
        hpTriggered: [],
    },
    // Fighter Rear Line
    fighterAIrandom1HR: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "fighterIntroPattern" },
            { triggerTime: 180, aiPattern: "fighterRandomMove1HR" },
        ],
        hpTriggered: [],
    },
    fighterAIrandom2HR: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "fighterIntroPattern" },
            { triggerTime: 180, aiPattern: "fighterRandomMove2HR" },
        ],
        hpTriggered: [],
    },
    fighterAIrandom1QR: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "fighterIntroPattern" },
            { triggerTime: 180, aiPattern: "fighterRandomMove1QR" },
        ],
        hpTriggered: [],
    },
    fighterAIrandom2QR: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "fighterIntroPattern" },
            { triggerTime: 180, aiPattern: "fighterRandomMove2QR" },
        ],
        hpTriggered: [],
    },
    fighterAIrandom3QR: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "fighterIntroPattern" },
            { triggerTime: 180, aiPattern: "fighterRandomMove3QR" },
        ],
        hpTriggered: [],
    },
    fighterAIrandom4QR: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "fighterIntroPattern" },
            { triggerTime: 180, aiPattern: "fighterRandomMove4QR" },
        ],
        hpTriggered: [],
    },
    // Fighter Rear Line Charger
    fighterAIrandom1QRC: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "fighterIntroPattern" },
            { triggerTime: 180, aiPattern: "fighterRandomMove1QR" },
            { triggerTime: 450, aiPattern: "charge" },
        ],
        hpTriggered: [],
    },
    fighterAIrandom2QRC: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "fighterIntroPattern" },
            { triggerTime: 180, aiPattern: "fighterRandomMove2QR" },
            { triggerTime: 450, aiPattern: "charge" },
        ],
        hpTriggered: [],
    },
    fighterAIrandom3QRC: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "fighterIntroPattern" },
            { triggerTime: 180, aiPattern: "fighterRandomMove3QR" },
            { triggerTime: 450, aiPattern: "charge" },
        ],
        hpTriggered: [],
    },
    fighterAIrandom4QRC: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "fighterIntroPattern" },
            { triggerTime: 180, aiPattern: "fighterRandomMove4QR" },
            { triggerTime: 450, aiPattern: "charge" },
        ],
        hpTriggered: [],
    },

    // Destroyer
    destroyerAIrandom: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 60, aiPattern: "destroyerBlastLoop" },
            { triggerTime: 300, aiPattern: "destroyerRandomMove" },
        ],
        hpTriggered: [
            { triggerHP: 4,  aiPattern: "charge" }, 
        ],
    },
    destroyerAIrandomC: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 60, aiPattern: "destroyerBlastLoop" },
            { triggerTime: 300, aiPattern: "destroyerRandomMove" },
            { triggerTime: 700, aiPattern: "charge" },
        ],
        hpTriggered: [
            { triggerHP: 5,  aiPattern: "charge" }, 
        ],
    },
    destroyerAIrandom1H: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 300, aiPattern: "destroyerRandomMove1H" },
        ],
        hpTriggered: [],
    },
    destroyerAIrandom2H: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 300, aiPattern: "destroyerRandomMove2H" },
        ],
        hpTriggered: [],
    },
    destroyerAIrandom1Q: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 300, aiPattern: "destroyerRandomMove1Q" },
        ],
        hpTriggered: [],
    },
    destroyerAIrandom2Q: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 300, aiPattern: "destroyerRandomMove2Q" },
        ],
        hpTriggered: [],
    },
    destroyerAIrandom3Q: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 300, aiPattern: "destroyerRandomMove3Q" },
        ],
        hpTriggered: [],
    },
    destroyerAIrandom4Q: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 300, aiPattern: "destroyerRandomMove4Q" },
        ],
        hpTriggered: [],
    },
    // Destroyer Front Line
    destroyerAIrandom1HF: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 300, aiPattern: "destroyerRandomMove1HF" },
        ],
        hpTriggered: [],
    },
    destroyerAIrandom2HF: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 300, aiPattern: "destroyerRandomMove2HF" },
        ],
        hpTriggered: [],
    },
    destroyerAIrandom1QF: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 300, aiPattern: "destroyerRandomMove1QF" },
        ],
        hpTriggered: [],
    },
    destroyerAIrandom2QF: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 300, aiPattern: "destroyerRandomMove2QF" },
        ],
        hpTriggered: [],
    },
    destroyerAIrandom3QF: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 300, aiPattern: "destroyerRandomMove3QF" },
        ],
        hpTriggered: [],
    },
    destroyerAIrandom4QF: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 300, aiPattern: "destroyerRandomMove4QF" },
        ],
        hpTriggered: [],
    },
    // Destroyer Front Line Charger
    destroyerAIrandom1HFC: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 300, aiPattern: "destroyerRandomMove1HF" },
        ],
        hpTriggered: [
            { triggerHP: 3,  aiPattern: "charge" }, 
        ],
    },
    destroyerAIrandom2HFC: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 300, aiPattern: "destroyerRandomMove2HF" },
        ],
        hpTriggered: [
            { triggerHP: 3,  aiPattern: "charge" }, 
        ],
    },
    destroyerAIrandom1QFC: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 300, aiPattern: "destroyerRandomMove1QF" },
        ],
        hpTriggered: [
            { triggerHP: 3,  aiPattern: "charge" }, 
        ],
    },
    destroyerAIrandom2QFC: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 300, aiPattern: "destroyerRandomMove2QF" },
        ],
        hpTriggered: [
            { triggerHP: 3,  aiPattern: "charge" }, 
        ],
    },
    destroyerAIrandom3QFC: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 300, aiPattern: "destroyerRandomMove3QF" },
        ],
        hpTriggered: [
            { triggerHP: 3,  aiPattern: "charge" }, 
        ],
    },
    destroyerAIrandom4QFC: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 300, aiPattern: "destroyerRandomMove4QF" },
        ],
        hpTriggered: [
            { triggerHP: 3,  aiPattern: "charge" }, 
        ],
    },

    // Destroyer Rear Line
    destroyerAIrandom1HR: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 300, aiPattern: "destroyerRandomMove1HR" },
        ],
        hpTriggered: [],
    },
    destroyerAIrandom2HR: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 300, aiPattern: "destroyerRandomMove2HR" },
        ],
        hpTriggered: [],
    },
    destroyerAIrandom1QR: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 300, aiPattern: "destroyerRandomMove1QR" },
        ],
        hpTriggered: [],
    },
    destroyerAIrandom2QR: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 300, aiPattern: "destroyerRandomMove2QR" },
        ],
        hpTriggered: [],
    },
    destroyerAIrandom3QR: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 300, aiPattern: "destroyerRandomMove3QR" },
        ],
        hpTriggered: [],
    },
    destroyerAIrandom4QR: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 300, aiPattern: "destroyerRandomMove4QR" },
        ],
        hpTriggered: [],
    },

    // Cruiser
    cruiserAI: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "cruiserIntroPattern" },
            { triggerTime: 600, aiPattern: "loopPattern" },
            { triggerTime: 300, aiPattern: "randomMove" },
        ],
        hpTriggered: [],
    },
    cruiserAIstaticCarrier: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "cruiserIntroPattern" },
            { triggerTime: 60, aiPattern: "cruiserBlastLoop" },
            { triggerTime: 500, aiPattern: "cruiserDefaultMoveZ" },
            { triggerTime: 500, aiPattern: "cruiserBlastLoop" },
        ],
        hpTriggered: [],
    },
    cruiserAIstatic: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "cruiserIntroPattern" },
            { triggerTime: 60, aiPattern: "cruiserBlastLoop" },
            { triggerTime: 500, aiPattern: "cruiserDefaultMoveZ" },
            { triggerTime: 500, aiPattern: "cruiserBlastLoop" },
        ],
        hpTriggered: [],
    },
    cruiserAIstaticC: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "cruiserIntroPattern" },
            { triggerTime: 60, aiPattern: "cruiserBlastLoop" },
            { triggerTime: 500, aiPattern: "cruiserDefaultMoveZ" },
            { triggerTime: 500, aiPattern: "cruiserBlastLoop" },
        ],
        hpTriggered: [
            { triggerHP: 5,  aiPattern: "charge" }, 
        ],
    },
    cruiserBossAIstaticC: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "cruiserBossIntroPattern" },
            { triggerTime: 60, aiPattern: "cruiserBlastLoop" },
            { triggerTime: 1050,  aiPattern: "cruiserDefaultMoveZ" }, 
            { triggerTime: 1050, aiPattern: "cruiserBlastLoop" },
        ],
        hpTriggered: [
            { triggerHP: 23,  aiPattern: "charge" }, 
        ],
    },

    // Asteroid
    asteroidAI: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "asteroidIntroPattern" },
        ],
        hpTriggered: [],
    },

    // Boss
    bossAI: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "bossIntroPattern" },
            { triggerTime: 10, aiPattern: "bossFirstAttack" },
            { triggerTime: 500, aiPattern: "bossLoop" },
        ],
        hpTriggered: [
            { triggerHP: 55,  aiPattern: "bossFinalLoop" }, 
        ],
    },
};

export default npcAIData;