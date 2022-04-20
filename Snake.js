let xpos = 0;
let ypos = 0;


export function startGame(){
    game();
}




class Game{
    canvas = document.getElementById("canvas");
    ctx = this.canvas.getContext('2d');
    tileNb = 10;
    tileSize = this.canvas.width/this.tileNb;
    gameSpeed = 5;

    bgColour = "yellow";


    headImg = new Image(0,0);
    bodyImg = new Image();
    tailImg = new Image();

    snake = new Snake(5,5);

    constructor(){
        this.headImg.src = "./Images/snake_head.jpg";
        this.bodyImg.src = "./Images/snake_body.jpg";
        this.tailImg.src = "../Images/snake_tail.jpg";
    }

    game(){
        empty();
        drawHead(0,0, 180);
        window.setTimeout(game, 1000/gameSpeed);
    }
    
    empty(){
        ctx.fillStyle = bgColour;
        ctx.fillRect(0,0,canvas.width, canvas.height);
    }
    
    drawHead(x, y, deg){
        ctx.save();
        ctx.translate((x+0.5)*tileSize,(y+0.5)*tileSize);
        ctx.rotate(deg*Math.PI/180);
        ctx.drawImage(headImage, -0.5*tileSize,-0.5*tileSize,tileSize, tileSize);
        ctx.restore();
    }


    // Draws the snake on canvas according to its data.
    drawSnake(){
        
    }
}

class Snake{
    headX = 0;
    headY = 0;
    tailX = 1;
    tailY = 1;
    length = 0; // The length of the body following the head.
    bodyParts = [];
    headDirection = 0;

    constructor(x, y){
        this.headX = x;
        this.headY = y;
    }


}

class Body{
    x = 0;
    y = 0;
    color="green";
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}

