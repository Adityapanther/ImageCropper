const file = document.getElementById('file');
const uploadBtn = document.getElementById('uploadBtn');
const canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

let arraBf;

file.addEventListener('change', handleFile)

function handleFile(){
    var firstFile = this.files[0];
    var reader = new FileReader();
    var imgElem = document.createElement('img')
    ctx.drawImage(reader.readAsArrayBuffer(firstFile), 0,0)
}


uploadBtn.addEventListener("click", ()=>{
    ctx.drawImage(arraBf, 0,0)
})


console.log(ctx);
console.log(canvas);

// ctx.drawImage("http://localhost/imgages/smp.png", 0, 0)



