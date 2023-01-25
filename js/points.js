let playerPoints = 0;

// DRAW POINTS
function drawPoints() {
    ctx.fillStyle = "yellow";
    ctx.textAlign = "center";
    ctx.font = "25px Arial";
    ctx.fillText("score: " + playerPoints, 60, 27);
}

function score() {
    if ( yPlayer < 15) {
        playerPoints++;
        playSoundScore();
        resetPlayerPosition();
        increaseVelocity();
    }
}

function losePoints() {
    if (playerPoints > 0){
        playerPoints--;
    }
    decreaseVelocity();
}