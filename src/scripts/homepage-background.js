
// Data of the canvas
// First part of the canvas space is from 0% to 25% of the canvas.
// Second part is from 75% to 100% of the canvas.
// square = object | In this scenario.


// 1. Get initial canvas size (x & y)
// 1.5 Array object for the squares?
// 2. Functions to build square objects: color, x & y size, transparency
// 3. Interval for changing transparency from 0 to 1.
// 4. If clicked, change transparency to 0.
// 5. If canvas or window size changes (event listener), start choose functions to resize the squares


// Functions
// init(): Initializes first calculations and drawings.
// draw(): draws the array of objects, once the objects have a calculated position.
// calcSize(): get the size of the desirable square depending on the amount of columns and rows, and the size of the canvas.
// calcPosition(): go through the objects array with the help of a coordinate variable that is going to be a reference.
// setTransparency(): Function to set the transparency of a clicked square.

// Object
// Color (#xxxxxx)
// Position (x, y)
// Transparency (0 - 1)
// Random interval to reach that transparency (from 1 to 60 seconds). A step will be calculated by `1 / choseen_seconds`. Add step each call?. 

import { COLORS } from "../content";

const SESSION_SEED_KEY = "background-seed";

// Deterministic PRNG so the same seed always produces the same color sequence.
function mulberry32(seed) {
    let state = seed;
    return function () {
        state |= 0;
        state = (state + 0x6D2B79F5) | 0;
        let t = Math.imul(state ^ (state >>> 15), 1 | state);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

// Reuses the same seed for the whole browser session (sessionStorage), so the
// background looks consistent while navigating between pages.
function getSessionSeed() {
    const stored = sessionStorage.getItem(SESSION_SEED_KEY);
    if (stored !== null) return Number(stored);
    const seed = Math.floor(Math.random() * 2 ** 31);
    sessionStorage.setItem(SESSION_SEED_KEY, String(seed));
    return seed;
}

const seededRandom = mulberry32(getSessionSeed());

const FRAMES_PER_SECOND = 30;

let x = 0;
let y = 0;
let sizeOfSquare = 0;
let amountOfSquaresY = 0;
let amountOfSquaresX = 8;
const leftSquaresArray = new Array();
const rightSquaresArray = new Array();

class Square {
    constructor(size, color, x, y) {
        this.size = size;
        this.color = color;
        this.transparency = 0.0;
        this.time = Math.floor(Math.random() * (5 - 2) + 2); // Number between "(max - min) + min".
        this.x = x;
        this.y = y;
    }

    get getColor() { return this.color; }
    get getSize() { return this.size; }

    get getX() { return this.x }
    get getY() { return this.y }

    set updateTransparency( value ) {
        this.color = `${this.color.slice(0, this.color.lastIndexOf(','))}, ${value})`;
    }

    // call this function if you are sure to update to the next transparency value.
    nextTransparency() {
        let step = 1 / (this.time * FRAMES_PER_SECOND);
        let next = Math.min(this.transparency + step, 1.0);
        this.transparency = next;
        this.updateTransparency = next;
    }

    isMouseInSquare(x, y) {
        if ( x >= this.x && x <= this.x + this.size ) {
            if ( y>= this.y && y <= this.y + this.size ) {
                this.transparency = 0.0;
                this.updateTransparency = 0.0;
            }
        }
    }
}

function paintSquares(canvas, squaresArray) {
    const ctx = canvas.getContext("2d");
    for (let i = 0; i < squaresArray.length; i++){
        let tempObj = squaresArray[i];
        ctx.fillStyle = tempObj.getColor;
        ctx.fillRect(tempObj.getX, tempObj.getY, tempObj.getSize, tempObj.getSize);
    }
}

function getRandomColor() {
    let color = "#fff";

    // get size of COLORS object with counting keys
    let arraySize = Object.keys(COLORS).length; 

    // generate a random number to that size
    let randomNum = Math.floor( seededRandom() * arraySize );

    // for in loop or map and stop at random number
    let i = 0;
    for (const property in COLORS) {
        if ( i == randomNum ) {
            color = COLORS[property];
            break;
        }        
        i += 1;
    }
    // return color string
    return color;
}

// Update the information of the size of squares and amount of square in Y axis.
function updateSquaresInfo(canvas) {
    sizeOfSquare = Math.ceil(canvas.width * 0.25) / amountOfSquaresX;
    if (canvas.height % sizeOfSquare != 0) {
        amountOfSquaresY = Math.floor(canvas.height / sizeOfSquare) + 1;
    } else {
        amountOfSquaresY = canvas.height / sizeOfSquare;
    }
}

function updateSquaresArray(canvas) {
    x = 0;
    y = 0;
    let indexCount = 0;
    leftSquaresArray.length = 0;
    rightSquaresArray.length = 0;

    // Left side of canvas
    for (let e = 0; e < amountOfSquaresY; e++) {
        for (let i = 0; i < amountOfSquaresX; i++) {
            let tempSquareObj = new Square(sizeOfSquare, getRandomColor(), x, y);
            tempSquareObj.updateTransparency = 0.0;
            leftSquaresArray[indexCount] = tempSquareObj;
            indexCount += 1;
            x += sizeOfSquare;
        }
        y += sizeOfSquare;
        if (x >= canvas.width * 0.25) {
            x = 0;
        }
    }

    // Right side of canvas
    x = canvas.width * 0.75;
    y = 0;
    indexCount = 0;
    for (let e = 0; e < amountOfSquaresY; e++) {
        for (let i = 0; i < amountOfSquaresX; i++) {
            let tempSquareObj = new Square(sizeOfSquare, getRandomColor(), x, y);
            tempSquareObj.updateTransparency = 0.0;
            rightSquaresArray[indexCount] = tempSquareObj;
            indexCount += 1;
            x += sizeOfSquare;
        }
        y += sizeOfSquare;
        if (x >= canvas.width) {
            x = canvas.width * 0.75;
        }
    }
}

function CalcTransparency(squaresArray) {
    for (let i = 0; i < squaresArray.length; i++) {
        squaresArray[i].nextTransparency();
    }
}

function clearCanvas(canvas) {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function StartTransparencyLoop(canvas) {
    return setInterval(function()
    {
        CalcTransparency(rightSquaresArray);
        CalcTransparency(leftSquaresArray);
        clearCanvas(canvas);
        paintSquares(canvas, rightSquaresArray);
        paintSquares(canvas, leftSquaresArray);
    }, 1000 / FRAMES_PER_SECOND);
}

function CalcMousePosition(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    return {
        x: mouseX,
        y: mouseY
    }
}

function checkMouseInSquares(x, y, array) {
    for (let i = 0; i < array.length; i++) {
        array[i].isMouseInSquare(x, y);
    }
}

export function InitValues(canvas) {
    updateSquaresInfo(canvas);
    updateSquaresArray(canvas);
    return StartTransparencyLoop(canvas);
};

export function OnResize(canvas) {
    updateSquaresInfo(canvas);
    updateSquaresArray(canvas);
}

export function OnMouseMovement(canvas, event) {
    var mousePos = CalcMousePosition(canvas, event);
    checkMouseInSquares(mousePos.x, mousePos.y, leftSquaresArray);
    checkMouseInSquares(mousePos.x, mousePos.y, rightSquaresArray);
}