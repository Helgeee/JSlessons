"use strict"

// Massiv  PsevdoMassiv

const arr = [0,1,2,3,4,5,10,10,11];
arr.sort(compareNum);
console.log(arr);

function compareNum(a,b){
    return a-b;
}

arr.forEach(function(item, i , arr){
    console.log(`${i}: ${item} внутри массива ${arr}`);
});
//пребор с модификацией


//
//arr[99] = 0;

//console.log(arr.length);
//console.log(arr);

/*
arr.pop();
arr.push(10);

console.log(arr);

for (let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}
*/
for (let value of arr) {
    console.log(value);    
}


// строки
const str = prompt("","");
const products = str.split(",");

products.sort //метод сортировки внутри массива из строк

console.log(products.join('; '));

//псевдомассив обьект структура как у массива но у них не будет никаких методов



