

// first function before there are any canvases 
function createGlyphCanvas(glyph, size) {
    const canvasId = 'c' + glyph.index;
    const canvasClass = 'glyphCanvas'
    const html = '<div class="wrapper" style="width:' + size + 'px"><canvas id="'+ canvasId + '" class="' + canvasClass + '" width="' + size + '" height="' + 100 + '"></canvas></div>';
    const glyphsDiv = document.getElementById('glyphs');
    const wrap = document.createElement('div');
    wrap.classList.add('glyphwrap')
    wrap.innerHTML = html;
    glyphsDiv.appendChild(wrap);
    const canvas = document.getElementById(canvasId);
    return canvas.getContext('2d');
}

// function to call after canvases are already made to delete previous canvases
function createGlyphCanvasNew(glyph, size) {
    const canvasId = 'c' + glyph.index;
    if(document.getElementById(canvasId)){
        document.getElementById(canvasId).parentNode.parentNode.remove(); }
    const canvasClass = 'glyphCanvas'
    const html = '<div class="wrapper" style="width:' + size + 'px"><canvas id="'+ canvasId + '" class="' + canvasClass + '" width="' + size + '" height="' + 100 + '"></canvas></div>';
    const glyphsDiv = document.getElementById('glyphs');
    const wrap = document.createElement('div');
    wrap.classList.add('glyphwrap')
    wrap.innerHTML = html;
    glyphsDiv.appendChild(wrap);
    const canvas = document.getElementById(canvasId);
    return canvas.getContext('2d');
}

document.getElementById("inputfontbutton").addEventListener('click', () => {
    document.querySelector('input[type="file"]').click();
})

// -------------------------------------------
// first function called once at the beginning
async function main(){

    // const buf = await fetch('assets/CraftworkGrotesk-SemiBold.otf')
    const buf = await fetch('assets/CraftworkGrotesk-SemiBold.otf')
    const font = opentype.parse(await buf.arrayBuffer())

    let credit = document.getElementById("fontCredit");
    credit.innerHTML = "<h3>Current font:</h3> Craftwork Grotesk Semibold"

    let upload = document.getElementById("uploadedfile");
    upload.innerHTML = "no file chosen";

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
var slider = document.getElementById("myRange");
var removeButton = document.getElementById("removeButton");

var fontInput
let allglyphs = []

async function redoMain(){

    const glyphdivs = document.querySelectorAll('.glyphCanvas');
    glyphdivs.forEach(glyphdiv => { glyphdiv.parentNode.parentNode.remove(); })
 
    allglyphs.length = 0;
    fontInput = document.getElementById("inputFont").files;
    var fontFile = document.getElementById("inputFont").files[0];
    // console.log(fontFile);
    let credit = document.getElementById("fontCredit");
    let upload = document.getElementById("uploadedfile");
    
    // const buf = await fetch('assets/CraftworkGrotesk-SemiBold.otf')
    if (fontInput.length > 0){
         font = opentype.parse(await fontFile.arrayBuffer())
         credit.innerHTML = "<h3>Current font:</h3> " + fontFile.name;
         upload.innerHTML = "File: " + fontFile.name
    } else{
         const buf = await fetch('assets/CraftworkGrotesk-SemiBold.otf')
         font = opentype.parse(await buf.arrayBuffer())
         credit.innerHTML = "<h3>Current font:</h3> Craftwork Grotesk Semibold"
         upload.innerHTML = "no file chosen";
        } 

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
        // try {
        const ctx = createGlyphCanvasNew(newGlyph, 120);
        const x = 20;
        const y = 80;
        const fontSize = 72;
        
        ctx.clearRect(0,0,120,120);
  
        newGlyph.draw(ctx, x, y, fontSize);
 
        }

        drawText()
}

// listen for change in slider and call second function
slider.addEventListener("change", redoMain, false);
removeButton.addEventListener("click", redoMain, false);
document.getElementById("inputFont").addEventListener("change", redoMain, false);


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

    // console.log(randomFont);
    randomFont.download();

}

async function removeFont(){
    document.getElementById("inputFont").value="";
    redoMain();
}

// typewriter
var typewriter = document.getElementById('typewriter');
var typectx = typewriter.getContext('2d');

var textArray = ["The quick brown fox jumps over the lazy dog", 
                 "Pack my box with five dozen liquor jugs", 
                 "The five boxing wizards jump quickly",
                 "Junk MTV quiz graced by fox whelps",
                 "My ex pub quiz crowd gave joyful thanks",
                 "Vexed nymphs go for a quick waltz job",
                 "Sphinx of black quartz, judge my vow",
                 "Sex prof. gives back no quiz with mild joy",
                 "Go, lazy fat vixen; be shrewd, jump quick",
                 "Quick fox jumps nightly above wizard"]
var arrayId = Math.round(Math.random()*(textArray.length-1));

var gPreviewText = textArray[arrayId]

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

    
    writeFont.draw(prectx, gPreviewText, 10, 50, 50, {kerning: false}); 
}
window.onresize = drawText;

async function changePreviewText(e){
    gPreviewText = e.target.value;
    drawText();
}

function printText(){
    var textCanvas = document.getElementById("typewriter");
    var url = textCanvas.toDataURL();

    var windowContent = '<!DOCTYPE html>';
    windowContent += '<html>'
    windowContent += '<head><title>Print canvas</title></head>';
    windowContent += '<body style="margin: 0">'
    windowContent += '<img src="' + url + '" style="transform-origin: bottom left; transform: rotate(90deg) translate(-50px, 0) scale(4)">';
    windowContent += '</body>';
    windowContent += '</html>';
    var printWin = window.open('','','width=300,height=auto');
    printWin.document.open();
    printWin.document.write(windowContent);
    printWin.document.close();
    printWin.focus();
    printWin.print();
    //printWin.close();
    //printJS({printable:'typewriter', type:'html', maxWidth: 4000});

}

document.getElementById('preview-text').addEventListener('input', changePreviewText)
// drawText()