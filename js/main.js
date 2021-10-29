'use strict';

let menu = document.querySelector('.hamburger');
let navUl = document.querySelector('.navbar-links');

menu.addEventListener('click', () => {
    navUl.classList.toggle('active');
});
navUl.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.classList.contains('nav-link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    }
});
