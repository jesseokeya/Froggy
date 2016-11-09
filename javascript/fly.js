function fly(img, size, x, y){
  this.x = x;
  this.y = y;
  this.speed = 2;
  this.size = size;
  this.img = img;

  this.display = function(){
    imageMode(CENTER);
    this.img.resize(this.size, this.size);
    image(this.img, this.x, this.y);
    stroke(255, 0, 0);
    noFill();
    ellipse(this.x, this.y, this.size + 15, this.size + 15);
  }

  this.buzz = function(){
    this.x = this.x + random(-this.speed, this.speed);
    this.y = this.y + random(-this.speed, this.speed);
  }
}
