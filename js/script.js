'use strict';
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
let blockInterval;
function block(){
    blockInterval = requestAnimationFrame(block);
    const width = document.body.clientWidth;
    const height = document.body.clientHeight;

    const l = randomInteger(0, width);
    const t = randomInteger(0, height);
    const r = randomInteger(0, width);
    const b = randomInteger(0, height);

    let pixel = document.createElement('div');
    pixel.style.cssText = `
    width: 40px;
    height: 40px;
    border-radius: 180px;
    background-color: red; 
    margin-left: ${l + 'px'};
    margin-top: ${t + 'px'};
    margin-right: ${r + 'px'};
    margin-bottom: ${b + 'px'};
    position: absolute;
    z-index: 1;
`;
    const blockDiv = document.querySelector('.block');
    blockDiv.append(pixel);
}
blockInterval = requestAnimationFrame(block);

const button = document.querySelector('#button');
let animate = false;
button.addEventListener('click', function(){
    if(animate){
        blockInterval = requestAnimationFrame(block);
        animate = false;
    } else {
        cancelAnimationFrame(blockInterval);
        animate = true;
    }
    
});