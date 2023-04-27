//Navigation Logic
const burger = document.querySelector('#burger')
const nav = document.querySelector('#nav');
const switcher = document.querySelector('#switcher')
const langSwitch = document.querySelector('#lang-switch')

//Change Language Logic
const home = document.querySelector('#home')
const aboutMeLink = document.querySelector('#about-me-link')
const langMob = document.querySelector('#lang-switch__mobile')
const headerTitleTop = document.querySelector('#header-title-top')
const headerTitleBottom = document.querySelector('#header-title-bottom')
const headerTextTop = document.querySelector('#header-text-top')
const headerTextBottom = document.querySelector('#header-text-bottom')
const aboutTitle = document.querySelector('#about-me-title')
const aboutTextFirst = document.querySelector('#about-text-first')
const aboutTextSecond = document.querySelector('#about-text-second')
const aboutTextThird = document.querySelector('#about-text-third')
const skillsTitle = document.querySelector('#skills-title')
const skillsText = document.querySelector('#skills-text')
const portfolioTitle = document.querySelector('#portfolio-title')
const footerTitle = document.querySelector('#footer-title')
const footerText = document.querySelector('#footer-text')
const footerBtn = document.querySelector('#footer-button')
const skillsLink = document.querySelector('#skills-link')
const portfolioLink = document.querySelector('#portfolio-link')
const contactsLink = document.querySelector('#contacts-link')
const modal = document.querySelector('#modal')
const modalTxtTop = document.querySelector('#modal-txt-top')
const modalTxtBtm = document.querySelector('#modal-txt-bottom')
const layer = document.querySelector('#layer')


//Functions for navigation
burger.addEventListener('click', () => {
   
    nav.style.display = 'block';

})

switcher.addEventListener('click', () => {

    nav.style.display = 'none';

    window.addEventListener('resize', (e) => {
        if (document.documentElement.clientWidth >= 750) {
            nav.style.display = 'block';
        }
    })
})

window.addEventListener('resize', (e) => {
    if (document.documentElement.clientWidth <= 751) {
        nav.style.display = 'none';
    }
})

window.addEventListener('resize', (e) => {
    if (document.documentElement.clientWidth >= 751) {
        nav.style.display = 'block';
    }
})

home.addEventListener('click', () =>  {
    if (document.documentElement.clientWidth <= 751) {
    nav.style.display = 'none';
    }
})

aboutMeLink.addEventListener('click', () =>  {
    if (document.documentElement.clientWidth <= 751) {
    nav.style.display = 'none';
    }
})

skillsLink.addEventListener('click', () =>  {
    if (document.documentElement.clientWidth <= 751) {
    nav.style.display = 'none';
    }
})

portfolioLink.addEventListener('click', () =>  {
    if (document.documentElement.clientWidth <= 751) {
    nav.style.display = 'none';
    }
})

contactsLink.addEventListener('click', () =>  {
    if (document.documentElement.clientWidth <= 751) {
    nav.style.display = 'none';
    }
})

//Changing Language functions

let test = localStorage.getItem("test")

window.addEventListener('DOMContentLoaded', () => {
    if (test === 'eng') {
        setEngLang()
        console.log('английский')
    } else if (test === 'ru') {
        console.log('русский')
        setRuLang()
    } else {
        return
    }
})

function setRuLang () { 
    localStorage.setItem('test', 'ru')

        home.textContent = "Домашняя"

        aboutMeLink.textContent = "Обо мне"

        skillsLink.textContent = 'Навыки'

        portfolioLink.textContent = 'Портфолио'
        
        contactsLink.textContent = 'Контакты'

        headerTextTop.textContent = ' дизайнер'

        headerTextBottom.textContent = '24 года, Минск'

        headerTitleTop.textContent = "Денис"

        headerTitleBottom.textContent = "Новиков"

        aboutTextFirst.textContent = 'Привет, меня зовут Дима - я UX/UI дизайнер из Минска. Я люблю дизайн и все, что с ним связано';

        aboutTextSecond.textContent = 'Я изучаю "Веб-Дизайн и Интерфейсы" в IT Академии';

        aboutTextThird.textContent = 'Готов применить свои навыки на благо другим.';

        skillsTitle.textContent = 'Мои навыки';

        skillsText.textContent = 'Я пользуюсь такими програмами как:';

        portfolioTitle.textContent = 'Портфолио';

        footerTitle.textContent = 'Контакты';

        footerText.textContent = `Хотите узнать больше или просто пообщаться? Буду рад знакомству!`;

        footerBtn.textContent = 'Сообщение';

        modalTxtTop.textContent = 'Спасибо, что кликнули!'

        modalTxtBtm.textContent = 'Кликните по экрану, чтобы закрыть окно'
}

function setEngLang () {
    localStorage.setItem('test', 'eng')

    home.textContent = "Home"

    aboutMeLink.textContent = "About me"

    skillsLink.textContent = 'Skills'

    portfolioLink.textContent = 'Portfolio'

    contactsLink.textContent = 'Contacts'

    headerTitleTop.textContent = "Denis"

    headerTitleBottom.textContent = "Novikov"

    headerTextTop.textContent = ' designer'

    headerTextBottom.textContent = '24 years old, Minsk'

    aboutTitle.textContent = "About me"

    aboutTextFirst.textContent = "Hi, I'm Denis - UX/UI designer from Minsk. I'm interested in design and everything connected with it."

    aboutTextSecond.textContent = `I'm studying at courses "Web and mobile design interfaces" in IT-Academy`;

    aboutTextThird.textContent = 'Ready to implement excellent projects with wonderful people';

    skillsTitle.textContent = 'Skills';

    skillsText.textContent = 'I work in such programs as';

    portfolioTitle.textContent = 'Portfolio';

    footerTitle.textContent = 'Contacts';

    footerText.textContent = 'Want know more or just chat? You are welcome!';

    footerBtn.textContent = 'Send message';

    modalTxtTop.textContent = 'Thank you for trying to reach out!'

    modalTxtBtm.textContent = 'Click anywhere to close this window'
}

function changeLang (lang) {
    if (lang === 'lang-switch__ru') {
        setRuLang ()
        
    } else if (lang === "lang-switch__eng") {
        setEngLang()
        
    }
} 

function selectLang(e) {
    switch (e.target.id) {
        case "lang-switch__ru":
            console.log('это русский язык');
            changeLang(e.target.id)
            break;
        case "lang-switch__eng":
            console.log('this is English');
            changeLang(e.target.id)
        default:
            console.log('this is english language')
            break;
    }
}

langMob.addEventListener('click', e => selectLang(e))
langSwitch.addEventListener('click', e => selectLang(e))

//Modal window logic

footerBtn.addEventListener('click', () => {
    layer.style.display = 'block'
    modal.style.display = 'block'

    layer.addEventListener('click', () => {
        layer.style.display = 'none'
        modal.style.display = 'none' })
    modal.addEventListener('click', () => {
        layer.style.display = 'none'
        modal.style.display = 'none'
    })
})
