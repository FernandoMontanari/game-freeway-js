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

function playerMovement() {
    if (upPressed) {
        player1YPosition -= 3;
    } 
    
    if (downPressed) {
        player1YPosition += 3;
    }
}