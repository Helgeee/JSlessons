"use strict";

// Операторы

console.log('arr' +  " - object");
console.log(4 + + "5"); //унарный плюс использует один аргумент

//Инкримент

let incr =10,
    decr = 10;


    //++incr префикс
    //incr++;
    //decr--;//постфикс

console.log(incr++);
console.log(--decr);

// % возращает остаток от деления
console.log(5%2);

// = присваивание
// == сравнение

console.log(2*4 =='8');
console.log(2*4 ==='8'); // строгое сравнение

// &&  и 
const isChecked = true,
        isClose = false;

console.log(isChecked && isClose);

// || или
const is1Checked = true,
        is1Close = false;

console.log(is1Checked || is1Close);

// ОТРИЦАНИЕ console.log(is1Checked || !is1Close);

console.log(2+2*2 !=='6');

