function frog(img, size, x, y){
  this.x = x;
  this.y = y;
  this.size = size;
  this.img = img;
  this.point = false;
  this.value = true;

  this.display = function(){
    imageMode(CENTER);
    this.img.resize(this.size, this.size);
    image(this.img, this.x, this.y);
  }

  this.setTrack = function(value){
    this.point = false;
    if(value){this.point = value;}
    return this.point;
  }

  this.eat = function(x1, y1, x2, y2){
      stroke(200, 52, 0, 200);
      if(this.value === false){
      }
      strokeWeight(20);
      if(this.point === false){line(x1, y1, x2, y2);}
  }
}
