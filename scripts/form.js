document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form')

    form.addEventListener('submit', formSend)

    async function formSend(e) {
        e.preventDefault()

        let error = formValidate(form)

        // let formData = new FormData(form)

        if(error === 0){
            form.submit()
            // form.classList.add('_sending')

            // console.log(formData)
            
            // let response = await fetch('../sendmail.php', {
            //     method: 'POST',
            //     body: formData
            // })

            // console.log(response)
            // if(response.ok){
            //     let result = await response.json()

            //     console.log(response.ok);
                
            //     form.reset()
            //     form.classList.remove('_sending')
            // } else{
            //     console.log('Error: ', response.ok)
            //     form.classList.remove('_sending')
            // }
        }

    }

    function formValidate(form) {
        let error = 0
        let formReq = document.querySelectorAll('._req')

        for (let i = 0; i < formReq.length; i++) {
            const input = formReq[i]
            formRemoveError(input)

            input.addEventListener('focus',function () {
                formRemoveError(input)
            })
            
            if(input.classList.contains('_email')){
                if (emailTest(input)) {
                    formAddError(input)
                    error++
                }
            } else{
                if (input.value === '') {
                    formAddError(input)
                    error++
                }
            }
        }

        return error
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error')
        input.classList.add('_error')
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error')
        input.classList.remove('_error')
    }

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)
    }
})
// /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])

