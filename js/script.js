// Global variable
let questionCalc;
let firstNumber;
let secondNumber;
let result;
let restart;

// Bloc function
function add(firstNumber, secondNumber) {
  let result = firstNumber + secondNumber;
  return result;
}

function multiply(firstNumber, secondNumber) {
  let result = firstNumber * secondNumber;
  return result;
}

function substraction(firstNumber, secondNumber) {
  let result = firstNumber - secondNumber;
  return result;
}

function divide(firstNumber, secondNumber) {
  let result = firstNumber / secondNumber;
  if (secondNumber == 0) {
    throw new Error(`Cannot divide ${secondNumber} by 0.`);
  } else {
    return result;
  }
}
if (!restart) {
  alert("Hooray 👾 ! Welcome to the magical world of numbers and operations!");
}

// message welcome

// Bloc do while
do {
  questionCalc = +prompt(
    `What would you like to do?
     1 🟡 Addition
     2 🟢 Multiplication
     3 🟣 Subtraction
     4 🟠 Division`
  );
} while (![1, 2, 3, 4].includes(questionCalc));

do {
  firstNumber = +prompt("Choose a first number 🦒");
  secondNumber = +prompt("Choose a second number 🐧");
} while (isNaN(firstNumber) || isNaN(secondNumber));

// switch
try {
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
      throw new Error(`An error has occurred 🔥`);
  }
  alert(`The result is : ${result} 🐼`);
} catch (error) {
  alert(error);
}

restart = confirm("Do you like try again 🙉?");
if (restart) {
  window.location.reload();
  alert("Hello again 😀");
} else {
  alert("Bye bye See you again! 🦊");
}
// end
