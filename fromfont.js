let allglyphs = []

function createGlyphCanvas(glyph, size) {
    const canvasId = 'c' + glyph.index;
    const canvasClass = 'glyphCanvas'
    // const html = '<div class="wrapper" style="width:' + size + 'px"><canvas id="' + canvasId + '" width="' + size + '" height="' + 100 + '" style="background-color: #EEEEEE"></canvas></div>';
    const html = '<div class="wrapper" style="width:' + size + 'px"><canvas id="'+ canvasId + '" class="' + canvasClass + '" width="' + size + '" height="' + 100 + '" style="background-color: #EEEEEE"></canvas></div>';
    const glyphsDiv = document.getElementById('glyphs');
    const wrap = document.createElement('div');
    wrap.innerHTML = html;
    glyphsDiv.appendChild(wrap);
    const canvas = document.getElementById(canvasId);
    return canvas.getContext('2d');
}

function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

var slider = document.getElementById("myRange")
var font;

async function main(){

// removeElementsByClass('glyphCanvas');

const buf = await fetch('assets/CraftworkGrotesk-SemiBold.otf')
font = opentype.parse(await buf.arrayBuffer())
console.log(font);

    var value = slider.value;

    for (let j=0; j<font.glyphs.length; j++){
        glyph = font.glyphs.get(j);
        // console.log(glyph.name)
        //const svgData = glyph.toSVG()
        // console.log(svgData)
        const path = glyph.toPathData()

        // console.log("original",path)

        let subStringArr = []
        let tempStr =''

        for (let i = 0; i < path.length; i++) {

            if(path[i] === 'C' || path[i] === 'M' || path[i] === 'L' || path[i] === 'Q' || path[i] === '-' ||  path[i] === ' '){
   
                if(tempStr.length > 0){
                    subStringArr += Math.floor(Math.random() * value)  + parseInt(tempStr)
                }
                subStringArr += path[i] 
                tempStr = ''

            } else if (path[i] === 'Z'){
                subStringArr += tempStr
                subStringArr += path[i]  

            } else {
                tempStr += path[i]

            }
        }
            
        const newPath = opentype.Path.fromSVG(subStringArr)

        var newGlyph = new opentype.Glyph({
            index: glyph.index,
            name: glyph.name,
            unicode: glyph.unicode,
            advanceWidth: glyph.advanceWidth,
            path: newPath
        });

        allglyphs.push(newGlyph)

        const ctx = createGlyphCanvas(newGlyph, 120);
        const x = 20;
        const y = 80;
        const fontSize = 72;
        
        ctx.clearRect(0,0,120,120);
        //newGlyph.parentNode.removeChild(newGlyph);

        newGlyph.draw(ctx, x, y, fontSize);
        // newGlyph.drawPoints(ctx, x, y, fontSize);
        newGlyph.drawMetrics(ctx, x, y, fontSize);

        // slider.addEventListener("change", function (){ newGlyph.draw (ctx, x, y, fontSize); console.log('a'); }, false)


        }
}

main();

slider.addEventListener("change", main, false);

// slider.addEventListener("change", removeElementsByClass("glyphCanvas"), false)

function downloadFont(){
    var currentDate = new Date();

    const randomFont = new opentype.Font({
            familyName: 'Generated' +currentDate.getDate()
                                    +(currentDate.getMonth()+1)
                                    +currentDate.getFullYear()
                                    +currentDate.getHours()
                                    +currentDate.getMinutes()
                                    +currentDate.getSeconds(),
            styleName: 'Random',
            unitsPerEm: 1000,
            ascender: 800,
            descender: -200,
            glyphs: allglyphs
        })
        console.log(randomFont);
        randomFont.download();

}