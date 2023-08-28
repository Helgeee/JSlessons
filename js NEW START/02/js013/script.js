
'use strict';

let num=20;

function showFirstMessage(text){  // функция
    console.log(text);
    let num=10;
    console.log(num);
}

showFirstMessage("Hello World");  //вызов функции
console.log(num);

// function calc(a,b) {
//     return (a+b);

// }

// console.log(calc(4,4));
// console.log(calc(5,4));
// console.log(calc(6,4));
// console.log(calc(7,4));
// console.log(calc(8,4));


function ret(){
    let num = 50;
    return num;

}

const anotherNum = re();
console.log(anotherNum);


const logger = function(){
    console.log("hello");
};

logger();

const calc = (a,b) =>{ return a+b };