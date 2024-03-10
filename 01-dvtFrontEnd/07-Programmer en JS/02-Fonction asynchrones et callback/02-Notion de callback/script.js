//Premier callback
let username = "";

//simulation d'une opération asynchrone
function wait(fonction, millisecondes) {
//ici fonction est un callback
  return new Promise((resolve) => {
    setTimeout(() => {
      fonction(); //exécution de la fonction en paramètre, ça sera {username="PeterParker"}
      resolve() //lorsque la fonction est exécutée, elle est résolue
    }, millisecondes);
  })
}


async function affUsername(callback) {
   //1. nous attendons 2000s, puis nous exécutons la fonction de callback
  await wait(() => {username="PeterParker"}, 2000);
  //2. la fonction de callback est {console.log('Bonjour ' + username)}
  callback();
}
//callback sera appelée une fois l'opération asynchrone wait() sera terminée

console.log("Connexion...");

affUsername(() => {console.log('Bonjour ' + username)});

console.log("Connexion de l’utilisateur");

//******************************************** */
let num1 = 10;
let num2 = 20;

function wait(fonction, millisecondes) {
  return new Promise((resolve) => {
    setTimeout(() => {
      fonction();
      resolve()
    }, millisecondes);
  })
}

async function calcul(callback) {
  await wait(() => { num1 *= 2 }, 2000);
  await wait(() => { num2 += 5 }, 1000);
  callback();
}
//callback peut porter un autre nom, ici c'est pour identifer ou est la fonction de callback

console.log("Début du calcul...");

function affResultat() {
  console.log(`Résultat : ${num1 + num2}`);
}

calcul(affResultat);

console.log("Fin du calcul.");

