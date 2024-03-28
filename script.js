// Variables

const numbers = document.querySelectorAll('.number');
const submit = document.getElementById('submit');
const card1 = document.getElementById('rating-state')
const card2 = document.getElementById('thank-you-state')
const numberSelection = document.getElementById('number-selection');

let rateNumber = 0;

// Event LIsteners

numbers.forEach((button) => {
    button.addEventListener('click', (e) => {
        rateNumber = e.target.textContent
        numberSelection.innerHTML = `You selected ${rateNumber} out of 5`
    });
});

submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (rateNumber !== 0) {
        card1.style.display = 'none'
        card2.style.display = 'block'
    }
});





