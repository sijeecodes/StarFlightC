import { speedDecelerateX } from "./updatePCShipSpeed";

export default function updatePCShipLR(pcShip, keyStates, maxWidth, diagonal) {
    let accelX = pcShip.speedAccel[0];
    let decelX = pcShip.speedDecel[0];
    let maxX = pcShip.maxSpeed[0];
    let speedX = pcShip.speed[0];

    if (keyStates.right && keyStates.left) {
        speedX = speedDecelerateX(speedX, decelX);
    } else {
        let pos = pcShip.position;

        //adjust stats when moving diagonal
        if ((keyStates.up && !keyStates.down) || (!keyStates.up && keyStates.down)) {
            maxX = maxX * 0.86;
            accelX = accelX * 0.86;
            decelX = 1 - ((1 - decelX) * 0.86);

            diagonal = true;
        }

        if (keyStates.right && pos.x > -maxWidth) {
            if (diagonal) {
                //if moving left, decel
                if (speedX > 0) speedX = speedX * decelX;

                //if moving faster than max speed, decel. if not, accel
                if (speedX < -maxX) {
                    speedX = speedX * decelX;
                    //if got slower than max speed, set to max
                    if (speedX > -maxX) speedX = -maxX;
                }
                else {
                    speedX -= accelX;
                    //if accelerated above max speed, set to max
                    if (speedX < -maxX) speedX = -maxX;
                }
            }
            else {
                if (speedX > 0) speedX = speedX * decelX;

                speedX -= accelX;
                if (speedX < -maxX) speedX = -maxX;
            }
        }
        else speedX = speedDecelerateX(speedX, decelX);

        if (keyStates.left && pos.x < maxWidth) {
            if (diagonal) {
                if (speedX < 0) speedX = speedX * decelX;

                if (speedX > maxX) {
                    speedX = speedX * decelX;
                    if (speedX < maxX) speedX = maxX;
                }
                else {
                    speedX += accelX;
                    if (speedX > maxX) speedX = maxX;
                }
            }
            else {
                if (speedX < 0) speedX = speedX * decelX;

                speedX += accelX;
                if (speedX > maxX) speedX = maxX;
            }
        }
        else speedX = speedDecelerateX(speedX, decelX);
    }

    pcShip.speed[0] = speedX;
    return diagonal;
}