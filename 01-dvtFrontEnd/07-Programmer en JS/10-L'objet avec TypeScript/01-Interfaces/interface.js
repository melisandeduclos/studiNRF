"use strict";
// Décrire la forme d’un objet
const person = {
    name: 'John',
    age: 30,
    sayHello: function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
person.sayHello(); // Output: "Hello, my name is John and I am 30 years old."
const tshirt = {
    nom: "T-shirt",
    prix: 19.99,
    disponible: true
};
let pair = {
    first: "one",
    second: 2
};
const myDog = { name: "Flipper", age: 3, breed: "Labrador" };
const myMap = new Map();
myMap.set('one', 1);
myMap.set('two', 2);
console.log(myMap.get('one')); // Output: 1
class Dog {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return "Woof!";
    }
}
const myDog = new Dog("Rufus");
console.log(myDog.speak()); // Output: "Woof!"
let pair = {
    first: "one",
    second: 2
};
console.log(pair.first); // Output: one
console.log(pair.second); // Output: 2
