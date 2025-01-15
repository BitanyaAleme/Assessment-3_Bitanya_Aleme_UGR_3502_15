let displayElement = document.getElementById('display');

function appendToDisplay(value) {
    if (displayElement.innerText === '0' && value !== '.') {
        displayElement.innerText = value;
    } else {
        displayElement.innerText += value;
    }
}

function clearDisplay() {
    displayElement.innerText = '0';
}

function calculateResult() {
    try {
        displayElement.innerText = eval(displayElement.innerText);
    } catch (error) {
        displayElement.innerText = 'Error';
    }
}
