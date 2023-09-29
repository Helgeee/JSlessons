'use strict';



function User(name ,age){
    this.name = name;
    let userAge = age;

    this.say = function(){
        console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
    };


    this.getAge = function(){
        return userAge;
    };

    this.setAge = function(age) {
        if (tipeof age === 'number' && age > 0 && age < 110) {
            userAge = age;
        } else {
            console.log('Недопустимое значение');
        }
    };
}

const ivan = new User('Ivan', 27);
console.log(ivan.name= 30);
console.log(ivan.getAge());


ivan.userAge = 30;
ivan.name = 'Alex';



class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    #surname = 'Petrychenko';

    say = () => {
        console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недопустимое значение!');
        }
    }
}

const ivan = new User('Ivan', 27);
