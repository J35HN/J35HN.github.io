const FRAMES_PER_SECOND = 60;
const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 480;

var canvas;
var canvasContext;

var canvasMiddleX = CANVAS_WIDTH / 2;
var canvasMiddleY = CANVAS_HEIGHT / 2;

const colors = ["#FFFFFF", "#8BD3E6", "#FF6D6A", "#E9EC6B", "#EFBE7D", "#B1A2CA", "#85586F", "#AC7D88"];
const balls = [];


// Game vars.
var stopMovement = false;

var ballPositionX = canvasMiddleX;
var ballPositionY = canvasMiddleY;
var ballRadius = 7.5;
var ballSpeedX = 5;
var ballSpeedY = 5;
var ballColor = colors[0];

// Canvas Events.
function onKeyDownEvent(event)
{
    if ( event.code == "Space" )
    {
        stopMovement = !stopMovement;
    }
    else if ( event.code == "KeyA" )
    {
        var temp = new circle(7.5, canvasMiddleX, canvasMiddleY);
        balls.push(temp);
    }
    else if (event.code == "KeyD" ) 
    {
        if ( balls.length > 0 ) 
        {
            balls.pop();
        }
    }
}

// Canvas.
window.onload = function()
{
    canvas = document.getElementById("gameCanvas");
    canvasContext = canvas.getContext("2d");
    canvas.setAttribute("tabindex", 0);

    setInterval(function()
        {
            drawCanvas();
            if (!stopMovement){ moveBall(); }
        }, 1000 / FRAMES_PER_SECOND);

    // Events.
    canvas.addEventListener("keydown", onKeyDownEvent);
}

// Clases.
class circle {
    radius = 7.5;
    x = canvasMiddleX;
    y = canvasMiddleY;
    speedX = 5;
    speedY = 5;
    color = colors[0];

    constructor(radius, x, y)
    {
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.speedX *= (Math.random() < 0.5) ? -1 : 1;
        this.speedY *= (Math.random() < 0.5) ? -1 : 1;
    }

    get posX(){ return this.x; }
    get posY(){ return this.y; }
    get circleRadius(){ return this.radius; }
    get circleColor(){ return this.color; }

    move()
    {
        this.x += this.speedX;
        this.y += this.speedY;
        if ( this.x + this.radius > CANVAS_WIDTH || this.x - this.radius < 0 )
        {
            this.speedX *= -1;
            this.changeColor();
        }

        if ( this.y - this.radius < 0 || this.y + this.radius > CANVAS_HEIGHT )
        {
            this.speedY *= -1;
            this.changeColor();
        }
    }

    changeColor()
    {
        var randomNum = Math.floor( Math.random() * colors.length );
        while ( this.color == colors[randomNum] )
        {
            randomNum = Math.floor( Math.random() * colors.length );
        }
        this.color = colors[randomNum];
    }

}

// Game functions.
function drawRect(leftX, topY, width, height, color)
{
    canvasContext.fillStyle = color;
    canvasContext.fillRect(leftX, topY, width, height);
}

function drawCircle(centerX, centerY, radius, drawColor)
{
    canvasContext.fillStyle = drawColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
    canvasContext.fill();
}

function drawCanvas()
{
    // Black Canvas.
    drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT, "black");
    drawCircle(ballPositionX, ballPositionY, ballRadius, ballColor);

    for ( let i = 0; i < balls.length; i++ )
    {
        drawCircle( balls[i].posX, balls[i].posY, balls[i].circleRadius, balls[i].circleColor );
    }

}

function changeBallColor()
{
    var randomNum = Math.floor( Math.random() * colors.length );
    while ( ballColor == colors[randomNum] )
    {
        randomNum = Math.floor( Math.random() * colors.length );
    }
    ballColor = colors[randomNum];
}

function moveBall()
{
    ballPositionX += ballSpeedX;
    ballPositionY += ballSpeedY;

    // Collisions with canvas.
    if ( ballPositionX + ballRadius > CANVAS_WIDTH || ballPositionX - ballRadius < 0 )
    {
        changeBallColor();
        ballSpeedX *= -1;
    }

    if ( ballPositionY - ballRadius < 0 || ballPositionY + ballRadius > CANVAS_HEIGHT )
    {
        changeBallColor();
        ballSpeedY *= -1;
    }

    for ( let i = 0; i < balls.length; i++ )
    {
        balls[i].move();
    }
}
