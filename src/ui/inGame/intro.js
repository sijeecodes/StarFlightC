export default function intro(scene, camera, pcShip) {
    let cp = camera.position;

    cp.y -= (cp.y - 10) * 0.15;
    cp.z = -4 + (Math.cos(Math.PI * scene.timeStamp * 0.021)) * 196;

    cp.z > 0 ?
        cp.x += (Math.cos(Math.PI * scene.timeStamp * 0.02)) * 9
        : cp.x += (Math.cos(Math.PI * scene.timeStamp * 0.022)) * 12;

    Math.abs(pcShip.position.y) < 0.01 ?
        pcShip.position.y = 0
        : pcShip.position.y = pcShip.position.y * 0.85;

    camera.lookAt(0, 0, 0);

    if (camera.position.x < 0.02 && camera.position.y < 10.2 && camera.position.z < -199.8) {
        scene.timeStamp = 0;
        scene.gameState = "startingGame";
    }
    scene.timeStamp++;
}