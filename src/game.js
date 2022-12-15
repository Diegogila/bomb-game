const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');


window.addEventListener('load',startGame);


class Player{
    constructor(icon, x, y){
        this.icon = icon;
        this.x = undefined;
        this.y = undefined;
        this.initialPotition = {};
    }
    move(map,y,x,render){
        let colObj = map[this.y+y][this.x+x];
        if (colObj == "X") {
            map[this.y][this.x] = "-";
            map[this.initialPotition.y][this.initialPotition.x]='I';
        } else if(this.y+y < 0 || this.x+x < 0){
            map[this.y][this.x] = "I";
        }else{
            map[this.y+y][this.x+x] = "I";
            map[this.y][this.x] = colObj;   
        }
        render(map); 
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
                    player.y = y;
                    player.x = x;
                    
                }
                game.fillText(emojis[col],elementSize * (x+1), elementSize * (y+1));})
            }) 
    }
    render(mapCols);
    player.initialPotition = {
        y:player.y,
        x:player.x};
        console.log(player);
    
        
    window.addEventListener('keydown', (event) => {
        console.log(event.key)
        game.clearRect(0,0,canvasSize,canvasSize);
        switch (event.key) {
            case "ArrowUp":
                player.move(mapCols,-1,0,render);
                break;
            case "ArrowRight":
                player.move(mapCols,0,1,render);
                break;
            case "ArrowDown":
                player.move(mapCols,1,0,render);
                break;
            case "ArrowLeft":
                player.move(mapCols,0,-1,render);
                /*colicionObj = mapCols[player.y-1][player.x-2];
                if (colicionObj != "X") {
                    mapCols[player.y-1][player.x-2] = "I";
                    mapCols[player.y-1][player.x-1] = colicionObj;   
                } else{
                    mapCols[player.y-1][player.x-1] = "-";
                    mapCols[player.initialPotition.y-1][player.initialPotition.x-1]='I';
                }*/
                break;                
                
                default:
                    break;
                }
    
        render(mapCols); 
        console.log(player);
    });   
    /*for (let row = 1; row <= 10; row++) {
        for (let col = 1; col <= 10; col++) {
            game.fillText(emojis[mapCols[row - 1][col - 1]],elementSize * col,elementSize * row);   
        }
    }*/
}

