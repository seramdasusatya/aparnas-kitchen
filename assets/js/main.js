//show menu
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

//Remove Menu
const navLink = document.querySelectorAll('.nav__link')

const linkAction =()=>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

//Add shadow header
const shadowHeader = ()=>{
    const header = document.getElementById('header')
    this.scrollY >=50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header')
}
window.addEventListener('scroll',shadowHeader)

//show scroll up
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

//scroll reveal

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    //reset: true, //animation repeat
})

sr.reveal(`.home__data, .footer`)
sr.reveal(`.home__dish`,{delay: 500, distance: '100px', origin: 'bottom'})
sr.reveal(`.home__burger`,{delay: 1200, distance: '100px', duration: 1500})
sr.reveal(`.home__ingredient`,{delay: 1600, interval: 100})
sr.reveal(`.recipe__img, .delivery__img, .contact__image`,{origin: 'left'})
sr.reveal(`.recipe__data .delivery__data, .contact__data`,{origin: 'right'})
sr.reveal(`.popular__card`,{interval: 100})