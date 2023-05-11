async function main(){



let slider;
let weight;
let val;
var font;

var letters = "abcdefghijklmnopqrstuwxyz"

const buf = await fetch('assets/Milkman.woff');
console.log(buf)

font = opentype.parse(await buf.arrayBuffer())



for (let i=0; i<font.glyphs.length; i++){
    glyph = font.glyphs.get(i);
    console.log(glyph)
}

// function setup(){
//     createCanvas();
//     //font = loadFont('assets/CraftworkGrotesk-SemiBold.otf')
//     slider = createSlider(-10,10,0,0.1);
//     slider.position(10,250);
//     slider.style('width', '200px');
//     // textSize(10);


//     weight = createSlider(0,10,0,0.5);
//     weight.position(10,270);
//     weight.style('width','200px');

// }

// let fontF = ( fontf ) => {
//     //let font;
//     fontf.preload = function(){
//         font = fontf.loadFont('assets/CraftworkGrotesk-SemiBold.otf')
//     }
//     let points;
//     let bounds;

//     fontf.setup = function(){
//         fontf.createCanvas(170,230, fontf.SVG)
//         fontf.stroke(0);
//         fontf.fill(0);
//         // fontf.noFill();
        

//         points = font.textToPoints('q', 10,170,200, {
//             sampleFactor: 2,
//             simplifyThreshold: 0
//         })
//         // bounds = font.textBounds('q', 10,170,200)
//     }
//     fontf.draw = function(){
//         sw = weight.value();
//         fontf.background(240);
//         fontf.randomSeed(0);
//         fontf.strokeWeight(sw);
//         fontf.beginShape();
//         val = slider.value();
//         //fontf.translate(-bounds.x * fontf.width / bounds.w, -bounds.y * fontf.height /bounds.h);
        
//         for(let i=0; i<points.length; i++){
//             let p = points[i];
//             // fontf.vertex(p.x * fontf.width / bounds.w, p.y * fontf.height / bounds.h);
//             fontf.vertex(p.x+fontf.random()*val,p.y+fontf.random()*val);
//         }

//         fontf.endShape(fontf.CLOSE);
//     }
// }
// let fontCanvas = new p5(fontF, "q");

// let A = (a) => {
//     let font;
//     a.preload = function(){
//         font = a.loadFont('assets/CraftworkGrotesk-SemiBold.otf')
//     }
//     let points;
//     let bounds;

//     a.setup = function(){
//         a.createCanvas(170,230, a.SVG)
//         a.stroke(0);
//         a.fill(0);

//         points = font.textToPoints('b', 10,170,200, {
//             sampleFactor: 2,
//             simplifyThreshold: 0
//         })
//         // bounds = font.textBounds('b', 10,170,200)
//     }
//     a.draw = function(){
//         a.background(240);
//         sw = weight.value();
//         a.strokeWeight(sw);
//         a.beginShape();
//         //fontf.translate(-bounds.x * fontf.width / bounds.w, -bounds.y * fontf.height /bounds.h);
        
//         for(let i=0; i<points.length; i++){
//             let p = points[i];
//             // fontf.vertex(p.x * fontf.width / bounds.w, p.y * fontf.height / bounds.h);
//             a.vertex(p.x,p.y);
//         }

//         a.endShape(a.CLOSE);
//     }
// }
// let fontCanvas2 = new p5(A, "b");

//     var GLYPH_MAP = [ "A", "B" ];

//     const notdefGlyph = new opentype.Glyph({
//         name: '.notdef',
//         advanceWidth: 100,
//         path: new opentype.Path()
//     })

//     var glyphs = [notdefGlyph];
//     console.log(GLYPH_MAP[0]);

// function downloadSvg(){
    
//     let svgcount = document.getElementsByTagName('svg').length;
    
//     for ( i=0; i<svgcount; i++){
//     let svgFont = document.getElementsByTagName('svg')[i];
//     let pathFont = svgFont.getElementsByTagName('path')[0];
//     var glyphname = GLYPH_MAP[i];

//     var pathGen = opentype.Path.fromSVG(pathFont);

//     const glyph = new opentype.Glyph({
//         name: glyphname,
//         unicode: glyphname.charCodeAt(0),
//         advanceWidth: 200,
//         path: pathGen
//     })
//     glyphs.push(glyph);
//     }

//     const fontOTF = new opentype.Font({
//         familyName: 'abc',
//         styleName: 'help',
//         unitsPerEm: 100,
//         ascender: 300,
//         descender: 0,
//         glyphs: glyphs
//     })
//     fontOTF.download();

// }

}



main()