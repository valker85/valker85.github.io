// Элементы при нажатии которых открывается модальное окно
const openPopUp = Array.from(document.querySelectorAll('.project'))

// Крестик в модальном окне
const closePopUp = document.querySelector('.pop_up_close')

// Модальное окно
const popUp = document.querySelector('.pop_up')

// Для запрета скролла
const body = document.querySelector('body')

// Для отслеживания клика на темную область
const popUpContainer = document.querySelector('.pop_up_container')

// Текст модального окна
const popUpText = document.querySelector('.popUpText')

// Родительский элемент слайдов
const swiperBody = document.querySelector('.swiper-wrapper')

// Контент слайдера
const popUpState = {
    'modal1': {
        title: 'Пример моей верстки по макету',
        images: ['./images/portfolio/carMusc/fullScreen.png']
    },
    'modal2': {
        title: 'Пример моей верстки по макету',
        images: ['./images/portfolio/ritmStyle/fullScreen.png']
    },
    'modal3':{
        title: 'Crypto Exchange',
        images: ['./images/portfolio/cryptoExchange/fullScreen.png']
    },
    'modal4': {
        title: 'NFT Airdrop',
        images: ['./images/portfolio/nftAirdrop/fullScreen.png']
    },
    'modal5': {
        title: 'Yukigassen',
        images: ['./images/portfolio/yukigassen/fullScreen.png']
    },
    'modal6':{
        title: 'Project Hope',
        images: ['./images/portfolio/projectHope/fullScreen.png']
    },
    'modal7': {
        title: 'CoinPay',
        images: ['./images/portfolio/coinPay/fullScreen1.png', './images/portfolio/coinPay/fullScreen2.png', './images/portfolio/coinPay/fullScreen3.png']
    },
    'modal8': {
        title: 'BinaryX',
        images: ['./images/portfolio/binaryX/home.png', './images/portfolio/binaryX/game.png', './images/portfolio/binaryX/dao.png', './images/portfolio/binaryX/whitePaper.png']
    },
    'modal9':{
        title: 'The House',
        images: ['./images/portfolio/theHouse/home.png', './images/portfolio/theHouse/brands.png', './images/portfolio/theHouse/description.png', './images/portfolio/theHouse/productCard.png', './images/portfolio/theHouse/recipes.png']
    },
    'modal10': {
        title: 'Konyak Hotel',
        images: ['./images/portfolio/konyakHotel/home.png', './images/portfolio/konyakHotel/rooms.png', './images/portfolio/konyakHotel/roomPage.png', './images/portfolio/konyakHotel/restaurant.png', './images/portfolio/konyakHotel/events.png', './images/portfolio/konyakHotel/booking.png', './images/portfolio/konyakHotel/about.png', './images/portfolio/konyakHotel/contactUs.png', './images/portfolio/konyakHotel/homeMobile.png', './images/portfolio/konyakHotel/mobileMenu.png']
    },
    'modal11': {
        title: 'ProkatAM',
        images: ['./images/portfolio/prokatAm/home.png','./images/portfolio/prokatAm/menu.png', './images/portfolio/prokatAm/contactUs.png', './images/portfolio/prokatAm/products.png']
    },
    'modal12':{
        title: 'MrFast',
        images: ['./images/portfolio/mrFast/home.png', './images/portfolio/mrFast/store.png', './images/portfolio/mrFast/product.png', './images/portfolio/mrFast/pricing.png', './images/portfolio/mrFast/blog.png', './images/portfolio/mrFast/faq.png', './images/portfolio/mrFast/login.png']
    }
}

// Лоадер 
let loader = document.createElement("div")
loader.classList.add('lds-ring')
setTimeout(() => {
    loader.appendChild(document.createElement("div"))
    loader.appendChild(document.createElement("div"))
    loader.appendChild(document.createElement("div"))
    loader.appendChild(document.createElement("div"))
}, 400)


function modalWindow(id) {
    openPopUpFn()
    popUpText.innerHTML = popUpState[id].title
    sliderContent(popUpState[id].images)
}

// Контент для слайдеров
function sliderContent(content) {
    swiperBody.replaceChildren()
    swiperBody.appendChild(loader)

    setTimeout(() => {
        swiperBody.replaceChildren()
        for (let i = 0; i < content.length; i++) {
            let slide = document.createElement("div")
            let img = document.createElement("img")
    
            slide.classList.add('swiper-slide')
            img.src = content[i]
    
            slide.appendChild(img)
            swiperBody.appendChild(slide)
        }
    }, 500);
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

// Функции открывающие/закрывающие модальное окно
function closePopUpFn() {
    popUp.classList.remove('active')
    body.style.overflow = 'auto'
}
function openPopUpFn() {
    popUp.classList.add('active')
    body.style.overflow = 'hidden'
}
// .......................................................................................