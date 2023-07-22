 "use strict";

 // Функции - действия 

 let num=20;
 let fuck=12;
 function snowFirstMessage(text){
     console.log(text);
        num = 10;
        fuck = 25;
        console.log(num);
        console.log(fuck);
    }
snowFirstMessage();

snowFirstMessage('Like');
 console.log(num);

 console.log(fuck);

 function cacl(a,b){
     return (a+b);
     console.log();
 }

 console.log(cacl(4,3));
 console.log(cacl(5,2));
 console.log(cacl(2,6));
 console.log(cacl(3,6));

function ret(){ //Declaretion существует до того как код запущен
    let num =50;
    //

    return num;
}

const anotherNum = ret;
console.log(anotherNum);

// function expression - когда доходит поток кода(после обьявления )
let foo = function(){

}

const logger = function(){
    console.log('Hello')
};

// Стрелочные функции ()=>

const calc = (a,b) => { return a + b};

const calc1   = (a,b) => {
    console.log ('1');
        return a+b;
};
