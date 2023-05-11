var UNITS_PER_EM = 1000;
var ASCENDER = 900;
var DESCENDER = -100;
var SCALE = 80;

var GLYPH_MAP = {
    A: [],
    B: [],
    C: [],
}

var glyphNames = Object.keys(GLYPH_MAP)

let canva = ( c ) => {

    c.preload = function(){
        fontLoad = c.loadFont('assets/CraftworkGrotesk-SemiBold.otf')
    }

    c.draw = function(){
    for (var i=0; i< glyphNames.length; i++){
        var fName = glyphNames[i];

        let funcName = ( p ) => {
            let points;
            let bounds;

            p.setup = function(){
                p.createCanvas(200,200,p.SVG)
                p.stroke(0);
                p.fill(0);

                points = fontLoad.textToPoints(fName, 0,0,10, {
                    sampleFactor: 10,
                    simplifyThreshold: 0
                })
                bounds = fontLoad.textBounds(fName,0,0,10)
            }
            p.draw = function(){
                p.background(255);
                p.beginShape();
                p.translate(-bounds.x * p.width / bounds.w, -bounds.y * p.height / bounds.h);
                for(let j=0; j<points.length; i++){
                    let point = points[i];
                    p.vertex(point.x * p.width / bounds.w, point.y * p.height / bounds.h)
                }
                p.endShape(p.CLOSE)
            }
        }
        let indivCanvas = new p5(funcName )
    }

    }
}