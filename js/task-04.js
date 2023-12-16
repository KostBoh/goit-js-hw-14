const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector('#value');

let counter = 0;

function updateCounterValue(){
    counterValue.textContent = counter;
}

function decrement() {
    counter -=1;
    updateCounterValue();
}

function increment() {
    counter +=1;
    updateCounterValue();
}
decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);

updateCounterValue();