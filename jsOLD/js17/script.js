"use strict";

// Обьекты  деструкторизация обьектов

const  options = {
    name: 'text',
    width: 1024,
    height: 1024,
    colors:{
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log("Test");
    }

};

options.makeTest();

//Деструкторизация
const{border, bg} = options.colors 
console.log(border)

console.log(Object.keys(options).length);

//console.log(options["colors"]["border"]);

/*
delete options.name;

console.log(options);  */

// метод перебора - выводим в виде строк 

/* for (let key  in options){
    if (typeof(options[key])=== 'object'){
        for(let i in options[key]){
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    }else{
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
} 
let couter  = 0;
for (let key  in options){
    if (typeof(options[key])=== 'object'){
        for(let i in options[key]){
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            couter++
        }
    }else{
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        couter++
    }
}
console.log(couter); */

console.log(Object.keys(options).length);
