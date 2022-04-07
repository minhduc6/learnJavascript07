let inputTarget = document.querySelector('input')
let buttonTarget = document.querySelector('button')
console.log(buttonTarget)

buttonTarget.addEventListener('click',function(){
    if(buttonTarget.innerText == 'Show'){
        buttonTarget.innerText = 'Hiden'
        inputTarget.type = 'text'
    } else{
        buttonTarget.innerText = 'Show'
        inputTarget.type = 'password'
    }
})