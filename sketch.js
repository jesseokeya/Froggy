var flObjects = [ ]; var score; var level;
var canvas; var img;

function preload(){
  img = loadImage("assets/menu.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  for(var i = 0; i < 200; i++){
    flObjects.push(new floatingObjects(random(width),random(height)));
  }
  pixelDensity(1);
}

function windowResized(){
  canvas.resize(windowWidth, windowHeight);
}

function draw() {
  background(145, 173, 150);
  for(var i = 0; i < flObjects.length; i++){
    flObjects[i].display();
    flObjects[i].move();
  }
  
  imageMode(CENTER);
  image(img, width/2, height - 100);
  fill(46, 85, 114);
  textSize(23);
  textStyle(BOLD);
  text("Score: ", 20, 50);

  level = 1;
  text("Level " + level, width-100, 50);

  score = 0;
  text(score, 100, 50);
}
