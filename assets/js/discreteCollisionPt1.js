// General.
const FRAMES_PER_SECOND = 60;
const CANVAS_WIDTH = 740;
const CANVAS_HEIGHT = 480;

const INNER_CANVAS_WIDTH = CANVAS_WIDTH * 0.8;
const INNER_CANVAS_HEIGHT = CANVAS_HEIGHT * 0.5;
const INNER_CANVAS_X = CANVAS_WIDTH * 0.1;
const INNER_CANVAS_Y = CANVAS_HEIGHT * 0.3;

var canvas;
var canvasContext;

var canvasMiddleX = CANVAS_WIDTH / 2;
var canvasMiddleY = CANVAS_HEIGHT / 2;
var deltaTime = 1 / FRAMES_PER_SECOND;

var stopBallMovement = false;
var tunnelingActive = false;

// Classes.
class ball
{
    posX = 0;
    posY = 0;
    radius = 0;
    accelerationX = 0;
    accelerationY = 0;
    velocityX = 0;
    velocityY = 0;
    color = "#cacaca";


    constructor(_posX = 69/69, _posY = 69/69, _radius = (69/69)*10)
    {
        this.posX = _posX;
        this.posY = _posY;
        this.radius = _radius;
    }

    get posX(){ return this.posX; }
    set posX(value){ this.posX = value; }
    set posY(value){ this.posY = value; }
    set radius(value){ this.radius = value; }
    set accelerationX(value){ this.accelerationX = value; }
    set accelerationY(value){ this.accelerationY = value; }
    set velocityX(value){ this.velocityX = value; }
    set velocityY(value){ this.velocityY = value; }
    set color(value){ this.color = value; }

    draw(cc)
    {
        // Draw of a circle.
        cc.fillStyle = this.color;
        cc.beginPath();
        cc.arc(this.posX, this.posY, this.radius, 0, Math.PI*2, true);
        cc.fill();

        this.drawInformation(cc, 2);
    }

    move()
    {
        this.velocityX = this.velocityX + this.accelerationX * deltaTime;
        this.velocityY = this.velocityY + this.accelerationY * deltaTime;

        this.posX = this.posX + this.velocityX * deltaTime;
        this.posY = this.posY + this.velocityY * deltaTime;

        this.handleBoxCollision();
    }

    handleBoxCollision()
    {
        if ( this.posX - this.radius <= INNER_CANVAS_X || this.posX + this.radius >= INNER_CANVAS_X + INNER_CANVAS_WIDTH )
        {
            this.velocityX *= -1;
        }

        if ( this.posY - this.radius <= INNER_CANVAS_Y || this.posY + this.radius >= INNER_CANVAS_Y + INNER_CANVAS_HEIGHT )
        {
            this.velocityY *= -1;
        }
    }

    drawInformation(cc, opt = 0)
    {
        if ( opt > 0 )
        {
            cc.fillStyle = "#FFFFFF";
            cc.font = "15px serif";
        }

        if ( opt == 1 )
        {
            cc.fillText("v(" + this.velocityX + ", " + this.velocityY.toFixed(2) + ")", this.posX, this.posY - this.radius - 5);
            cc.fillText("a(" + this.accelerationX + ", " + this.myBall.accelerationY + ")", 100, 130);
        }
        else if ( opt == 2 )
        {
            cc.fillText("p (" + this.posX.toFixed(2) + ", " + this.posY.toFixed(2) + ")", CANVAS_WIDTH / 2.5, CANVAS_HEIGHT / 7);
            cc.fillText("v (" + this.velocityX + ", " + this.velocityY.toFixed(2) + ")", CANVAS_WIDTH / 2.5, CANVAS_HEIGHT / 7 + 20);
            cc.fillText("Tunneling: " + tunnelingActive, CANVAS_WIDTH / 2.5, CANVAS_HEIGHT / 7 + 40);
            cc.fillText("deltaTime: 1/" + 1/deltaTime, CANVAS_WIDTH / 2.5, CANVAS_HEIGHT / 7 + 60);
        }
    }
}

// Instances.
var myBall = new ball( canvasMiddleX, canvasMiddleY, 15 );
myBall.velocityX = 100;
myBall.velocityY = 200;
myBall.color = "#b1a2ca";

// Functions
function handleBallVelocityY()
{
    if ( Math.abs(myBall.velocityY) == 200 ) 
    {
        // Need to preserve direction, and we obtain it by dividing the velocity by itself;
        // considering the edge case if the direction is negative.
        myBall.velocityY = 2000 * (Math.abs(myBall.velocityY) / myBall.velocityY);
        tunnelingActive = true;
    }
    else 
    {
        myBall.velocityY = 200 * (Math.abs(myBall.velocityY) / myBall.velocityY);
        tunnelingActive = false;
    } 
}

function handleDeltaTime()
{
    if ( deltaTime == 1 / FRAMES_PER_SECOND ) 
    {
        deltaTime = 1 / 360;
    }
    else
    {
        deltaTime = 1 / FRAMES_PER_SECOND;
    }
}

/// Canvas Events.
function onKeyDownEvent(event)
{
    if ( event.code == "KeyJ" )
    {
        stopBallMovement = !stopBallMovement;
    }

    if ( event.code == "KeyT" )
    {
        handleBallVelocityY();
    }

    if ( event.code == "KeyD" )
    {
        handleDeltaTime();
    }
}

// Canvas.
window.onload = function()
{
    canvas = document.getElementById("gameCanvas");
    canvasContext = canvas.getContext("2d");
    canvas.setAttribute("tabindex", 0); // for keyboard events.

    requestAnimationFrame(animate);
    function animate()
    {
        drawCanvas();
        requestAnimationFrame(animate);
    }

    // Events.
    canvas.addEventListener("keydown", onKeyDownEvent);
}

function drawCanvas()
{
    // Black Canvas.
    canvasContext.fillStyle = "#000000";
    canvasContext.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Inner box.
    canvasContext.fillStyle = "#ffffff";
    canvasContext.fillRect(INNER_CANVAS_X, INNER_CANVAS_Y, INNER_CANVAS_WIDTH, INNER_CANVAS_HEIGHT);

    if ( !stopBallMovement ) {myBall.move(); }
    myBall.draw(canvasContext);

}
