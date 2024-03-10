//Modifiez la fonction pour qu’elle soit bien asynchrone et qu’elle attende
// 3 secondes avant d’afficher « Bonjour ».
async function sayHello() {
   await new Promise((resolve) => {setTimeout(resolve, 3000)});
   console.log("Bonjour");
 }
 

 sayHello();

 //Ajoutez un await au bon endroit pour que « Message au milieu » soit affiché
 // entre « Début du programme » et « Fin du programme » :

 function wait(ms) {
   return new Promise(resolve => setTimeout(resolve, ms));
 }
 
 async function logMessage(message) {
   await wait(2000); // attendre 2 secondes
   console.log(message);
 }
 
 async function run() {
   console.log('Début du programme');
   await logMessage('Message au milieu');
   console.log('Fin du programme');
 }
 
 run();

 //Écrivez une fonction synchrone multiply() qui prend en paramètre deux nombres et une fonction
 // de rappel (callback). La fonction de rappel doit être appelée avec le résultat de la
 // multiplication des deux nombres. Appelez la fonction multiply avec comme arguments 2 et 8
 // et une fonction de rappel qui affiche le résultat de la multiplication dans la console
 // dans la chaîne : "Le resultat est : {resultat}".

function multiply01(num1, num2, callback){
   let result = num1*num2;
   callback(result);
}

multiply01(2,8, (result) => {
   console.log("Le résultat est : "+result);
});

//Transformez la fonction précédente en fonction asynchrone.

async function multiply02(num1, num2, callback){
   let result = num1*num2;
   callback(result);
}

multiply02(2,8, (result) => {
   console.log("Le résultat est : "+result);
});

//Corrigez le code
function wait(ms) {
   return new Promise(resolve => setTimeout(resolve, ms));
 }
 
async function logMessage() {
   await wait(2000); // attendre 2 secondes
   console.log('Bonjour Corrigez le code');
 }
 
 logMessage();
 console.log('Fin du programme Corrigez le code');