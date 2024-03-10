let jsonString = '{"name":"John", "age":30}';
let obj = JSON.parse(jsonString);
let personName = obj.name;
let personAge = obj.age;
console.log(personName);
console.log(personAge);

let txt = '{"name":"Charles", "age":31, "city":"Paris"}';
const parseObj = JSON.parse(txt);
document.getElementById("demo").innerHTML = parseObj.name +", "+parseObj.age+", "+parseObj.city;

//Analyser un tableau JSON
const array = '["Peugeot", "Fiat", "Citroen", "BMW"]';
const myArray = JSON.parse(array);
document.getElementById("demo").innerHTML = myArray[2];

//Créer une chaîne JSON depuis un objet Javascript avec JSON stringify()
const objString = {name:"Charles", age:"35", city:"Paris"};
const myJSON = JSON.stringify(objString);
document.getElementById("demo").innerHTML = myJSON;

//Créer une chaine JSON depuis un tableau Javascript avec JSON stringify()
const arrString = ["Géraldine", "Michel", "Eve", "Prout"];
const myArrayString = JSON.stringify(arrString) ;
document.getElementById("demo").innerHTML = myArrayString;

//Stocker et récupérer des données depuis local Storage
//Stocker les données
const myObjstk = {name: 'Mano', age: 43, city: 'Lyon'};
const myJSONStr = JSON.stringify(myObjstk);
localStorage.setItem("testJSON", myJSONStr);
//Récupérer les données
let getStorage = localStorage.getItem("testJSON");
let storageParse = JSON.parse(getStorage);
document.getElementById("demo").innerHTML = storageParse.name +", "+storageParse.age+", "+storageParse.city

//Requêtes AJAX
const xmlhttp = new XMLHttpRequest();
			xmlhttp.onload = function() {
				const myArr = JSON.parse(this.responseText);
				document.getElementById("demo").innerHTML = JSON.stringify(myArr, null, 2);
			}
			xmlhttp.open("GET", "car.json", true);
			xmlhttp.send();
