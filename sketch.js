var posX = 1;
var posY = 1;
var entrance ;
var cont = 0;
var font;
var arrayCercles = [];



function preload(){
  font = loadFont('Fons/theboldfont.ttf');
}

function setup() {
  createCanvas(600, 800);
  background(0,0,0);
  textFont(font);
  
  num  = random(1,10);
  num2 = random(1,5);
  num3 = random(1,5);
  num4 = random(1,10);
  num5 = random(1,5);
  num6 = random(1,5);
  num7 = random(1,10);
  num8 = random(1,10);
  num9 = random(1,5);


}



function draw() {
  if (arrayCercles.length == 0){
    background(0,0,0);
    append(arrayCercles, new rodona(100,290,75,1,-1));
    append(arrayCercles, new rodona(75,205,75,1,-1));
    append(arrayCercles, new rodona(100,730,75,1,-1));
    append(arrayCercles, new rodona(400,100,75,-1,1));
    append(arrayCercles, new rodona(80,530,75,1,-1));
    append(arrayCercles, new rodona(500,220,75,-1,1));
    append(arrayCercles, new rodona(500,440,75,-1,1));
    append(arrayCercles, new rodona(325,725,75,1,-1));
    append(arrayCercles, new rodona(450,710,75,1,-1));
  }
  squareColor = color(0, 0, 0);
  squareColor.setAlpha(2);
  fill(squareColor);
  rect(0, 0, 600, 800);
  cercle();
  lletra();
  fill(255,255,255);
  textSize(75)
  text('R', 250,75);
  text('É', 305,150);
  text('S', 250,225);
  text('O', 305,305);
  text('N', 250,390);
  text('A', 305,470);
  text('N', 250,545);
  text('C', 305,625);
  text('E', 250,705);
  text('S', 305,780);
}

function cercle(){
  
  for (i = 0; i<arrayCercles.length;i++){
    arrayCercles[i].moviment(num2,num2);
  }

}

function reiniciar(){
  arrayCercles.splice(0, arrayCercles.length);
}

function mousePressed(){
  this.reiniciar();
}

function deviceShaken() {
  this.reiniciar();
}

function lletra(){
  textSize(15);
  text('Electronic',30,40);
  text('Music',30,55);
  text('Festival',30,70);
  text('#7',30,85);
  text('Dijon',537,725);
  text('DU O7 AU IO',500,740);
  text('Novembre',504,755);
  text('2013',543,770);
}