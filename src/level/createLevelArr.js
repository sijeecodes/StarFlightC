import levelData from "./levelData";

export default function createLevelArr(scene) {
    scene.levelArr = levelData.map(e => e);
}