// console.log(document.head);

// console.log(document.documentElement);

// console.log(document.body.childNodes);

// console.log(document.body.firstChild);
// console.log(document.body.lastChild);


// console.log(document.querySelector('#current').parentNode.parentNode);


// console.log(document.querySelector('#current').parentNode.parentElement);

// console.log(document.querySelector('[data-carrent="3"]').nextSibling);








//Перебирающая конструкция For of

for (let node of document.body.childNodes){
    if(node.nodeNAme == '#text'){
        continue;
    }
    console.log(node);
}
