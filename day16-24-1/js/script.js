const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByTagName('button'));
const clear = document.getElementById('clear');
let currentNum = '';
let prevNum = '';
let operator = null;

// Handle click events for numbers and decimal
buttons.forEach(button => {
  if (button.innerText !== '+' && button.innerText !== '-' && button.innerText !== '*' && button.innerText !== '/' && button.innerText !== '.' && button.innerText !== 'C' && button.innerText !== '=') {
    button.addEventListener('click', () => {
      currentNum += button.innerText;
      display.value = currentNum;
    });
  }
});

// Handle click event for decimal
buttons.forEach(button => {
  if (button.innerText === '.') {
    button.addEventListener('click', () => {
      if (!currentNum.includes('.')) {
        currentNum += button.innerText;
        display.value = currentNum;
      }
    });
  }
});

// Handle click events for operators
buttons.forEach(button => {
  if (button.innerText === '+' || button.innerText === '-' || button.innerText === '*' || button.innerText === '/') {
    button.addEventListener('click', () => {
      if (currentNum && prevNum) {
        calculate();
      }
      operator = button.innerText;
      prevNum = currentNum;
      currentNum = '';
    });
  }
});

// Handle click event for equals
buttons.forEach(button => {
  if (button.innerText === '=') {
    button.addEventListener('click', calculate);
  }
});

// Handle click event for clear
clear.addEventListener('click', () => {
  currentNum = '';
  prevNum = '';
  operator = null;
  display.value = '';
});

// Calculate function
function calculate() {
  let result;
  const prev = parseFloat(prevNum);
  const current = parseFloat(currentNum);
  if (isNaN(prev) || isNaN(current)) return;
  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      if (current === 0) {
        alert('Cannot divide by zero');
        return;
      }
      result = prev / current;
      break;
    default:
      return;
  }
  currentNum = result.toString();
  display.value = currentNum;
  prevNum = '';
  operator = null;
}