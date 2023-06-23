const cards = document.querySelectorAll('.card')
const search = document.querySelector('input')

const filterCard = () => {
    document.addEventListener('keyup', e => {
        if(e.target === search){
            cards.forEach(el => {
                
                if(el.textContent.toLowerCase().includes(e.target.value.toLowerCase())){
                    el.classList.remove('fillCard')
                } else {
                    el.classList.add('fillCard')
                }
            })
        }
    })
}

filterCard()