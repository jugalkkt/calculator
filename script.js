let previousContent = '';
let currentContent = '';
let operator = '';

let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');

let previousScreen = document.querySelector('.previous');
let currentScreen = document.querySelector('.current');
let clear = document.querySelector('.clear');
let decimal = document.querySelector('.decimal');
let equal = document.querySelector('.equal');


function handleNum(num) 
{
    if (currentContent.length < 6) currentContent += num;
    currentScreen.textContent = currentContent;
}
function handleOp(op)
{
    operator = op;
    previousContent = currentContent;
    currentContent = '';
}
function clearScreen()
{
    previousContent = '';
    currentContent = '';
    currentScreen.textContent = currentContent;
    previousScreen.textContent = previousContent;
}


document.addEventListener('DOMContentLoaded', () => {
    numbers.forEach((number) => number.addEventListener('click', function (e) {
        handleNum(e.target.textContent);
        previousScreen.textContent = previousContent + ' ' + operator;
        currentScreen.textContent = currentContent;
    }))
    operators.forEach((op) => op.addEventListener('click', function(e){
        handleOp(e.target.textContent);
        previousScreen.textContent = previousContent + ' ' + operator;
    }))
    // clear.addEventListener('click', clearScreen);
})
