'use strict';

// let str = " some ";
// let letstrODj = new String(str); 


// console.log(typeof(str));
// console.log(typeof(strOBJ));



console.dir([1,2,3,4,5]);

const soldier = {
    health : 400,
    armor: 100,
    seyHello: function() {
        console.log("Hello");
    }
};

const john = Object.create(soldier);


// const john ={
//     health: 100
// };

john.__proto__ = soldier;

console.log(john.armor);

Object.setPrototypeOf(john, soldier);

john.seyHello();