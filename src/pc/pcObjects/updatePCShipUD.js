import { speedDecelerateY } from "./updatePCShipSpeed";

export default function updatePCShipUD(pcShip, keyStates, maxHeight, diagonal) {
    let accelY = pcShip.speedAccel[1];
    let decelY = pcShip.speedDecel[1];
    let maxY = pcShip.maxSpeed[1];
    let speedY = pcShip.speed[1];

    if (keyStates.up && keyStates.down) {
        speedY = speedDecelerateY(speedY, decelY);
    } else {
        let pos = pcShip.position;

        //adjust stats when moving diagonal
        if (diagonal) {
            maxY = maxY * 0.86;
            accelY = accelY * 0.86;
            decelY = 1 - ((1 - decelY) * 0.86);
        }

        //if moving down(up key means moving down)
        if (keyStates.up && pos.y > -maxHeight) {
            if (diagonal) {
                //if moving up, decel
                if (speedY > 0) speedY = speedY * decelY;

                //if moving faster than max speed, decel. if not, accel
                if (speedY < -maxY) {
                    speedY = speedY * decelY;
                    //if got slower than max speed, set to max
                    if (speedY > -maxY) speedY = -maxY;
                }
                else {
                    speedY -= accelY;
                    //if accelerated above max speed, set to max
                    if (speedY < -maxY) speedY = -maxY;
                }
            }
            else {
                if (speedY > 0) speedY = speedY * decelY;

                speedY -= accelY;
                if (speedY < -maxY) speedY = -maxY;
            }
        }
        else speedY = speedDecelerateY(speedY, decelY);

        //move up
        if (keyStates.down && pos.y < maxHeight) {
            if (diagonal) {
                if (speedY < 0) speedY = speedY * decelY;

                if (speedY > maxY) {
                    speedY = speedY * decelY;
                    if (speedY < maxY) speedY = maxY;
                }
                else {
                    speedY += accelY;
                    if (speedY > maxY) speedY = maxY;
                }
            }
            else {
                if (speedY < 0) speedY = speedY * decelY;

                speedY += accelY;
                if (speedY > maxY) speedY = maxY;
            }
        }
        else speedY = speedDecelerateY(speedY, decelY);
    }

    pcShip.speed[1] = speedY;
    return diagonal;
}