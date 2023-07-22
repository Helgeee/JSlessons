'use strict';

// Динамическа типизация!

//to String
//1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

//2) 

console.log(typeof(5+ ''));

const num = 5;

console.log('https://vk.com/catalog/' + num);

const fontSize = (26 +'px');

console.log(fontSize);

console.log("ghbdtn");
console.log("Hello World");

//3)
console.log(typeof(Number('4')));

//2 унарный плюс
console.log(typeof(+'5'));
//3 parseint
console.log(typeof(parseInt("15px",10)));

//
let answ= +promt("Hello","");

console.log();

//дАнные получаемые от пользователя это Строки

//to boolean

//null , 0 , '' , undefided , NaN = false

let switcher = null;

if(switcher){
    console.log('Working...');
}
//2)
console.log(typeof(Boolean('2')));

//3)
console.log(typeof(!!"44444"));

