var flObjects = [ ];
var name;

function setup() {
  var myCanvas = createCanvas(500, 200);
  myCanvas.parent('myContainer');
  for(var i = 0; i < 600; i++){
    flObjects.push(new floatingObjects(random(width),random(height)));
  }
  name = "";
  var inp = createInput('');
  inp.input(myInputEvent);
}

function myInputEvent() {
  //console.log('you are typing: ', this.value());
  name = this.value();
}

function draw() {
  background(145, 173, 144);
  for(var i = 0; i < flObjects.length; i++){ flObjects[i].display(); flObjects[i].move();}
  fill(0);
  textSize(40);
  text('Your Name', 140, (height/2) - 40);
  text(name, (width/2) - 60, (height/2) + 40);
}
