'use strict'

//filter 


const names = ['Ivan', 'Ann', 'Kseniua' , 'Voldemart'];

const shortNames = names.filter(function(name) {
    return name.length < 5;
});

console.log(shortNames);

// MAP

let answers =  ['IvAn', 'ANnA', 'KsEniua' , 'VoldemaRt'];

const result = answers.map(item =>  item.toLowerCase());

console.log(result);

// every/some

const some =  [ 3, 'ANnA', 'KsEniua' , 'VoldemaRt'];

console.log(some.some(item => typeof(item) === 'number' ));


const every =  [ 3, '5', 4 , 5];

console.log(every.every(item => typeof(item) === 'number' ));

//reduce

const arr = [ 5, 6,6 ,7,8,9,9,12,9];

const res = arr.reduce((sum , current) => sum + current , 3 );

console.log(res);


const arrStr = [ 'Ivan', 'Ann', 'Kseniua' , 'Voldemart'];

const resStr = arrStr.reduce((sum , current) => `${sum} , ${current}`);

console.log(resStr);

// entries 

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr =Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item [0]);

console.log(newArr);