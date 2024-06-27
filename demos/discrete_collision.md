---
layout: default
title: Discrete Collision 

---

# Discrete Collision

<html>
<canvas id = "gameCanvas" width = "740" height = "480"></canvas>
    <script type = "application/javascript" src = "/assets/js/discreteCollision.js"> </script>
</html>

## Controls
_(Be sure to click the canvas first)_

**Spacebar** - Toggles ball movement.

**T** - Toggles tunneling.

It just increases o decreases the speed in the _y_ direction of the ball.
In some cases, the ball may be stucked outside the white box.

**D** - Toggle change in deltaTime. The values are _1/60_ or _1/360_.

## Notes
This demo is to understand basic collision in graphics. In this case, we are using Discrete
Collision, which checks if the ball collides with the white box borders in discrete time.
In this case (from what I believe), because I don't have direct control over the frames 
of the canvas, we need to use a _deltaTime_ multiplier for the ball's movement. I'm not sure if
it is a correct implementation, because I'm just "asking" the ball to move in small value steps.

```
const FRAMES_PER_SECOND = 60;
[...]
var deltaTime = 1 / FRAMES_PER_SECOND;
[...]
class ball
{
    [...]
    move()
    {
        this.velocityX = this.velocityX + this.accelerationX * deltaTime;
        this.velocityY = this.velocityY + this.accelerationY * deltaTime;

        this.posX = this.posX + this.velocityX * deltaTime;
        this.posY = this.posY + this.velocityY * deltaTime;

        this.handleBoxCollision();
    }
}
```

One problem with discrete collisions is tunneling...

To solve tunneling, we can:...



## Other Notes
An interesting thing, was to solve: have the same direction when toggleging the speed of the ball.
One approuch was to have 4 _if statements_:

```
function handleBallVelocityY()
{
    if ( myBall.velocityY == 200 ) 
    {
        myBall.velocityY == 2000;
    }
    else if ( myBall.velocityY == -200 )
    {
        myBall.velocityY = -2000;
    } 
    else if ( myBall.velocityY = 2000 )
    {
        myBall.velocityY = 200;
    }
    else if ( myBall.velocityY == -2000 )
    {
        myBall.velocityY = -200;
    }
}
```

But it is just a lot of code and we can reduce it with getting the absolute value of the velocity.
If the velocity is a certain value, we change to the other velocity value but multiplying it by
the absolute value of the velocity divided by the same velocity. If our direction is positive, we
have the next equation: nextVelocity * (abs(currentVelocity) / currentVelocity). But, if it were negative,
we get the next equation: nextVelocity * (abs(-currentVelocity) / -currentVelocity).

```
function handleBallVelocityY()
{
    if ( Math.abs(myBall.velocityY) == 200 ) 
    {
        myBall.velocityY = 2000 * (Math.abs(myBall.velocityY) / myBall.velocityY);
    }
    else 
    {
        myBall.velocityY = 200 * (Math.abs(myBall.velocityY) / myBall.velocityY);
    } 
}
```
