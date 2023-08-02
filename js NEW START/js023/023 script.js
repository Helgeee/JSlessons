'use strict'; // динамическая типитизация



// to string

console.log(typeof(String(null)));


/// конкантинация

console.log(typeof( 5 +''));


const num = 5 ;
connsole.log("https://vk.com/catalog/" + num);
const fontSize = 26 +'px';

// To number


console.log(typeof(Number('4')));

//2)


console.log(typeof(+ '5'));


//3)

console.log(typeof(parseInt("15px", 10)));

let answ = +prompt("Hello", " " );


//to boolean 

// 0, ''  , null , undefined ,NaN;

let switcher = null;

if (switcher){
    console.log('working...');
}

switcher = 1;

if (switcher){
    console.log('working...');
}


//2)
console.log(typeof(boolean('4')));

//3)

console.log(typeof(!!'342564'));