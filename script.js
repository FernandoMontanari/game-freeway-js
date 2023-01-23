let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

// CANVAS SETTINGS
canvas.width = 500;
canvas.height = 400;
const refreshPageVelocity = 10;

//
let player1YPosition = 366;
let car1XPosition = 600;

// LOAD IMAGES

const backgroundImage = new Image();
backgroundImage.src = 'images/estrada.png';
// PLAYER IMG
const playerImage = new Image();
playerImage.src = 'images/ator-1.png';
// CAR 1 IMG
const carImage1 = new Image();
carImage1.src = 'images/carro-1.png';
// CAR 2 IMG
const carImage2 = new Image();
carImage2.src = 'images/carro-2.png';
// CAR 3 IMG
const carImage3 = new Image();
carImage3.src = 'images/carro-3.png';

// KEYBOARD SETTINGS
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
let upPressed = false;
let downPressed = false;

function keyDownHandler(event) {
    if (event.key === "Up" || event.key === "ArrowUp") {
        upPressed = true;
    } else if (event.key === "Down" || event.key === "ArrowDown") {
        downPressed = true;
    }

    /*if (multiplayer && event.key === "w") {
        upPressedP2 = true
    } else if (multiplayer || event.key === "s") {
        downPressedP2 = true;
    }*/
}

function keyUpHandler(event) {
    if (event.key === "Up" || event.key === "ArrowUp") {
        upPressed = false;
    } else if (event.key === "Down" || event.key === "ArrowDown") {
        downPressed = false;
    }

    /*if (multiplayer && event.key === "w") {
        upPressedP2 = false
    } else if (multiplayer || event.key === "s") {
        downPressedP2 = false;
    }*/
}

function drawImages(image, x, y, w, h ) {
    ctx.drawImage(image, x, y, w, h);
}

function playerMovement() {
    if (upPressed) {
        player1YPosition -= 3;
    } 
    
    if (downPressed) {
        player1YPosition += 3;
    }
}

function carMoviment() {
    car1XPosition -= 2;
    if (car1XPosition < -50){
        car1XPosition = 600;
    }
}

function screenUpdate() {
    drawImages(backgroundImage, 0, 0, 500, 400);
    drawImages(playerImage, 100, player1YPosition, 30, 30);
    drawImages(carImage1, car1XPosition, 40, 50, 40);
    drawImages(carImage2, 320, 150, 50, 40);
    drawImages(carImage3, 220, 263, 50, 40);
    playerMovement();
    carMoviment();
}

setInterval(screenUpdate, refreshPageVelocity);