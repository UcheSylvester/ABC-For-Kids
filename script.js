"use strict";

// let sounds = document.querySelectorAll('audio');
// console.log(sounds);

window.addEventListener('keydown', function(e) { 
    // console.log(e);
    let alphabet = document.querySelector(`div[data-key='${e.keyCode}']`),
        sound = document.querySelector(`audio[data-key='${e.keyCode}']`);
    this.console.log(sound);
    this.console.log(alphabet);

    if(!sound) return;
    sound.currentTime = 0;
    sound.play();
})