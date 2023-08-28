"use script"
const p = document.querySelector('p');

console.log(p);

const skript = document.createElement('script');
script.src = "test.js";
document.body.append(script);

function loadScript(src){
    const skript = document.createElement('script');
    script.src = "test.js";
    script.async = false;
    document.body.append(script);
}

loadScript('test.js');
loadScript('some.js');