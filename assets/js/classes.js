// Just pure boilerplate of classes used in my projects.
// Because I have not figured a way of laoding js scripts into others using
// vanilla js, html, css.

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
