'use strict';

//  localStorage.setItem('number' , 5);

// //  localStorage.removeItem('number');
// //  localStorage.clear(); очиска всего хранилища

// console.log( localStorage.getItem('number'));

const checkbox = document.querySelector('#checkbox'),
    form = document.querySelector('form'),
    change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.box.checket = true;

}
if ( localStorage.setItem('bg')  === ' changed') {
    localStorage.removeItem('bg');
    form.style.backgroundColor ='red';
}

checkbox.addEventListener('chage' , () => {
    localStorage.setItem('isChecked' , true );
});

change.addEventListener('click' , () => {
    if (localStorage.setItem('bg')  === ' changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor ='#fff';
    } else {
        localStorage.setItem('bg' , 'changed');
        form.style.backgroundColor ='red';
    }
});

const persone ={
    name: 'alex' ,
    age: 25
};

const serializedPersone = JSON.stringify(persone);
localStorage.setItem('alex' , serializedPersone);

console.log(JSON.parse(localStorage.getItem('alex')));