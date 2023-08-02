'use strict';


const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button')[1],
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = documwent.querySelector('.heart');
      wrapper = document.querySelector('.wrepper');

// console.dir(box);

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = `background-color: blue ; width: 500px`;

btns[1].style.borderRadius= '100%';
circles[0].style.backgroundColor = 'red';


// for (let i =0 ; i < hearts.length; i++ ){
//     hearts[i].style.backgroundColor = 'blue';
// }
hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');

const text = document.createTextNode('sedfas');

div.classList.add('black');

document.body.append(div);


// document.querySelector('.wrepper').append(div);

// wrapper.prepend(div);

// hearts[0].before(div);

// hearts[0].after(div);

// circles[0].remove;

// hearts[0].replaceWith(circles[0]);


// _____________________________________________________________________________________
// Устаревшие конструкции
// _____________________________________________________________________________________



// wrepper.insertBefore(div, hearts[1]);

// wrapper.removeChild(hearts[1]);

// wrepper.replaceChild(circles[0], hearts[0]);

// wrepper.appendChild(div);

//

div.innerHTML = "<h1>hello world<h1>";

div.textContent =" Hello ";