Canvas = document.getElementById("myCanvas");
ctx = Canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

background_image = "mars.jpg";

rover_image = "rover.png";
rover_x = 10;
rover_y = 10;

function add() 
{ background_imgTag = new Image();
 //defining a variable with a new image
background_imgTag.onload = uploadBackground;
// setting a function, onloading this variable
background_imgTag.src = background_image; // load image
rover_imgTag = new Image(); //defining a variable with a new image
rover_imgTag.onload = uploadRover; // setting a function, onloading this variable
rover_imgTag.src = rover_image; // load image
}
function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, Canvas.width, Canvas.height);
}
function uploadRover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", myKeyDown);
function myKeyDown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38') {
        up();
    }
    if(keyPressed == '40') {
        down();
    }
    if(keyPressed == '37') {
        left();
    }
    if(keyPressed == '39') {
        right();
    }
}
function up() {
    if(rover_y >= 0) {
        rover_y = rover_y - 10;
        uploadBackground();
        uploadRover();
    }
}
function down() {
    if(rover_y <= 500) {
        rover_y = rover_y + 10;
        uploadBackground();
        uploadRover();
    }
}
function left() {
    if(rover_x >= 0) {
        rover_x = rover_x - 10;
        uploadBackground();
        uploadRover();
    }
}
function right() {
    if(rover_x <= 700) {
        rover_x = rover_x + 10;
        uploadBackground();
        uploadRover();
    }
}