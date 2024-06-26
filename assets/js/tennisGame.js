var canvas;
var canvasContext;
var ballX = 100;
var ballY = 100;
var ballSpeedX = 5;
var ballSpeedY = 5;

var playerPaddleY = 1;
var playerPaddleX = 1;

var opponentPaddleX = 1;
var opponentPaddleY = 1;

var playerScore = 0;
var opponentScore = 0;

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

    // Set paddles to middle of the height canvas, with an offset of 1 to the sides.
        playerPaddleX = 1;
    playerPaddleY = canvas.height / 2 - PADDLE_HEIGHT / 2;
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
        drawRect(playerPaddleX, playerPaddleY - PADDLE_HEIGHT / 2, PADDLE_WIDTH, PADDLE_HEIGHT, "white");
    // Scores.
        canvasContext.font = "30px Verdana";
    canvasContext.fillText(playerScore, 0 + (canvas.width * 0.2), canvas.height * 0.5 - 15);
    canvasContext.font = "30px Verdana";
    canvasContext.fillText(opponentScore, canvas.width - (canvas.width * 0.2), canvas.height * 0.5 - 15);
}

function moveOpponent()
{
    // Update position in Y axis with the Y axis of the ball.
        opponentPaddleY = ballY - PADDLE_HEIGHT / 2;
    // Shift to be in centered with the ball.
        drawRect(opponentPaddleX, opponentPaddleY, PADDLE_WIDTH, PADDLE_HEIGHT, "white");
}

function moveBall()
{
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Detec if ball hits edges.
        if (ballX > canvas.width + BALL_RADIUS)
    {
        playerScore += 1;
        ballReset();
    }

    if (ballX < 0 - BALL_RADIUS)
    {
        opponentScore += 1;
        ballReset();
    }

    // Detect if ball hits ceiling or floor.
        if (ballY > canvas.height - BALL_RADIUS || ballY < 0 + BALL_RADIUS)
    {
        ballSpeedY *= -1;
    }

    // Detect if ball hits the opponent's paddle.
        if (ballX + BALL_RADIUS >=opponentPaddleX && (ballY >= opponentPaddleY && ballY <= opponentPaddleY + PADDLE_HEIGHT))
    {
        console.log("Hit opponent paddle");
        ballSpeedX *= -1;
        var deltaY = ballY - (opponentPaddleY + PADDLE_HEIGHT / 2);
        ballSpeedY = deltaY * 0.35;
    }

    // Detect if ball hits the player's paddle.
        if (ballX - BALL_RADIUS <= playerPaddleX + PADDLE_WIDTH && (ballY >= playerPaddleY - PADDLE_HEIGHT / 2 && ballY <=playerPaddleY + PADDLE_HEIGHT / 2))
    {
        console.log("Hit player's paddle");
        ballSpeedX *= -1;
        var deltaY = ballY - playerPaddleY;
        ballSpeedY = deltaY * 0.35;
    }

}
