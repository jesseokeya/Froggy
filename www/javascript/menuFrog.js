var flObjects = [ ]; flyObjects = [ ];
var frog; var flies = [ ];
var frogSize = 160; var flyNumber = 30;

function preload(){
  frog = loadImage("assets/frog.png");
  for(var i = 0; i < flyNumber; i++){flies[i] = loadImage("assets/fly" + floor(random(0,3)) + ".png");}
}

function setup() {
  var myCanvas = createCanvas(windowWidth, 550);
  myCanvas.parent('myContainer');
  for(var i = 0; i < 600; i++){
    flObjects.push(new floatingObjects(random(width),random(height)));
  }

  for(var i = 0; i < flies.length; i++){
    flyObjects.push(new fly(flies[i], 25, random(width), random(height)));
  }
}

function myInputEvent() {
  //console.log('you are typing: ', this.value());
  name = this.value();
}

function draw() {
  background(145, 173, 144);
  for(var i = 0; i < flObjects.length; i++){flObjects[i].display(); flObjects[i].move();}
  imageMode(CENTER);
  frog.resize(frogSize, frogSize);
  image(frog, width/2, height - 100);
  for(var i = 0; i < flies.length; i++){flyObjects[i].display(); flyObjects[i].buzzMenu();}
}
