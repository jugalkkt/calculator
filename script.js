let previousContent = '';
let currentContent = '';
let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');

let previousScreen = document.querySelector('.previous');
let currentScreen = document.querySelector('.current');
let clear = document.querySelector('.clear');
function handleNum(num) {
    if (currentContent.length < 6) currentContent += num;
    currentScreen.textContent = currentContent;
}
function handleOp(op){
    previousContent = currentContent + ' ' + op;
    currentContent = '';
    previousScreen.textContent = previousContent;
    currentScreen.textContent = currentContent;
}

document.addEventListener('DOMContentLoaded', () => {


    numbers.forEach((number) => number.addEventListener('click', function (e) {
        handleNum(e.target.textContent);
    }))
    operators.forEach((op) => op.addEventListener('click', function(e){
        handleOp(e.target.textContent);
    }))
})
