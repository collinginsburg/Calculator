// ******************calc FUNCTIONS**************************************

function subtract (firstNumber,secondNumber){
    return firstNumber-secondNumber;
}
function add(firstNumber, secondNumber) {
    return firstNumber+secondNumber;
}
function multiply(firstNumber,secondNumber){
      return firstNumber*secondNumber;
}
function divide(firstNumber, secondNumber) {
    return firstNumber/secondNumber;
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
}

const PERIOD = document.querySelector('.btn.period');
PERIOD.addEventListener('click', displayPeriod);
function displayPeriod(){
    SCREEN.textContent += '.';
}

const ONE = document.querySelector('.btn.one');
ONE.addEventListener('click', displayOne);
function displayOne(){
    SCREEN.textContent += '1';
}
const TWO = document.querySelector('.btn.two');
TWO.addEventListener('click', displayTwo);
function displayTwo(){
    SCREEN.textContent += '2';
}
const THREE = document.querySelector('.btn.three');
THREE.addEventListener('click', displayThree);
function displayThree(){
    SCREEN.textContent += '3';
}
const FOUR = document.querySelector('.btn.four');
FOUR.addEventListener('click', displayFour);
function displayFour(){
    SCREEN.textContent += '4';
}
const FIVE = document.querySelector('.btn.five');
FIVE.addEventListener('click', displayFive);
function displayFive(){
    SCREEN.textContent += '5';
}
const SIX = document.querySelector('.btn.six');
SIX.addEventListener('click', displaySix);
function displaySix(){
    SCREEN.textContent += '6';
}
const SEVEN = document.querySelector('.btn.seven');
SEVEN.addEventListener('click', displaySeven);
function displaySeven(){
    SCREEN.textContent += '7';
}
const EIGHT = document.querySelector('.btn.eight');
EIGHT.addEventListener('click', displayEight);
function displayEight(){
    SCREEN.textContent += '8';
}
const NINE = document.querySelector('.btn.nine');
NINE.addEventListener('click', displayNine);
function displayNine(){
    SCREEN.textContent += '9';
}



const CLEAR = document.querySelector('.btn.clear');
CLEAR.addEventListener('click', clearDisplayReset);
function clearDisplayReset(){
    SCREEN.textContent = '';
    firstNumberOn = "n/a";
    secondNumberOn = "n/a";
    additionOn = false;
    subractionOn = false;
    multiplicationOn = false;
    divisionOn = false;
    addNumberButtonFunctionality();
    removeAfterOperateButtonFunctionality();
};
function prepCalcForNextOperation(){
    firstNumber = result;
    SCREEN.textContent = ''; 
    firstNumberOn = "yes";
}

// ******************operator button FUNCTIONS**************************************
let additionOn = false;
let subractionOn = false;
let multiplicationOn = false;
let divisionOn = false;
let firstNumber;
let secondNumber;
let firstNumberOn = "n/a";
let secondNumberOn = "n/a";
let result;

function operate(){

    if(additionOn === true){
        secondNumber = Number(SCREEN.textContent);
        result = add(firstNumber,secondNumber);
        SCREEN.textContent = `= ${result}`;
        firstNumber = result;
        firstNumberOn = "yes"
        secondNumberOn = "no"
        additionOn = false;
        removeNumberButtonFunctionality();
        addAfterOperateButtonFunctionality();

    }
    if(subtractionOn === true){
        secondNumber = Number(SCREEN.textContent);
        result = subtract(firstNumber,secondNumber);
        SCREEN.textContent = `= ${result}`;
        firstNumber = result;
        firstNumberOn = "yes"
        secondNumberOn = "no"
        subtractionOn = false;
        removeNumberButtonFunctionality();
        addAfterOperateButtonFunctionality();
        
    }
    
    if(multiplicationOn === true){
        secondNumber = Number(SCREEN.textContent);
        result = multiply(firstNumber,secondNumber);
        SCREEN.textContent = `= ${result}`;
        firstNumber = result;
        firstNumberOn = "yes"
        secondNumberOn = "no"
        multiplicationOn = false;
        removeNumberButtonFunctionality();
        addAfterOperateButtonFunctionality();
    }
    if(divisionOn === true){
        secondNumber = Number(SCREEN.textContent);
        result = divide(firstNumber,secondNumber);
        SCREEN.textContent = `= ${result}`;
        firstNumber = result;
        firstNumberOn = "yes"
        secondNumberOn = "no"
        divisionOn = false;
        removeNumberButtonFunctionality();
        addAfterOperateButtonFunctionality();
    }

}

function removeNumberButtonFunctionality(){
    NINE.removeEventListener('click', displayNine);
    EIGHT.removeEventListener('click', displayEight);
    SEVEN.removeEventListener('click', displaySeven);
    SIX.removeEventListener('click', displaySix);
    FIVE.removeEventListener('click', displayFive);
    FOUR.removeEventListener('click', displayFour);
    THREE.removeEventListener('click', displayThree);
    TWO.removeEventListener('click', displayTwo);
    ONE.removeEventListener('click', displayOne);
    ZERO.removeEventListener('click', displayZero);
    PERIOD.removeEventListener('click', displayPeriod);
}
function addAfterOperateButtonFunctionality(){
    NINE.addEventListener('click', displayNineAfterOperate);
    EIGHT.addEventListener('click', displayEightAfterOperate);
    SEVEN.addEventListener('click', displaySevenAfterOperate);
    SIX.addEventListener('click', displaySixAfterOperate);
    FIVE.addEventListener('click', displayFiveAfterOperate);
    FOUR.addEventListener('click', displayFourAfterOperate);
    THREE.addEventListener('click', displayThreeAfterOperate);
    TWO.addEventListener('click', displayTwoAfterOperate);
    ONE.addEventListener('click', displayOneAfterOperate);
    ZERO.addEventListener('click', displayZeroAfterOperate);
    PERIOD.addEventListener('click', displayPeriodAfterOperate);
}
function removeAfterOperateButtonFunctionality(){
    NINE.removeEventListener('click', displayNineAfterOperate);
    EIGHT.removeEventListener('click', displayEightAfterOperate);
    SEVEN.removeEventListener('click', displaySevenAfterOperate);
    SIX.removeEventListener('click', displaySixAfterOperate);
    FIVE.removeEventListener('click', displayFiveAfterOperate);
    FOUR.removeEventListener('click', displayFourAfterOperate);
    THREE.removeEventListener('click', displayThreeAfterOperate);
    TWO.removeEventListener('click', displayTwoAfterOperate);
    ONE.removeEventListener('click', displayOneAfterOperate);
    ZERO.removeEventListener('click', displayZeroAfterOperate);
    PERIOD.removeEventListener('click', displayPeriodAfterOperate);
}
function addNumberButtonFunctionality(){
    NINE.addEventListener('click', displayNine);
    EIGHT.addEventListener('click', displayEight);
    SEVEN.addEventListener('click', displaySeven);
    SIX.addEventListener('click', displaySix);
    FIVE.addEventListener('click', displayFive);
    FOUR.addEventListener('click', displayFour);
    THREE.addEventListener('click', displayThree);
    TWO.addEventListener('click', displayTwo);
    ONE.addEventListener('click', displayOne);
    ZERO.addEventListener('click', displayZero);
    PERIOD.addEventListener('click', displayPeriod);
}
function displayNineAfterOperate(){
    clearDisplayReset();
    SCREEN.textContent += '9';
    removeAfterOperateButtonFunctionality();
}
function displayEightAfterOperate(){
    clearDisplayReset();
    SCREEN.textContent += '8';
    removeAfterOperateButtonFunctionality();
}
function displaySevenAfterOperate(){
    clearDisplayReset();
    SCREEN.textContent += '7';
    removeAfterOperateButtonFunctionality();
}
function displaySixAfterOperate(){
    clearDisplayReset();
    SCREEN.textContent += '6';
    removeAfterOperateButtonFunctionality();
}
function displayFiveAfterOperate(){
    clearDisplayReset();
    SCREEN.textContent += '5';
    removeAfterOperateButtonFunctionality();
}
function displayFourAfterOperate(){
    clearDisplayReset();
    SCREEN.textContent += '4';
    removeAfterOperateButtonFunctionality();
}
function displayThreeAfterOperate(){
    clearDisplayReset();
    SCREEN.textContent += '3';
    removeAfterOperateButtonFunctionality();
}
function displayTwoAfterOperate(){
    clearDisplayReset();
    SCREEN.textContent += '2';
    removeAfterOperateButtonFunctionality();
}
function displayOneAfterOperate(){
    clearDisplayReset();
    SCREEN.textContent += '1';
    removeAfterOperateButtonFunctionality();
}
function displayZeroAfterOperate(){
    clearDisplayReset();
    SCREEN.textContent += '0';
    removeAfterOperateButtonFunctionality();
}
function displayPeriodAfterOperate(){
    clearDisplayReset();
    SCREEN.textContent += '.';
    removeAfterOperateButtonFunctionality();
}


const DIVIDE = document.querySelector('.btn.divide');
DIVIDE.addEventListener('click', divisionOperation);
function divisionOperation(){
    if(secondNumberOn === "no"){ //for continuing operations
        prepCalcForNextOperation();
        removeAfterOperateButtonFunctionality();
        addNumberButtonFunctionality();
        setDivisionOn();
    }else{ // for first operations
        firstNumber = Number(SCREEN.textContent);
        firstNumberOn = "yes";
        SCREEN.textContent = '';
        setDivisionOn();
    }
}
function setDivisionOn(){
    additionOn = false;
    subtractionOn = false;
    multiplicationOn = false;
    divisionOn = true;
}
const MULTIPLY= document.querySelector('.btn.multiply');
MULTIPLY.addEventListener('click', multiplicationOperation);
function multiplicationOperation(){
    if(secondNumberOn === "no"){ //for continuing operations
        prepCalcForNextOperation();
        removeAfterOperateButtonFunctionality();
        addNumberButtonFunctionality();
        setMultiplicationOn();
    }else{ // for first operations
        firstNumber = Number(SCREEN.textContent);
        firstNumberOn = "yes";
        SCREEN.textContent = '';
        setMultiplicationOn();
    }
}
function setMultiplicationOn(){
    additionOn = false;
    subtractionOn = false;
    multiplicationOn = true;
    divisionOn = false;
}


const MINUS = document.querySelector('.btn.minus');
MINUS.addEventListener('click', subtractionOperation);
function subtractionOperation(){
    if(secondNumberOn === "no"){ //for continuing operations
        prepCalcForNextOperation();
        removeAfterOperateButtonFunctionality();
        addNumberButtonFunctionality();
        setSubtractionOn();
    }else{ // for first operations
        firstNumber = Number(SCREEN.textContent);
        firstNumberOn = "yes";
        SCREEN.textContent = '';
        setSubtractionOn();
    }
}
function setSubtractionOn(){
    additionOn = false;
    subtractionOn = true;
    multiplicationOn = false;
    divisionOn = false;
}



const PLUS = document.querySelector('.btn.plus');
PLUS.addEventListener('click', additionOperation);
function additionOperation(){
    if(secondNumberOn === "no"){ //for continuing operations
        prepCalcForNextOperation();
        removeAfterOperateButtonFunctionality();
        addNumberButtonFunctionality();
        setAdditionOn();
    }else{ // for first operations
        firstNumber = Number(SCREEN.textContent);
        firstNumberOn = "yes";
        SCREEN.textContent = '';
        setAdditionOn();
    }
}
function setAdditionOn(){
    additionOn = true;
    subtractionOn = false;
    multiplicationOn = false;
    divisionOn = false;
}
const EQUALS = document.querySelector('.btn.equals');
EQUALS.addEventListener('click', operate);