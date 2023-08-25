// bars variables
const health = document.getElementById("health");
const happiness = document.getElementById("happiness");
const energy = document.getElementById("energy");
const cleanliness = document.getElementById("cleanliness");
// buttons variables
const feedBtn = document.getElementById("feedBtn");
const startBtn = document.getElementById("startBtn");
const playBtn = document.getElementById("playBtn");
const brushBtn = document.getElementById("brushBtn");
const resetBtn = document.getElementById("resetBtn");
const petStateUpdate = document.getElementById("petStateUpdate");
// for the animations
const petSelect = new URLSearchParams(window.location.search);
const petName = petSelect.get('name');
const petType = petSelect.get('pet');
// Make bars start to decrease as soon as game is started and can be controlled by pressing the buttons.
let barsDecrease;
startBtn.addEventListener('click', () => {
    barsDecrease = setInterval(() => {
        health.value -= 5;
        happiness.value -= 5;
        energy.value -= 5;
        cleanliness.value -= 5;
    }, 500); 
})

// event listeners for the bars when the buttons are pressed
feedBtn.addEventListener('click', () => {
    health.value += 5;
    happiness.value += 4;
    energy.value += 5;
    cleanliness.value -= 4; 
});

playBtn.addEventListener('click', () => {
    health.value += 10;
    happiness.value += 8;
    energy.value += 10; 
    cleanliness.value -= 8; 
});

brushBtn.addEventListener('click', () => {
    happiness.value += 5;
    cleanliness.value += 8; 
});
// For the animations
if (petType === "Dog") {
        document.getElementById('Pet').src = './Doggos/Doggo1.png';
        document.getElementById('Pet').classList.add('dog');
    }else {document.getElementById('Pet').src = "./Cats/Stretching.png";
             document.getElementById('Pet').classList.add('cat');
            //  document.querySelector('.pet').style.marginLeft = '-60px';
};

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

