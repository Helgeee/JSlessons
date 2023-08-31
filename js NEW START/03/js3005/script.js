"use strict";

// const now = new Date('2023-05-01');

// const now = new Date('2023 , 5 ,1');

// const now = new Date(); // дата
// new Date.parse('2023-05-01');
// console.log(now);

// // console.log(now.getFullYear());  // год

// // console.log(now.getMonth()); // месяц

// //  console.log(now.getDate()); // дата

// // console.log(now.getUTCHours()); 

//  console.log(now.getTimezoneOffset()); 

//  console.log(now.getTime()); 



//  console.log(now.setHours(18 , 40 )); 
//  console.log(now);


 let start = new Date();

 for(let i = 0 ; i < 100000 ; i++ ){
    let some = i**3;
 }

 let end = new Date;

 alert(`Цикл отработал за ${ end - start } миллисекунд `);