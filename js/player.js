// PLAYER SETTINGS

let player = {
    y: 366,
    x: 100,
    w: 30,
    h: 30,
    life: 3
}

/*let yPlayer = 366;
let xPlayer = 100;
let wPlayer = 30;
let hPlayer = 30;
let playerLife = 3;
*/
function drawPlayer() {
    drawImages(playerImage, player.x, player.y, player.w, player.h);
}

// DRAW PLAYER LIFE
function drawPlayerLife() {
    ctx.fillStyle = "yellow";
    ctx.textAlign = "center";
    ctx.font = "25px Arial";
    ctx.fillText("lifes: " + player.life, 445, 27);
}

function loseLife() {
    player.life -= 1;
}