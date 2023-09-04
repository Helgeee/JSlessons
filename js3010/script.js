'use strict';

// const num = new Number(3);

// console.log(num);


function User(name, id){
    this.name = name;
    this.id = id ;
    this.human = true;
    this.hello = function(){
        console.log( `hello ${this.name}`);
    };
}


User.prototype.exit = function(name){
    console.log(`Пользователь ${this.name} ушел`);
}

const ivan = new User('Ivan' , 28 );

const alex = new User('Alex' , 22 );

ivan.hello();
alex.hello();


console.log(ivan);
console.log(alex);
