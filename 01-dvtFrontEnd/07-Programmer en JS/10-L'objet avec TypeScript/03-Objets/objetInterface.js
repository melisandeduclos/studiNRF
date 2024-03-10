"use strict";
// Déclaration d’un objet avec l’interface Person
let personex = {
    name: "John",
    age: 30,
    greeting: function () {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    }
};
// Utilisation de la méthode
personex.greeting(); // Output: Hello, my name is John and I am 30 years old.
