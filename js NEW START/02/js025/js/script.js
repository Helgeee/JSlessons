'use strict';

const box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button')[1];

console.log(btns[1]);

const circles = document.getElementsByClassName('circle');

console.log(circles);


const hearts = document.querySelectorAll('.heart');

console.log(hearts);

hearts.forEach(item => {
    conslole.log(item);
});

const oneHeart = documwent.querySelector('.heart');

console.log(oneHeart);