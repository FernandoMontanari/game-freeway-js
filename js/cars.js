// CARS POSITION
let xCars = [600, 600, 600];
let yCars = [40, 96, 150];
let VelocityCars = [2, 2.5, 3.2];

// CAR MOVEMENT
function carMovement() {
    xCars[0] -= VelocityCars[0];
    xCars[1] -= VelocityCars[1];
    xCars[2] -= VelocityCars[2];
}

// DRAW CARS
function drawCars() {
    drawImages(carImage1, xCars[0], yCars[0], 50, 40);
    drawImages(carImage2, xCars[1], yCars[1], 50, 40);
    drawImages(carImage3, xCars[2], yCars[2], 50, 40);
}

// CARS RETURN TO INITIAL POSITION AFTER GO OUT OF CANVAS
function carPositionLoop() {
    if (xCars[0] < -50){
        xCars[0] = 600;
    }

    if (xCars[1] < -50){
        xCars[1] = 600;
    }

    if (xCars[2] < -50){
        xCars[2] = 600;
    }
}