// General.
const FRAMES_PER_SECOND = 60;
const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 480;

var canvas;
var canvasContext;

var canvasMiddleX = CANVAS_WIDTH / 2;
var canvasMiddleY = CANVAS_HEIGHT / 2;

// Canvas.
window.onload = function()
{
    canvas = document.getElementById("gameCanvas");
    canvasContext = canvas.getContext("2d");
    canvas.setAttribute("tabindex", 0); // for keyboard events.

    setInterval(function()
        {
            drawCanvas();
        }, 1000 / FRAMES_PER_SECOND);

    // Events.
}

function drawCanvas()
{
    // Black Canvas.
    canvasContext.fillStyle = "#000000";
    canvasContext.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ///. 
    
    var myBall = new ball();
    myBall.draw(canvasContext);


}

// Classes.
class ball
{
    posX = 0;
    posY = 0;
    radius = 0;
    velocityX = 0;
    velocityY = 0;
    color = "";

    constructor(posX = 69, posY = 69, radius = 6.9, velocityX = 69/69, velocityY = 69/69,
        color = "#CACACA")
    {
        this.posX = posX;
        this.posY = posY;
        this.radius = radius;
        this.velocityX = velocityX;
        this.velocityY = velocityY;
        this.color = color;
    }

    draw(cc)
    {
        // Draw of a circle.
        cc.fillStyle = this.color;
        cc.beginPath();
        cc.arc(this.posX, this.posY, this.radius, 0, Math.PI*2, true);
        cc.fill();
    }
}
