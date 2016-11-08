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
}
