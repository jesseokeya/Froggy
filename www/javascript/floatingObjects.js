function floatingObjects(x,y){
  this.x = x;
  this.y = y;
  this.r = random(2);
  this.speed = random(-1,1);

  this.display = function(){
    fill(214, 250, 213);
    noStroke();
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }

  this.move = function(){
    this.x = this.x + this.speed;
    this.y = this.y + this.speed;
    if(this.x >= width){this.x = 0;}
    if(this.y >= height){this.y = 0;}

    if(this.x <= 0){this.x = random(width);}
    if(this.y <= 0){this.y = random(height);}
  }
}
