const btn = document.querySelector('button'),
        overlay = document.querySelector('overlay');

// btn.onclick = function() {
//      alert('Click');
// };  

// btn.addEventListener('click', () => {
//     alert('Clock');
// });

// btn.addEventListener('click', () => {
//     alert('Second click');
// });



// btn.addEventListener('mouseenter', (e) => {
//     console.log(e.target);
//     e.target.remove();
// });



const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type); 
    // e.target.remove();
    // i++;
    // if (i == 1 ){
    //     btn.removeEventListener('click',  deleteElement); 
    // }
};

// btn.addEventListener('click',  deleteElement);
// overlay.addEventListener('click',  deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click',  deleteElement, {once: true });
});

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.target);
});