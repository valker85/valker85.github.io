// ==================================
// Активная ссылка в меню при скролле

window.addEventListener('scroll', ()=>{
    let scrollDistance = window.scrollY

    document.querySelectorAll('.section').forEach((el, i)=>{
        if(el.offsetTop - document.querySelector('.header').clientHeight <= scrollDistance){
            Array.from(document.querySelector('.navBar').children).forEach(el => {
                if(el.classList.contains('active')){
                    el.classList.remove('active')
                }
            });

            document.querySelectorAll('.navBar li')[i].classList.add('active')
        }
    })
})

// ==================================