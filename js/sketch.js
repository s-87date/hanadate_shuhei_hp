function setup() {
  var canvas = createCanvas(660, 490);
  canvas.parent("canvas-1");
  colorMode(HSB);
}

function draw() {
  blendMode(BLEND);//Don't blend the background
  background("#ffffff");
  
  blendMode(MULTIPLY);
  //noFill();
  noStroke();
  //stroke("black");
  //ellipse(660/2,490/2,360,360);
  fill("#F7B7AA");
  arc(660/2+mouseX/2,490/2+mouseY/2,360,360,HALF_PI*2,0);
  fill("#212E59");
  arc(660/2-mouseX/2,490/2+mouseY/2,360,360,0,HALF_PI*2);
  
  //stroke("red");
  //line(150,245,510,245);
  
  
  //fill("#aaaaaa");
  //ellipse(257,245,71);
  //fill("#aaaaaa");
  //ellipse(329,245,71);
  //fill("#aaaaaa");
  //ellipse(402,245,72);
  fill("#202346");
  ellipse(474-mouseX/2,245-mouseY/2,71);
  
  
  
  
  //stroke("blue");
  fill("#B13871");
  ellipse(439-mouseX/9,245-mouseX/8,143);
  fill("#EA4F6D");
  ellipse(402,245+mouseX/6,216);
  fill("#F39D98");
  ellipse(364+mouseX/7,245,289);
  
  blendMode(BLEND);
  
  
  //stroke("pink");
  fill("#FBD1C077");
  ellipse(295+mouseX/3,245-mouseX/4,289);
  fill("#FAD0C091");
  ellipse(257+mouseX/2,245,216);
  
  fill("#FEF1EE99");
  ellipse(222,245+mouseX/8,143);
  
  fill("white");
  ellipse(185-mouseX/9,245,71);
  
  
  
  print(mouseX,mouseY);
  
  
  
  //72
  
}