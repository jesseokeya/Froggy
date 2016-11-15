var flObjects = [ ];
var frog;
var frogSize = 300;

function setup() {
  var myCanvas = createCanvas(windowWidth, 400);
  myCanvas.parent('myContainer');
  for(var i = 0; i < 600; i++){
    flObjects.push(new floatingObjects(random(width),random(height)));
  }
}
function preload(){
  frog = loadImage("assets/frog.png")
}

function myInputEvent() {
  //console.log('you are typing: ', this.value());
  name = this.value();
}

function draw() {
  background(145, 173, 144);
  for(var i = 0; i < flObjects.length; i++){ flObjects[i].display(); flObjects[i].move();}
  imageMode(CENTER);
  frog.resize(frogSize, frogSize - 30);
  image(frog, width/2, height/2);
}
