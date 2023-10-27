
const carousel1 = document.querySelector('.carousel-1')
const carousel2 = document.querySelector('.carousel-2')
const carousel3 = document.querySelector('.carousel-3')
const carouselUp = document.querySelector('.carousel-up')
const carouselDown = document.querySelector('.carousel-down')
const carousels = document.querySelectorAll('.carousel')
let index = 0;

const mobileNav = document.querySelector("nav.mobile-nav");
const menuIcon = document.querySelector(".menu-icon");
const  closeIcon= document.querySelector(".mobile-menu-container .close-icon");
const  mobileMenuContainer= document.querySelector(".mobile-menu-container");



carousel1.style.opacity = 1
carousel2.style.opacity = 0
carousel3.style.opacity = 0



carouselUp.addEventListener('click', () => {
    carousels[index].style.opacity = 0;
    index = (index + 1) % carousels.length;
    carousels[index].style.opacity = 1;
});

carouselDown.addEventListener('click', () => {
    carousels[index].style.opacity = 0;
    index = (index - 1 + carousels.length) % carousels.length;
    carousels[index].style.opacity = 1;
});

menuIcon.addEventListener('click',()=>{
    mobileMenuContainer.classList.add("active");

});

closeIcon.addEventListener('click',()=>{mobileMenuContainer.classList.remove("active");});