function frog(img, size, x, y){
  this.x = x;
  this.y = y;
  this.size = size;
  this.img = img;

  this.display = function(){
    imageMode(CENTER);
    this.img.resize(this.size, this.size);
    image(this.img, this.x, this.y);
  }

  this.eat = function(x1, y1, x2, y2){
      strokeWeight(8);
      stroke(200, 52, 0, 200);
      ellipse(x1, y1, 15, 15)
      stroke(200, 52, 0, 200);
      strokeWeight(20);
      line(x1, y1, x2, y2);
  }
}
