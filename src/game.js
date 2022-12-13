const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');


window.addEventListener('load',startGame);


class Player{
    constructor(icon, x, y){
        this.icon = icon;
        this.x = undefined;
        this.y = undefined;
    }


}

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

    const map = maps[1];
    const mapRows = map.trim().split('\n');
    const mapCols = mapRows.map(row => row.trim().split(''));

    const player = new Player(emojis["I"]);
    
    mapCols.forEach((row, y) => {
        row.forEach((col, x) => {
            if (col == "I") {
                player.y = y;
                player.x = x;
            }
            game.fillText(emojis[col],elementSize * (x+1), elementSize * (y+1));})
        }) 

        console.log(player);
    /*for (let row = 1; row <= 10; row++) {
        for (let col = 1; col <= 10; col++) {
            game.fillText(emojis[mapCols[row - 1][col - 1]],elementSize * col,elementSize * row);   
        }
    }*/
    
    //window.innerHeight
    //window.innerWidth
 /*game.fillRect(0,0,100,100);
 game.clearRect(50,50,50,50);*/
}

