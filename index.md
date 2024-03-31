---
layout: default
title: Home

---

# Hello 👋

My name is **Jeshua Nava Avila**, but you can call me **_Jesh_**.

<html>
<canvas id = "gameCanvas" width = "400" height = "480" style = "padding: 0; margin: auto; display: block;"></canvas>

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
            movePlayer();
            moveOpponent();
        }, 1000 / framesPerSecond );

    }

    function drawCanvas()
    {
        canvasContext.fillStyle = "black";
        canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    }

    function movePlayer()
    {
        canvasContext.fillStyle = "white";
        canvasContext.fillRect(1, canvas.height / 2 - 30, 10, 60);
    }

    function moveOpponent()
    {
        canvasContext.fillStyle = "white";
        canvasContext.fillRect(389, canvas.height / 2 - 30, 10, 60);
    }

</script>

</html>