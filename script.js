const petSelect = new URLSearchParams(window.location.search);
const petName = petSelect.get('name');
const petType = petSelect.get('pet')
console.log(petName, petType);


const feedButton = document.getElementById('feedButton');
const playButton = document.getElementById('playButton');
const cleanButton = document.getElementById('cleanButton');
const hungerDisplay = document.getElementById('hunger');
const happinessDisplay = document.getElementById('happiness');
const cleanlinessDisplay = document.getElementById('cleanliness');
const animationFrame = document.getElementById ('animationFrame');

let hunger = 100;
let happiness = 100;
let cleanliness = 100;

if (petType === "Dog") {
    document.getElementById('Pet').src = './Animations/rufus.jpg';
}else {document.getElementById('Pet').src = './Animations/Pert.jpg';

}

// function updateStats() {
//     hungerDisplay.textContent = 'Hunger: ${hunger}%';
//     happinessDisplay.textContent = 'Happiness ${happiness}%';
//     cleanlinessDisplay.textContent = 'Cleanliness ${cleanliness}%';
// }

function updateHealthBar() {
    const healthFill = document.getElementById('health-fill');
    healthFill.style.width = hunger + '%';
}

function updateHappinessBar() {
    const happinessFill = document.getElementById('happy-fill');
    happinessFill.style.width = happiness + '%';
}

feedButton.addEventListener("click", () => {
    if (hunger > 0) {
        hunger -= 10;
        happiness += 5;
        // updateStats();
        // // updateAnimation
        // performAction('Feeding');
        // pet.eats();
        // pet.udateUI();
        // updateHealthBar(pet.healthPercentage());
       updateHealthBar();
    }
});

playButton.addEventListener('click', () => {
    if (happiness > 0) {
        happiness -= 10;
        cleanLiness -= 5;
    //     updateStats();
    //     // updatePetanimation
    //     performAction('playing');
    updateHappinessBar();
    }
});

cleanButton.addEventListener('click', () => {
    if (cleanliness < 100) {
        cleanliness += 10;
        happiness += 5;
        // updateStats();
        // // updateanimation
        // performAction('cleaning');
    }
});

// updateStats();

// class Animal {
//     constructor(name) {
//         this.name = name;
//         this.health = 100;
//         this.hunger = 100;
//     }
//     drinks() {
//         this.health += 5;
//     }
//     eats() {
//         this.health += 5;
//         this.hunger -= 10;
//     }
//     stats() {
//         console.table({
//             name: this.name,
//             health: this.health,
//             hunger: this.hunger,
//         })
//     }
//     healthPercentage() {
//         return (this.health/ 100) * 100;
//     }
// }

// class Cat extends Animal {
//     constructor(name, happy) {
//         super(name);
//         this.happy = happy;
//     }
//     playMouse() {
//         this.happy += 10;
//         this.health += 5;
//         this.hunger += 10;
//     }
//     sitOnEverything() {
//         this.happy += 10;
//         this.health += 5;
//         this.hunger += 10;
//     }
// }

// class Dog extends Animal {
//     constructor(name, happy) {
//         super(name);
//         this.happy = happy;
//     }
//     playBall() {
//         this.happy += 10;
//         this.health += 5;
//         this.hunger += 10;
//     }
//     walks() {
//         this.happy += 10;
//         this.health += 5;
//         this.hunger += 10;
//     }
//     pet.drinks();
//     pet.updateUI();
//     updateHealthBar(pet.healthPercentage()); 
// }


// const Rufus = new Dog ('Rufus, 100');
// const Smutty = new Cat ("Smutty", 50);
// console.log(Rufus,Smutty)

// Rufus.playBall();
// Rufus.stats();
// Smutty.playMouse();
// Smutty.stats();

// console.log(Rufus,Smutty)