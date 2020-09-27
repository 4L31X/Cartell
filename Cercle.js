class rodona{
  constructor(x, y, radi,direccioX,direccioY) {
    this.x = x;
    this.y = y;
    this.radi = radi;
    this.direccioX = direccioX;
    this.direccioY = direccioY;
  }

  moviment(x, y){
    this.x += x * this.direccioX;
    this.y += y * this.direccioY;
    this.dibuix();
  }

  dibuix(){
    fill(237, 40, 56);
    noStroke();
    ellipse(this.x, this.y, this.radi,this.radi); 
  }
  
}

