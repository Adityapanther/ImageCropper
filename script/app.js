const file = document.getElementById('file');
const uploadBtn = document.getElementById('uploadBtn');
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

let arraBf, imgElem;

file.addEventListener('change', handleFile)

function handleFile(){
    var firstFile = this.files[0];
    var reader = new FileReader();
    imgElem = document.createElement('img')
    imgElem.width = 200;
    imgElem.height = 200;
    reader.onload = function(){
        var dataSrc = reader.result;
        imgElem.src = dataSrc;
    }

    reader.readAsDataURL(firstFile);
    
    
}


uploadBtn.addEventListener("click", ()=>{
    const centerWidth = canvas.width/2;
    const centerHeight = canvas.height/2;
    ctx.drawImage(imgElem, centerWidth ,centerHeight)
})

// ctx.drawImage("http://localhost/imgages/smp.png", 0, 0)



