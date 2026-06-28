
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

class Square {
    constructor(size, color) {
        this.size = size;
        this.color = color;
        this.transparency = 0.0;
        this.time = Math.floor(Math.random() * (61 - 1) + 1); // Number between 1 and 60.
    }

    displayAtt(){
        console.log(`Size: ${this.size}`);
        console.log(`color: ${this.color}`);
        console.log(`transparency: ${this.transparency}`);
        console.log(`time: ${this.time}`);
    }
}


export function InitValues(canvas) {
    // Set the canvas to CSS rendered values.
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    canvas.style.background = "#3b5e3a";
    console.log(`height: ${canvas.height}`);
    console.log(`width: ${canvas.width}`);
};

export function OnResize(canvas) {
    console.log("resized: ");
}