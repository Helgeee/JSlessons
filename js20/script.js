"use strict";

//объектно ориентированное наследование

let str ="some";
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1,2,3]);

const soldier ={
    health: 400,
    armor: 100,
    seyHello: function() {
        console.log("hello");
    }
};

const jonh={
    health: 100
};

//jonh._proto_ = soldier;

//console.log(jonh.seyHello);
Object.setPrototypeOf(jonh,soldier);

jonh.seyHello();

