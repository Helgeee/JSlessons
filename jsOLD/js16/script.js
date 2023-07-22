
"use srict";

//callbak функции

function first(){
    // Do something задержка в коде 500 милисек
    setTimeout(function(){
        console.log(1);
},500)
}
function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(` я учу: ${lang}`);
    callback();
}

/*learnJS(`Java Script`, function(){
    console.log('Я прошел этот урок!');
});*/

function done(){
    console.log('Я прошел этот урок');
}

learnJS('javaScript ', done);
