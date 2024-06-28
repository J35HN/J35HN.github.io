---
layout: default
title: Discrete Collision Pt1

---

# Discrete Collision Pt1

<html>
<canvas id = "gameCanvas" width = "740" height = "480"></canvas>
    <script type = "application/javascript" src = "/assets/js/discreteCollisionPt1.js"> </script>
</html>

## Controls
_(Be sure to click the canvas first)_

**J** - Toggles ball movement.

**T** - Toggles tunneling.

The velocity in the _y-axis_ of the ball has a value of either 200 or 2000.
In some cases, the ball may be stuck outside the white box.

**D** - Toggle change in deltaTime. 

The values are _1/60_ or _1/360_ for deltaTime.

## Notes
This demo is to understand basic collision in graphics. In this case, we are using Discrete
Collision, where it checks if the ball collides with the white box borders in discrete time
(each frame).

One problem with discrete collisions is tunneling. Tunneling is when an object does not detect
collision between frames, and this could happen if an object is moving fast. You can trigger
tunneling in the demo by pressing the **T** key.

To solve tunneling, we can:
* Have a speed limit for our objects.
* Increase frames per second.

As to fixing tunneling in this demo, I manipulate **deltaTime** which in turn manipulates the
movement of our ball. Change the value of **deltaTime** by pressing the **D** key.

``` js
this.velocityX = this.velocityX + this.accelerationX * deltaTime;
this.velocityY = this.velocityY + this.accelerationY * deltaTime;

this.posX = this.posX + this.velocityX * deltaTime;
this.posY = this.posY + this.velocityY * deltaTime;
```

Due to the inability to manipulate frames in our canvas, I can’t implement the second solution.
In a future demo, the second solution will be demonstrated.


## Other Notes
### Preserving direction in velocity change.
While implementing the feature of changing the ball’s velocity in the _y-axis_, I faced the
problem of obtaining the current direction of this velocity without making a lot of _if statements_.

``` js
// A solution of 4 if statements.

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

I knew we could reduce the number of if statements from 4 to 2 because we only have 2 velocities
in the _y-axis_ that the ball can have. But, how do we preserve direction?

``` js
// Incomplete solution.

function handleBallVelocityY()
{
    if ( myBall.velocityY == 200 )
    {
        myBall.velocityY = 2000;
    }
    else
    {
        myBall.velocityY = 200;
    }
}
```

Because our current velocity already has a direction (either positive or negative),
we need to find a way to obtain it. For this, I thought of dividing the velocity by itself but
either with the numerator or denominator having the absolute value of the velocity. If we have a
positive direction, we obtain a +1, but if we have a negative direction, we obtain a -1. 

* 200/200 = 1
* 2000/2000 = 1
* -200/200 = -1
* -2000/2000 = -1

And we use this value to multiply our new velocity (which in the end we have our 4 if statement 
cases in just two).

``` js
function handleBallVelocityY()
{
    if ( Math.abs(myBall.velocityY) == 200 ) 
    {
        myBall.velocityY = 2000 *
            (Math.abs(myBall.velocityY) / myBall.velocityY);
    }
    else 
    {
        myBall.velocityY = 200 *
            (Math.abs(myBall.velocityY) / myBall.velocityY);
    } 
}
```

## Resources
1. _Building Collision Simulations: An Introduction to Computer Graphics_ by **Reducible**, on [YouTube](https://www.youtube.com/watch?v=eED4bSkYCB8&t).
2. _Video Game Physics Tutorial - Part II: Collision Detection for Solid Objects_ written by **Nilson Souto**, on [Toptal.com](https://www.toptal.com/game/video-game-physics-part-ii-collision-detection-for-solid-objects). 


_Last time modified: 27/06/2024_
