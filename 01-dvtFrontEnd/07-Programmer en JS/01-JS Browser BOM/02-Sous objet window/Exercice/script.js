//Ma réponse = Solution
console.log(window.screen.width)

let openH = document.createElement('button');
openH.innerHTML = "openH";
document.body.appendChild(openH);

//Ma réponse = Solution
openH.addEventListener('click', () => {
   //ajout d'une entrée dans l'historique
   destination = window.location.assign('https:\\www.google.com', 'Google', 'width=500, heigth=500');
});

let open = document.createElement('button');
open.innerHTML = "open";
document.body.appendChild(open);

//Ma réponse = Solution
open.addEventListener('click', () => {
   //ajout d'une entrée dans l'historique
   destination = window.location.replace('https:\\www.google.com', 'Google', 'width=500, heigth=500');
});

//création d’un objet Date pour créer une date d’expiration :
const dateExp = new Date();
dateExp.setHours(dateExp.getHours() + 1); //nous ajoutons 1 heure à la date

//creation des cookies
document.cookie = `username=user1 ; expires=${dateExp.toUTCString()}`;

console.log(document.cookie);

let tempCookie;
tempCookie = document.cookie.split("; ");

let valeurDuCookie = new Array();

tempCookie.forEach((ligne) => {
   let tab = ligne.split("=");
   valeurDuCookie.push([tab[0], tab[1]]);
});

console.log(valeurDuCookie[0]);