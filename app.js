const menuBars = document.querySelector('#menu-bars');
const slideMenu = document.querySelector('#slide-menu');
const slideMenuOpa = document.querySelector('#slide-menu-opa');
const mbyllIcon = document.querySelector('#mbyll');
const menuLink = Array.from(document.querySelectorAll('#slide-link'));
const body = document.querySelector('#body');

menuBars.addEventListener('click', function () {
    slideMenu.classList.add('slide-menu-show')
    slideMenuOpa.classList.add('slide-menu-opa-show')
    body.style.overflow = 'hidden'
});
slideMenuOpa.addEventListener('click', function () {

    slideMenu.classList.remove('slide-menu-show')
    slideMenuOpa.classList.remove('slide-menu-opa-show')
    body.style.overflow = ''

});
mbyllIcon.addEventListener('click', function () {
    slideMenu.classList.remove('slide-menu-show')
    slideMenuOpa.classList.remove('slide-menu-opa-show')
    body.style.overflow = ''
})

menuLink.forEach(link => {
    link.addEventListener('click', function () {
        slideMenu.classList.remove('slide-menu-show')
        slideMenuOpa.classList.remove('slide-menu-opa-show')
        body.style.overflow = ''
    })
})

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".header").style.top = "0";
    } else if (currentScrollPos <= 0) {
        document.querySelector(".header").style.top = "0";
    } else {
        document.querySelector(".header").style.top = "-200px";
    }
    prevScrollpos = currentScrollPos;
}