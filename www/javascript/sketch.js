//Variables and arrays of game
var flObjects = [ ]; var level; var button
var canvas; var img; var concrete  = [ ];
var flies = [ ]; var flyObjects = [ ];
var scoreCount = 0; var flyNumber = 20;
var xposFrog; var yposFrog;
//function preload to load assets into the game
function preload(){
  img = loadImage("assets/frog.png");
  for(var i = 0; i < flyNumber; i++){flies[i] = loadImage("assets/fly" + floor(random(0,3)) + ".png");}
}

//resize widow to fit game into any screen
function windowResized(){
  canvas.resize(windowWidth, windowHeight);
}

//function setup to put everything in the game into place
function setup() {
  //create canvas
  canvas = createCanvas(windowWidth, windowHeight);
  //push in random fly objects into game
  console.log("Froggy game is starting");

  level = 1;

  xposFrog = width/2;
  yposFrog = height - 120;

  for(var i = 0; i < flies.length; i++){
    flyObjects.push(new fly(flies[i], 50, random(40, width - 40), random(110, height - 250)));
  }
  //push floating objects(fireflies) into the game
  for(var i = 0; i < 600; i++){
    flObjects.push(new floatingObjects(random(width),random(height)));
  }

  //push in random fly objects into game
  for(var i = 0; i < flies.length; i++){
    flyObjects.push(new fly(flies[i], 50, random(40, width - 40), random(110, height - 250)));
  }
  //push floating objects(fireflies) into the game
  for(var i = 0; i < 600; i++){
    flObjects.push(new floatingObjects(random(width),random(height)));
  }
  //push frog object into index 0 of concrete
  concrete[0] = new frog(img, 200, width/2, height - 120);

  loadJSON('all', gotData);
  console.log("JSON file loaded sucessfully ");
}

function gotData(data){
  var keys = Object.keys(data);
  console.log(keys);
  for(var i = 0; i < keys.length; i++){
    var word = keys[i];
    var score = scoreCount;
  }
}
function mouseDragged() {
  xposFrog = mouseX;
  yposFrog = mouseY;
}

function falling(frog, fly, x, y){
  //stroke(200, 52, 0, 130);
  noFill();
  strokeWeight(2);
  noStroke();
  ellipse(x, y, 200, 200);

  var distance = dist(x, y, fly.x, fly.y);
  if(distance < 250){return true;}
  return false;
}
//Game logic is in draw
function draw(){
  //set background
  background(145, 173, 150);
  //push score object into index 1 of concrete
  concrete[1] = new score("Score: ", 35, scoreCount, 14, 60);
  //push level object into index 1 of concrete
  concrete[2] = new score("Level", 35, level, width - 154, 60);
  //push frog object into index 0 of concrete
  concrete[0] = new frog(img, 200, xposFrog, yposFrog);
  //display and move fireflies
  for(var i = 0; i < flObjects.length; i++){ flObjects[i].display(); flObjects[i].move();}

  //display objects
  for(var i = 0; i < concrete.length; i++){concrete[i].display();}
  //display all fly objects in array
  for(var i = 0; i < flies.length; i++){
    flyObjects[i].display(); flyObjects[i].buzz(); flyObjects[i].kill();
    if(flyObjects[i].intersect() === true && flyObjects[i].getId() === false){scoreCount += 1; flyObjects[i].setId(true);}
  }
  if(scoreCount === flyNumber){
    fill(255, 89, 34, 150);
    textSize(50);
    text("Game Over", (width/2) - 150, (height/2));
    console.log(level + ":" + scoreCount + " -> " + "success");
    loadJSON('add/' + level + '/' + scoreCount, function(data){
      console.log(data)
    });
    noLoop();
  }
  for(var i = 0; i < flies.length; i++){
    if(flyObjects[i].getId() === true && flyObjects[i].intersect() === true && scoreCount < flyNumber){
      concrete[0].eat(concrete[0].x, concrete[0].y - 24, flyObjects[i].x, flyObjects[i].y);
      flyObjects[i].y = flyObjects[i].y + 60;
      flyObjects[i].setExcecute(false);
    }
  }
  strokeWeight(8);
  fill(200, 52, 0);
  stroke(200, 52, 0, 200);
  ellipse(concrete[0].x, concrete[0].y - 24, 15, 15);
for(var i = 0; i < flies.length; i++){
  if(falling(concrete[0], flyObjects[i], concrete[0].x, concrete[0].y) === true){
    flyObjects[i].x = flyObjects[i].x + 50;
    console.log("intersect");
    }
  }
}
