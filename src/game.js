const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');


window.addEventListener('load',startGame);
function startGame(){
    let canvasSize;
    if (window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.75;
    } else {
        canvasSize = window.innerHeight *0.5;
    }
    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);
    
    //window.innerHeight
    window.innerWidth
 /*game.fillRect(0,0,100,100);
 game.clearRect(50,50,50,50);*/
}