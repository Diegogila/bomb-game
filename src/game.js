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

    function render(map){
        map.forEach((row, y) => {
            row.forEach((col, x) => {
                if (col == "I") {
                    player.y = y+1;
                    player.x = x+1;
                }
                game.fillText(emojis[col],elementSize * (x+1), elementSize * (y+1));})
            }) 
    }
    render(mapCols);
        console.log(player);
    
        
    window.addEventListener('keydown', (event) => {
        console.log(event.key)
        game.clearRect(0,0,canvasSize,canvasSize);
        const colicionObj = mapCols[player.y-2][player.x-1];
        switch (event.key) {
            case "ArrowUp":
                    mapCols[player.y-2][player.x-1] = "I";
                    mapCols[player.y-1][player.x-1] = colicionObj;   
                break;
            case "ArrowRight":
    
                break;
            case "ArrowDown":
      
                break;
            case "ArrowLeft":
                
                break;                
                
                default:
                    break;
                }
                if (colicionObj != "X") {
                    mapCols[player.y-1][player.x+1] = "I";
                    mapCols[player.y-1][player.x-1] = colicionObj;
                } else {
                    console.log("perdiste");
                }
        render(mapCols); 
    });   
    /*for (let row = 1; row <= 10; row++) {
        for (let col = 1; col <= 10; col++) {
            game.fillText(emojis[mapCols[row - 1][col - 1]],elementSize * col,elementSize * row);   
        }
    }*/
}

