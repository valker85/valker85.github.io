const options = {
    threshold: [0.5]
}

let observer = new IntersectionObserver(onEntry, options)
let elements = document.querySelectorAll('.element-animation')

for (const elm of elements) {
    observer.observe(elm)
}


function onEntry(entry) {
    entry.forEach(change => {
        if(change.isIntersecting){
            change.target.classList.add('element-show')
        } 
        // else{
        //     change.target.classList.remove('element-show')
        // }
    })
}