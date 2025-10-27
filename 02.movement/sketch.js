let i = 0;
// A text that expresses my inner thoughts about myself when I speak
const thoughtsText = "Iamsaying somuch whatisreallybeingheard. Ihavesoomanythoughts in my head but Iamunableto articulate. My thoughts happen soofast whilst I am talking tsometimes Iloosetrack of whatIamsaying?! Icantreachaconclusion or  anopinion about a topic. I keep ramblingandrambling, ramble, ramble ramble rambleramble blah blah blah blahblah. Does the person I am speaking too understand me? DoIunderstandmyself? What am I even talking about aanymore? Soo many thoughts, soomanythoughts……";
const textArray = thoughtsText.split(" ");
//Show the text as a random display in order to show how muddled my thoughts get 

// Initialise variables - every function
let size = 75;
let colour; 

function setup(){
  createCanvas (800,800);
frameRate(4); // speed of text
background('rgba(214, 187, 251, 1)');
red = random(255);
green = random(255);
blue = random(255);
colour = [red, green, blue]

//: I tried to increase the frame rate in order to get the circle to move faster but I was unable to do this without affecting the text://
}

function draw () {

//: I placed the background in this box in order to eliminate the trail that was left by the circle but this resulted in the text disappearing:// 
noFill()
stroke(colour)
strokeWeight (5)
noFill()
circle(mouseX, mouseY, 100, 100, 2);
describe( 'A purple circle rotating around the canvas in the centre')

let x = random(width)
let y = random(height);
  if (i < textArray.length)
  { // is i less-than the number of words in the text
    //Style the text
    textStyle(ITALIC);
    fill(colour);
    noStroke()
    console.log(i);
    textSize(15);
    textAlign(CENTER, CENTER);
    text(textArray[i], x, y);
    i++;
  }else{
    i=0; // reset the counter
  }

}
