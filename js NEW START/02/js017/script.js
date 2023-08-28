'use strict';

// const odj = new Object();

const options ={
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black ',
        bg: 'red'
    },
    makeTest: function(){
        console.log("Test");

    }
};
options.makeTest();

const{ border, bg  } = options.colors;
console.log("Test");


console.log(Object.keys(options).length); // вывод массива со всеми обьектами и + подсчёт


console.log(options.name);

delete options.name;


console.log(options);
let counter =0;


for(let key in options){
    if (typeof(options[key])=== 'object'){
        for(let i in options[key]){
            console.log(`Свойство ${key} имеет значение ${options[key][i]}`);
            // counter++;
        }
    } else{
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        // counter++;
    }
}
// console.log(counter);