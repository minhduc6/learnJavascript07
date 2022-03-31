//documentGetById
let h1Target = document.getElementById("heading")
console.log(h1Target)

// query selector

const para3 = document.querySelector("p:nth-child(4)")
console.log(para3)

const ul2 = document.querySelector("ul:last-child")
console.log(ul2)

const ul1 = document.querySelector(".box + ul")
console.log(ul1)

const li44 = document.querySelector(".box ul > li:last-child")
console.log(li44)

// query SelectorAll

const paras = document.querySelectorAll("p")
console.log(paras)
console.log(paras[2])
console.log(paras.length)

for (let index = 0; index < paras.length; index++) {
   console.log(paras[index])
}
Array.from(paras).map(ele => console.log(ele))

// Truy cap gian tiep 

console.log("-----------------------------------")
console.log(para3.previousElementSibling)
console.log(para3.nextElementSibling)
console.log(para3.parentElement)
console.log("------------------------------------")
//Thay doi css
h1Target.style.color = "red"
h1Target.style.backgroundColor = " black"

for (let index = 0; index < paras.length; index++) {
    paras[index].style.color = "blue    "
}

Array.from(paras).map(ele => ele.style.fontSize="30px")
// Lay ra noi dung
console.log(h1Target.innerHTML)
console.log(h1Target.innerText)
console.log(h1Target.textContent)

console.log(ul1.innerHTML)
console.log(ul1.innerText)
console.log(ul1.textContent)
//Thay doi noi dung
h1Target.innerHTML = "Xin Chào"
h1Target.innerHTML = "<span> Các Bạn </span>"

h1Target.innerText = "Các bạn có khoẻ không ?"
h1Target.innerText = "<span> Yếu </span>"

// Tao Thẻ
const link = document.createElement("a")
link.innerText = "Google"
link.href="https://www.google.com.vn/"
document.body.appendChild(link)
console.log(link)

let boxEl = document.querySelector(".box")

document.body.insertBefore(link,boxEl)

//

const liNew = document.createElement("li")
liNew.innerText = "li new"
let ulTarget = document.querySelector("body > ul")
//let liTarget = document.querySelectorAll("body ul > li:nth:child(3))")
console.log(ulTarget)
let liTarget = document.querySelector("body > ul  li:nth-child(3)")
console.log(liTarget)
ulTarget.insertBefore(liNew,liTarget)

let para2 = paras[1];
para2.insertAdjacentHTML("beforebegin","<button>Login</button>")

let para1 = paras[0];
para1.insertAdjacentHTML("afterend","<button>Logout</button>")

const newli1 = document.createElement("li")
newli1.innerHTML= "hello world"
const ul3 = document.querySelector(".box ul")
ul3.insertAdjacentElement("afterbegin",newli1)

// Delete
document.body.removeChild(para2)


//Replace

let h2New = document.createElement("h2")
h2New.innerText="Alo Alo"

h1Target.parentElement.replaceChild(h2New,h1Target);

// Copy
const boxCopy1 = boxEl.cloneNode(true)
const boxCopy2 = boxEl.cloneNode(false)
console.log(boxCopy1)
console.log("----------------------")
console.log(boxCopy2)

h2New.insertAdjacentElement('afterend',boxCopy1)