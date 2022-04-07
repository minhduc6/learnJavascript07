// HTML Atrr
function sayHello(){
    alert("Hello World");
}

// Dom property

let btn2 = document.getElementById('btn-2')
btn2.onclick = function(){
    alert("Xin chao các bạn 2");
}

let btn3 = document.getElementById('btn-3')
btn3.addEventListener("click",function(){
    alert("Xin chao các bạn 3");
})