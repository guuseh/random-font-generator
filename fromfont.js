

// first function before there are any canvases 
function createGlyphCanvas(glyph, size) {
    const canvasId = 'c' + glyph.index;
    const canvasClass = 'glyphCanvas'
    const html = '<div class="wrapper" style="width:' + size + 'px"><canvas id="'+ canvasId + '" class="' + canvasClass + '" width="' + size + '" height="' + 100 + '" style="background-color: #EEEEEE"></canvas><span>' + glyph.name + '</span></div>';
    const glyphsDiv = document.getElementById('glyphs');
    const wrap = document.createElement('div');
    wrap.innerHTML = html;
    glyphsDiv.appendChild(wrap);
    const canvas = document.getElementById(canvasId);
    return canvas.getContext('2d');
}

// function to call after canvases are already made to delete previous canvases
function createGlyphCanvasNew(glyph, size) {
    const canvasId = 'c' + glyph.index;
    document.getElementById(canvasId).parentNode.parentNode.remove();
    const canvasClass = 'glyphCanvas'
    const html = '<div class="wrapper" style="width:' + size + 'px"><canvas id="'+ canvasId + '" class="' + canvasClass + '" width="' + size + '" height="' + 100 + '" style="background-color: #EEEEEE"></canvas><span>' + glyph.name + '</span></div>';
    const glyphsDiv = document.getElementById('glyphs');
    const wrap = document.createElement('div');
    wrap.innerHTML = html;
    glyphsDiv.appendChild(wrap);
    const canvas = document.getElementById(canvasId);
    return canvas.getContext('2d');
}



// -------------------------------------------
// first function called once at the beginning
async function main(){

    const buf = await fetch('assets/CraftworkGrotesk-SemiBold.otf')
    const font = opentype.parse(await buf.arrayBuffer())

    var value = slider.value;

    for (let j=0; j<font.glyphs.length; j++){
        glyph = font.glyphs.get(j);
        const path = glyph.toPathData();

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

        newGlyph.draw(ctx, x, y, fontSize);
        // newGlyph.drawPoints(ctx, x, y, fontSize);
        //glyph.drawMetrics(ctx, x, y, fontSize);

        }
        drawText();
}

// call first render of fonts
main();


// ---------------------------------------------------------------------
// second function called on change of slider - removes the old canvases 
var slider = document.getElementById("myRange")
let allglyphs = []

async function redoMain(){

    allglyphs.length = 0;
    const buf = await fetch('assets/CraftworkGrotesk-SemiBold.otf')
    font = opentype.parse(await buf.arrayBuffer())

    var value = slider.value;

    for (let j=0; j<font.glyphs.length; j++){
        glyph = font.glyphs.get(j);

        const path = glyph.toPathData()

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

        const ctx = createGlyphCanvasNew(newGlyph, 120);
        const x = 20;
        const y = 80;
        const fontSize = 72;
        
        ctx.clearRect(0,0,120,120);

        newGlyph.draw(ctx, x, y, fontSize);
        // newGlyph.drawPoints(ctx, x, y, fontSize);
        // newGlyph.drawMetrics(ctx, x, y, fontSize);

        }
        drawText();

}

// listen for change in slider and call second function
slider.addEventListener("change", redoMain, false);
// slider.addEventListener("change", drawText, false);

// --------------------------------------------------------
// compile glyphs into 1 font and download with unique name
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

// typewriter
var typewriter = document.getElementById('typewriter');
var typectx = typewriter.getContext('2d');

var gPreviewText = 'type here...'

async function drawText () { 

    const writeFont = new opentype.Font({
        familyName: 'Write-generated',
        styleName: 'Print',
        unitsPerEm: 1000,
        ascender: 800,
        descender: -200,
        glyphs: allglyphs
    })

    var c = typewriter;
    var r = c.getBoundingClientRect();
    c.width = r.width;
    c.height = r.height;
    var prectx = c.getContext('2d')
    // prectx.save();
    // prectx.scale(1.0, -1.0);
    // prectx.translate(0, -c.height);

    console.log(writeFont);
    writeFont.draw(prectx, gPreviewText, 10, 140, 150, {kerning: false})

}
function changePreviewText(e){
    gPreviewText = e.target.value;
    drawText();
}

function printText(){
    var textCanvas = document.getElementById("typewriter");
    var url = textCanvas.toDataURL();
    printJS({printable:'typewriter', type:'html', maxWidth: 4000});
    // var win = window.open();
    // win.document.write("<img src='" + url + "' style='border: 1px solid black'/>");
    // win.setTimeout(() => win.print(), 0);
}

document.getElementById('preview-text').addEventListener('input', changePreviewText)
// drawText()