const FRAMES_PER_SECOND = 60;
const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 480;

var canvas;
var canvasContext;

var canvasMiddleX = CANVAS_WIDTH / 2;
var canvasMiddleY = CANVAS_HEIGHT / 2;

var ballPositionX = canvasMiddleX;
var ballPositionY = canvasMiddleY;
var ballRadius = 7.5;
var ballSpeedX = 5;
var ballSpeedY = 5;

window.onload = function()
{
    canvas = document.getElementById("gameCanvas");
    canvasContext = canvas.getContext("2d");

    setInterval( function()
        {
            drawCanvas();
            moveBall();
        }, 1000 / FRAMES_PER_SECOND);
}

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
    drawCircle(ballPositionX, ballPositionY, ballRadius, "#FFFFFF");
}

function moveBall()
{
    ballPositionX += ballSpeedX;
    ballPositionY += ballSpeedY;

    // Collisions with canvas.
    if ( ballPositionX + ballRadius > CANVAS_WIDTH || ballPositionX - ballRadius < 0 )
    {
        ballSpeedX *= -1;
    }

    if ( ballPositionY - ballRadius < 0 || ballPositionY + ballRadius > CANVAS_HEIGHT )
    {
        ballSpeedY *= -1;
    }

}
