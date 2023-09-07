'use strict';

const box = document.querySelector('.box'),
        btn = document.querySelector('button');

// const witch = box.clientWidth;
// const height = box.clientHeight;

// const witch = box.offsetWidth;
// const height = box.offsetHeight;

const witch = box.scrollWidth;
const height = box.scrollHeight;

console.log(witch , height);

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect()); // Все стили


const style = window.getComputedStyle(box); //стили которые были применены

console.log(style);

console.log(document.documentElement.clientWidth);
