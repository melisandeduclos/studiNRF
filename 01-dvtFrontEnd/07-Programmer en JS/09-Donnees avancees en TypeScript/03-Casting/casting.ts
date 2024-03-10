//Casting implicite
let a: number = 5;
let b: string = "10";
let c: string = a + b; // TypeScript convertit automatiquement 'a' en une chaîne de caractères pour concaténer les deux
console.log(c); // Affiche '510'

//Casting explicite
let d: any = "5";
let e: number = d as number; // convertit explicitement 'd' en un nombre en utilisant l'opérateur "as"
console.log(e); // Affiche 5

//Avec des crochets d'angle
let f: any = "5";
let g: number = <number>f; // converti 'f' en un nombre en utilisant des crochets d'angle < >
console.log(g); // Affiche 5

//Exemple
// Tableau de nombres
const nombres = [1, 2, 3, 4, 5];
// Fonction qui multiplie chaque nombre par un facteur donné
function multiplierNombres(nombres: string[], facteur: number): string[] {
   const resultat: string[] = [];
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
const resultatsMultiplication = multiplierNombres(nombresEnChaineDeCaracteres as string[], facteur);
//nombresEnChaineDeCaracteres as string[] : casting explicite

const resultats = resultatsMultiplication.map(resultat => Number(resultat)) as number[];
// Affichage des résultats
console.log(nombres); // [1, 2, 3, 4, 5]
console.log(resultats); // [2, 4, 6, 8, 10]