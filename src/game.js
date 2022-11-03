const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');


window.addEventListener('load',startGame);
function startGame(){
    canvas.setAttribute('width', window.innerWidth * 0.75);
    canvas.setAttribute('height', window.innerHeight * 0.5);
    
    //window.innerHeight
    window.innerWidth
 /*game.fillRect(0,0,100,100);
 game.clearRect(50,50,50,50);*/
}