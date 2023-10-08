let currentInput = '';
let currentOperation = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    currentOperation = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput);
        document.getElementById('display').value = currentInput;
    } catch (error) {
        document.getElementById('display').value = 'Error';
        currentInput = '';
        currentOperation = '';
    }
}
