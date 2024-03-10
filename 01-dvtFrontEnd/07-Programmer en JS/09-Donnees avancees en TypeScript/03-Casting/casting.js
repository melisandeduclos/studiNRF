"use strict";
//Casting implicite
let a = 5;
let b = "10";
let c = a + b; // TypeScript convertit automatiquement 'a' en une chaîne de caractères pour concaténer les deux
console.log(c); // Affiche '510'
//Casting explicite
let d = "5";
let e = d; // convertit explicitement 'd' en un nombre en utilisant l'opérateur "as"
console.log(e); // Affiche 5
//Avec des crochets d'angle
let f = "5";
let g = f; // converti 'f' en un nombre en utilisant des crochets d'angle < >
console.log(g); // Affiche 5
//Exemple
// Tableau de nombres
const nombres = [1, 2, 3, 4, 5];
// Fonction qui multiplie chaque nombre par un facteur donné
function multiplierNombres(nombres, facteur) {
    const resultat = [];
    nombres.forEach(nombre => {
        const resultatMultiplication = Number(nombre) * facteur;
        resultat.push(resultatMultiplication.toString());
    });
    return resultat;
}
// Appel de la fonction avec le tableau de nombres
const facteur = 2;
//Conversion de chaque nombre en chaine de caractères pour pouvoir utiliser la fonction multiplierNombres
const nombresEnChaineDeCaracteres = nombres.map(nombre => nombre.toString());
console.log(nombresEnChaineDeCaracteres);
const resultatsMultiplication = multiplierNombres(nombresEnChaineDeCaracteres, facteur);
//nombresEnChaineDeCaracteres as string[] : casting explicite
const resultats = resultatsMultiplication.map(resultat => Number(resultat));
// Affichage des résultats
console.log(nombres); // [1, 2, 3, 4, 5]
console.log(resultats); // [2, 4, 6, 8, 10]
