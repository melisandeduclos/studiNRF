const back = document.getElementById('back');

back.addEventListener('click', () => {
   //Déplace dans l'historique en arrière
   window.history.back();
});

//L'historique = liste d'éléments
//window.alert(window.history.length);

//document.cookie est une chaîne qui contient tous les cookies séparés par "; "
//Nous utilisons la méthode split pour créer un tableau contenant les cookies

console.log(document.cookie);
let tableauId = document.cookie.split("; ");

//Nous utilisons la méthode split pour séparer les clés des valeurs dans un forEach et ajouter les clés et valeurs à un tableau identifiants

let identifiants = new Array();

tableauId.forEach((ligne) => {
   let tab = ligne.split("=");
   identifiants.push([tab[0], tab[1]]);
});

//Nous pouvons afficher le tableau dans la console
console.log(identifiants[1][1]);