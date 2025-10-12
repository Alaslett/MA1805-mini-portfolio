function setup() {
  createCanvas(700, 700);
  
  // Using RGBA notation.
  background ('rgba(0, 150, 255, 0.3)'); 
  
  describe ('A canvas with a transparent blue background');
  
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
  
  //Bottom-left
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

line(350,447, 380, 425);

describe ('Three black lines creating a small zig-zag within the light grey circle');

}
  