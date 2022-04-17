const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
const tileNb = 10;
const tileSize = canvas.width/tileNb;

export function startGame(){
    game();
}

let xpos = 0;
let ypos = 0;

function game(){
    empty();
    drawBody(xpos, 0);
    xpos++;
    window.setTimeout(game, 300);
}

function empty(){
    ctx.fillStyle = 'yellow';
    ctx.fillRect(0,0,canvas.width, canvas.height);
}

function drawBody(xpos, ypos){
    ctx.fillStyle='green';
    ctx.fillRect(xpos*tileSize, ypos*tileSize, tileSize, tileSize);
}

