var img;
var frog;
var fly = [];
var flyArray = [];
var displayFly;
var mySound, mySound2;
var button, button2;
var count = 0;

function preload(){
  mySound  = loadSound('assets/fly.mp4');
  mySound2 = loadSound('assets/frog.mp4');
  img = loadImage("assets/frog.png");
  for(var i = 0; i < 8; i++){
   fly[i] = loadImage("assets/fly.png"); 
  }
}

function setup() {
  pixelDensity(1);
  createCanvas(windowWidth, windowHeight);
  frog = new imageLoader(img, width/2, height - 105, 130, 0);
  for(var i = 0; i < fly.length; i++){
    flyArray.push(new imageLoader(fly[i], i*20 + random(width), 80, 90, random(-i*80, i*80)));
  }
  mySound.setVolume(0.2);
  mySound.play();
  mySound2.setVolume(0.2);
  mySound2.play();
  button2 = createButton("Play Sound");
  button = createButton("Stop Sound");
  button.style("width","100px");
  button2.style("width","100px");
   button.style("height","50px");
  button2.style("height","50px");
}



function draw() {
  bgColor();
  frog.display();
  for(var i = 0; i < fly.length; i++){
  flyArray[i].display();
  flyArray[i].move();
  flyArray[i].check();
  
  if(flyArray[i].locate() === true){
    stroke(255, 0, 0, 150);
    strokeWeight(10);
    line(width/2 - 2, height - 122, mouseX, mouseY);
    count = ceil(count + 0.01);
    flyArray[i].drop();
  }
  }
  button2.position(20, 20);
  button.position(20, 20);
  button.mousePressed(function(){
    if(mySound.isPlaying() === true){
      mySound2.stop(); mySound.stop(); button.hide(); button2.show();}
  });
  button2.mousePressed(function(){
    if(mySound.isPlaying() !== true){mySound2.play(); mySound.play(); button2.hide(); button.show();}
  });
  stroke(255, 0, 0);
  strokeWeight(1);
  fill(255, 0, 0, 100);
  //ellipse(mouseX, mouseY, 15, 15);
  ellipse(width/2 - 2, height - 122, 15, 15);
  textSize(30);
  text("Score", width - 120 , 40);
  text(count, width - 120 , 80);
  fill(23, 214, 241, 150);
  stroke(23, 214, 241, 150);
  strokeWeight(120);
  line(0 , height, width, height);
  
  if(count >= 8){mySound.stop();}
  
}