export default function updatePCIdle(scene, pcShip) {
    scene.timeStamp++;
    pcShip.position.y = Math.sin(scene.timeStamp / 25);
}