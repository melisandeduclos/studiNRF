const maPromesse = new Promise((resolve, reject) => {
   // On simule une opération asynchrone qui prend du temps, grâce au setTimeout qui
   // va attendre ici 2000ms ou 2 secondes
   setTimeout(() => {
    //pour l’exemple, on génère un nombre entre 0 et 1
     const alea = Math.random();
    //pour l’exemple, on considère que la promesse réussit si le nombre est plus grand que 0.5
    console.log(alea) 
    if (alea > 0.5) {
       // Si l'opération réussit, on appelle resolve() avec une valeur
       resolve("L'opération a réussi ! 😍");
     } else {
       // Si l'opération échoue, on appelle reject() avec une erreur
       reject(new Error("L'opération a échoué."));
     }
   }, 2000);
 });
 
const promesse2 = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve("Nous avons attentu 4 sec (6 au total)");
   }, 4000);
});

 maPromesse.then(resultat => {
   // Traitement à effectuer avec la valeur de retour de la promesse
   console.log(resultat);
   //Cela affichera L’operation a réussi
   return promesse2;
 });
 
promesse2.then (result => {
   console.log(result);
 })


 .catch(erreur => {
   // Traitement à effectuer en cas d'erreur
   console.error(erreur);
 })
 
 .finally(() => {
   // Traitement à effectuer une fois que la promesse est terminée, que ce soit avec succès ou en erreur
   console.log("Les 2 promesses sont terminées 😁.");
 });