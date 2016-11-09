function score(show, textsize, value, x, y){
  this.x = x;
  this.y = y;
  this.show = show;
  this.value = value;
  this.space = 115;
  this.textsize = textsize;
  this.display = function(){
    fill(46, 85, 114);
    textSize(textsize);
    textStyle(BOLD);
    text(this.show, this.x, this.y);
    text(this.value, this.x + this.space, this.y)
  }

}
