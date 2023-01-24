// CARS POSITION
let xCars = [600, 600, 600];
let yCars = [40, 96, 150];
let VelocityCars = [2, 2.5, 3.2];

// CAR MOVEMENT
function carMovement() {
    for (let i = 0; i < carsImages.length; i++) {
        xCars[i] -= VelocityCars[i];
    }
}

// DRAW CARS
function drawCars() {
    for (let i = 0; i < carsImages.length; i++) {
        drawImages(carsImages[i], xCars[i], yCars[i], 50, 40);
    }
}

// CARS RETURN TO INITIAL POSITION AFTER GO OUT OF CANVAS
function carPositionLoop() {
    for ( let i = 0; i < carsImages.length; i++) {
        if (xCars[i] < -50){
            xCars[i] = 600;
        }
    }
}