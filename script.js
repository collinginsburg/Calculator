// ******************calc FUNCTIONS**************************************

function subtraction (a,b){
    return a-b;
}
function add(a, b) {
    return a+b;
}
function multiply(a,b){
      return a*b;
}
function divide(a, b) {
    return a/b;
}

function operate(operation,a,b){

    if(operation === "add"){
        return add(a,b);
    }
    if(operation === "subtraction"){
        return subtraction(a,b);
    }
    if(operation === "multiply"){
        return multiply(a,b);
    }
    if(operation === "divide"){
        return divide(a,b);
    }

}


// ******************button FUNCTIONS**************************************
const SCREEN =  document.querySelector('.screen');
let displayvalue = SCREEN.textContent;

function updateDisplay(){
    displayvalue = SCREEN.textContent;
};





const ZERO = document.querySelector('.btn.zero');
ZERO.addEventListener('click', displayZero);
function displayZero(){
    SCREEN.textContent += '0';
    updateDisplay();
    console.log(displayvalue);
}

const PERIOD = document.querySelector('.btn.period');
PERIOD.addEventListener('click', displayPeriod);
function displayPeriod(){
    SCREEN.textContent += '.';
    updateDisplay();
    console.log(displayvalue);
}

const ONE = document.querySelector('.btn.one');
ONE.addEventListener('click', displayOne);
function displayOne(){
    SCREEN.textContent += '1';
    updateDisplay();
    console.log(displayvalue);
}
const TWO = document.querySelector('.btn.two');
TWO.addEventListener('click', displayTwo);
function displayTwo(){
    SCREEN.textContent += '2';
    updateDisplay();
    console.log(displayvalue);
}
const THREE = document.querySelector('.btn.three');
THREE.addEventListener('click', displayThree);
function displayThree(){
    SCREEN.textContent += '3';
    updateDisplay();
    console.log(displayvalue);
}
const FOUR = document.querySelector('.btn.four');
FOUR.addEventListener('click', displayFour);
function displayFour(){
    SCREEN.textContent += '4';
    updateDisplay();
    console.log(displayvalue);
}
const FIVE = document.querySelector('.btn.five');
FIVE.addEventListener('click', displayFive);
function displayFive(){
    SCREEN.textContent += '5';
    updateDisplay();
    console.log(displayvalue);
}
const SIX = document.querySelector('.btn.six');
SIX.addEventListener('click', displaySix);
function displaySix(){
    SCREEN.textContent += '6';
    updateDisplay();
    console.log(displayvalue);
}
const SEVEN = document.querySelector('.btn.seven');
SEVEN.addEventListener('click', displaySeven);
function displaySeven(){
    SCREEN.textContent += '7';
    updateDisplay();
    console.log(displayvalue);
}
const EIGHT = document.querySelector('.btn.eight');
EIGHT.addEventListener('click', displayEight);
function displayEight(){
    SCREEN.textContent += '8';
    updateDisplay();
    console.log(displayvalue);
}
const NINE = document.querySelector('.btn.nine');
NINE.addEventListener('click', displayNine);
function displayNine(){
    SCREEN.textContent += '9';
    updateDisplay();
    console.log(displayvalue);
}



const CLEAR = document.querySelector('.btn.clear');
CLEAR.addEventListener('click', clearDisplay);
function clearDisplay(){
    SCREEN.textContent = '';
    updateDisplay();
    console.log(displayvalue);
};
const DIVIDE = document.querySelector('.btn.divide');
const MULTIPLY= document.querySelector('.btn.multiply');
const MINUS = document.querySelector('.btn.minus');
const PLUS = document.querySelector('.btn.plus');
const EQUALS = document.querySelector('.btn.equals');