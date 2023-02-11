// KEYBOARD SETTINGS
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;

function keyDownHandler(event) {
    if (event.key === "Up" || event.key === "ArrowUp") {
        upPressed = true;
    } else if (event.key === "Down" || event.key === "ArrowDown") {
        downPressed = true;
    }

    if (event.key === "Left" || event.key === "ArrowLeft") {
        leftPressed = true;
    } else if (event.key === "Right" || event.key === "ArrowRight") {
        rightPressed = true;
    }
}

function keyUpHandler(event) {
    if (event.key === "Up" || event.key === "ArrowUp") {
        upPressed = false;
    } else if (event.key === "Down" || event.key === "ArrowDown") {
        downPressed = false;
    }

    if (event.key === "Left" || event.key === "ArrowLeft") {
        leftPressed = false;
    } else if (event.key === "Right" || event.key === "ArrowRight") {
        rightPressed = false;
    }
}

function playerMovement() {
    if (upPressed) {
        player.y -= 3;
    } 
    
    if (downPressed) {
        if (player.y < 370) {
            player.y += 3;
        }
    }

    if (leftPressed) {
        if (player.x > 0) {
            player.x -= 3;
        }
    } 
    
    if (rightPressed) {
        if (player.x < 470) {
            player.x += 3;
        }
    }
}