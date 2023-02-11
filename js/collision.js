
// FUNCTION TO CHECK COLLISION WITH ALL CARS
function checkCollision() {
    for ( let i = 0; i < carsImages.length; i++) {
        if ( player.x < xCars[i] + (wCars - 25) && 
        player.x + (player.w - 20) > xCars[i] &&
        player.y < yCars[i] + (hCars - 5) &&
        (player.h - 5) + player.y > yCars[i]){
            playSoundColision();
            resetPlayerPosition();
            losePoints();
            loseLife();
        }
    }
}

// PLAYER RETRUNS TO INITIAL POINT
function resetPlayerPosition() {
    player.y = 366;
}