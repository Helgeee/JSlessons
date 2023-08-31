// const timeId = setTimeout(function(text) {
//     console.log(text);
// }, 2000 , 'Hello Pr ');


const btn = document.querySelector('.btn');
      let timerId;



// const timeId = setTimeout(logger , 2000 );
// btn.addEventListener('click', () =>{
//     const timeId = setTimeout(logger , 2000 );
//      timerId = setTimeout(logger , 500);
// })


function myAnimation(){
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame , 10);

    function frame() {
        if (pos == 300 ) { 
            clearInterval();

        } else{
            pos++;
            elem.style.top = pos  + "px";
            elem.style.left = pos + "px";
        }
    }
}

btn.addEventListener('click', myAnimation );


function logger (){
    if (i === 3 ){
        clearInterval(timerId);
    }
    console.log(text);
    i++;
}


let id = setTimeout(function log() {
    console.log('Hello');
    id = setTimeout(log , 500);
}, 500);

// const timeId = setTimeout(() => {
        
// }, timeout);