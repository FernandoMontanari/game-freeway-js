// CARS POSITION
let xCars = [600, 600, 600, 600, 600, 600];
let yCars = [40, 96, 150, 210, 270, 318];
let VelocityCars = [2, 2.5, 3.2, 5, 3.3, 2.3];
let wCars = 50;
let hCars = 40;
const increaseLimit = 10;
let increaseStack = 0;
const decreaseLimit = 3;
let decreaseStack = 0;

// CAR MOVEMENT
function carMovement() {
    for (let i = 0; i < carsImages.length; i++) {
        xCars[i] -= VelocityCars[i];
    }
}

// DRAW CARS
function drawCars() {
    for (let i = 0; i < carsImages.length; i++) {
        drawImages(carsImages[i], xCars[i], yCars[i], wCars, hCars);
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

// CARS INCREASE OR DECREASE VELOCITY
function increaseVelocity() {
    if (increaseStack < increaseLimit){
        for (let i = 0; i < carsImages.length; i++) {
            VelocityCars[i] += 0.5;
        }
        increaseStack++;
    }   
}

function decreaseVelocity() {
    if (decreaseStack < decreaseLimit){
        for (let i = 0; i < carsImages.length; i++) {
            VelocityCars[i] -= 0.5;
        }
        decreaseStack++;
    }  
}

function restoreCarsVelocity() {
    VelocityCars = [2, 2.5, 3.2, 5, 3.3, 2.3];
}