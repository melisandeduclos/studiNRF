"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log("The animal makes a sound");
    }
}
class Dog extends Animal {
    bark() {
        console.log("The dog barks");
    }
}
// Crée une instance de la classe Dog
const myDog = new Dog("Flipper");
console.log(myDog.name); // Output: Flipper
myDog.makeSound(); // Output: The animal makes a sound
myDog.bark(); // Output: The dog barks
class Cat {
    constructor(name) {
        this.name = name;
        this.numberOfLegs = 4;
    }
    makeSound() {
        console.log("Meow");
    }
}
