"use strict";

// Метотоды  исвойства строк

const str = "test";
const arr = [1,2,3,4,5];

console.log(str.length);
console.log(arr.length);

//методы со скобкой на конце всегда

console.log(str[2]);

console.log(str.toUpperCase());
console.log(str);

const fruit = "some fruit";

console.log(fruit.indexOf("fruit")); //кусочек строки где она начинается (есть ли искомое значение)

const logg = " hello world";

console.log(logg.slice(6,10)); //метод вырезания
console.log(logg.slice(6));
console.log(logg.slice(-5,-1));

console.log(logg.substring(6,10)); //метод вырезания но лишь положительные числа

console.log(logg.substr(5,10));

// Math библиотека математических вычислений

const num = 12.2;
console.log(Math.round(num));

//Метот округления \ метот обрезания до числовых данных
const test = "12.2px";

console.log(parseInt());

// Обрезка в числовой тип данных
console.log (parseFloat(test));


