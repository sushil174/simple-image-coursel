const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const container = document.querySelector('.container');
const frame = document.querySelector('.frame')
let val = 0
const imgSize = 500
function moveSlide(index,limit=4) {
    val = ( val + index ) % limit
    if(val < 0) val += limit
    container.style.right = (val * imgSize) + 'px';
}


next.addEventListener('click',() => {
    moveSlide(1)
})


prev.addEventListener('click', ()=> {   
    moveSlide(-1)
})

const buttons = Array.from(document.querySelectorAll('.move'))
buttons.forEach(button => {
    button.addEventListener('click', e => {

        const a = (e.target.dataset.index - 1) - val
        const index = a
        moveSlide(index)
    })
})

// const myiTmeOut = setInterval(moveSlide,2000)