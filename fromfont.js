async function main(){



let slider;
let weight;
let val;
var font;

// Create a canvas and adds it to the document.
// Returns the 2d drawing context.
function createGlyphCanvas(glyph, size) {
    const canvasId = 'c' + glyph.index;
    const html = '<div class="wrapper" style="width:' + size + 'px"><canvas id="' + canvasId + '" width="' + size + '" height="' + 100 + '" style="background-color: #EEEEEE"></canvas></div>';
    const glyphsDiv = document.getElementById('glyphs');
    const wrap = document.createElement('div');
    wrap.innerHTML = html;
    glyphsDiv.appendChild(wrap);
    const canvas = document.getElementById(canvasId);
    return canvas.getContext('2d');
}

var letters = "abcdefghijklmnopqrstuwxyz"

// const buf = await fetch('assets/Milkman.woff');
const buf = await fetch('assets/CraftworkGrotesk-SemiBold.otf')
console.log(buf)

font = opentype.parse(await buf.arrayBuffer())

let pathArray = []

for (let j=2; j<font.glyphs.length; j++){
    glyph = font.glyphs.get(j);
    console.log(glyph.name)
    const svgData = glyph.toSVG()
    console.log(svgData)
    const path = glyph.toPathData()

    console.log("original",path)

    let subStringArr = []
    let tempStr =''

    for (let i = 0; i < path.length; i++) {


        if(path[i] === 'C' || path[i] === 'M' || path[i] === 'L' || path[i] === 'Q' || path[i] === '-' ||  path[i] === ' '){

            
            if(tempStr.length > 0){

                console.log('here')

                subStringArr += Math.floor(Math.random() * 200) - 100 + parseInt(tempStr)
            }
            subStringArr += path[i] 


            tempStr = ''
        }else if (path[i] === 'Z'){
            subStringArr += tempStr
            subStringArr += path[i]  

            // return the whole thing later
        } else {
            
            tempStr += path[i]

        }
        
    }

    console.log("modified", subStringArr)

    const newPath = opentype.Path.fromSVG(subStringArr)

// convert to a readable path

console.log(letters)

    // alter the path data

    // console.log(path)


    // convert it back to the glyph

    var newGlyph = new opentype.Glyph({
        index: glyph.index,
        name: glyph.name,
        unicode: glyph.unicode,
        advanceWidth: glyph.advanceWidth,
        path: newPath
    });

    const ctx = createGlyphCanvas(newGlyph, 120);
    const x = 20;
    const y = 90;
    const fontSize = 72;

    console.log(glyph)
    console.log(newGlyph)

    newGlyph.draw(ctx, x, y, fontSize);
    // newGlyph.drawPoints(ctx, x, y, fontSize);
    newGlyph.drawMetrics(ctx, x, y, fontSize);

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