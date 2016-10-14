function imageLoader(img, x, y, size, space){
 this.space = space;
 this.x = x + this.space;
 this.y = y;
 this.img = img;
 this.size = size;
 this.r = 30;
 this.display = function(){
   imageMode(CENTER);
   this.img.resize(this.size, this.size);
   image(this.img, this.x, this.y);
 }

 this.move = function(){
   this.x = this.x + random(-10, 10);
   this.y = this.y + random(-5, 5);
   if(this.x >= width || this.x <= 0){this.x = width/2;}
   if(this.y >= height || this.y <= 102){this.y = (height/2) - 120;}
 }
 
 this.check = function(){
   stroke(255, 0, 0);
   strokeWeight(1);
   fill(255, 255, 255, 0);
   ellipseMode(CENTER);
   ellipse(this.x, this.y, this.r*2, this.r*2);
   }
 this.locate = function(){
   var distance = dist(this.x, this.y, mouseX, mouseY); 
   if(distance < this.r){return true}
   return false;
 }
 
 this.drop = function(){
   
 }
}

function bgColor(){
 //loadPixels of the canvas
 loadPixels();
 for (var y = 0; y < height; y++ ) {
   for (var x = 0; x < width; x++ ) {
     var loc = (x + y * width) * 4;
     // The functions red(), green(), and blue() pull out the three color components from a pixel.
     var r = pixels[loc + 0];
     var g = pixels[loc + 1];
     var b = pixels[loc + 2];
     var greyscale = (r+g+b)/3

     // Set the display pixel to the image pixel
     pixels[loc + 0] = 0;
     pixels[loc + 1] = x;
     pixels[loc + 2] = 0;
     pixels[loc + 3] = 25; // Always have to set alpha
   }
 }
 updatePixels();
}//end function bgColor