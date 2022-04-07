let pTarget = document.getElementById("text")
// HTML Atrr
function changeQuotes() {
    let quotes = ["Uống Nước Nhớ Nguồn" , "Ăn quả nhớ kẻ trồng cây","Aloloalo"];
    let i = Math.floor(Math.random() * quotes.length);
    pTarget.innerText = quotes[i]
}
// Dom property
let btn2 = document.getElementById("btn-2")
console.log(btn2)
btn2.onclick = function(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    pTarget.style.color = "#" + randomColor;
}

function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

let btn3 = document.getElementById('btn-3')
btn3.addEventListener("click",function(){
    pTarget.style.background = getRandomRgb()
})