let slider;
let val;

function setup(){
    createCanvas(windowWidth, windowHeight);
    slider = createSlider(-10,10,0,0.1);
    slider.position(30,250);
    slider.style('width', '200px');
}

let A = ( a ) => {
  function drawA( x, y, sw, val){
    a.push();
    a.translate(x, y);

    a.beginShape();
    a.vertex(30+val*random(),190+val*random())
    a.vertex(30+val*random(),140+val*random())
    a.vertex(70-val*random(),140+val*random())
    a.vertex(70-val*random(),190+val*random())
    a.vertex(90+val*random(),190+val*random())
    a.vertex(90+val*random(),30-val*random())
    a.vertex(70+val*random(),10-val*random())
    a.vertex(30-val*random(),10-val*random())
    a.vertex(10-val*random(),30-val*random())
    a.vertex(10-val*random(),190+val*random())
    
    a.beginContour();
    a.vertex(30+val*random(),120-val*random())
    a.vertex(30+val*random(),40+val*random())
    a.vertex(40+val*random(),30+val*random())
    a.vertex(60-val*random(),30+val*random())
    a.vertex(70-val*random(),40+val*random())
    a.vertex(70-val*random(),120-val*random())
    a.endContour();
    a.endShape(CLOSE);
  
    a.pop();
  }
  a.setup = function(){
    a.createCanvas(150,200,SVG)
  }
  a.draw = function(){
    a.background(240);
    val = slider.value();
    // a.noFill();
    a.fill(0);
    a.stroke(0);
    drawA( 30, 0, 4, val);
  }
}

let myA = new p5(A, 'a');

let B = ( b ) => {

  function drawB( x, y, sw, val){
    b.push();
    b.translate(x, y);

    b.beginShape();
    b.vertex(10-val*random(),190+val*random());
    b.vertex(70+val*random(),190+val*random());
    b.vertex(90+val*random(),170+val*random());
    b.vertex(90+val*random(),140);
    b.vertex(80+val*random(),130);
    b.vertex(90+val*random(),120);
    b.vertex(90+val*random(),30-val*random());
    b.vertex(70+val*random(),10-val*random());
    b.vertex(10-val*random(),10-val*random());
    b.push();
    b.beginContour();
    b.vertex(30+val*random(),170-val*random());
    b.vertex(30+val*random(),140+val*random());
    b.vertex(60-val*random(),140+val*random());
    b.vertex(70-val*random(),150+val*random());
    b.vertex(70-val*random(),160-val*random());
    b.vertex(60-val*random(),170-val*random());
    b.endContour();
    b.pop()
    b.beginContour();
    b.vertex(30+val*random(),120-val*random());
    b.vertex(30+val*random(),30+val*random());
    b.vertex(60-val*random(),30+val*random());
    b.vertex(70-val*random(),40+val*random());
    b.vertex(70-val*random(),110-val*random());
    b.vertex(60-val*random(),120-val*random());
    b.endContour();
    b.endShape(CLOSE);
  
    b.pop();
  }
  b.setup = function(){
    b.createCanvas(150,200,SVG)
  }
  b.draw = function(){
    b.background(240);
    val = slider.value();
    // b.noFill();
    b.fill(0);
    b.stroke(0);
    drawB( 30, 0, 4, val);
  }
}
// let myB = new p5(B, 'b');

let N = ( n ) => {

  function drawN( x, y, sw, val){
    n.push();
    n.translate(x, y);

    n.beginShape();
    n.vertex(10-val*random(),190+val*random())
    n.vertex(30+val*random(),190+val*random())
    n.vertex(30+val*random(),30+val*random())
    n.vertex(60-val*random(),30+val*random())
    n.vertex(70-val*random(),40+val*random())
    n.vertex(70-val*random(),190+val*random())
    n.vertex(90+val*random(),190+val*random())
    n.vertex(90+val*random(),30-val*random())
    n.vertex(70+val*random(),10-val*random())
    n.vertex(10-val*random(),10-val*random())
    n.endShape(CLOSE);
  
    n.pop();
  }

  n.setup = function(){
    n.createCanvas(150,200,SVG) 
  }
  n.draw = function(){
    n.background(240);
    val = slider.value();
    // n.noFill();
    n.fill(0);
    n.stroke(0);
    drawN( 30, 0, 4, val);
  }
}
let myN = new p5(N, 'n');

let G = ( g ) => {
  function drawA( x, y, sw, val){
    g.push();
    g.translate(x, y);

    g.beginShape();
    g.vertex(30-val*random(),190+val*random())
    g.vertex(70+val*random(),190+val*random())
    g.vertex(90+val*random(),170+val*random())
    g.vertex(90+val*random(),80)
    g.vertex(50,80-val*random())
    g.vertex(50,100+val*random())
    g.vertex(70-val*random(),100)
    g.vertex(70-val*random(),160-val*random())
    g.vertex(60-val*random(),170-val*random())
    g.vertex(40+val*random(),170-val*random())
    g.vertex(30+val*random(),160-val*random())
    g.vertex(30+val*random(),40+val*random())
    g.vertex(40+val*random(),30+val*random())
    g.vertex(60-val*random(),30+val*random())
    g.vertex(70-val*random(),40+val*random())
    g.vertex(70-val*random(),60)
    g.vertex(90+val*random(),60)
    g.vertex(90+val*random(),30-val*random())
    g.vertex(70+val*random(),10-val*random())
    g.vertex(30-val*random(),10-val*random())
    g.vertex(10-val*random(),30-val*random())
    g.vertex(10-val*random(),170+val*random())
    g.endShape(CLOSE);
  
    g.pop();
  }
  g.setup = function(){
    g.createCanvas(150,200,SVG)
  }
  g.draw = function(){
    g.background(240);
    val = slider.value();
    // g.noFill();
    g.fill(0);
    g.stroke(0);
    drawA( 30, 0, 4, val);
  }
}
let myG = new p5(G, 'g');

let S = ( s ) => {
  function drawS( x, y, sw, val){
    s.push();
    s.translate(x, y);

    s.beginShape();
    s.vertex(10-val*random(),190+val*random())
    s.vertex(70+val*random(),190+val*random())
    s.vertex(90+val*random(),170+val*random())
    s.vertex(90+val*random(),130-val*random())
    s.vertex(70+val*random(),110-val*random())
    s.vertex(40+val*random(),110-val*random())
    s.vertex(30+val*random(),100-val*random())
    s.vertex(30+val*random(),40+val*random())
    s.vertex(40+val*random(),30+val*random())
    s.vertex(90+val*random(),30+val*random())
    s.vertex(90+val*random(),10-val*random())
    s.vertex(30-val*random(),10-val*random())
    s.vertex(10-val*random(),30-val*random())
    s.vertex(10-val*random(),110+val*random())
    s.vertex(30-val*random(),130+val*random())
    s.vertex(60-val*random(),130+val*random())
    s.vertex(70-val*random(),140+val*random())
    s.vertex(70-val*random(),160-val*random())
    s.vertex(60-val*random(),170-val*random())
    s.vertex(10-val*random(),170-val*random())
    s.endShape(CLOSE);
  
    s.pop();
  }
  s.setup = function(){
    s.createCanvas(150,200,SVG)
  }
  s.draw = function(){
    s.background(240);
    val = slider.value();
    // s.noFill();
    s.fill(0);
    s.stroke(0);
    drawS( 30, 0, 4, val);
  }
}
let myS = new p5(S, 's');

let T = ( t ) => {
  function drawT( x, y, sw, val){
    t.push();
    t.translate(x, y);

    t.beginShape();
    t.vertex(40-val*random(),190+val*random())
    t.vertex(60+val*random(),190+val*random())
    t.vertex(60+val*random(),30+val*random())
    t.vertex(90+val*random(),30+val*random())
    t.vertex(90+val*random(),10-val*random())
    t.vertex(10-val*random(),10-val*random())
    t.vertex(10-val*random(),30+val*random())
    t.vertex(40-val*random(),30+val*random())
    t.endShape(CLOSE);
  
    t.pop();
  }
  t.setup = function(){
    t.createCanvas(150,200,SVG)
  }
  t.draw = function(){
    t.background(240);
    val = slider.value();
    // t.noFill();
    t.fill(0);
    t.stroke(0);
    drawT( 30, 0, 4, val);
  }
}
let myT = new p5(T, 't');

// function setup() {
//   //createCanvas(windowWidth, windowHeight, SVG);
//   canvasA = createCanvas(100,200,SVG)

//   slider = createSlider(-100,100,0,10);
//   slider.position(30,250);
//   slider.style('width', '200px');
// }

// function draw() {
//   background(240);

//   let val = slider.value();

//   noFill();
//   strokeCap(PROJECT);
//   stroke(0);

//   drawA( 30, 30, 4, val);
//   drawB( 160, 30, 4, val);
//   drawC( 290, 30, 4, val);
//   drawD( 420, 30, 4, val);
//   drawE( 550, 30, 4, val);

//   drawF( 500, 0, 4);
//   drawG( 600, 0, 4);
//   drawH( 700, 0, 4);
//   drawI( 800, 0, 4);
//   drawJ( 200, 0, 4);
//   drawK( 200, 0, 4);
//   drawL( 200, 0, 4);
//   drawM( 200, 0, 4);
//   drawN( 200, 0, 4);
//   drawO( 200, 0, 4);
//   drawP( 200, 0, 4);
//   drawQ( 200, 0, 4);
//   drawR( 200, 0, 4);
//   drawS( 200, 0, 4);
//   drawT( 200, 0, 4);
//   drawU( 200, 0, 4);
//   drawV( 200, 0, 4);
//   drawW( 200, 0, 4);
//   drawX( 200, 0, 4);
//   drawY( 200, 0, 4);
//   drawZ( 200, 0, 4);

// }



// function drawB( x, y, sw, val){
//   push();
//   translate(x, y);

//   strokeWeight(sw);
//   beginShape();
//     vertex(0, 10);
//     vertex(60-val,10);
//     vertex(80-val,30);
//     vertex(80-val,110);
//     vertex(60-val,130);
//   endShape();
//   beginShape();
//     vertex(0,130);
//     vertex(70-val,130);
//     vertex(80-val,140);
//     vertex(80-val,180);
//     vertex(70-val,190);
//     vertex(10,190);
//     vertex(10,10);
//   endShape();

//   pop();
// }

function drawC( x, y, sw, val ){
  push();
  translate(x, y);

  strokeWeight(sw);
  beginShape();
  vertex(90-val,20);
  vertex(80-val,10);
  vertex(30,10);
  vertex(10,30);
  vertex(10,170);
  vertex(30,190);
  vertex(80-val,190);
  vertex(90-val,180);
  endShape();

  pop();
}

function drawD( x, y, sw, val ){
  push();
  translate(x, y);

  strokeWeight(sw);
  beginShape();
    vertex(0,10);
    vertex(70-val,10);
    vertex(90-val,30);
    vertex(90-val,170);
    vertex(70-val,190);
    vertex(10,190);
    vertex(10,10);
  endShape();

  pop();
}

function drawE( x, y, sw, val ){
  push();
  translate(x, y);

  strokeWeight(sw);
  beginShape();
  vertex(70-val,10);
  vertex(10,10);
  vertex(10,190);
  vertex(60-val,190);
  vertex(70-val,180)
  endShape();
  beginShape();
    vertex(0,130);
    vertex(60-val,130);
  endShape()

  pop();
}

var otpathA, otpathB, otpathN, otpathG, otpathS, otpathT;

function downloadSvg(){
  
  // for(var i=0; i<document.getElementsByTagName('svg').length; i++){
  //   console.log(i);
  //   let svgElement = document.getElementsByTagName('svg')[i];
  //   let element = svgElement.outerHTML;
  //   console.log(element);
    
  //   for(var j=0; j<svgElement.getElementsByTagName('path').length; j++){
  //   let path = svgElement.getElementsByTagName('path')[i]; 
  //   //let svg = svgElement.outerHTML;
  //   let svg = path.getAttribute('d');
  //   console.log(path);

  //   otpath = opentype.Path.fromSVG(path);

  //   }
  // }

  let svgA = document.getElementsByTagName('svg')[0];
  let pathA = svgA.getElementsByTagName('path')[0];

  let svgN = document.getElementsByTagName('svg')[1];
  let pathN = svgN.getElementsByTagName('path')[0];

  let svgG = document.getElementsByTagName('svg')[2];
  let pathG = svgG.getElementsByTagName('path')[0];

  let svgS = document.getElementsByTagName('svg')[3];
  let pathS = svgS.getElementsByTagName('path')[0];

  let svgT = document.getElementsByTagName('svg')[4];
  let pathT = svgT.getElementsByTagName('path')[0];

  // let svgB = document.getElementsByTagName('svg')[5];
  // let pathB = svgB.getElementsByTagName('path')[0];
  
  otpathA = opentype.Path.fromSVG(pathA);
  // otpathB = opentype.Path.fromSVG(pathB);
  otpathN = opentype.Path.fromSVG(pathN);
  otpathG = opentype.Path.fromSVG(pathG);
  otpathS = opentype.Path.fromSVG(pathS);
  otpathT = opentype.Path.fromSVG(pathT);
  
  
  const notdefGlyph = new opentype.Glyph({
    name: '.notdef',
    advanceWidth: 100,
    path: new opentype.Path()
  });
  
  const aGlyph = new opentype.Glyph({
      name: 'A',
      unicode: 65,
      advanceWidth: 180,
      path: otpathA
  })

  const nGlyph = new opentype.Glyph({
    name: 'N',
    unicode: 66,
    advanceWidth: 180,
    path: otpathN
  })

  const gGlyph = new opentype.Glyph({
    name: 'G',
    unicode: 67,
    advanceWidth: 180,
    path: otpathG
  })

  const sGlyph = new opentype.Glyph({
    name: 'S',
    unicode: 68,
    advanceWidth: 180,
    path: otpathS
  })

  const tGlyph = new opentype.Glyph({
    name: 'T',
    unicode: 69,
    advanceWidth: 180,
    path: otpathT
  })

  // const bGlyph = new opentype.Glyph({
  //   name: 'B',
  //   unicode: 70,
  //   advanceWidth: 180,
  //   path: otpathB
  // })

  const glyphs = [notdefGlyph, aGlyph, nGlyph, gGlyph, sGlyph, tGlyph];
  const font = new opentype.Font({
    familyName: 'trying',
    styleName: 'help',
    unitsPerEm: 100,
    ascender: 300,
    descender: -50,
    glyphs: glyphs
  })
  font.download();


  
}