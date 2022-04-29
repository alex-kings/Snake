/**
 * Class containing the state of the game and functions to update it.
 */
class Game{

    constructor(){
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext('2d');
        this.tileNb = 10;
        this.tileSize = this.canvas.width/this.tileNb;
        this.gameSpeed = 1;
        this.bgColour = "yellow";
        this.headImg = new Image(0,0);
        this.bodyImg = new Image();
        this.tailImg = new Image();
        this.headImg.src = "./Images/snake_head.jpg";
        this.bodyImg.src = "./Images/snake_body.png";
        this.tailImg.src = "./Images/snake_tail.png";

        this.snake = new Snake(5,5);
    }

    // Function called at each game tick
    gameTick(){
        this.empty();
        this.drawSnake();
        this.snake.move();
    }

    empty(){
        this.ctx.fillStyle = this.bgColour;
        this.ctx.fillRect(0,0,this.canvas.width, this.canvas.height);
    }

    /**
     * Draws the snake at the correct location.
     */
    drawSnake(){
        this.drawHead();
    }
    
    /**
     * Draws the head of the snake.
     */
    drawHead(){
        this.ctx.save();
        this.ctx.translate((this.snake.headX+0.5)*this.tileSize,(this.snake.headY+0.5)*this.tileSize);
        this.ctx.rotate(this.snake.headDeg*Math.PI/180);
        this.ctx.drawImage(this.headImg, -0.5*this.tileSize,-0.5*this.tileSize,this.tileSize,this.tileSize);
        this.ctx.restore();
    }
}

/**
 * Class containing the state of the snake on the board and functions to update it.
 */
class Snake{
    headX = 0;
    headY = 0;
    headDeg = 0;
    tailX = 1;
    tailY = 1;
    length = 0; // The length of the body following the head.
    bodyParts = [];
    headDirection = 0;
    xDir = 1;
    yDir = 0;

    constructor(x, y){
        this.headX = x;
        this.headY = y;
    }

    /**
     * Updates the position of the snake.
     */
    move(){
        this.headX += this.xDir;
        this.headY += this.yDir;
    }
    /**
     * Changes the direction of the snake.
     * @param {int} xDir The new x direction.
     * @param {int} xDir The new y direction.
     */
    changeDirection(xDir, yDir){
        this.xDir = xDir;
        this.yDir = yDir;
    }
}

/**
 * Class for the state of a body part of the snake.
 */
class Body{
    x = 0;
    y = 0;
    color="green";
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}



const game = new Game();

/**
 * Event listeners.
 */
window.addEventListener("keydown",(event)=>{
    switch (event.code) {
        case "ArrowUp":
            console.log("up")
            game.snake.changeDirection(0,-1);
            break;
        case "ArrowDown":
            game.snake.changeDirection(0,1);
            break;
        case "ArrowLeft":
            game.snake.changeDirection(-1,0);
            break;
        case "ArrowRight":
            game.snake.changeDirection(1,0);
            break;
    
        default:
            break;
    }
})

function gameLoop(){
    game.gameTick();
    window.setTimeout(gameLoop, 1000/game.gameSpeed);
}

export function startGame(){
    gameLoop();
}
