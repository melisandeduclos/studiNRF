//Transformez le code pour que console.log("Bonjour"); soit exécutée dans une fonction callback.

 async function sayHello(callback) {
   await new Promise((resolve) => {setTimeout(resolve, 3000)});
   callback();
 }
 
 sayHello(() => {console.log('Bonjour')});


// Une fonction qui calcule la somme des carrés de n premiers nombres entiers
async function addOfSquares(n) {
   let sum = 0;
     for (let i = 1; i <= n; i++) {
       sum += i * i;
     }
   console.log(sum);
 }
 
 async function calc(n, callback) {
   await addOfSquares(n);
   callback();
 }
 
 calc(100000, () => {console.log("operation terminee");});


 //*********************************************** */
//  Dans cet exemple, nous cherchons à nous connecter à la 
//même API. Notre fonction recupDonnees() a deux paramètres
//qui permettront de passer des fonctions de callback 
//connexionValidate qui est censée s’exécuter une fois que 
//la requête fetch() a correctement été réalisée et 
//traitement qui permet de traiter les données reçues comme 
//réponse. Ajoutez les async et await au bon endroit dans 
//ce code pour qu’il fonctionne correctement.

 const apiKey = 'd408b2585e4efe44f7725a1691a98ff2';

async function recupDonees(city, connexionValidate, traitement) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        connexionValidate();
        const data = await response.json();
        return traitement(data)
    } catch {
        console.log("error");
    }
}

function connexionReussie() {
    console.log("connexion réussie");
}

function affCoucherDeSoleil(dt) {
    let horaire = new Date(dt.sys.sunset * 1000); //récup du code UNIX correspondant à l’heure et création d’une Date
    console.log(horaire.toLocaleTimeString());
}

recupDonees('Paris', connexionReussie, affCoucherDeSoleil);

//Créez une fonction asynchrone qui affiche les 
//n premiers multiples de 18. Créez une fonction 
//callback qui affiche un tableau contenant tous 
//les multiples une fois l’opération réalisée.


async function multiples(x, n, callback) {
   const arr = [];
   for (let i = 1; i <= n; i++){
      arr.push(x * i);
   }
   callback(arr);
 }
 
function affResultat(calc){
   console.log(calc)
}

multiples(18,1000,affResultat);

/******************** */
//Corrigez et complétez le code pour que les 
//chaînes "instruction1", "instruction2", 
//"instruction3" et "instruction4" soient 
//affichés dans la console dans lʼordre avec 2 
//secondes dʼintervalle.

async function affMessage(premiereInstruction, secondeInstruction, troisiemeInstruction, quatriemeInstruction) {
   await new Promise((resolve) => {setTimeout(resolve, 2000)});
   premiereInstruction();
   await new Promise((resolve) => {setTimeout(resolve, 2000)});
   secondeInstruction();
   await new Promise((resolve) => {setTimeout(resolve, 2000)});
   troisiemeInstruction();
   await new Promise((resolve) => {setTimeout(resolve, 2000)});
   quatriemeInstruction();
}
 
affMessage(
   () => {console.log("instruction 1")}, 
   () => {console.log("instruction 2")},
   () => {console.log("instruction 3")},
   () => {console.log("instruction 4")});

