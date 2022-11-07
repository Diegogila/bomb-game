const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');


window.addEventListener('load',startGame);
function startGame(){
    let canvasSize;
    if (window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.75;
    } else {
        canvasSize = window.innerHeight * 0.5;
    }
    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    const elementSize = canvasSize/10;
    console.log({canvasSize, elementSize}); 
    game.font = `${elementSize}px Verdana`;
    game.textAlign = `end`;
    game.fillText(emojis['X'],elementSize,elementSize);
    

    /*for (let i = 1; i <= 10; i++) {
        game.fillText(emojis['X'],elementSize * i,elementSize);
        console.log(i);
    }*/
    
    //window.innerHeight
    //window.innerWidth
 /*game.fillRect(0,0,100,100);
 game.clearRect(50,50,50,50);*/
}