const burger = document.querySelector('.burger-menu')
const mobileMenu = document.querySelector('.mobileMenu-wrapper')
const header = document.querySelector('.header')
const menuLi = document.querySelectorAll('.navBar.mobile li a')
const navBarUl = document.querySelector('.navBar.mobile')
const logo = document.querySelector('.logo')
const burgerMenuItems = burger.querySelectorAll('.lines div')

let flag = false
let light = false

for (const li of menuLi) {
    li.addEventListener('click', function () {
        flag = !flag
        openCloseMenu()
    })
}

logo.addEventListener('click', ()=>{
    flag = false
    openCloseMenu()
})

burger.addEventListener('click', ()=>{
    let scrollDistance = window.scrollY

    if(scrollDistance >= document.querySelector('.section.two').offsetTop - document.querySelector('.header').clientHeight) {
        burgerOnclick()
    }  else{
        document.querySelector('.section.two').scrollIntoView({behavior: "smooth"})
        setTimeout(() => {
            burgerOnclick()   
        }, 200)
    }

})

function burgerOnclick() {
    flag = !flag
    if(header.classList.contains('light')){
        header.classList.remove('light')
        light = true
        openCloseMenu()
    } else{
        openCloseMenu()
    }
}

function openCloseMenu() {
    if(flag){
        burger.classList.add('active')

        setTimeout(() => {
            navBarUl.classList.add('active')
        }, 10);

        mobileMenu.style.display = 'block'
        body.style.overflow = 'hidden'

    } else{
        burger.classList.remove('active')

        setTimeout(() => {
            mobileMenu.style.display = 'none'
        }, 400);

        navBarUl.classList.remove('active')
        body.style.overflow = 'auto'

        if(light){
            light = false
            header.classList.add('light')
        }
    }
}