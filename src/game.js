class Player{
    constructor(){
        this.x = undefined;
        this.y = undefined;
        this.initialPotition = {};
        this.colicionObj = undefined;
    }
    move(map,y,x){
        console.log(this.x);
        console.log(this.y);
        this.colicionObj = map[this.y+y][this.x+x];
        if (this.y+y <0 || this.x+x <0) {
            map[this.y][this.x] = "I";
        } else if(this.colicionObj == "-"){
            map[this.y+y][this.x+x] = "I";
            map[this.y][this.x] = this.colicionObj;   
        }
        console.log(this.x);
        console.log(this.y);
    }
}

class Map{
    constructor(player,elSize){
        this.level = 0;
        this.maps = maps;
        this.mapCols;
        this.player = player;
        this.elSize = elSize;
    }
    mapBuild(){
        const map = maps[this.level];
        const mapRows = map.trim().split('\n');
        this.mapCols = mapRows.map(row => row.trim().split(''));
    }
    render(game){
        this.mapCols.forEach((row, y) => {
            row.forEach((col, x) => {
                if (col == "I") {
                    this.player.y = y;
                    this.player.x = x;
                }
                game.fillText(emojis[col],this.elSize * (x+1), this.elSize * (y+1));})
            }) 
    }
}

const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');


window.addEventListener('load',startGame);




function startGame(level){
    let canvasSize;
    if (window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.75;
    } else {
        canvasSize = window.innerHeight * 0.5;
    }
    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    const elementSize = canvasSize/10;
    game.font = `${elementSize}px Verdana`;
    game.textAlign = `end`;

    const player = new Player();
    const map = new Map(player,elementSize);
    map.mapBuild();
    map.render(game);

    player.initialPotition = {
        y:player.y,
        x:player.x};
         
    window.addEventListener('keydown', (event) => {
        game.clearRect(0,0,canvasSize,canvasSize);
        switch (event.key) {
            case "ArrowUp":
                player.move(map.mapCols,-1,0);
                break;
            case "ArrowRight":
                player.move(map.mapCols,0,1);
                break;
            case "ArrowDown":
                player.move(map.mapCols,1,0);
                break;
            case "ArrowLeft":
                player.move(map.mapCols,0,-1);
                break;                
                default:
                    break;
        }
        if (player.colicionObj == "X") {
            alert('Perdiste, hay que ser muy idiota para perder en esto');
            map.mapCols[player.y][player.x] = "-";
            map.mapCols[player.initialPotition.y][player.initialPotition.x]='I';
            player.colicionObj = undefined;           
        }else if(player.colicionObj == "O"){
            if (map.level<2) {
                map.level++;
            }else{
                alert('Ganaste, recoge tu premio y vete al carajo');
                map.level = 0;
            }
            map.mapBuild();
            map.render(game);
            player.colicionObj = undefined;
            player.initialPotition = {
                y:player.y,
                x:player.x};
        }
        map.render(game); 
    });   
}

