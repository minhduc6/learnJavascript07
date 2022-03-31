// Cau 1: Truy cập vào thẻ h1 có id=“heading” thay đổi màu chữ thành ‘red’, và in hoa nội dung của thẻ đó

let h1Target = document.getElementById("heading")
h1Target.style.color = "red"
h1Target.textContent = h1Target.textContent.toUpperCase()

// Cau 2 :Thay đổi màu chữ của tất cả thẻ có class “para” thành màu “blue” và có font-size = “20px”
let paras = document.getElementsByClassName("para")
for (let index = 0; index < paras.length; index++) {
    paras[index].style.color = "blue";
    paras[index].style.fontSize = "20px"
}
// Cau 3 : Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”
let newA = document.createElement('a')
newA.href = "https://www.facebook.com/"
newA.innerText = "Facebook"
console.log(newA)
let pTarget = paras[2];
console.log(pTarget)
pTarget.insertAdjacentElement('afterend',newA)

// Cau 4 Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”
let tieuDeEl = document.getElementById("title")
tieuDeEl.innerText = "Đây là thẻ tiêu đề"

// Cau 6 Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”

let newButton = document.createElement('button')
newButton.innerText = "Click me"

pTarget.parentElement.replaceChild(newButton,pTarget)

// Cau 7 Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó
let pTarget2 = paras[1];
let clonePara2 = pTarget2.cloneNode(true)
pTarget2.insertAdjacentElement("afterend",clonePara2)

// Cau 8 Xóa thẻ có class=“para-1”
let pTarget8 = document.getElementsByClassName("para-1")[0]
pTarget8.parentElement.removeChild(pTarget8)
