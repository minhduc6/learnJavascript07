
// Câu 1. Tạo 1 thẻ p có id=“text”, có nội dung bất kỳ (có thể tạo bằng HTML hay Javascript - tùy chọn). Yêu cầu
//Đặt màu văn bản thành #777
//Đặt kích thước phông chữ thành 2rem
//Đặt nội dung HTML thành Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.
let pElement = document.createElement("p")
pElement.id = "text"
pElement.style.fontSize = "2rem"
pElement.innerHTML = "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript."
document.body.insertAdjacentElement('afterbegin',pElement)

// Câu 2 : Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue (tạo thẻ ul-li bằng html)
let ul1 = document.querySelector("body > ul ")
let listLi = ul1.children
console.log(listLi)
for(let i = 0 ; i < listLi.length;i++){
    listLi[i].style.color = "blue"
}
//Câu 3
//-Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
let ulTarget = document.getElementById("list")
let item8 = document.createElement("li")
item8.innerText = "Item 8"
ulTarget.appendChild(item8)
let item9 = document.createElement("li")
item9.innerText = "Item 9"
ulTarget.appendChild(item9)
let item10 = document.createElement("li")
item10.innerText = "Item 10"
ulTarget.appendChild(item10)
//Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
let listLi2 = ulTarget.children
console.log(listLi2)
listLi2[0].style.color = "red"

//Sửa background cho thẻ <li> 3 thành màu xanh (background-color)

listLi2[2].style.backgroundColor = "blue"

//Remove thẻ <li> 4

ulTarget.removeChild(listLi2[3])

//Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
let itemNew = document.createElement("li")
itemNew.innerText = "Techmaster"

let liTarget = listLi2[3]
liTarget.insertAdjacentElement('beforebegin',itemNew)