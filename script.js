const petSelect = new URLSearchParams(window.location.search);
const petName = petSelect.get('name');
const petType = petSelect.get('pet')

const feedButton = document.getElementById('feedButton');
const playButton = document.getElementById('playButton');
const cleanButton = document.getElementById('cleanButton');
const hungerDisplay = document.getElementById('hunger');
const happinessDisplay = document.getElementById('happiness');
const cleanlinessDisplay = document.getElementById('cleanliness');

let hunger = 100;
let happiness = 100;
let cleanliness = 100;

let hungerDecreaseTimer;
let hungerUpdateTimer;

if (petType === "Dog") {
        document.getElementById('Pet').src = './Doggos/doggy2.png';
    }else {document.getElementById('Pet').src = "./Cats/Stretching.png";
    
    }
    

// function to decrease health over time 
function startHungerDecrease() {
    hungerDecreaseTimer = setInterval (() => {
        if (hunger > 0) {
            hunger -= 2;  
            updateHungerBar();
        }
    }, 5000);

}

// function to udate UI and check if pet needs feeding 
function startHungerUpdate() {
    hungerUpdateTimer = setInterval(() => {
        updateUI();
        if (hunger <= 30) {
            alert('${petName} is hungery. Please feed them!');
        }
    }, 1000);
}

function updateUI() {
    hungerDisplay.textContent = 'Hunger: ${hunger}%';
    happinessDisplay.textContent = 'Happiness: ${happiness}%';
    cleanlinessDisplay.textContent = 'Cleanliness: ${cleanliness}%';
}

function updateHungerBar() {
    const hungerFill = document.getElementById('hunger-fill');
    hungerFill.style.width = hungerPercentage + '%';
}

function updateHappinessBar() {
    const happinessFill = document.getElementById('happy-fill');
    happinessFill.style.width = happiness + '%';
}

feedButton.addEventListener("click", () => {
    if (hunger > 0) {
        hunger -= 10;;
        happiness += 10;
        updateUI();
        updateHungerBar();
    }
});

playButton.addEventListener('click', () => {
    if (happiness > 0) {
        happiness -= 10;
        cleanLiness -= 5;
        updateUI();
        updateHappinessBar();
    }
});

cleanButton.addEventListener('click', () => {
    if (cleanliness < 100) {
        cleanliness += 10;
        happiness += 5;
        updateUI();
        updateCleanBar();
       }
});

startHungerDecrease();
startHungerUpdate();
updateUI();