alert("Hooray! Welcome to the magical world of numbers and operations!");

let questionCalc;

do {
  questionCalc = +prompt(
    `What would you like to do?
     1 - Addition
     2 - Multiplication
     3 - Subtraction
     4 - Division`
  );
} while (isNaN(questionCalc) || ![1, 2, 3, 4].includes(questionCalc));

let firstNumber;
let secondNumber;

do {
  firstNumber = +prompt("Choose a first number");
  secondNumber = +prompt("Choose a second number");
} while (isNaN(firstNumber) || isNaN(secondNumber));

function add(firstNumber, secondNumber) {
  let result = firstNumber + secondNumber;
  return result;
}

function multiply(firstNumber, secondNumber) {
  let result = firstNumber * secondNumber;
  return result;
}

function substraction(num1, num2) {
  let result = num1 - num2;
  return result;
}

function divide(num1, num2) {
  let result = num1 / num2;
  if (num2 == 0) {
    alert("Cannot divide num2 by 0.");
  } else {
    return result;
  }
}

switch (questionCalc) {
  case 1:
    result = add(firstNumber, secondNumber);
    alert(`The result of the addition is ${result}`);
    break;
  case 2:
    result = multiply(firstNumber, secondNumber);
    alert(`The result of the Multiplication is ${result}`);
    break;
  case 3:
    result = substraction(firstNumber, secondNumber);
    alert(`The result of the substraction is ${result}`);
    break;
  case 4:
    result = divide(firstNumber, secondNumber);
    alert(`The result of the division is  ${result}`);
    break;
  default:
    alert("An error has occurred in your code");
    break;
}

alert("Bye bye See you again!");
