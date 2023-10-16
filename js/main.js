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


// ----- problem-accord------------

const accordItem = document.querySelector('.problem-plansh__item:nth-child(1)')
const accordion = document.querySelector('.problem-plansh__accordion')
function openAccord(e) {
    e.preventDefault()
    if (!accordion.classList.contains('problem-plansh__accordion--open')) {
        accordion.classList.add('problem-plansh__accordion--open')
        accordion.style.maxHeight = accordion.scrollHeight + 'px'
    }
    else {
        accordion.classList.remove('problem-plansh__accordion--open')
        accordion.style.maxHeight = '75px'
    }
}



accordItem.addEventListener('click', openAccord)




const tabControlsAcc = document.querySelector('.problem-plansh__accordion')
const problemPlanshText = document.querySelector('.problem-plansh__text')
const problemPlanshTitle = document.querySelector('.problem-plansh__title')
const problemPlanshImg = document.querySelector('.problem-plansh__img')
const problemPlanshChoose = document.querySelector('.problem-plansh__choose')


tabControlsAcc.addEventListener('click', accordTab)

function accordTab(e) {
    const tabControl = e.target.closest('.problem-plansh__link')

    if (!tabControl) return
    // e.preventDefault()

    const tabContentId = tabControl.getAttribute('href')
    const tabContent = document.querySelector(tabContentId)

    tabContent.classList.add('problem__chanse--show')
    problemPlanshText.classList.add('problem__hero--hidden')
    problemPlanshTitle.classList.add('problem__hero--hidden')
    problemPlanshImg.classList.add('problem__hero--hidden')
    problemPlanshChoose.classList.add('problem-plansh__choose--close')
    tabControlsAcc.classList.add('problem-plansh__choose--close')


    const chooseAnotherPlansh = document.querySelector('.problem__chanse--show .problem__chanse-another')

    chooseAnotherPlansh.addEventListener('click', closeInfo)
    function closeInfo() {
        tabContent.classList.remove('problem__chanse--show')
        problemPlanshText.classList.remove('problem__hero--hidden')
        problemPlanshTitle.classList.remove('problem__hero--hidden')
        problemPlanshImg.classList.remove('problem__hero--hidden')
        problemPlanshChoose.classList.remove('problem-plansh__choose--close')
        tabControlsAcc.classList.remove('problem-plansh__choose--close')
    }

}


// ----------price-accord

const priceHero = document.querySelector('.price__hero')
const priceShow = document.querySelector('.price__show')

function showPrice(e) {
    e.preventDefault()
    priceHero.style.maxHeight = priceHero.scrollHeight + 'px'
    priceShow.classList.add('price__show--hidden')
}

priceShow.addEventListener('click', showPrice)

const priceHeroMoble = document.querySelector('.price__mobile-hero')
const priceShowMobile = document.querySelector('.price__show-mobile')

function showPriceMobile(e) {
    e.preventDefault()
    priceHeroMoble.style.maxHeight = priceHeroMoble.scrollHeight + 'px'
    priceShowMobile.classList.add('price__show-mobile--hidden')
}

priceShowMobile.addEventListener('click', showPriceMobile)

// slider team

new Swiper('.team__slider', {

    spaceBeetwen: 15,
    slidesPerView: 1,


    pagination: {
        el: '.team__pagination',
        // dynamicBullets: 'boolean'
    },

    navigation: {
        nextEl: '.team__next',
        prevEl: '.team__prev',
    },

    breakpoints: {
        1201: {
            
            slidesPerView: 3,
        },

        1150: {
            
            slidesPerView: 2.7,
        },
        1100: {
            
            slidesPerView: 2.5,
        },
        1020: {
            
            slidesPerView: 2.4,
        },
        975: {
            
            slidesPerView: 2.2,
        },
        900: {
            
            slidesPerView: 2,
        },
        830: {
            
            slidesPerView: 1.85,
        },
        715: {
            
            slidesPerView: 1.7,
        },
        650: {
            
            slidesPerView: 1.4,
        },
        600: {
            
            slidesPerView: 1.3,
        },
        550: {
            
            slidesPerView: 1.2,
        },
        500: {
            
            slidesPerView: 1.1,
        },
        
    }

});

// ---testimonials-slider

const swiper = new Swiper('.testimonials__slider', {

    spaceBeetwen: 30,
    slidesPerView: 1,


    pagination: {
        el: '.testimonials__pagination',
        // dynamicBullets: 'boolean'
    },

    navigation: {
        nextEl: '.testimonials__next',
        prevEl: '.testimonials__prev',
    },

    breakpoints: {
        1201: {
            slidesPerView: 2,
        },

        1150: {
            slidesPerView: 1.9,
        },
        1100: {
            slidesPerView: 1.8 ,
        },
        1020: {
            slidesPerView: 1.6,
        },
        975: {
            slidesPerView: 1.5,
        },
        901: {
            slidesPerView: 1.3,
        },
        // 830: {
            
        //     slidesPerView: 1,
        // },
        // 715: {
            
        //     slidesPerView: 1,
        // },
        // 650: {
            
        //     slidesPerView: ,
        // },
        // 600: {
            
        //     slidesPerView: ,
        // },
        // 550: {
            
        //     slidesPerView: ,
        // },
        // 500: {
            
        //     slidesPerView: ,
        // },
        
    }

    

});

