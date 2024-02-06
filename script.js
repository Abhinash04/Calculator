var box = document.getElementById("calc-display");

// Function to append the clicked button value to the display
function toScreen(x) {
    box.value += x;
}

// Function to evaluate the expression and display the result
function answer() {
    try {
        let result = eval(box.value);
        box.value = result;
    } catch (error) {
        box.value = 'Error';
    }
}

// Function to calculate square
function sqr() {
    let num = parseFloat(box.value);
    box.value = num * num;
}

// Function to calculate square root
function squareRoot() {
    let num = parseFloat(box.value);
    box.value = Math.sqrt(num);
}

// Function to calculate cube
function cube() {
    let num = parseFloat(box.value);
    box.value = num * num * num;
}

// Function to calculate cube root
function cubeRoot() {
    let num = parseFloat(box.value);
    box.value = Math.cbrt(num);
}

// Function to calculate trigonometric functions
function trigFunction(func) {
    let num = parseFloat(box.value);
    switch (func) {
        case 'sin':
            box.value = Math.sin(num);
            break;
        case 'cos':
            box.value = Math.cos(num);
            break;
        case 'tan':
            box.value = Math.tan(num);
            break;
        case 'asin':
            box.value = Math.asin(num);
            break;
        case 'acos':
            box.value = Math.acos(num);
            break;
        case 'atan':
            box.value = Math.atan(num);
            break;
    }
}

// Function to calculate logarithm
function log() {
    let num = parseFloat(box.value);
    box.value = Math.log10(num);
}

// Function to calculate natural logarithm
function ln() {
    let num = parseFloat(box.value);
    box.value = Math.log(num);
}

// Function to clear the display
function clearScreen() {
    box.value = '';
}

// Function to delete the last character from the display
function deleteLastCharacter() {
    let currentInput = box.value;
    box.value = currentInput.substring(0, currentInput.length - 1);
}

// Function to handle keyboard input
function handleKeyPress(event) {
    const key = event.key;
    // Check if the pressed key is a number, operator, or special character
    if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '%', '.', '(', ')'].includes(key)) {
        toScreen(key);
    } else if (key === 'Enter') {
        answer();
    } else if (key === 'Backspace') {
        deleteLastCharacter();
    }
}

// Event listener for keyboard input
document.addEventListener('keydown', handleKeyPress);
