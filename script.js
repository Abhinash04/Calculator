var box = document.getElementById("calc-display");

function toScreen(x) {
    box.value += x;
}

function answer() {
    try {
        let result = eval(box.value);
        box.value = result;
    } catch (error) {
        box.value = 'Error';
    }
}

function clearScreen() {
    box.value = '';
}

function deleteLastCharacter() {
    let currentInput = box.value;
    box.value = currentInput.substring(0, currentInput.length - 1);
}

function handleKeyPress(event) {
    const key = event.key;
    if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '%', '.', '(', ')'].includes(key)) {
        toScreen(key);
    } else if (key === 'Enter') {
        answer();
    } else if (key === 'Backspace') {
        deleteLastCharacter();
    }
}
document.addEventListener('keydown', handleKeyPress);
