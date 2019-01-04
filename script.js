"use strict";


// PLAYING SOUND ON KEYPRESS
function playSoundKeypress(e) {
    let alphabet = document.querySelector(`div[data-key='${e.keyCode}']`),
        sound = document.querySelector(`audio[data-key='${e.keyCode}']`);
    this.console.log(sound);
    this.console.log(alphabet);

    if(!sound) return;
    sound.currentTime = 0;
    sound.play();
}

window.addEventListener('keydown', playSoundKeypress);

let alphabets = Array.from(document.querySelectorAll('.alphabet'));
// console.log(alphabets);

function playSoundClick(e) {
    let key = e.path[1].dataset.key;
    let sound = document.querySelector(`audio[data-key='${key}']`);
    console.log(key, sound);

    if(!sound) return;
    sound.play();
}

alphabets.forEach(alphabet => {
    alphabet.addEventListener('click', playSoundClick);
})

