"use strict";
//Déclaration
let myExarray = [1, 2, 3, 4, 5];
let myMatrix = [[1, 2], [3, 4]];
//Accéder au éléments du tableau
let secondElement = myExarray[1]; // Résultat 2
console.log(secondElement);
//Tableaux de types génériques
let myValue = ['Hello', 20];
//Notez que nous avons utilisé le type Array<string | number> au lieu de string[] ou number[] pour indiquer que le tableau peut contenir des éléments de type string ou number.
//Tableaux utilisés pour une application de gestion des tâches
let tasks = ["Faire les courses", "Nettoyer la maison", "Rendre visite à un ami"];
for (let i = 0; i < tasks.length; i++) {
    console.log(`Tâche n°${i + 1}: ${tasks[i]}`);
}
