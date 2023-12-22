const navBtn = document.querySelector('.nav__btn')
const navBtnClose = document.querySelector('.nav__btn-close')
const navLinks = document.querySelector('.nav__links')
const navLinksActive = document.querySelector('.nav__links-active')

navBtn.addEventListener('click', () => {
    navBtn.style.display = 'none'
    navBtnClose.style.display = 'flex'
    navLinks.classList.add('nav__links-active')
})
navBtnClose.addEventListener('click', () => {
    navBtn.style.display = 'flex'
    navBtnClose.style.display = 'none'
    navLinks.classList.remove('nav__links-active')
})