// Global variable
let questionCalc;
let firstNumber;
let secondNumber;
let result;

// Bloc function
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

// message welcome
alert("Hooray ! Welcome to the magical world of numbers and operations!");

// Bloc do while
do {
  questionCalc = +prompt(
    `What would you like to do?
     1 - Addition
     2 - Multiplication
     3 - Subtraction
     4 - Division`
  );
} while (![1, 2, 3, 4].includes(questionCalc));

do {
  firstNumber = +prompt("Choose a first number");
  secondNumber = +prompt("Choose a second number");
} while (isNaN(firstNumber) || isNaN(secondNumber));

// switch
switch (questionCalc) {
  case 1:
    result = add(firstNumber, secondNumber);

    break;
  case 2:
    result = multiply(firstNumber, secondNumber);

    break;
  case 3:
    result = substraction(firstNumber, secondNumber);

    break;
  case 4:
    result = divide(firstNumber, secondNumber);

    break;
  default:
    break;
}

alert(`The result is : ${result}`);
// end
alert("Bye bye See you again!");
