let add = (a, b) => (a + b);
let multiply = (a, b) => (a * b);
let subtract = (a, b) => (a - b);
let divide = (a, b) => (a / b);
let operand1 = parseFloat(prompt("Enter operand 1: "));
let operand2 = parseFloat(prompt("Enter operand 2: "));
let operator = prompt("Enter operator: ");
let operate = (op1, op2, operator) =>
{
    switch (operator)
    {
        case '+': 
            return add(op1, op2);
            break;
        case '-': 
            return subtract(op1, op2);
            break;
        case '*':
            return multiply(op1, op2);
            break;
        case '/':
            return divide(op1,op2);
            break;
    }
}
