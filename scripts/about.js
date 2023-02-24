const progressEls = Array.from(document.querySelectorAll('.progress'))
const percentEls = Array.from(document.querySelectorAll('.percent'))
const percents = percentEls.map( (el) => parseInt(el.innerHTML))

for (const elm of progressEls) {
    observer.observe(elm)
}

function progressFn() {
    for (let i = 0; i < progressEls.length; i+=1) {
        let j = 0
        let stop = percents[i]

        let interval = setInterval(function(){
            progressEls[i].style.width = j + '%'
            percentEls[i].innerHTML = j + '%'
            if (j >= stop) clearInterval(interval)
            j++
        }, 15)

    }
}



// progressFn()