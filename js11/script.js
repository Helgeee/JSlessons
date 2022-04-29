"use strict";

// Циклы 

lnum = 50;

while (num <= 55) { // пока что
    console.log(num);
    num++;
};

console.log('Privet');

do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 10; i++){
    if (i === 6){
        //break;
        continue;
    }
    console.log(i);
}

