// SOUND CONTROL
const sound = document.querySelector('.soundControl');
let soundStatus = 'OFF';

sound.style.cursor = "Pointer";
sound.style.display = "inline-block";

sound.addEventListener('click', function(){
    if (soundStatus == 'OFF') {
        sound.innerHTML = "SOUND ON";
        soundStatus = 'ON';
    } else {
        sound.innerHTML = "SOUND OFF";
        soundStatus = 'OFF';
    }
})

function playSoundColision() {
    if (soundStatus == 'ON') {
        audioCollision.play();
    }
}

function playSoundScore() {
    if (soundStatus == 'ON') {
        audioScore.play();
    }
}

function playSoundBg() {
    if (soundStatus == 'ON') {
        audioBgTrack.play();
    } else {
        audioBgTrack.pause();
    }
}