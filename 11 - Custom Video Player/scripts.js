//seleccionamos las variables del html

let play = document.querySelector('.toggle');
let rangos = document.querySelectorAll('.player__slider');
let video  = document.querySelector('video.viewer');
let skips = document.querySelectorAll('[data-skip]');
let contenedor = document.querySelector('.player');
let progreso = document.querySelector('.progress');
let progresoLleno = document.querySelector('.progress__filled');


function iniciar(e) {

video[video.paused ? 'play': 'pause']();
    
}


video.addEventListener('click', iniciar);
play.addEventListener('click', iniciar);
video.addEventListener('play', actualizaBoton);

