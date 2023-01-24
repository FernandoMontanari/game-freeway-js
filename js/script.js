let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

// CANVAS SETTINGS
canvas.width = 500;
canvas.height = 400;
const refreshPageVelocity = 10;

function screenUpdate() {
    drawBackground();
    drawPlayer();
    drawCars();
    playerMovement();
    carMovement();
    carPositionLoop();
}

setInterval(screenUpdate, refreshPageVelocity);