
let row = 11;
let col = 11;
let pad = 5;
let sWidth, sHeight;
let rgba = [87, 163, 221, 255]; 
let img;

function preload(){
img = loadImage('kitten.jpeg');
}

function setup() {
  createCanvas(850, 850);

  //img.hide();

  sWidth = (width/col)-(pad+(pad))
  sHeight = (height/row)-(pad+(pad/row));
  rectMode(CENTER);
  stroke('hsla(0, 0%, 100%, 1.00)'); 
  strokeWeight (1);
frameRate(90);

}

function draw() {
background (200);

//Code for the rotating colourful shapes 
for(let i=0; i<row; i++){
for(let ii=0; ii<col; ii++){
let x = pad+(ii*sWidth)+(pad*ii)+(sWidth/2);
let y = pad+(i*sHeight)+(pad*i)+(sHeight/2);
let r = random(250);
let g = random(200);
let b = random(175);

fill(r, g, b);
rect(x, y, sWidth, sHeight);
circle(x, y, sWidth, sHeight);

push();
angleMode(DEGREES)
translate(x, y);
rotate(i*5); 
rotate(millis() / 20 * PI / 2);

//outline of the shapes 
stroke('white')
rect(0, 0, sWidth, sHeight); 
circle(0, 0, sWidth, sHeight);
pop(); 
describe ('A grid of circles and squares with a slow frame rate spinning and changing colours')
}
}

// phone shape 
stroke(0);
strokeWeight(5);
fill('#4b8ee0f0');
rect(385, 300, 200, 350);

//phone button 
strokeWeight(2);
fill(0)
circle (385,445,25);

// Create a variable where when the home button is pressed the cat appears and the text disappears 
x = mouseX;
y = mouseY;

if (x >=380 && y>=420 && mouseIsPressed){
image(img, 337, 215, 100, 100);
textStyle (ITALIC)
noStroke();
text ("MEOW :3",350, 350);
 
//This is my first time trying to paste an image in code. I found this very challenging and I did a lot of trial and error in order to get this to work 

 } else {
 fill('darkblue');
 textStyle(NORMAL);
 noStroke();
 text("Hold button to load",335,400);

 fill('white');
  noStroke();
  textSize(15);
  textStyle(BOLD);
  text("LOADING...",350,340);
// I found it interesting to learn about how order can really influence code and what order things appear in. I watched some videos in order to help me understand 'if else' statements and I feel i have finally gotten the grasp of it 
}
}

//references https://editor.p5js.org/gmein26/sketches/TdENamRit
//https://thecodingtrain.com/tracks/code-programming-with-p5-js/code/3-conditionals/3-else-if-and-or
//https://www.youtube.com/watch?v=ypxaf38wOno&t=2173s
 







