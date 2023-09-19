'use strict'

// Promise (E26)

// console.log('Запрос данных .....');


// const req = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         console.log('Подготовка данных...');
        
//         const product = {
//             name: 'TV',
//             price: 2000
//         };
    
//         resolve(product);
//     },2000);
// })

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//                 product.status = 'order';
//                 resolve(product);
//             }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then((data) =>{
//     console.log(data);
// }).catch(() => {
//     console.error('Произошла ошибка.');

// });



const test  = time =>{
    return new Promise(resolve => {
        setTimeout(() => resolve() , time);
    });
};

// test(1000).then(( ) => console.log('1000 ms'));

// test(3000).then(( ) => console.log('3000 ms'));

Promise.all([test(1000), test(3000) ]).then(() =>{
    console.log('All'); // при выполнении всех промисов
});

Promise.race([test(1000), test(3000)]).then(() =>{
    console.log('All'); // при выполнении одного промиса
});