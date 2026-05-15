const levelData = [
    // Asteroids
    {
        eventTime: 10,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid1Basic",
        startingPosition: "random"
    },
    {
        eventTime: 20,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2Basic",
        startingPosition: "random"
    },
    {
        eventTime: 20,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2Basic",
        startingPosition: "random"
    },
    {
        eventTime: 15,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2Basic",
        startingPosition: "random"
    },
    {
        eventTime: 20,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2Basic",
        startingPosition: "random"
    },
    {
        eventTime: 15,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2Basic",
        startingPosition: "random"
    },
    {
        eventTime: 15,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2Basic",
        startingPosition: "random"
    },
    {
        eventTime: 20,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2Basic",
        startingPosition: "random"
    },
    {
        eventTime: 20,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2Basic",
        startingPosition: "random"
    },
    {
        eventTime: 13,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2Basic",
        startingPosition: "random"
    },
    {
        eventTime: 15,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2Basic",
        startingPosition: "random"
    },
    {
        eventTime: 15,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2Basic",
        startingPosition: "random"
    },
    {
        eventTime: 20,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2Basic",
        startingPosition: "random"
    },
    {
        eventTime: 15,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2Basic",
        startingPosition: "random"
    },

    // Drones
    // {
    //     eventTime: 70,
    //     npcAIname: "droneAIrandom",
    //     npcBasic: "droneBasic",
    //     startingPosition: [-10, -10, 700]
    // },
    // {
    //     eventTime: 70,
    //     npcAIname: "droneAIrandom",
    //     npcBasic: "droneBasic",
    //     startingPosition: [20, 10, 700]
    // },
    // {
    //     eventTime: 70,
    //     npcAIname: "droneAIrandom",
    //     npcBasic: "droneBasic",
    //     startingPosition: [-20, -15, 700]
    // },
    {
        eventTime: 30,
        npcAIname: "droneAIrandom",
        npcBasic: "droneBasic",
        startingPosition: [5, 15, 700]
    },
    {
        eventTime: 60,
        npcAIname: "droneAIrandom",
        npcBasic: "droneBasic",
        startingPosition: [25, -10, 700]
    },
    {
        eventTime: 10,
        npcAIname: "droneAIrandom",
        npcBasic: "droneBasic",
        startingPosition: [-20, 10, 700]
    },

    // Bomber
    {
        eventTime: 10,
        npcAIname: "bomberAIstatic",
        npcBasic: "bomberBasic",
        startingPosition: [33, 12, 700]
    },
    {
        eventTime: 40,
        npcAIname: "droneAIrandom",
        npcBasic: "droneBasic",
        startingPosition: [0, 0, 700]
    },
    {
        eventTime: 50,
        npcAIname: "droneAIrandom",
        npcBasic: "droneBasic",
        startingPosition: [20, 10, 700]
    },
    {
        eventTime: 50,
        npcAIname: "droneAIrandom",
        npcBasic: "droneBasic",
        startingPosition: [20, 10, 700]
    },

    // Fighters
    {
        eventTime: 50,
        npcAIname: "fighterAIrandom",
        npcBasic: "fighterBasic",
        startingPosition: [-10, -10, 700]
    },
    {
        eventTime: 10,
        npcAIname: "droneAIrandom",
        npcBasic: "droneBasic",
        startingPosition: [25, 10, 700]
    },
    {
        eventTime: 10,
        npcAIname: "droneAIrandom",
        npcBasic: "droneBasic",
        startingPosition: [-25, 10, 700]
    },
    {
        eventTime: 170,
        npcAIname: "fighterAIrandom",
        npcBasic: "fighterBasic",
        startingPosition: [-10, -10, 700]
    },
    {
        eventTime: 60,
        npcAIname: "droneAIrandom",
        npcBasic: "droneBasic",
        startingPosition: [25, -10, 700]
    },
    {
        eventTime: 10,
        npcAIname: "droneAIrandom",
        npcBasic: "droneBasic",
        startingPosition: [-25, -10, 700]
    },

    // Bombers
    {
        eventTime: 10,
        npcAIname: "bomberAIstatic",
        npcBasic: "bomberBasic",
        startingPosition: [30, 15, 700]
    },
    {
        eventTime: 10,
        npcAIname: "bomberAIstatic",
        npcBasic: "bomberBasic",
        startingPosition: [-30, 15, 700]
    },
    {
        eventTime: 130,
        npcAIname: "fighterAIrandom",
        npcBasic: "fighterBasic",
        startingPosition: [-15, -10, 700]
    },
    {
        eventTime: 10,
        npcAIname: "fighterAIrandom",
        npcBasic: "fighterBasic",
        startingPosition: [15, -10, 700]
    },
    {
        eventTime: 80,
        npcAIname: "droneAIrandom",
        npcBasic: "droneBasic",
        startingPosition: [15, 5, 700]
    },
    {
        eventTime: 10,
        npcAIname: "droneAIrandom",
        npcBasic: "droneBasic",
        startingPosition: [-15, 5, 700]
    },

    // Stronger Destroyer
    {
        eventTime: 180,
        npcAIname: "destroyerAIrandomC",
        npcBasic: "destroyerStrongerBasic",
        startingPosition: [0, -10, 700]
    },
    // & Drones
    {
        eventTime: 100,
        npcAIname: "droneAIrandom1QRC",
        npcBasic: "droneBasic",
        startingPosition: [30, 15, 700]
    },
    {
        eventTime: 10,
        npcAIname: "droneAIrandom2QRC",
        npcBasic: "droneBasic",
        startingPosition: [-30, 15, 700]
    },
    {
        eventTime: 10,
        npcAIname: "droneAIrandom3QRC",
        npcBasic: "droneBasic",
        startingPosition: [30, -15, 700]
    },
    {
        eventTime: 10,
        npcAIname: "droneAIrandom4QRC",
        npcBasic: "droneBasic",
        startingPosition: [-30, -15, 700]
    },

    // // Asteroids
    // {
    //     eventTime: 570,
    //     npcAIname: "asteroidAI",
    //     npcBasic: "asteroid1SlowBasic",
    //     startingPosition: "random"
    // },
    // {
    //     eventTime: 15,
    //     npcAIname: "asteroidAI",
    //     npcBasic: "asteroid2SlowBasic",
    //     startingPosition: "random"
    // },
    // {
    //     eventTime: 13,
    //     npcAIname: "asteroidAI",
    //     npcBasic: "asteroid2SlowBasic",
    //     startingPosition: "random"
    // },
    // {
    //     eventTime: 15,
    //     npcAIname: "asteroidAI",
    //     npcBasic: "asteroid2SlowBasic",
    //     startingPosition: "random"
    // },
    // {
    //     eventTime: 13,
    //     npcAIname: "asteroidAI",
    //     npcBasic: "asteroid2SlowBasic",
    //     startingPosition: "random"
    // },
    // {
    //     eventTime: 15,
    //     npcAIname: "asteroidAI",
    //     npcBasic: "asteroid2SlowBasic",
    //     startingPosition: "random"
    // },
    // {
    //     eventTime: 15,
    //     npcAIname: "asteroidAI",
    //     npcBasic: "asteroid2SlowBasic",
    //     startingPosition: "random"
    // },
    // {
    //     eventTime: 13,
    //     npcAIname: "asteroidAI",
    //     npcBasic: "asteroid2SlowBasic",
    //     startingPosition: "random"
    // },
    // {
    //     eventTime: 15,
    //     npcAIname: "asteroidAI",
    //     npcBasic: "asteroid2SlowBasic",
    //     startingPosition: "random"
    // },
    // {
    //     eventTime: 13,
    //     npcAIname: "asteroidAI",
    //     npcBasic: "asteroid2SlowBasic",
    //     startingPosition: "random"
    // },
    // {
    //     eventTime: 15,
    //     npcAIname: "asteroidAI",
    //     npcBasic: "asteroid2SlowBasic",
    //     startingPosition: "random"
    // },
    // {
    //     eventTime: 15,
    //     npcAIname: "asteroidAI",
    //     npcBasic: "asteroid2SlowBasic",
    //     startingPosition: "random"
    // },
    // {
    //     eventTime: 13,
    //     npcAIname: "asteroidAI",
    //     npcBasic: "asteroid2SlowBasic",
    //     startingPosition: "random"
    // },
    // {
    //     eventTime: 15,
    //     npcAIname: "asteroidAI",
    //     npcBasic: "asteroid2SlowBasic",
    //     startingPosition: "random"
    // },

    // Bombers
    {
        eventTime: 150,
        npcAIname: "bomberAIstatic",
        npcBasic: "bomberBasic",
        startingPosition: [30, 15, 700]
    },
    {
        eventTime: 10,
        npcAIname: "bomberAIstatic",
        npcBasic: "bomberBasic",
        startingPosition: [-30, 15, 700]
    },

    // Drones
    {
        eventTime: 150,
        npcAIname: "droneAIrandom1HF",
        npcBasic: "droneBasic",
        startingPosition: [20, 10, 700]
    },
    {
        eventTime: 10,
        npcAIname: "droneAIrandom2HF",
        npcBasic: "droneBasic",
        startingPosition: [-20, 10, 700]
    },
    {
        eventTime: 10,
        npcAIname: "droneAIrandom1HR",
        npcBasic: "droneBasic",
        startingPosition: [20, -10, 700]
    },
    {
        eventTime: 10,
        npcAIname: "droneAIrandom2HR",
        npcBasic: "droneBasic",
        startingPosition: [-20, -10, 700]
    },

    // Fighters
    {
        eventTime: 120,
        npcAIname: "fighterAIrandom1HF",
        npcBasic: "fighterBasic",
        startingPosition: [30, -15, 700]
    },
    {
        eventTime: 10,
        npcAIname: "fighterAIrandom2HF",
        npcBasic: "fighterBasic",
        startingPosition: [-30, -15, 700]
    },

    // // Drones
    // {
    //     eventTime: 100,
    //     npcAIname: "droneAIrandom1HR",
    //     npcBasic: "droneBasic",
    //     startingPosition: [20, -10, 700]
    // },
    // {
    //     eventTime: 10,
    //     npcAIname: "droneAIrandom2HR",
    //     npcBasic: "droneBasic",
    //     startingPosition: [-20, -10, 700]
    // },

    // Drones
    // {
    //     eventTime: 120,
    //     npcAIname: "droneAIrandom1Q",
    //     npcBasic: "droneBasic",
    //     startingPosition: [25, 15, 700]
    // },
    // {
    //     eventTime: 10,
    //     npcAIname: "droneAIrandom2Q",
    //     npcBasic: "droneBasic",
    //     startingPosition: [-25, 15, 700]
    // },
    // {
    //     eventTime: 10,
    //     npcAIname: "droneAIrandom3Q",
    //     npcBasic: "droneBasic",
    //     startingPosition: [25, -15, 700]
    // },
    // {
    //     eventTime: 10,
    //     npcAIname: "droneAIrandom4Q",
    //     npcBasic: "droneBasic",
    //     startingPosition: [-25, -15, 700]
    // },

    // Bombers
    {
        eventTime: 50,
        npcAIname: "bomberAIstatic",
        npcBasic: "bomberBasic",
        startingPosition: [30, 15, 700]
    },
    {
        eventTime: 10,
        npcAIname: "bomberAIstatic",
        npcBasic: "bomberBasic",
        startingPosition: [-30, 15, 700]
    },

    // Destroyers
    {
        eventTime: 120,
        npcAIname: "destroyerAIrandom2HR",
        npcBasic: "destroyerBasic",
        startingPosition: [30, 5, 700]
    },
    {
        eventTime: 10,
        npcAIname: "destroyerAIrandom2HR",
        npcBasic: "destroyerBasic",
        startingPosition: [-30, 5, 700]
    },

    // Drones
    {
        eventTime: 120,
        npcAIname: "droneAIrandom1Q",
        npcBasic: "droneBasic",
        startingPosition: [25, 15, 700]
    },
    {
        eventTime: 15,
        npcAIname: "droneAIrandom2Q",
        npcBasic: "droneBasic",
        startingPosition: [-25, 15, 700]
    },
    // {
    //     eventTime: 15,
    //     npcAIname: "droneAIrandom3Q",
    //     npcBasic: "droneBasic",
    //     startingPosition: [25, -15, 700]
    // },
    // {
    //     eventTime: 15,
    //     npcAIname: "droneAIrandom4Q",
    //     npcBasic: "droneBasic",
    //     startingPosition: [-25, -15, 700]
    // },

    // // Middle Boss Cruiser
    {
        eventTime: 360,
        npcAIname: "cruiserBossAIstaticC",
        npcBasic: "cruiserBossBasic",
        startingPosition: [0, 5, 700]
    },
    {
        eventTime: 100,
        npcAIname: "droneAIrandom8hQFRSC",
        npcBasic: "droneBasic",
        startingPosition: [10, 0, 630]
    },
    {
        eventTime: 25,
        npcAIname: "droneAIrandom5hQFLSC",
        npcBasic: "droneBasic",
        startingPosition: [-10, 0, 605]
    },
    {
        eventTime: 25,
        npcAIname: "droneAIrandom3hQFRSC",
        npcBasic: "droneBasic",
        startingPosition: [10, 0, 580]
    },
    {
        eventTime: 25,
        npcAIname: "droneAIrandom2hQFLSC",
        npcBasic: "droneBasic",
        startingPosition: [-10, 0, 555]
    },
    {
        eventTime: 25,
        npcAIname: "droneAIrandom6hQFRSC",
        npcBasic: "droneBasic",
        startingPosition: [10, 0, 530]
    },
    {
        eventTime: 25,
        npcAIname: "droneAIrandom7hQFLSC",
        npcBasic: "droneBasic",
        startingPosition: [-10, 0, 505]
    },
    {
        eventTime: 25,
        npcAIname: "droneAIrandom1hQFRSC",
        npcBasic: "droneBasic",
        startingPosition: [10, 0, 480]
    },
    {
        eventTime: 25,
        npcAIname: "droneAIrandom4hQFLSC",
        npcBasic: "droneBasic",
        startingPosition: [-10, 0, 455]
    },
    // 2nd Wave
    {
        eventTime: 100,
        npcAIname: "droneAIrandom8hQFRSC",
        npcBasic: "droneBasic",
        startingPosition: [10, 0, 300]
    },
    {
        eventTime: 25,
        npcAIname: "droneAIrandom5hQFLSC",
        npcBasic: "droneBasic",
        startingPosition: [-10, 0, 300]
    },
    {
        eventTime: 25,
        npcAIname: "droneAIrandom3hQFRSC",
        npcBasic: "droneBasic",
        startingPosition: [10, 0, 300]
    },
    {
        eventTime: 25,
        npcAIname: "droneAIrandom2hQFLSC",
        npcBasic: "droneBasic",
        startingPosition: [-10, 0, 300]
    },
    {
        eventTime: 25,
        npcAIname: "droneAIrandom6hQFRSC",
        npcBasic: "droneBasic",
        startingPosition: [10, 0, 300]
    },
    {
        eventTime: 25,
        npcAIname: "droneAIrandom7hQFLSC",
        npcBasic: "droneBasic",
        startingPosition: [-10, 0, 300]
    },
    {
        eventTime: 25,
        npcAIname: "droneAIrandom1hQFRSC",
        npcBasic: "droneBasic",
        startingPosition: [10, 0, 300]
    },
    {
        eventTime: 25,
        npcAIname: "droneAIrandom4hQFLSC",
        npcBasic: "droneBasic",
        startingPosition: [-10, 0, 300]
    },

    // Asteroids
    {
        eventTime: 910,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid1Basic",
        startingPosition: "random"
    },
    {
        eventTime: 13,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2Basic",
        startingPosition: "random"
    },
    {
        eventTime: 13,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid1Basic",
        startingPosition: "random"
    },
    {
        eventTime: 13,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid1Basic",
        startingPosition: "random"
    },
    {
        eventTime: 13,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2Basic",
        startingPosition: "random"
    },
    {
        eventTime: 13,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid1Basic",
        startingPosition: "random"
    },
    {
        eventTime: 13,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2Basic",
        startingPosition: "random"
    },
    {
        eventTime: 13,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid1Basic",
        startingPosition: "random"
    },
    {
        eventTime: 13,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2Basic",
        startingPosition: "random"
    },
    {
        eventTime: 13,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid1Basic",
        startingPosition: "random"
    },
    {
        eventTime: 13,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid1Basic",
        startingPosition: "random"
    },
    {
        eventTime: 13,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2Basic",
        startingPosition: "random"
    },
    {
        eventTime: 13,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2Basic",
        startingPosition: "random"
    },
    {
        eventTime: 13,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid1Basic",
        startingPosition: "random"
    },
    {
        eventTime: 13,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2Basic",
        startingPosition: "random"
    },

    // Destroyers
    {
        eventTime: 10,
        npcAIname: "destroyerAIrandom1HFC",
        npcBasic: "destroyerBasic",
        startingPosition: [30, -10, 700]
    },
    {
        eventTime: 10,
        npcAIname: "destroyerAIrandom2HFC",
        npcBasic: "destroyerBasic",
        startingPosition: [-30, -10, 700]
    },

    // Drones
    {
        eventTime: 50,
        npcAIname: "droneAIrandom1QR",
        npcBasic: "droneBasic",
        startingPosition: [20, 10, 700]
    },
    {
        eventTime: 50,
        npcAIname: "droneAIrandom2QR",
        npcBasic: "droneBasic",
        startingPosition: [-20, 10, 700]
    },
    {
        eventTime: 50,
        npcAIname: "droneAIrandom3QR",
        npcBasic: "droneBasic",
        startingPosition: [20, -10, 700]
    },
    {
        eventTime: 50,
        npcAIname: "droneAIrandom4QR",
        npcBasic: "droneBasic",
        startingPosition: [-20, -10, 700]
    },

    // Cruisers
    {
        eventTime: 70,
        npcAIname: "cruiserAIstatic",
        npcBasic: "cruiserBasic",
        startingPosition: [50, -20, 700]
    },
    {
        eventTime: 10,
        npcAIname: "cruiserAIstatic",
        npcBasic: "cruiserBasic",
        startingPosition: [-50, -20, 700]
    },

    // Drones
    {
        eventTime: 100,
        npcAIname: "droneAIrandom1hQF",
        npcBasic: "droneBasic",
        startingPosition: [40, 20, 700]
    },
    {
        eventTime: 15,
        npcAIname: "droneAIrandom2hQF",
        npcBasic: "droneBasic",
        startingPosition: [40, 7, 700]
    },
    {
        eventTime: 15,
        npcAIname: "droneAIrandom3hQF",
        npcBasic: "droneBasic",
        startingPosition: [-40, 20, 700]
    },
    {
        eventTime: 15,
        npcAIname: "droneAIrandom4hQF",
        npcBasic: "droneBasic",
        startingPosition: [-40, 7, 700]
    },
    {
        eventTime: 15,
        npcAIname: "droneAIrandom1hQR",
        npcBasic: "droneBasic",
        startingPosition: [40, 20, 700]
    },
    {
        eventTime: 15,
        npcAIname: "droneAIrandom2hQR",
        npcBasic: "droneBasic",
        startingPosition: [40, 7, 700]
    },
    {
        eventTime: 15,
        npcAIname: "droneAIrandom3hQR",
        npcBasic: "droneBasic",
        startingPosition: [-40, 20, 700]
    },
    {
        eventTime: 15,
        npcAIname: "droneAIrandom4hQR",
        npcBasic: "droneBasic",
        startingPosition: [-40, 7, 700]
    },

    // Drones
    {
        eventTime: 320,
        npcAIname: "droneAIrandom1hQR",
        npcBasic: "droneBasic",
        startingPosition: [30, 10, 700]
    },
    {
        eventTime: 15,
        npcAIname: "droneAIrandom2hQR",
        npcBasic: "droneBasic",
        startingPosition: [10, 10, 700]
    },
    {
        eventTime: 15,
        npcAIname: "droneAIrandom3hQR",
        npcBasic: "droneBasic",
        startingPosition: [-10, 10, 700]
    },
    {
        eventTime: 15,
        npcAIname: "droneAIrandom4hQR",
        npcBasic: "droneBasic",
        startingPosition: [-30, 10, 700]
    },
    {
        eventTime: 15,
        npcAIname: "droneAIrandom5hQR",
        npcBasic: "droneBasic",
        startingPosition: [30, -10, 700]
    },
    {
        eventTime: 15,
        npcAIname: "droneAIrandom6hQR",
        npcBasic: "droneBasic",
        startingPosition: [10, -10, 700]
    },
    {
        eventTime: 15,
        npcAIname: "droneAIrandom7hQR",
        npcBasic: "droneBasic",
        startingPosition: [-10, -10, 700]
    },
    {
        eventTime: 15,
        npcAIname: "droneAIrandom8hQR",
        npcBasic: "droneBasic",
        startingPosition: [-30, -10, 700]
    },

    // Destroyers
    {
        eventTime: 120,
        npcAIname: "destroyerAIrandom3QFC",
        npcBasic: "destroyerBasic",
        startingPosition: [30, -10, 700]
    },
    {
        eventTime: 10,
        npcAIname: "destroyerAIrandom4QFC",
        npcBasic: "destroyerBasic",
        startingPosition: [-30, -10, 700]
    },

    // Fighters
    {
        eventTime: 150,
        npcAIname: "fighterAIrandom1QR",
        npcBasic: "fighterBasic",
        startingPosition: [30, 15, 700]
    },
    {
        eventTime: 10,
        npcAIname: "fighterAIrandom2QR",
        npcBasic: "fighterBasic",
        startingPosition: [-30, 15, 700]
    },
    // {
    //     eventTime: 100,
    //     npcAIname: "fighterAIrandom3QR",
    //     npcBasic: "fighterBasic",
    //     startingPosition: [30, -10, 700]
    // },
    // {
    //     eventTime: 100,
    //     npcAIname: "fighterAIrandom4QR",
    //     npcBasic: "fighterBasic",
    //     startingPosition: [-30, -10, 700]
    // },

    // Cruiser Carrier
    {
        eventTime: 10, // First Drone after 100, position 650. -50 position every 50 frame.
        npcAIname: "cruiserAIstaticCarrier",
        npcBasic: "carrierBasic",
        startingPosition: [-105, 0, 700]
    },
    {
        eventTime: 10,
        npcAIname: "destroyerAIrandom2HR",
        npcBasic: "destroyerBasic",
        startingPosition: [-10, 15, 700]
    },
    {
        eventTime: 90,
        npcAIname: "droneAIrandom8hQFRS",
        npcBasic: "droneBasic",
        startingPosition: [-105, -5, 650]
    },
    {
        eventTime: 10,
        npcAIname: "fighterAIrandom1HR",
        npcBasic: "fighterBasic",
        startingPosition: [5, 5, 700]
    },
    {
        eventTime: 40,
        npcAIname: "droneAIrandom3hQFRS",
        npcBasic: "droneBasic",
        startingPosition: [-105, -5, 600]
    },
    {
        eventTime: 50,
        npcAIname: "droneAIrandom6hQFRS",
        npcBasic: "droneBasic",
        startingPosition: [-105, -5, 550]
    },
    {
        eventTime: 50,
        npcAIname: "droneAIrandom1hQFRS",
        npcBasic: "droneBasic",
        startingPosition: [-105, -5, 500]
    },
    {
        eventTime: 10,
        npcAIname: "fighterAIrandom2Q",
        npcBasic: "fighterBasic",
        startingPosition: [-30, 15, 700]
    },
    {
        eventTime: 10,
        npcAIname: "fighterAIrandom4Q",
        npcBasic: "fighterBasic",
        startingPosition: [-30, -15, 700]
    },
    {
        eventTime: 30,
        npcAIname: "droneAIrandom4hQFRS",
        npcBasic: "droneBasic",
        startingPosition: [-105, -5, 450]
    },
    {
        eventTime: 50,
        npcAIname: "droneAIrandom7hQFRS",
        npcBasic: "droneBasic",
        startingPosition: [-105, -5, 400]
    },
    {
        eventTime: 50,
        npcAIname: "droneAIrandom2hQFRS",
        npcBasic: "droneBasic",
        startingPosition: [-105, -5, 350]
    },
    {
        eventTime: 50,
        npcAIname: "droneAIrandom5hQFRS",
        npcBasic: "droneBasic",
        startingPosition: [-105, -5, 300]
    },

    // Cruiser Carrier
    {
        eventTime: 10, // First Drone after 100, position 650. -50 position every 50 frame.
        npcAIname: "cruiserAIstaticCarrier",
        npcBasic: "carrierBasic",
        startingPosition: [105, 0, 700]
    },
    {
        eventTime: 10,
        npcAIname: "destroyerAIrandom2HR",
        npcBasic: "destroyerBasic",
        startingPosition: [-10, 15, 700]
    },
    {
        eventTime: 90,
        npcAIname: "droneAIrandom8hQFLS",
        npcBasic: "droneBasic",
        startingPosition: [105, -5, 650]
    },
    {
        eventTime: 10,
        npcAIname: "fighterAIrandom1HR",
        npcBasic: "fighterBasic",
        startingPosition: [5, 5, 700]
    },
    {
        eventTime: 40,
        npcAIname: "droneAIrandom3hQFLS",
        npcBasic: "droneBasic",
        startingPosition: [105, -5, 600]
    },
    {
        eventTime: 50,
        npcAIname: "droneAIrandom6hQFLS",
        npcBasic: "droneBasic",
        startingPosition: [105, -5, 550]
    },
    {
        eventTime: 50,
        npcAIname: "droneAIrandom1hQFLS",
        npcBasic: "droneBasic",
        startingPosition: [105, -5, 500]
    },
    {
        eventTime: 10,
        npcAIname: "fighterAIrandom2Q",
        npcBasic: "fighterBasic",
        startingPosition: [-30, 15, 700]
    },
    {
        eventTime: 10,
        npcAIname: "fighterAIrandom4Q",
        npcBasic: "fighterBasic",
        startingPosition: [-30, -15, 700]
    },
    {
        eventTime: 30,
        npcAIname: "droneAIrandom4hQFLS",
        npcBasic: "droneBasic",
        startingPosition: [105, -5, 450]
    },
    {
        eventTime: 50,
        npcAIname: "droneAIrandom7hQFLS",
        npcBasic: "droneBasic",
        startingPosition: [105, -5, 400]
    },
    {
        eventTime: 50,
        npcAIname: "droneAIrandom2hQFLS",
        npcBasic: "droneBasic",
        startingPosition: [105, -5, 350]
    },
    {
        eventTime: 50,
        npcAIname: "droneAIrandom5hQFLS",
        npcBasic: "droneBasic",
        startingPosition: [105, -5, 300]
    },

    // Bombers
    {
        eventTime: 150,
        npcAIname: "bomberAIstatic",
        npcBasic: "bomberBasic",
        startingPosition: [35, 15, 700]
    },
    {
        eventTime: 30,
        npcAIname: "bomberAIstatic",
        npcBasic: "bomberBasic",
        startingPosition: [-35, 15, 700]
    },
    {
        eventTime: 30,
        npcAIname: "bomberAIstatic",
        npcBasic: "bomberBasic",
        startingPosition: [35, -15, 700]
    },
    {
        eventTime: 30,
        npcAIname: "bomberAIstatic",
        npcBasic: "bomberBasic",
        startingPosition: [-35, -15, 700]
    },

    // Drones
    {
        eventTime: 200,
        npcAIname: "droneAIrandom1hQ",
        npcBasic: "droneBasic",
        startingPosition: [20, 10, 700]
    },
    {
        eventTime: 30,
        npcAIname: "droneAIrandom2hQ",
        npcBasic: "droneBasic",
        startingPosition: [40, 10, 700]
    },
    {
        eventTime: 30,
        npcAIname: "droneAIrandom3hQ",
        npcBasic: "droneBasic",
        startingPosition: [-20, 10, 700]
    },
    {
        eventTime: 30,
        npcAIname: "droneAIrandom4hQ",
        npcBasic: "droneBasic",
        startingPosition: [-40, 10, 700]
    },
    {
        eventTime: 30,
        npcAIname: "droneAIrandom5hQ",
        npcBasic: "droneBasic",
        startingPosition: [20, -10, 700]
    },
    {
        eventTime: 30,
        npcAIname: "droneAIrandom6hQ",
        npcBasic: "droneBasic",
        startingPosition: [40, -10, 700]
    },
    {
        eventTime: 30,
        npcAIname: "droneAIrandom7hQ",
        npcBasic: "droneBasic",
        startingPosition: [-20, -10, 700]
    },
    {
        eventTime: 30,
        npcAIname: "droneAIrandom8hQ",
        npcBasic: "droneBasic",
        startingPosition: [-40, -10, 700]
    },

    // Fighters & Destroyer
    {
        eventTime: 60,
        npcAIname: "fighterAIrandom1H",
        npcBasic: "fighterBasic",
        startingPosition: [30, 0, 700]
    },
    {
        eventTime: 30,
        npcAIname: "destroyerAIrandom2H",
        npcBasic: "destroyerBasic",
        startingPosition: [-30, 0, 700]
    },
    {
        eventTime: 100,
        npcAIname: "fighterAIrandom1H",
        npcBasic: "fighterBasic",
        startingPosition: [30, 0, 700]
    },

    // Bombers
    {
        eventTime: 30,
        npcAIname: "bomberAIstatic",
        npcBasic: "bomberBasic",
        startingPosition: [35, 15, 700]
    },
    {
        eventTime: 15,
        npcAIname: "bomberAIstatic",
        npcBasic: "bomberBasic",
        startingPosition: [-35, 15, 700]
    },

    // Destroyers
    {
        eventTime: 200,
        npcAIname: "destroyerAIrandom1HFC",
        npcBasic: "destroyerBasic",
        startingPosition: [20, 5, 700]
    },
    {
        eventTime: 10,
        npcAIname: "destroyerAIrandom2HFC",
        npcBasic: "destroyerBasic",
        startingPosition: [-20, 5, 700]
    },
    
    // Fighters
    {
        eventTime: 100,
        npcAIname: "fighterAIrandom1QRC",
        npcBasic: "fighterBasic",
        startingPosition: [30, 15, 700]
    },
    {
        eventTime: 30,
        npcAIname: "fighterAIrandom2QRC",
        npcBasic: "fighterBasic",
        startingPosition: [-30, 15, 700]
    },
    {
        eventTime: 30,
        npcAIname: "fighterAIrandom3QRC",
        npcBasic: "fighterBasic",
        startingPosition: [30, -10, 700]
    },
    {
        eventTime: 30,
        npcAIname: "fighterAIrandom4QRC",
        npcBasic: "fighterBasic",
        startingPosition: [-30, -10, 700]
    },

    // Asteroids
    {
        eventTime: 300,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid1FastBasic",
        startingPosition: "random"
    },
    {
        eventTime: 10,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2FastBasic",
        startingPosition: "random"

    },
    {
        eventTime: 10,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid1FastBasic",
        startingPosition: "random"
    },
    {
        eventTime: 10,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid1FastBasic",
        startingPosition: "random"
    },
    {
        eventTime: 10,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2FastBasic",
        startingPosition: "random"

    },
    {
        eventTime: 10,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid1FastBasic",
        startingPosition: "random"

    },
    {
        eventTime: 10,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2FastBasic",
        startingPosition: "random"

    },
    {
        eventTime: 10,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid1FastBasic",
        startingPosition: "random"
    },
    {
        eventTime: 10,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2FastBasic",
        startingPosition: "random"
    },
    {
        eventTime: 10,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid1FastBasic",
        startingPosition: "random"
    },
    {
        eventTime: 10,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid1FastBasic",
        startingPosition: "random"

    },
    {
        eventTime: 10,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2FastBasic",
        startingPosition: "random"

    },
    {
        eventTime: 10,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2FastBasic",
        startingPosition: "random"
    },
    {
        eventTime: 10,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid1FastBasic",
        startingPosition: "random"
    },
    {
        eventTime: 10,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2FastBasic",
        startingPosition: "random"
    },
    {
        eventTime: 10,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid1FastBasic",
        startingPosition: [3, 15, 700]

    },
    {
        eventTime: 10,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2FastBasic",
        startingPosition: "random"

    },
    {
        eventTime: 10,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2FastBasic",
        startingPosition: "random"
    },
    {
        eventTime: 5,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid1FastBasic",
        startingPosition: [-13, 15, 700]
    },
    {
        eventTime: 5,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid1FastBasic",
        startingPosition: [16, 2, 700]

    },
    {
        eventTime: 5,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2FastBasic",
        startingPosition: [-17, 9, 700]

    },
    {
        eventTime: 5,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2FastBasic",
        startingPosition: [9, 12, 700]
    },
    {
        eventTime: 5,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid1FastBasic",
        startingPosition: [-2, 5, 700]

    },

    // Boss
    {
        eventTime: 10,
        npcAIname: "bossAI",
        npcBasic: "bossBasic",
        startingPosition: [0, 0, 700]
    },

    // Drones
    {
        eventTime: 100,
        npcAIname: "droneAIrandom1hQF",
        npcBasic: "droneBasic",
        startingPosition: [40, 20, 700]
    },
    {
        eventTime: 30,
        npcAIname: "droneAIrandom2hQF",
        npcBasic: "droneBasic",
        startingPosition: [40, 7, 700]
    },
    {
        eventTime: 30,
        npcAIname: "droneAIrandom3hQF",
        npcBasic: "droneBasic",
        startingPosition: [-40, 20, 700]
    },
    {
        eventTime: 30,
        npcAIname: "droneAIrandom4hQF",
        npcBasic: "droneBasic",
        startingPosition: [-40, 7, 700]
    },
    {
        eventTime: 30,
        npcAIname: "droneAIrandom5hQF",
        npcBasic: "droneBasic",
        startingPosition: [40, -20, 700]
    },
    {
        eventTime: 30,
        npcAIname: "droneAIrandom6hQF",
        npcBasic: "droneBasic",
        startingPosition: [40, -7, 700]
    },
    {
        eventTime: 15,
        npcAIname: "droneAIrandom7hQF",
        npcBasic: "droneBasic",
        startingPosition: [-40, -20, 700]
    },
    {
        eventTime: 30,
        npcAIname: "droneAIrandom8hQF",
        npcBasic: "droneBasic",
        startingPosition: [-40, -7, 700]
    },

    // Fighters & Destroyers
    {
        eventTime: 100,
        npcAIname: "fighterAIrandom1HF",
        npcBasic: "fighterBasic",
        startingPosition: [35, 10, 700]
    },
    {
        eventTime: 100,
        npcAIname: "destroyerAIrandom3QF",
        npcBasic: "destroyerBasic",
        startingPosition: [35, -10, 700]
    },
    {
        eventTime: 100,
        npcAIname: "fighterAIrandom2QF",
        npcBasic: "fighterBasic",
        startingPosition: [-35, 10, 700]
    },

    {
        eventTime: 100,
        npcAIname: "destroyerAIrandom4QF",
        npcBasic: "destroyerBasic",
        startingPosition: [-35, -10, 700]
    },

    // Drones
    {
        eventTime: 370,
        npcAIname: "droneAIrandom1hQF",
        npcBasic: "droneBasic",
        startingPosition: [40, 20, 700]
    },
    {
        eventTime: 15,
        npcAIname: "droneAIrandom2hQF",
        npcBasic: "droneBasic",
        startingPosition: [40, 7, 700]
    },
    {
        eventTime: 15,
        npcAIname: "droneAIrandom3hQF",
        npcBasic: "droneBasic",
        startingPosition: [-40, 20, 700]
    },
    {
        eventTime: 15,
        npcAIname: "droneAIrandom4hQF",
        npcBasic: "droneBasic",
        startingPosition: [-40, 7, 700]
    },
    {
        eventTime: 15,
        npcAIname: "droneAIrandom5hQF",
        npcBasic: "droneBasic",
        startingPosition: [40, -20, 700]
    },
    {
        eventTime: 15,
        npcAIname: "droneAIrandom6hQF",
        npcBasic: "droneBasic",
        startingPosition: [40, -7, 700]
    },
    {
        eventTime: 15,
        npcAIname: "droneAIrandom7hQF",
        npcBasic: "droneBasic",
        startingPosition: [-40, -20, 700]
    },
    {
        eventTime: 15,
        npcAIname: "droneAIrandom8hQF",
        npcBasic: "droneBasic",
        startingPosition: [-40, -7, 700]
    },

    // Fighters & Destroyers
    {
        eventTime: 100,
        npcAIname: "destroyerAIrandom1HFC",
        npcBasic: "destroyerBasic",
        startingPosition: [35, 10, 700]
    },
    {
        eventTime: 100,
        npcAIname: "destroyerAIrandom2HFC",
        npcBasic: "destroyerBasic",
        startingPosition: [-35, 10, 700]
    },
    {
        eventTime: 100,
        npcAIname: "fighterAIrandom3QRC",
        npcBasic: "fighterBasic",
        startingPosition: [35, -10, 700]
    },
    {
        eventTime: 100,
        npcAIname: "fighterAIrandom4QRC",
        npcBasic: "fighterBasic",
        startingPosition: [-35, -10, 700]
    },
];

export default levelData;