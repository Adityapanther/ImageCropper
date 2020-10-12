const file = document.getElementById('file');
const uploadBtn = document.getElementById('uploadBtn');
const canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

uploadBtn.addEventListener("click", ()=>{
    console.log("hello");
})

ctx.toDataURL("http://localhost:5500/images/smp.png")

console.log(ctx);



