'use strict';


// let a = 5 ,
//     b = a ;

//     b = b + 5;
//     console.log(b); 
//     console.log(a); 


  

//     const obj ={
//         a: 5,
//         b : 1
//     };

//     const сopy = obj; // ссылка
//    copy.a = 10;



   function copy(mainObj){
        let objCopy = {};

        let key;
        for ( key in mainObj ) {
            objCopy[key] = mainObj[key];

        }
        return objCopy;
   }

   const numbers = {
    a:2,
    b: 5,
    c: {
        x: 7 ,
        y: 4
    }
   };

   const newNumbers = copy(numbers);

   newNumbers.a =10 ;

    newNumbers.c.x = 99;

   console.log(newNumbers);

   console.log(numbers);

   const add ={
     d:  18,
     i:  6
   };


   console.log(Object.assign({}, add ));


   
   const clone = (Object.assign({}, add ));

   clone.d = 20;

//    console.log(add);

//    console.log(clone);

const oldArray = ['a', 'b', 'g'];

const newArray = oldArray.slice(); // метод копирования массива 

newArray[1] = 'fsfefwefasefb';
console.log(newArray);
console.log(oldArray)


const video = ['youtube' , 'vimeo' , 'rutube'],
   blogs= ['wordpress' , 'livejornal', 'blogger'],
   internet = [...video , ...blogs , 'vk' , 'instagram' ];


   console.log(internet);

function log(a,b,c) {
    console.log(a);
    console.log(b);

    console.log(c);

}

const num = [12,4,6];

log(...num);

const newArray= ['as','das','efw'];

const newwArray = [...newArray];

const q= {
    one: 1,
    two: 2
};
const newObj = {...q} ;




