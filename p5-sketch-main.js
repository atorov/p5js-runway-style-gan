const p5Main = new p5((s) => {
  s.setup = () => {
    s.createCanvas(512, 512);
    s.background(0);
  };

  s.draw = async () => {};
}, 'p5-main');

window.p5Main = p5Main;
