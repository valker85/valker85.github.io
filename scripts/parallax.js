// const parallaxBlock = document.querySelector('.parallax-effect-block')
const parallaxBlocks = Array.from(document.querySelectorAll('.parallax-effect-block'))
const parallaxEls = Array.from(document.querySelectorAll('.PME-secondBlock'))
const parallaxElsThree = Array.from(document.querySelectorAll('.PME-thirdBlock'))

const distanceX = 6
const distanceY = 1
const speed = 0.1

let positionX = 0
let positionY = 0

let coordXpercent = 0
let coordYpercent = 0
let coordXpercentThirdSec = 0
let coordYpercentThirdSec = 0

let section = 1
let isClear = false


function setMouseParallaxStyle() {
    let distX
    let distY

    if(section === 1){
        distX = coordXpercent - positionX
        distY = coordYpercent - positionY

    } else{
        distX = coordXpercentThirdSec - positionX
        distY = coordYpercentThirdSec - positionY 
    }

    positionX = positionX + (distX * speed)
    positionY = positionY + (distY * speed)

    // элементы первого блока
    for (let i = 0; i < parallaxEls.length; i++) {
        parallaxEls[i].style.cssText = `transform: translate(${positionX / distanceX}%, ${positionY / distanceY}%)`
    }
    // элементы второго блока
    for (let i = 0; i < parallaxElsThree.length; i++) {
        parallaxElsThree[i].style.cssText = `transform: translate(${positionX / distanceX}%, ${positionY / distanceY}%)`
    }

    requestAnimationFrame(setMouseParallaxStyle)
}

for (const block of parallaxBlocks) {
    block.addEventListener('mousemove', function(e){

        const parallaxWidth = block.offsetWidth
        const parallaxHeight = block.offsetHeight

        const coordX = e.pageX - parallaxWidth / 2
        const coordY = e.pageY - parallaxHeight / 2

        if(block.classList.contains('three')){
            section = 2

            coordXpercentThirdSec = coordX / parallaxWidth * 100
            coordYpercentThirdSec = (coordY / parallaxHeight * 100) - 140


        } else{
            section = 1

            coordXpercent = coordX / parallaxWidth * 100
            coordYpercent = coordY / parallaxHeight * 100
        }


    })
}

setMouseParallaxStyle()
