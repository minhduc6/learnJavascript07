
// document.addEventListener('mousedown', function () {
//     console.log('mousedown');
// })

// document.addEventListener('mousemove', function () {
//     console.log('mousemove');
// })

// document.addEventListener('mouseup', function () {
//     console.log('mouseup');
// })

document.addEventListener('mousemove', function (event) {


    const boxEl = document.querySelector(".box")
    if(boxEl){
         boxEl.parentElement.removeChild(boxEl)
    }
    // create box
    let box = document.createElement('div')
    box.classList.add("box")
    
    // set vi tri cho box
    box.style.left = `${event.offsetX-50}px`;
    box.style.top = `${event.offsetY-50}px`;

    //Gan vao dom
    document.body.appendChild(box)
    // remove

    
})