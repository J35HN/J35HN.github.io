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
    var ballX = 100;
    var ballY = 100;
    var ballSpeedX = 5;
    var ballSpeedY = 5;

    var playerPaddleY = 240;
    var opponentPaddleX = 1;
    var opponentPaddleY = 1;
    const PADDLE_HEIGHT = 60;
    const PADDLE_WIDTH = 10;
    const BALL_RADIUS = 7;

    function calculateMousePosition(evt)
    {
        var rect = canvas.getBoundingClientRect();
        var root = document.documentElement;
        var mouseX = evt.clientX - rect.left - root.scrollLeft;
        var mouseY = evt.clientY - rect.top - root.scrollTop;
        return {
            x:mouseX,
            y:mouseY
        };
    }

    window.onload = function() 
    {
        var framesPerSecond = 30;

        canvas = document.getElementById("gameCanvas");
        canvasContext = canvas.getContext("2d");

        opponentPaddleX = canvas.width - PADDLE_WIDTH - 1;
        opponentPaddleY = canvas.height / 2 - PADDLE_HEIGHT / 2;

        setInterval(function()
        {
            drawCanvas();
            moveOpponent();
            moveBall();
        }, 1000 / framesPerSecond );

        // Move player.
        canvas.addEventListener("mousemove",
            function(evt)
            {
                var mousePos = calculateMousePosition(evt);
                playerPaddleY = mousePos.y;
            }
        );

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

    function ballReset()
    {
        ballSpeedX *= -1;
        ballX = canvas.height / 2;
        ballY = canvas.width / 2;
    }

    function drawCanvas()
    {
        // Black canvas.
        drawRect(0, 0, canvas.width, canvas.height, "black");
        // Ball.
        drawCircle(ballX, ballY, BALL_RADIUS, "FloralWhite");
        // Player paddle.
        drawRect(1, playerPaddleY - PADDLE_HEIGHT / 2, PADDLE_WIDTH, PADDLE_HEIGHT, "white");
    }

    function moveOpponent()
    {
        // Update position in Y with the Y of the ball.
        opponentPaddleY = ballY - PADDLE_HEIGHT / 2;
        drawRect(opponentPaddleX, opponentPaddleY, PADDLE_WIDTH, PADDLE_HEIGHT, "white");
    }

    function moveBall()
    {
        ballX += ballSpeedX;
        ballY += ballSpeedY;

        if (ballX > canvas.width - BALL_RADIUS || ballX < 0 + BALL_RADIUS)
        {
            ballReset();
        }

        if (ballX + BALL_RADIUS >=opponentPaddleX && (ballY >= opponentPaddleY && ballY <= opponentPaddleY + PADDLE_HEIGHT))
        {
            console.log("Hit opponent paddle");
            ballSpeedX *= -1;
        }

        if (ballY > canvas.height - BALL_RADIUS || ballY < 0 + BALL_RADIUS)
        {
            ballSpeedY *= -1;
        }
    }



</script>

</html>