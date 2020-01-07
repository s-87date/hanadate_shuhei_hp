var sketch1 = function(p) {
  p.setup = function() {
    p.createCanvas(100, 100);
    p.background(0);
  };

  p.draw = function() {
    p.fill(200);
    p.stroke(0);
    p.rect(20, 20, 20, 20);
  };
};

new p5(sketch1, "canvas-1");
