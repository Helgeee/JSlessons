'use strict';


// function showThis() {
//     console.log(this);
// }

// showThis();

// function showThis(a ,b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return  a + b;
//     }
//     console.log(sum());
// }

// showThis(4 , 5);

// const obj ={
//     a:21,
//     b:23,
//     sum: function (){
//         function shout(){
//             console.log(this);
//         }
//         shout();
        
//     }
// }

// obj.sum();

// function User(name, id){
//     this.name = name;
//     this.id = id ;
//         this.human = true;
    
//         this.hello= function(){
//             console.log("Hello!" + this.name);
//         }
        
// }

// let ivan = new User('Ivan' , 23);


// function sayName(){
//     console.log(this) ;
//     console.log(this.name + surname);

// }

// const user = {
//     name : " John"
// };

// sayName.call(user , ' Smith' );

// sayName.apply(user , [ 'Smith']);

// //Создание новой функции с кентекстом

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(2));
// console.log(double(12));




// 1) обычная функция : this = window , но если use strict - undefined . 

// 2) Контекст у методов обьекта - сам обьект .

// 3) this  в конструкторах и классах  - это новый эземпляр обьекта .
 
// 4) Ручная привязка this : call , apply  , bind



const btn = document.querySelector('button');

btn.addEventListener( 'click', function() {
    this.style.backgroundColor='red';
    console.log(this);
});


const obj = {
    num: 5,
    sayNamber: function(){
        const say = () => {
            console.log(this.num);
        }

        say();
    }
};

obj.sayNumber();


// const double =  (a) =>  a*2; // краткая стрелочная функция

const double =  a =>  a*2; // краткая стрелочная функция

console.log(double());