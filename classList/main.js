const heading = document.querySelector("h1")

console.log(heading.classList)

heading.classList.add("text-uppercase","text-center")

heading.classList.remove("text-uppercase","text-center")

console.log(heading.classList.contains("text-uppercase","text-center"))

console.log(heading.classList.contains("text-red"))

// Timer sau 1 thoi gian nhat dinh (ms)
setInterval(function(){
    heading.classList.toggle("text-red")
},1000)

