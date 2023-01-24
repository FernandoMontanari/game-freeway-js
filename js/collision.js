
// FUNCTION TO CHECK COLLISION WITH ALL CARS
function checkCollision() {
    for ( let i = 0; i < carsImages.length; i++) {
        if ( xPlayer < xCars[i] + (wCars - 25) && 
        xPlayer + (wPlayer - 20) > xCars[i] &&
        yPlayer < yCars[i] + (hCars - 5) &&
        (hPlayer - 5) + yPlayer > yCars[i]){
            resetPlayerPosition();
            losePoints();
            loseLife();
        }
    }
}

// PLAYER RETRUNS TO INITIAL POINT
function resetPlayerPosition() {
    yPlayer = 366;
}