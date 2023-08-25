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

// Timer id
const timerDisplay = document.getElementById('timer');

// timer functions 
const initialTimeInSeconds = 360;
let currentTimeInSeconds = initialTimeInSeconds;

// update timer display
function updateTimerDisplay() {
    timerDisplay.innerText = `Time: ${currentTimeInSeconds} seconds`;
}

// Start timer
function startTimer() {
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        currentTimeInSeconds--;

        if (currentTimeInSeconds <= 0) {
            clearInterval(timerInterval);
        }

        updateTimerDisplay();
    }, 1000);
}

// Start when game begins 
startBtn.addEventListener('click', () => {
    startTimer();
});

// timer expiration
if (currentTimeInSeconds <= 0) {
    clearInterval(timerInterval);
}

// Level System


// start page
function goToStartPage() {
    window.location.href = "./start.html";
}
// Make bars start to decrease as soon as game is started and can be controlled by pressing the buttons.
let barsDecrease;
startBtn.addEventListener('click', () => {
    barsDecrease = setInterval(() => {
        // health bar update
        health.value -= 5;
        if(health.value == 30){
            petStateUpdate.innerHTML = 'Your pet isnt feeling well! Feed and play with your pet to replenish them!';
        }
        if(health.value == 0) {
            petStateUpdate.innerHTML = 'Your pet needs to go to the vet!. Please try again!!';
        };
        // happiness bar update
        happiness.value -= 5;
        if(happiness.value == 30){
            petStateUpdate.innerHTML = 'Your pet is lonely :( Give them some attention!';
        }
        if(happiness.value == 0) {
            petStateUpdate.innerHTML = 'Your pet is not happy at all! Show them some love!';
        };
        // energy bar update
        energy.value -= 5;
        if(energy.value == 30){
            petStateUpdate.innerHTML = 'Your pet needs more energy! Please feed and play with them!';
        }
        if(energy.value == 0) {
            petStateUpdate.innerHTML = 'YOUR PET HAS NO MORE ENERGY :(';
        };
        // cleanliness bar update
        cleanliness.value -= 5;
        if(cleanliness.value == 30){
            petStateUpdate.innerHTML = 'Your pet is really dirty! Please brush them!';
        }
        if(cleanliness.value == 0) {
            petStateUpdate.innerHTML = 'Your pet is in need of serious grooming!';
        };
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
}
else {
    document.getElementById('Pet').src = "./Cats/Stretching.png";
    document.getElementById('Pet').classList.add('cat');
    document.querySelector('.pet').style.paddingRight = '60px';
};


resetBtn.addEventListener('click', () => {
    // Reset the bars to their initial values
    health.value = 100;
    happiness.value = 100;
    energy.value = 100;
    cleanliness.value = 100;

    // Clear the petStateUpdate message
    petStateUpdate.innerHTML = "";
     // Clear any running intervals (stop the bars from decreasing)
     clearInterval(barsDecrease);

     // Navigate back to the start page
     goToStartPage();

});

