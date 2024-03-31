---
layout: default
title: Home

---

# Hello 👋

My name is **Jeshua Nava Avila**, but you can call me **_Jesh_**.

<html>
<canvas id = "gameCanvas" width = "320" height = "240" style = "padding: 0; margin: auto; display: block;"></canvas>

<script>
    var canvas;
    var canvasContext;

    window.onload = function() 
    {
        var framesPerSecond = 60;

        canvas = document.getElementById("gameCanvas");
        canvasContext = canvas.getContext("2d");

        setInterval(function()
        {
            drawCanvas();
            moveBox();
        }, 1000 / framesPerSecond );

    }

    function drawCanvas()
    {
        canvasContext.fillStyle = "black";
        canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    }

    function moveBox()
    {
        canvasContext.fillStyle = "white";
        canvasContext.fillRect(0, canvas.height / 2, 2, 10);
    }

</script>

</html>