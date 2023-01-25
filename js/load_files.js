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

let carsImages = [carImage1, carImage2, carImage3, carImage1, carImage2, carImage3];

// LOAD AUDIOS

// BACKGROUND SONG
const audioBgTrack = new Audio();
audioBgTrack.setAttribute("autoplay", "autoplay");
audioBgTrack.src = 'audio/trilha.mp3'
audioBgTrack.volume = 0.1;

// AUDIO WHEN PLAYER SCORE
const audioScore = new Audio();
audioScore.src = 'audio/pontos.wav'
audioScore.volume = 0.2;

// AUDIO WHEN PLAYER COLLIDE WITH CARS
const audioCollision = new Audio();
audioCollision.src = 'audio/colidiu.mp3'
audioCollision.volume = 0.2;

// DRAW IMAGES
function drawImages(image, x, y, w, h ) {
    ctx.drawImage(image, x, y, w, h);
}

// DRAW BACKGROUND
function drawBackground() {
    drawImages(backgroundImage, 0, 0, 500, 400);
}