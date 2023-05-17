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

var slider = document.getElementById("myRange")
var font;

async function main(){

    const buf = await fetch('assets/CraftworkGrotesk-SemiBold.otf')
    font = opentype.parse(await buf.arrayBuffer())
    console.log(font);

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

        const ctx = createGlyphCanvas(newGlyph, 120);
        const x = 20;
        const y = 80;
        const fontSize = 72;
        
        ctx.clearRect(0,0,120,120);

        newGlyph.draw(ctx, x, y, fontSize);
        // newGlyph.drawPoints(ctx, x, y, fontSize);
        newGlyph.drawMetrics(ctx, x, y, fontSize);

        }
}

main();

slider.addEventListener("change", main, false);

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