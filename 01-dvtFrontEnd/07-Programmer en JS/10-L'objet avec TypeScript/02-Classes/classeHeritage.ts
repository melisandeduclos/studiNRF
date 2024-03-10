class Animal {
   name: string;
   constructor(name: string) {
     this.name = name;
   }
   makeSound() {
     console.log("The animal makes a sound");
   }}

class Dog extends Animal {
   bark() {
      console.log("The dog barks");
   }}

// Crée une instance de la classe Dog
const myDog = new Dog("Flipper");
console.log(myDog.name); // Output: Flipper
myDog.makeSound(); // Output: The animal makes a sound
myDog.bark(); // Output: The dog barks

interface Animal {
   name: string;
   numberOfLegs: number;
   makeSound: () => void;
 }
 class Cat implements Animal {
   name: string;
   numberOfLegs: number;
   constructor(name: string) {
     this.name = name;
     this.numberOfLegs = 4;
   }
   makeSound() {
     console.log("Meow");
   }}