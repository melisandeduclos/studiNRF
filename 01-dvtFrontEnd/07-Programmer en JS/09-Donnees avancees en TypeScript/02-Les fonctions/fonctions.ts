//Fonction simple
function add(a: number, b: number): number {
   return a + b;
 }

let result = add(4, 3); // result vaut 7
console.log(result);

//Paramètres opétionnels
function greet(name?: string) {
   if (name) {
     console.log(`Bonjour, ${name} !`);
   } else {
     console.log("Bonjour !");
   }}

   greet(); // affiche "Bonjour !"
   greet("Alice"); // affiche "Bonjour, Alice !"

//Paramètres par défaut
function hello(name: string = "Monde") {
   console.log(`Bonjour, ${name} !`);
 }

hello(); // affiche "Bonjour, Monde !"
hello("Alice"); // affiche "Bonjour, Alice !"

//Fonction renvoyant un tableau
function getColors(): string[] {
   return ["rouge", "vert", "bleu"];
 }

let colors = getColors(); //colors vaut ["rouge", "vert", "bleu"]
console.log(colors);

//Fonction renvoyant un objet
function getPerson(): { name: string, age: number } {
   return {
      name: "Alice",
      age: 30
   };
}

let person = getPerson(); // person vaut { name: "Alice", age: 30 }
console.log(person);

//Fonction renvoyant une fonction
function getMultiplier(factor: number): (x: number) => number {
   return function(x: number) {
     return x * factor;
   };
}

let multiplyBy2 = getMultiplier(2); // multiplyBy2 est une fonction qui multiplie par 2
console.log(multiplyBy2);//[Function (anonymous)]
let resultat = multiplyBy2(3); // resultat vaut 6
console.log(resultat);

//Fonction anonyme
let sumex1 = function(a: number, b: number): number {
   return a + b;
};
let additionex1 = sumex1(3, 4); // result vaut 7
console.log(additionex1);

//Fonctions fléchées
let sumex2 = (a: number, b: number): number => a + b;
let additionex2 = sumex2(3, 4); // result vaut 7
console.log("Addition exemple 2: "+additionex2);
let double = (x: number) => x * 2;
let resultdouble = double(12)
console.log(resultdouble);

//Fonction anonyme et fonction fléchée
let numbers = [1, 2, 3, 4, 5];
// Utilisation d'une fonction anonyme pour filtrer les nombres pairs
let evenNumbers = numbers.filter(function(n) {
  return n % 2 == 0;
});
// Utilisation d'une fonction fléchée pour calculer le carré de chaque nombre
let squaredNumbers = numbers.map(n => n * n);
console.log(evenNumbers);     // Affiche [2, 4]
console.log(squaredNumbers);  // Affiche [1, 4, 9, 16, 25]

//Fonction générique
function inverserTableau<T>(tableau: T[]): T[] {
   return tableau.reverse();
}
//<T> ???
//tableau: T[] - paramètre d'entrée de type tableau
//: T[] - type de la fonction inverserTableau
const tableau1 = [1, 2, 3, 4, 5]; // Tableau de nombre 
const tableau2 = ["a", "b", "c", "d", "e"]; // Tableau de string
console.log(inverserTableau(tableau1)); // [5, 4, 3, 2, 1]
console.log(inverserTableau(tableau2)); // ["e", "d", "c", "b", "a"]
console.log(inverserTableau(squaredNumbers));