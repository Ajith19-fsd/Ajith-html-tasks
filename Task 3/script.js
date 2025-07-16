// Get display & container
const display = document.getElementById('display');
const container = document.querySelector('.buttons');

let input = '';

// Create calculator buttons using DOM
const buttons = [
  '7','8','9','/',
  '4','5','6','*',
  '1','2','3','-',
  '0','.','=','+',
  '%','C'
];

buttons.forEach(char => {
  const btn = document.createElement('button');
  btn.textContent = char;
  btn.className = 'btn btn-primary';
  btn.addEventListener('click', () => handleInput(char));
  container.appendChild(btn);
});

function handleInput(char) {
  if (char === 'C') {
    input = '';
  } else if (char === '=') {
    try {
      input = eval(input).toString();
    } catch {
      input = 'Error';
    }
  } else {
    input += char;
  }
  display.textContent = input;
}

// Keyboard: Allow numbers only
document.addEventListener('keydown', (e) => {
  const allowedKeys = '0123456789';
  if (allowedKeys.includes(e.key)) {
    input += e.key;
  } else {
    alert('Only numbers are allowed!');
    e.preventDefault();
  }
  display.textContent = input;
});