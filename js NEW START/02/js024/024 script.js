'use strict'; 

// •	Какое будет выведено значение: let x = 5; alert( x++ ); ?

// •	Чему равно такое выражение: [ ] + false - null + true ?

// •	Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?

// •	Чему равна сумма [ ] + 1 + 2?

// •	Что выведет этот код: alert( "1"[0] )?

// •	Чему равно 2 && 1 && null && 0 && undefined ?

// •	Есть ли разница между выражениями? !!( a && b ) и (a && b)?

// •	Что выведет этот код: alert( null || 2 && 3 || 4 ); ?

// •	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?

// •	Что выведет этот код: alert( +"Infinity" ); ?

// •	Верно ли сравнение: "Ёжик" > "яблоко"?

// •	Чему равно 0 || "" || 2 || undefined || true || falsе ?







// let x = 5; alert( x++ ); // возращение 5 а после добавление 1

// console.log(tipeOf([ ] + false)) ; //false
// console.log(tipeOf([ ] + false- null +true )) ; //NaN


// let y = 1; 
// let x = y = 2; 
// alert(x); //2

// console.log([ ] + 1 + 2); //'12' string

// alert( "1"[0] ); // 1 

// console.log(2 && 1 && null && 0 && undefined);

// // &&  и запинается на лжи

// console.log( !!( a && b ) === (a && b)); // не равны

                  
// alert( null || 2 && 3 || 4 ); // 3  

// ..или запинается на правде



// const a = [1, 2, 3];
// const b = [1, 2, 3]; //разные ящики

// console.log(a == b);


// alert( +"Infinity" );  // число


// console.log("Ёжик" > "яблоко");

// 0 || "" || 2 || undefined || true || false

// console.log(0 || "" || 2 || undefined || true || false); //2