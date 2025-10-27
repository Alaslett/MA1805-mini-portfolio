function setup() {
  createCanvas(700, 700);
  
  // Using RGBA notation.
  background ('rgba(0, 150, 255, 0.3)'); 
  
  describe ('A canvas with a transparent blue background');
}

  function draw() {
  
  // Create a p5.Color object using RGB values. 
  let c = color('lightgrey');
  
  // Draw the circle
  fill(c);
  stroke('grey')
  strokeWeight(7)
  circle(350, 350, 300);
  
  describe('A lightgrey circle in the middle of a blue background');
  
  // Style the points.
  stroke('white')
  strokeWeight(45);
  
  //Top-right
  point(280, 337);
  
  //Bottom-leftj
  point(420, 337);
  
  // Style the points.
  stroke('black')
  strokeWeight(19)
  
  // Bottom-right.
  point(275, 350);
  
  //Top-Left
  point(433, 330);
  
  describe(' Two black points drawn unevenly in two white points  on a lightgrey cirlce');

//Style the line
stroke ('black');
strokeWeight(7);

line (320, 445, 350, 425);

line(350, 425, 350, 447); 

line(350, 447, 380, 425);

describe ('Three black lines creating a small zig-zag within the light grey circle');

textSize(50);
noStroke();
fill('red');
text('?', 325, 210);

describe('A question mark in red above the lightgrey circle');

noFill();
stroke('purple');
strokeWeight(4);
ellipse(380, 210, 10, 15);

describe('A transparent small purple ellipse');

// Style the line.
stroke('magenta');
strokeWeight(4)
line (360, 230, 380, 250);

//Style the line.
stroke('cyan');
strokeWeight(4)
line(360, 250, 380, 230);

//Left
stroke ('Green');
strokeWeight(4);
line (370, 220, 370, 199);

//Right
stroke('orange');
strokeWeight(4);
line (390, 220, 390, 200);

describe('A green and orange line accompanied by a small purple circle');

textSize(25);
noStroke();
fill('Blue');
text('01100011', 210, 250);

describe('binary for the letter c in blue'); 

textSize(17);
stroke('green');
strokeWeight(2)
fill('green');
text('01101111', 260, 253);

describe('binary for the letter o in green'); 

textSize(15);
stroke('black');
strokeWeight(1)
fill('pink');
text('01000100', 350, 245);

describe('binary for the letter d in pink'); 

textSize(21);
stroke('black');
strokeWeight(1)
fill('orange');
text('01000101', 335, 190);

describe('binary for the letter e in pink'); 

textSize(15);
fill('purple');
text('01100011011011110100010001000101', 240, 210);
describe('binary for code in purple'); 

// Top 
stroke('yellow');
strokeWeight(5);
line (270, 200, 300, 200);

// Bottom
stroke('Hotpink');
strokeWeight(5);
line (270, 210, 300, 210);

}
