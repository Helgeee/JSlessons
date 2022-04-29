"use strict";

// Условия

if (4==9){
    console.log('Ok1');
} else{
    console.log('Error');
}

const num =50;

if(num<49){
     console.log('Error');
    
} else if (num > 100){
     console.log('mnogo');

}else {
    console.log('Ok!');
}

// Тернарный оператор оператор в котором учавствуют 3 оператора.

(num === 50) ? console.log('Ok!') : console.log('Error');

const mun =50;
// 4+5 бинарный  
// +4  унарный
//___________________________________________________________________________________________________________________

// Конструкция Switch строгое условие

switch(mun) {
    case 49:
        console.log('Neverno');
        break; //Выход
        case 100:
            console.log('Neverno');
            break;
            case 50:
                console.log('Verno');
                break;
                default:
                    console.log('Ne v etot raz');
                    break;
}
+'4';


//________________________________________________________________________________________________________________________________________