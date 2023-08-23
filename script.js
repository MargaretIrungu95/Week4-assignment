class Animal {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.hunger = 100;
    }
    drinks() {
        this.health += 5;
    }
    eats() {
        this.health += 5;
        this.hunger -= 10;
    }
    stats() {
        console.table({
            name: this.name,
            health: this.health,
            hunger: this.hunger,
        })
    }
}

class Cat extends Animal {
    constructor(name, happy) {
        super(name);
        this.happy = happy;
    }
    playMouse() {
        this.happy += 10;
        this.health += 5;
        this.hunger += 10;
    }
    sitOnEverything() {
        this.happy += 10;
        this.health += 5;
        this.hunger += 10;
    }
}

class Dog extends Animal {
    constructor(name, happy) {
        super(name);
        this.happy = happy;
    }
    playBall() {
        this.happy += 10;
        this.health += 5;
        this.hunger += 10;
    }
    walks() {
        this.happy += 10;
        this.health += 5;
        this.hunger += 10;
    }
}

const Rufus = new Dog ('Rufus, 100');
const Smutty = new Cat ("Smutty", 50);
console.log(Rufus,Smutty)

Rufus.playBall();
Rufus.stats();
Smutty.playMouse();
Smutty.stats();

console.log(Rufus,Smutty)