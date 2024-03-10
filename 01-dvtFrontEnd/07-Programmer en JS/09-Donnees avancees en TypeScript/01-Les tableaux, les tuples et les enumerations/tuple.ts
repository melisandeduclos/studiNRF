//Déclaration
let myExampletuple: [string, number];

//Initialisation de tuples
let myTupleex1: [string, number] = ['Hello', 20];

//Accéder aux éléments de tuples
let myStringex1 : string = myTupleex1[0]; // Hello
let myNumberex1 : number = myTupleex1[1]; // 20

//Notez que TypeScript permet également de décomposer un tuple en plusieurs variables séparées, ce qui peut rendre le code plus lisible :
let myTupleex2: [string, number] = ['Hello', 20];
let [myStringex2, myNumberex2] = myTupleex2;

//Tuples utilisés pour stocker des informations
let user: [string, string] = ["Alice", "alice@example.com"];
console.log(`Bienvenue, ${user[0]} ! Un e-mail de bienvenue a été envoyé à ${user[1]}.`);

//Tableaux de tuples
let myArraytuple: [string, number][] = [['Hello', 20], ['World', 99]];

//Exemple
let users: [string, string, string][] = [
   ["Alice", "alice@example.com", "123-456-7890"],
   ["Bob", "bob@example.com", "987-654-3210"],
   ["Charlie", "charlie@example.com", "555-555-5555"]
 ];

 for (let i = 0; i < users.length; i++) {
   console.log(`Nom: ${users[i][0]}, Email: ${users[i][1]}, Téléphone: ${users[i][2]}`);
 }

 //Exemple avec une interface sur la définition ddes types de donénes sur le tuple
 interface User {
   name: string;
   email: string;
   phone: string;
 }
 
 let usersInterface: User[] = [
   { name: "Alice", email: "alice@example.com", phone: "123-456-7890" },
   { name: "Bob", email: "bob@example.com", phone: "987-654-3210" },
   { name: "Charlie", email: "charlie@example.com", phone: "555-555-5555" }
 ];

 for (let i = 0; i < usersInterface.length; i++) {
   console.log(`Nom: ${usersInterface[i].name}, Email: ${usersInterface[i].email}, Téléphone: ${usersInterface[i].phone}`);
 }