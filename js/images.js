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


// DRAW IMAGES
function drawImages(image, x, y, w, h ) {
    ctx.drawImage(image, x, y, w, h);
}

// DRAW BACKGROUND
function drawBackground() {
    drawImages(backgroundImage, 0, 0, 500, 400);
}