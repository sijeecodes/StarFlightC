function speedDecelerateX(speedX: number, decelX: number): number {
    if (speedX != 0) speedX = speedX * decelX;
    if (Math.abs(speedX) < 0.001) speedX = 0;
    return speedX;
}

function speedDecelerateY(speedY: number, decelY: number): number {
    if (speedY != 0) speedY = speedY * decelY;
    if (Math.abs(speedY) < 0.001) speedY = 0;
    return speedY;
}

export { speedDecelerateX, speedDecelerateY };