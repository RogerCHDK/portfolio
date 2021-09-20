/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.querySelector('#nav-menu');
const navToggle = document.querySelector('#nav-toggle');
const navClose = document.querySelector('#nav-close');
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.querySelectorAll('.skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

// const toggleSkills = (skill) => {
//     // Traigo la clase de su padre
//     let itemClass = skill.parentNode;
//     console.log(itemClass.className)
//     if (itemClass.className === 'skills__content skills__close') {
//         itemClass.className = 'skills__content skills__open';
//     }else{
//         itemClass.className = 'skills__content skills__close';
//     }
// }

function toggleSkills(){
    let itemClass = this.parentNode.className;

    for (let index = 0; index < skillsContent.length; index++) {
        skillsContent[index].className = 'skills__content skills__close';
    }

    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open';
        console.log('entre')
    }
}

skillsHeader.forEach( (skill) => {
    skill.addEventListener( 'click', toggleSkills)
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach( tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
    
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active');
        });
    
        target.classList.add('qualification__active');
    
        tabs.forEach( tab => {
            tab.classList.remove('qualification__active')
        });
    
        tab.classList.add('qualification__active');
    });
});

/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/
    let swiper = new Swiper('.portfalio__container', {
      cssMode: true,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
    });

/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// Obtengo todas las secciones
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    // Obtengo la pocicion en y donde se encuentra el user
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        // Obtengo la altura de la seccion
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    });
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 