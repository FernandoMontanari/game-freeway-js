let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

// CANVAS SETTINGS
canvas.width = 500;
canvas.height = 400;
const refreshPageVelocity = 10;

function endGame() {
    if (player.life < 0){
        player.life = 3;
        playerPoints = 0;
        increaseStack = 0;
        decreaseStack = 0;
        VelocityCars = [2, 2.5, 3.2, 5, 3.3, 2.3];
    }
}

function screenUpdate() {

    drawBackground();
    drawPlayer();
    drawCars();
    playerMovement();
    carMovement();
    carPositionLoop();
    checkCollision();
    drawPoints();
    score();
    drawPlayerLife();
    endGame();
    playSoundBg();
}

setInterval(screenUpdate, refreshPageVelocity);