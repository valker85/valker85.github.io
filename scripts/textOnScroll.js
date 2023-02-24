const options = {
    threshold: [0.5]
}
let progressCount = 0
let observer = new IntersectionObserver(onEntry, options)
let elements = document.querySelectorAll('.element-animation')

for (const elm of elements) {
    observer.observe(elm)
}


function onEntry(entry) {
    entry.forEach(change => {

        if(change.isIntersecting){

            if(change.target.classList.contains('element-animation')){
                change.target.classList.add('element-show')

            } else if(change.target.classList.contains('progress') && progressCount === 0){

                progressFn()
                progressCount = 1
            }
            
        }

        // else{
        //     change.target.classList.remove('element-show')
        // }
    })
}