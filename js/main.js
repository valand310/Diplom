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

// ----------------------problem

const tabControls = document.querySelector('.problem__tabs')
const problemHero = document.querySelector('.problem__hero')
const decorHid = document.querySelector('.problem__img-hidden')
const decorVis = document.querySelector('.problem__img-vis')


tabControls.addEventListener('click', toggleTab)

function toggleTab(e) {
    const tabControl = e.target.closest('.problem__link')

    if (!tabControl) return
    e.preventDefault()
    
    const tabContentId = tabControl.getAttribute('href')
    const tabContent = document.querySelector(tabContentId)

    tabContent.classList.add('problem__chanse--show')
    problemHero.classList.add('problem__hero--hidden')

    decorHid.classList.add('problem__img-hidden--hidden')
    decorVis.classList.add('problem__img-vis--vis')
    const chooseAnother = document.querySelector('.problem__chanse--show .problem__chanse-another')

    chooseAnother.addEventListener('click', closeInfo)
    function closeInfo() {
        tabContent.classList.remove('problem__chanse--show')
        problemHero.classList.remove('problem__hero--hidden')
        decorHid.classList.remove('problem__img-hidden--hidden')
        decorVis.classList.remove('problem__img-vis--vis')
    }

}


    // document.querySelector('.tab-controls__link--active').classList.remove('tab-controls__link--active')
    // tabControl.classList.add('tab-controls__link--active')

