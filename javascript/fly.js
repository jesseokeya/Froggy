function fly(img, size, x, y){
  this.x = x;
  this.y = y;
  this.speed = 2;
  this.size = size;
  this.img = img;
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
   if(distance < this.size + 23){fill(this.col);}
   
   ellipse(this.x, this.y, this.size + 23, this.size + 23);
 }

  this.buzz = function(){
    this.x = this.x + random(-this.speed, this.speed);
    this.y = this.y + random(-this.speed, this.speed);
  }
}
