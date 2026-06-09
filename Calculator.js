let firstNumber = '' 
let currentOperation = null 
let shouldResetDisplay = false


const display = document.getElementById('display')
const buttonOne = document.getElementById('btn-1')
    buttonOne.addEventListener('click', function(){
        if(display.value ==='0'|| shouldResetDisplay) {
            display.value = '1';
            shouldResetDisplay = false;
        }
        else {
            display.value += '1'
        }
    })
const buttonTwo = document.getElementById('btn-2') 
 buttonTwo.addEventListener('click', function(){
        if(display.value ==='0'|| shouldResetDisplay) {
            display.value = '2';
            shouldResetDisplay = false;
        }
        else {
            display.value += '2'
        }
    })
const buttonThree = document.getElementById('btn-3') 
 buttonThree.addEventListener('click', function(){
        if(display.value ==='0'|| shouldResetDisplay) {
            display.value = '3';
            shouldResetDisplay = false;
        }
        else {
            display.value += '3'
        }
    })
const buttonFour = document.getElementById('btn-4')
 buttonFour.addEventListener('click', function(){
        if(display.value ==='0'|| shouldResetDisplay) {
            display.value = '4';
            shouldResetDisplay = false;
        }
        else {
            display.value += '4'
        }
    }) 
const buttonFive = document.getElementById('btn-5') 
 buttonFive.addEventListener('click', function(){
        if(display.value ==='0'|| shouldResetDisplay) {
            display.value = '5';
            shouldResetDisplay = false;
        }
        else {
            display.value += '5'
        }
    })
const buttonSex = document.getElementById('btn-6') 
 buttonSex.addEventListener('click', function(){
        if(display.value ==='0'|| shouldResetDisplay) {
            display.value = '6';
            shouldResetDisplay = false;
        }
        else {
            display.value += '6'
        }
    })
const buttonSeven = document.getElementById('btn-7') 
 buttonSeven.addEventListener('click', function(){
        if(display.value ==='0'|| shouldResetDisplay) {
            display.value = '7';
            shouldResetDisplay = false;
        }
        else {
            display.value += '7'
        }
    })
const buttonEight = document.getElementById('btn-8') 
 buttonEight.addEventListener('click', function(){
        if(display.value ==='0'|| shouldResetDisplay) {
            display.value = '8';
            shouldResetDisplay = false;
        }
        else {
            display.value += '8'
        }
    })
const buttonNine = document.getElementById('btn-9') 
 buttonNine.addEventListener('click', function(){
        if(display.value ==='0'|| shouldResetDisplay) {
            display.value = '9';
            shouldResetDisplay = false;
        }
        else {
            display.value += '9'
        }
    })
const buttonZero = document.getElementById('btn-0') 
 buttonZero.addEventListener('click', function(){
        if(display.value ==='0') {
            display.value = '0';
        }
        else {
            display.value += '0'
        }
    })
const buttonAC = document.getElementById('btn-AC') 
 buttonAC.addEventListener('click', function(){
        if(display.value !== '0'){
            display.value = '0';
        }})


const buttonChangeSign = document.getElementById('btn-+/-') 
buttonChangeSign.addEventListener('click', function(){
        if(display.value === '0') {
          return
        }   
        display.value = (display.value)* -1
    }

    
)
    
const buttonPercent = document.getElementById('btn-%') 
buttonPercent.addEventListener('click', function(){
        if(display.value === '0') {
          return
        }   
        display.value = (display.value) /100
    }

    
)
const buttonDivide = document.getElementById('btn-/')
    buttonDivide.addEventListener('click', function(){
    firstNumber = display.value
    currentOperation = '/'
    shouldResetDisplay = true

}) 
const buttonMultiple = document.getElementById('btn-*') 
    buttonMultiple.addEventListener('click', function(){
    firstNumber = display.value
    currentOperation = '*'
    shouldResetDisplay = true

}) 
const buttonMinus = document.getElementById('btn--') 
    buttonMinus.addEventListener('click', function(){
    firstNumber = display.value
    currentOperation = '-'
    shouldResetDisplay = true

}) 
const buttonPlus = document.getElementById('btn-+') 
    buttonPlus.addEventListener('click', function(){
    firstNumber = display.value
    currentOperation = '+'
    shouldResetDisplay = true

}) 
const buttonEqual = document.getElementById('btn-=') 
    buttonEqual.addEventListener('click', function(){
        if (!currentOperation) return; 
        const secondNumber = display.value;
        let result = 0;
        if (currentOperation ==='/') {
            result = Number(firstNumber) /Number(secondNumber)
        } 
        display.value = result;
        if (currentOperation ==='*') {
            result = Number(firstNumber) *Number(secondNumber)
        } 
        display.value = result;
        if (currentOperation ==='-') {
            result = Number(firstNumber) - Number(secondNumber)
        } 
        display.value = result;
        if (currentOperation ==='+') {
            result = Number(firstNumber) +Number(secondNumber)
        } 
        display.value = result;
    })

const buttonToSquare = document.getElementById('btn-x^2')
buttonToSquare.addEventListener('click', function(){
    if (display.value === '0')
        return; 
    else display.value = (display.value)*(display.value)
})

const buttonDott = document.getElementById('btn-,')
buttonDott.addEventListener('click', function(){
    if(shouldResetDisplay){
        display.value = '0.';
        shouldResetDisplay = false;
        return;
    }
    if(!display.value.includes('.')){
        display.value += '.'
    }
})