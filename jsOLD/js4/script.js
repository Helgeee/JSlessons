"use strict";

//alert('Hello'); вывод модольного окна

//const result = confirm("Are you here?"); вывод модального окна - да нет

//console.loc(result); true



const answers = [];

answers[0] = promt('Как ваше имя?', ' '); ///команда anser c хранением данных!

//Вся информация пиходит от пользователя в любом случае будет строка  + меняет строку на число

answers[1] = promt('Как ваша Фамилия?', ' ');

answers[2] = promt('Сколько вам лет?', ' ');

console.log(typeof(answers));


