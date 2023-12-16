const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector('#value');

let counter = 0;

function updateCounterValue(){
    counterValue.textContent = counter;
}

function handlerDecrement() {
    counter -=1;
    updateCounterValue();
}

function handlerIncrement() {
    counter +=1;
    updateCounterValue();
}
decrementBtn.addEventListener('click', handlerDecrement);
incrementBtn.addEventListener('click', handlerIncrement);

updateCounterValue();