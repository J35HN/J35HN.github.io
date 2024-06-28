---
layout: default
title: Discrete Collision Pt2

---

# Discrete Collision Pt2

<html>
<canvas id = "gameCanvas" width = "740" height = "480"></canvas>
    <script type = "application/javascript" src = "/assets/js/discreteCollisionPt2.js"> </script>
</html>

## Controls
_(Be sure to click the canvas first)_

**J** - Toggles ball movement.

**T** - Toggles tunneling.

The velocity in the _y-axis_ of the ball has a value of either 100 or 600.
In some cases, the ball may be stuck outside the white box.

**D** - Toggle change in frames per second. 

The values are _24_ or _60_ for framesPerSecond.
In some cases, the ball may be stuck outside the white box.

## Notes
In this demo, we tackle the second solution to tunneling, which is manipulating frames.
In this case, you can control whether the canvas animates in 24 frames per second or 60 frames
per second. I was able to control the fps of our canvas thanks to this
[article](https://chriscourses.com/blog/standardize-your-javascript-games-framerate-for-different-monitors).
Just that in this case I had to do some modifications so that our ball movement and the canvas
respected the selected frame rate. 

While having 24 frames per second in our canvas with tunneling enabled, we can see our ball go out
our box borders by a considerable amount. But, if we change our frames to 60 frames per second,
this effect is reduced or canceled completely. 

If you wish to see the source code, follow this [link](https://github.com/J35HN/J35HN.github.io/blob/main/assets/js/discreteCollisionPt2.js).

## Resources
1. _Standardize your JavaScript games' framerate for different monitors_ written by **Christopher Lis**
, on [Chriscourses.com](https://chriscourses.com/blog/standardize-your-javascript-games-framerate-for-different-monitors).

_Last time modified: 28/06/2024_
