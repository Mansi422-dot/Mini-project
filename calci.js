// Select elements directly
const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button");
// Add event listeners
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    const buttonText = button.innerHTML;

    // Check if the button is an operator
    if (button.classList.contains("operator")) {
      // Replace the last operator if there is one
      if (['+', '-', '*', '/'].includes(display.value.slice(-1))) {
        display.value = display.value.slice(0, -1);
      }
      display.value += buttonText;
      // use if-else statements for number,square, decimal, AC, DEL, and =
    } else if (button.classList.contains("number") || button.classList.contains("decimal")) {
      display.value += buttonText;
    } else if (button.classList.contains("clear")) {
      clearDisplay();
    } else if (button.classList.contains("delete")) {
      deleteLastCharacter();
    } else if (button.classList.contains("equal")) {
      calculate();
    } else if (button.classList.contains("square")) {
      calculateSquare();
    }
  });
});
// Function to clear the display
function clearDisplay() {
  display.value = '';
}

// Function to delete the last character from the display
function deleteLastCharacter() {
  display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculate() {
  const result = eval(display.value);
  if (result == Infinity || result == -Infinity) {
    display.value = 'Error'; //ERROR will be displayed when result can't be determined or is infinity
  } else {
    display.value = result; //Result will be displayed
  } 
}

// Function to calculate the square of the current number
function calculateSquare() {
  const value = +display.value;
  if (value) { //check if number is non-zero
    display.value = value * value; // Square the number
  }
}
