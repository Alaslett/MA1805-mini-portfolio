
let voice;
var video; 
var vScale = 16


function setup() {
  createCanvas(640, 680);
pixelDensity(1);
video = createVideo('coffee.mov');
voice = loadSound ("AI voice.mp3");

// I intended to have the frame rate slower in order to create a long loading effect like in early technology
frameRate(3);
//video.resolution(2)
video.size(width/vScale, height/vScale)
video.hide();
}

function draw() {

//video.resolution(2)
video.loadPixels();
loadPixels();

//converts the image into greyscale using r, g, b values 
for (var y = 0; y < video.height; y++){
for (var x = 0; x < video.width; x++){
var index = (x + y * video.width)*4;
var r = video.pixels[index+0];
var g = video.pixels[index+1];
var b = video.pixels[index+2];

var bright = (r+g+b)/3;

var w = map(bright, 0, 255, 0, vScale)

 noStroke();
fill(bright);
rect(x*vScale, y*vScale ,vScale, vScale)

//: my origional idea was to make the pixels appear similar to the grey scale reference in moodle
}

}
}

function mouseClicked(){

video.loop(0.2);
voice.loop();
voice.amp(0.2);

if (getAudioContext().state !== 'running'){
getAudioContext().resume();
}
}
// it took me a while to figure bout how tgo create the pixel effect and change the greyscale of the image but I watched a few videois and was able to do it through a lot of trial and error.

// reference: https://www.youtube.com/watch?v=rNqaw8LT2ZU
// voice created through: https://voicemaker.in - text was typed by me :)