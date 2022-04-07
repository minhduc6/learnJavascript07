let sum  = 0 ;
let btnCong = document.getElementsByClassName("nextBtn")[0]
let btnTru = document.getElementsByClassName("prevBtn")[0]
let divTarget =  document.getElementsByClassName("main-container")[0]
console.log(divTarget)
let h1 = document.getElementById("counter");

btnCong.addEventListener('click',function(){
    sum += 1;
    checkSum();
    h1.innerText = sum;
})
btnTru.addEventListener('click',function(){
    sum = sum - 1;
    checkSum();
    h1.innerText = sum;
})

function checkSum(){
    if (sum == 0) {
        divTarget.style.backgroundColor = '#333333'
    } else if(sum < 0 ){
        divTarget.style.backgroundColor = 'red'
    } else{
        divTarget.style.backgroundColor = 'green'
    }
}