let myImage1;
let myImage2;

function preload(){
  myImage1 = loadImage ('cat.jpeg');
  myImage2 = loadImage ('cat2.jpeg');
}

function setup() {
  createCanvas(800, 500);
  image(myImage1, 50,50);
  image(myImage2, 100,100);
}

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(220);
}
