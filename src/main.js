import * as THREE from "three";
import { createStarGeo, createStarMaterial } from "./environment/createStars";
import { createPCShip } from "./pc/createPCObjects";
import { initKeyState } from "./ui/util/setKeyStates";
import { initiateGame } from "./initiateGame";
import createLights from "./environment/createLights";
import updateStars from "./environment/updateStars";
import setWindow from "./ui/util/setWindow";
import changeShip from "./ui/titleMenu/changeShip";
import instructions from "./ui/titleMenu/instructions";
import settings from "./ui/titleMenu/settings";
import titleScreen from "./ui/titleMenu/titleScreen";
import gameOver from "./ui/inGame/gameOver";
import intro from "./ui/inGame/intro";
import missionComplete from "./ui/inGame/missionComplete";
import pause from "./ui/inGame/pause";
import startingGame from "./ui/inGame/startingGame";
import updatePCIdle from "./pc/pcObjects/updatePCIdle";
import gameLogic from "./gameLogic";

const renderer = new THREE.WebGLRenderer({ antialias: true });
const camera = new THREE.PerspectiveCamera(15, window.innerWidth / window.innerHeight, 1, 3000);
const starGeo = createStarGeo();
let pcObjects = { pcShip: createPCShip(), pcBlasters: [] };
let npcObjects = { npcs: [], npcBlasters: [] };
let explosionObjects = { sprites: [], materials: [], velocities: [], lifetimes: [], rotations: [] };
let keyStates = initKeyState();
let stopMusic;
let scene = new THREE.Scene();
scene.shipNumber = 0;
scene.add(new THREE.Points(starGeo, createStarMaterial()));
scene.backgroundObjs = [];
createLights(scene);
initiateGame(scene, pcObjects, npcObjects, explosionObjects, camera);

renderer.setPixelRatio(window.devicePixelRatio);
setWindow(window, document, keyStates, camera, renderer);
document.getElementById("canvas").appendChild(renderer.domElement);

setInterval(animate, 1000 / 30);
function animate() {
    updateStars(scene, starGeo);
    if (scene.gameState == "missionComplete") missionComplete(scene, document, keyStates);
    if (scene.gameState == "playing" || scene.gameState == "missionComplete") {
        gameLogic(scene, npcObjects, pcObjects, explosionObjects, document, camera, keyStates);
        renderer.render(scene, camera);
        return;
    } 
    if (scene.gameState == "intro")        intro(scene, camera, pcObjects.pcShip);
    if (scene.gameState == "startingGame") stopMusic = startingGame(scene, camera, document, pcObjects.pcShip);
    if (scene.gameState == "titleScreen")  titleScreen(scene, document, keyStates);
    if (scene.gameState == "changeShip")   changeShip(scene, document, keyStates, pcObjects);
    if (scene.gameState == "settings")     settings(scene, document, keyStates);
    if (scene.gameState == "instructions") instructions(scene, document, keyStates);
    if (scene.gameState == "instructions") instructions(scene, document, keyStates);
    if (scene.gameState == "instructions") instructions(scene, document, keyStates);
    if (scene.gameState == "gameOver")     gameOver(scene, document, keyStates);
    if (scene.gameState == "pause")      { pause(scene, document, keyStates); return; }
    if (scene.gameState == "initiateGame") {
        initiateGame(scene, pcObjects, npcObjects, explosionObjects, camera);
        resetObjects();
        stopMusic();
    }
    if (scene.gameState !== "intro") updatePCIdle(scene, pcObjects.pcShip);

    renderer.render(scene, camera);
}

function resetObjects() {
    pcObjects.pcBlasters = [];
    npcObjects = { npcs: [], npcBlasters: [] };
    explosionObjects = { sprites: [], materials: [], velocities: [], lifetimes: [], rotations: [] };
}