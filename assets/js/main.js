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


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 