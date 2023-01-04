const container = document.getElementById('container');
const colors = ['#de3060', '#d64630'];
const SQAURES = 500;

for(let i = 0; i < SQAURES; i++){
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('touchmove', ()=> setColor(square), false);
    square.addEventListener('mouseout', ()=> removeColor(square));

    container.appendChild(square);
}

function setColor(element){
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color} , 0 0 10px, ${color}`;
}

function removeColor(element){
    element.style.background = '#1d1d1d';
    element.style.boxShadow = '0 0 2px black';
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}