// PLAYER SETTINGS
let yPlayer = 366;
let xPlayer = 100;
let wPlayer = 30;
let hPlayer = 30;
let playerLife = 3;

function drawPlayer() {
    drawImages(playerImage, xPlayer, yPlayer, wPlayer, hPlayer);
}

// DRAW PLAYER LIFE
function drawPlayerLife() {
    ctx.fillStyle = "yellow";
    ctx.textAlign = "center";
    ctx.font = "25px Arial";
    ctx.fillText("lifes: " + playerLife, 445, 27);
}

function loseLife() {
    playerLife -= 1;
}