// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'

const openPopUp = Array.from(document.querySelectorAll('.project'))
const closePopUp = document.querySelector('.pop_up_close')
const popUp = document.querySelector('.pop_up')

// Для запрета скролла
const body = document.querySelector('body')

// Для отслеживания клика на темную область
const popUpContainer = document.querySelector('.pop_up_container')

// Текст модального окна
const popUpText = document.querySelector('.popUpText')

const popUpState = {
    'modal1': {
        title: 'Пример моей верстки по макету'
    },
    'modal2': {
        title: 'Пример моей верстки по макету'
    },
    'modal3':{
        title: 'Crypto Exchange'
    },
    'modal4': {
        title: 'NFT Airdrop'
    },
    'modal5': {
        title: 'Yukigassen'
    },
    'modal6':{
        title: 'Project Hope'
    },
    'modal7': {
        title: 'CoinPay'
    },
    'modal8': {
        title: 'BinaryX'
    },
    'modal9':{
        title: 'The House'
    },
    'modal10': {
        title: 'Konyak Hotel'
    },
    'modal11': {
        title: 'ProkatAM'
    },
    'modal12':{
        title: 'MrFast'
    }
}

// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,

//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//         dynamicBullets: true,
//     },

//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     // And if we need scrollbar
//     // scrollbar: {
//     //     el: '.swiper-scrollbar',
//     // },
// });

function modalWindow(id) {
    openPopUpFn()

    popUpText.innerHTML = popUpState[id].title
}

// Закрываем модальное окно с помощью кнопки 'Esc'
document.addEventListener('keydown', (event)=>{
    if(event.keyCode === 27){
        closePopUpFn()
    }
})

// Закрываем модальное окно с помощью крестика
closePopUp.addEventListener('click', ()=>{
    closePopUpFn()
})

// Закрываем модальное окно с помощью крестика
popUpContainer.addEventListener('click', (event)=>{
    if(event.target.className === 'pop_up_container'){
        closePopUpFn()
    }
})

// Ф-ции открывающие/закрывающие модальное окно
function closePopUpFn() {
    popUp.classList.remove('active')
    body.style.overflow = 'auto'
}
function openPopUpFn() {
    popUp.classList.add('active')
    body.style.overflow = 'hidden'
}
// .......................................................................................