'use strict';

const arr = [1,2,3,4,5];
arr.sort(compareNum);

function compareNum(a,b){
    return a-b;
}

// arr.pop();
// arr.push(10);



console.log(arr);


// for (let i = 0 ; i< arr.length ; i++){
//     console.log(arr[i]);
// }

// for(let value of arr){
//     console.log(value);
// }

// arr[99] = 0;
  

arr.forEach(function(item, i , arr) {
    console.log(` ${i} : ${item} внутри массива ${arr}`)
});


const str = prompt("" , "");

const products = str.split(" , ");

products.sort();

console.log(products.join( ' ; '));