function fly(img, size, x, y){
  this.x = x;
  this.y = y;
  this.speed = 5;
  this.size = size;
  this.img = img;
  this.count = 0;
  this.track = false;
  this.countScore;
  this.col = color(145, 173, 150);

  this.display = function(){
    imageMode(CENTER);
    this.img.resize(this.size, this.size);
    image(this.img, this.x, this.y);
  }

  this.kill = function(){
   var distance = dist(this.x, this.y, mouseX, mouseY);
   noStroke();
   noFill();
   if(distance < this.size + 23){this.count += 1; fill(this.col);}
   if(this.count > 0){fill(this.col);}
   ellipse(this.x, this.y, this.size + 23, this.size + 23);
 }

 this.calcScore = function(){
  this.countScore = 0;
  var distance = dist(this.x, this.y, mouseX, mouseY);
  if(distance < this.size + 23){return this.countScore + 1;}
  return this.countScore;
}

this.intersect = function(){
 var distance = dist(this.x, this.y, mouseX, mouseY);
 if(distance < this.size + 23){return true;}
 return false;
}

this.setId = function(value){
  this.track = false;
  if(value){this.track = value;}
  return this.track;
}

this.getId = function(){return this.track}


  this.buzz = function(){
    this.x = this.x + random(-this.speed, this.speed);
    this.y = this.y + random(-this.speed, this.speed);
    if(this.x >= width - 40){this.x = this.x - 40;}
    if(this.y >= height - 250){this.y = this.y - 250;}
    if(this.x <= 40){this.x = this.x + 40;}
    if(this.y <= 110){this.y = this.y + 110;}
  }


  this.buzzMenu = function(){
    this.x = this.x + random(-this.speed, this.speed);
    this.y = this.y + random(-this.speed, this.speed);
    if(this.x >= width - 4){this.x = this.x - 4;}
    if(this.y >= height - 200){this.y = this.y - 200;}
    if(this.x <= 4){this.x = this.x + 4;}
    if(this.y <= 10){this.y = this.y + 10;}
  }
}
