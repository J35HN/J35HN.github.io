// General.
const FRAMES_PER_SECOND = 60;
const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 480;

var canvas;
var canvasContext;

var canvasMiddleX = CANVAS_WIDTH / 2;
var canvasMiddleY = CANVAS_HEIGHT / 2;
var deltaTime = 1 / FRAMES_PER_SECOND;

// Classes.
class ball
{
    posX = 0;
    posY = 0;
    radius = 0;
    accelerationX = 0;
    accelerationY = 20;
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

        this.drawVelocityAndAcceleration(cc, 2);
    }

    move()
    {
        this.velocityX = this.velocityX + (this.accelerationX * deltaTime);
        this.velocityY = this.velocityY + (this.accelerationY * deltaTime);

        this.posX = this.posX + (this.velocityX * deltaTime);
        this.posY = this.posY + (this.velocityY * deltaTime);

        this.handleBoxCollision();
    }

    handleBoxCollision()
    {
        if ( this.posX - this.radius <= 0 || this.posX + this.radius >= CANVAS_WIDTH )
        {
            this.velocityX *= -1;
        }

        if ( this.posY - this.radius <= 0 || this.posY + this.radius >= CANVAS_HEIGHT )
        {
            this.velocityY *= -1;
        }
    }

    drawVelocityAndAcceleration(cc, opt = 0)
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
            cc.fillText("p (" + this.posX.toFixed(2) + ", " + this.posY.toFixed(2) + ")", CANVAS_WIDTH / 6, CANVAS_HEIGHT / 6 - 20);
            cc.fillText("v (" + this.velocityX + ", " + this.velocityY.toFixed(2) + ")", CANVAS_WIDTH / 6, CANVAS_HEIGHT / 6);
        }
    }
}

// Canvas.
var myBall = new ball(100, 200, 20, 50, 50, "#CCA8E0");

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
}

function drawCanvas()
{
    // Black Canvas.
    canvasContext.fillStyle = "#000000";
    canvasContext.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ///. 

    myBall.move();
    myBall.draw(canvasContext);


}


