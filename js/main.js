const close = document.querySelector('.header__sale-close')
const closePlansh = document.querySelector('.header__sale-closePlansh')
const sale = document.querySelector('.header__sale')
const salePlansh = document.querySelector('.header__sale-plansh')
const advantages = document.querySelector('.main__advantages')

const closeSale = (e) => {
    e.preventDefault()

    
    sale.classList.add('header__sale--close')
    salePlansh.classList.add('header__sale--close')
}

const closeSalePlansh = (e) => {
    e.preventDefault()

    salePlansh.classList.add('header__sale--close')
    advantages.style.marginTop = '30px'
}



close.addEventListener('click', closeSale)
closePlansh.addEventListener('click', closeSalePlansh)



// ------------------------------
document.addEventListener('click', burgerInit)

function burgerInit(e) {

    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav__link')



    if (!burgerIcon && !burgerNavLink) return

    if (document.documentElement.clientWidth > 800) return

    if (!document.body.classList.contains('body--opened-menu')) {
        document.body.classList.add('body--opened-menu')
    }

    else {
        document.body.classList.remove('body--opened-menu')
    }


}

// ----------------------