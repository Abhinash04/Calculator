var box = document.getElementById("calc-display");

// Function to append the clicked button value or keyboard input to the display
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
function square() {
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

// Event listeners for keyboard input
document.addEventListener('keydown', handleKeyPress);

// Add event listeners to buttons to trigger functions
document.querySelectorAll('.keys').forEach(item => {
    item.addEventListener('click', event => {
        switch (item.value) {
            case 'C':
                clearScreen();
                break;
            case 'SQR':
                square();
                break;
            case 'SQRT':
                squareRoot();
                break;
            case 'CUB':
                cube();
                break;
            case 'CUBRT':
                cubeRoot();
                break;
            // Add cases for other functions here
            default:
                toScreen(item.value);
        }
    });
});

// Function to clear the display
function clearScreen() {
    box.value = '';
}

// Function to delete the last character from the display
function deleteLastCharacter() {
    let currentInput = box.value;
    box.value = currentInput.substring(0, currentInput.length - 1);
}
