function wait() {
   //prommesse l'état de l'opération asynchrone : résolue ou rejetée
   return new Promise((resolve) => {
      //Exécute le resolve une fois que les 2s seront passées => 
      //la promesse sera renvoyée comme résolue après les 2s
      window.setTimeout(resolve, 2000);
   })
}

//Dclaration de la fonction asynchrone
async function affMessage(){
   //await attendre une opérationa synchrone soit résolue
   await wait();
   console.log('Message 😁');
}

affMessage();