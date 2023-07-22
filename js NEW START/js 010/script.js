'use strict';

// Условия 

if (4==9) {
    console.log('ok');
} else {
    console.log('error');
}

// const num = +prompt('введите число ') ;


// if ( num < 49 ) {
//     console.log('error');
// } else if ( num > 100) {
//     console.log('error');
// } else {
//     console.log('ok');
// }

// (num === 50) ? console.log('ok') : console.log('Error')

const num = 50; // строгое сравнение

switch (num) {
    case 49: 
        console.log('Neverno');
        break;
        case 100:
            console.log('Neverno');
            break;
                case 50:
                console.log('VERNO');
                break;
                    default:
                        console.log('Ne v etot raz');
                        break;

}