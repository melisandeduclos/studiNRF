// Exemple d'interface pour décrire la forme d'un objet avec alias
type Age = number
interface Person {
   name: string;
   // age: number;
   age: Age
   //Définir une méthode
   sayHello: () => void;
}

// Décrire la forme d’un objet
const person: Person = {
   name: 'John',
   age: 30,
   sayHello: function() {
     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
   }};
 person.sayHello(); // Output: "Hello, my name is John and I am 30 years old."

 interface Produit {
   nom: string;
   prix: number;
 // En TypeScript on utilise le signe “?” pour dire que la propriété est optionnelle
   description?: string;    // La propriété description est optionnelle
   disponible: boolean;
 }
 
 const tshirt: Produit = {
   nom: "T-shirt",
   prix: 19.99,
   disponible: true
 };

 //Les alias pour les types génériques
 type Pair<T, U> = {
   first: T;
   second: U;
 }
 let pair: Pair<string, number> = {
   first: "one",
   second: 2
 };

//L'opérateur extends
// Exemple d’interface étendue 
interface Animal {
   name: string;
   age: number;
 }
 interface Dog extends Animal {
   breed: string;
 }
 const myDog: Dog = { name: "Flipper", age: 3, breed: "Labrador" };

//Les alias de type
type NumberMap = Map<string, number>;
const myMap: NumberMap = new Map();
myMap.set('one', 1);
myMap.set('two', 2);
console.log(myMap.get('one')); // Output: 1

//Interface implémentées par des classes
interface Animal {
   name: string;
   speak: () => string;
 }
 class Dog implements Animal {
   name: string;
   constructor(name: string) {
     this.name = name;
   }
   speak() {
     return "Woof!";
   }}
 const myDog: Animal = new Dog("Rufus");
 console.log(myDog.speak()); // Output: "Woof!"

//Inteface pour décrire des types génériques
interface Pair<T, U> {
   first: T;
   second: U;
 }
 let pair: Pair<string, number> = {
   first: "one",
   second: 2
 };
 console.log(pair.first); // Output: one
 console.log(pair.second); // Output: 2