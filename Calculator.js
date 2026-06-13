let firstNumber = ''
let currentOperation = null
let shouldResetDisplay = false

const display = document.getElementById('display')

const buttonOne = document.getElementById('butt-1')
buttonOne.addEventListener('click', function(){
    if(display.value === '0'|| shouldResetDisplay){
        display.value = 1;
      shouldResetDisplay = false;}
    else display.value +=1;
})

const buttonTwo = document.getElementById('butt-2')
buttonTwo.addEventListener('click', function(){
    if(display.value === '0'|| shouldResetDisplay){
        display.value = 2;
      shouldResetDisplay = false;}
    else display.value +=2;
})

const buttonThree = document.getElementById('butt-3')
buttonThree.addEventListener('click', function(){
    if(display.value === '0'|| shouldResetDisplay){
        display.value = 3;
      shouldResetDisplay = false;}
    else display.value +=3;
})

const buttonFour = document.getElementById('butt-4')
buttonFour.addEventListener('click', function(){
    if(display.value === '0'|| shouldResetDisplay){
        display.value = 4;
      shouldResetDisplay = false;}
    else display.value +=4;
})

const buttonFive = document.getElementById('butt-5')
buttonFive.addEventListener('click', function(){
    if(display.value === '0'|| shouldResetDisplay){
        display.value = 5;
      shouldResetDisplay = false;}
    else display.value +=5;
})

const buttonSix = document.getElementById('butt-6')
buttonSix.addEventListener('click', function(){
    if(display.value === '0'|| shouldResetDisplay){
        display.value = 6;
      shouldResetDisplay = false;}
    else display.value +=6;
})

const buttonSeven = document.getElementById('butt-7')
buttonSeven.addEventListener('click', function(){
    if(display.value === '0' || shouldResetDisplay){
        display.value = 7;
      shouldResetDisplay = false;}
    else display.value +=7;
})

const buttonEight = document.getElementById('butt-8')
buttonEight.addEventListener('click', function(){
    if(display.value === '0'|| shouldResetDisplay){
        display.value = 8;
      shouldResetDisplay = false;}
    else display.value +=8;
})

const buttonNine = document.getElementById('butt-9')
buttonNine.addEventListener('click', function(){
    if(display.value === '0'|| shouldResetDisplay){
        display.value = 9;
      shouldResetDisplay = false;}
    else display.value +=9;
})

const buttonZero = document.getElementById('butt-0')
buttonZero.addEventListener('click', function(){
    if(display.value === '0'|| shouldResetDisplay){
        display.value = 0;
      shouldResetDisplay = false;}
    else display.value +=0;
})

const buttonChangeSign = document.getElementById('butt-+/-')
buttonChangeSign.addEventListener('click', function(){
    if(display.value === '0')
        return; 
    else  display.value = (display.value)*(-1)
})

const buttonAC = document.getElementById('butt-AC')
buttonAC.addEventListener('click', function(){
    if(display.value !== 0){
        display.value = 0;}
        firstNumber = '';
        shouldResetDisplay = false;
})

const buttonPercent = document.getElementById('butt-%')
buttonPercent.addEventListener('click', function(){
    if(display.value === 0)
        return; 
    else display.value = (display.value)/100 
})

const buttonDivide = document.getElementById('butt-/')
buttonDivide.addEventListener('click', function(){
    firstNumber = display.value
    currentOperation = '/';
    shouldResetDisplay = true; 
})

const buttonMult = document.getElementById('butt-*')
buttonMult.addEventListener('click', function(){
    firstNumber = display.value
    currentOperation = '*';
    shouldResetDisplay = true; 
})

const buttonMinus = document.getElementById('butt--')
buttonMinus.addEventListener('click', function(){
   firstNumber = display.value
    currentOperation = '-';
    shouldResetDisplay = true; 
})

const buttonPlus = document.getElementById('butt-+')
buttonPlus.addEventListener('click', function(){
    firstNumber = display.value
    currentOperation = '+';
    shouldResetDisplay = true; 
    
})

const buttonEqual = document.getElementById('butt-=')
buttonEqual.addEventListener('click', function(){
    if(!currentOperation){
        return; }
        const secondNumber = display.value;
        let result = 0;
        if (currentOperation ==='/') {
            result = Number(firstNumber) /Number(secondNumber)
        } 
      
        if (currentOperation ==='*') {
            result = Number(firstNumber) *Number(secondNumber)
        } 
        
        if (currentOperation ==='-') {
            result = Number(firstNumber) - Number(secondNumber)
        } 
        
        if (currentOperation ==='+') {
            result = Number(firstNumber) +Number(secondNumber)
        } 
        display.value = parseFloat(result.toFixed(12));
        shouldResetDisplay = true;
    })

const buttonToSquare = document.getElementById('butt-x2')
buttonToSquare.addEventListener('click', function(){
    if (display.value === '0'){
        return; }
    else display.value = (display.value)*(display.value)
})

const buttonDott = document.getElementById('butt-.')
buttonDott.addEventListener('click', function(){
  if(shouldResetDisplay){
display.value = '0.';
shouldResetDisplay = false;
return;}
if(!display.value.includes('.')){
        display.value += '.';
    }
    if(display.value === ''){
        display.value = 0;
        return;
    }
})
window.open(
  'index.html', 
  'CalculatorPopup', 
  'width=300,height=400,resizable=no,scrollbars=no'
);
