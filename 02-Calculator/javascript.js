let number1;
let number2;
let operator;
let displayValue;



function add(a, b) {
  return a + b
}

function substract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function operate(a, operator, b) {
  return operator(a, b)
}



function handleNumberButtons (button) {
  button.addEventListener("click",()=>{ 
    displayValue = button.innerText
    printToDisplay(displayValue)
  });
}

function printToDisplay (number) {
  document.getElementById("display").innerText = number.toString();
}

function selectAllButtons () {
  document.querySelectorAll("button").forEach(button => {
    handleNumberButtons(button);
  });
}

function assignSymbols () {
  
}


// Assign Event listeners to all buttons
selectAllButtons();
