//Variables and arrays of game
var flObjects = [ ]; var level;
var canvas; var img;
var concrete  = [ ];
var scoreCount = 0;

//function preload to load assets into the game
function preload(){
  img = loadImage("assets/frog.png");
}

//resize widow to fit game into any screen
function windowResized(){
  canvas.resize(windowWidth, windowHeight);
}

//function setup to put everything in the game into place
function setup() {
  //create canvas
  canvas = createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  //push floating objects(fireflies) into the game
  for(var i = 0; i < 300; i++){
    flObjects.push(new floatingObjects(random(width),random(height)));
  }
  //push frog object into index 0 of concrete
  concrete[0] = new frog(img, 200, width/2, height - 120);
}

//Game logic is in draw
function draw() {
  //set background
  background(145, 173, 150);

  //push score object into index 1 of concrete
  concrete[1] = new score("Score: ", 25, 0, 14, 60);
  //push level object into index 1 of concrete
  concrete[2] = new score("Level", 25, 1, width - 124, 60);

  //display and move fireflies
  for(var i = 0; i < flObjects.length; i++){ flObjects[i].display(); flObjects[i].move();}

  //display objects
  for(var i = 0; i < concrete.length; i++){concrete[i].display();}

}
