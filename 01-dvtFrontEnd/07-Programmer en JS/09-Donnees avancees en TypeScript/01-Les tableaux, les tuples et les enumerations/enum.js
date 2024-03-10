"use strict";
//Déclaration
var DaysOfWeekex1;
(function (DaysOfWeekex1) {
    DaysOfWeekex1[DaysOfWeekex1["Monday"] = 0] = "Monday";
    DaysOfWeekex1[DaysOfWeekex1["Tuesday"] = 1] = "Tuesday";
    DaysOfWeekex1[DaysOfWeekex1["Wednesday"] = 2] = "Wednesday";
    DaysOfWeekex1[DaysOfWeekex1["Thursday"] = 3] = "Thursday";
    DaysOfWeekex1[DaysOfWeekex1["Friday"] = 4] = "Friday";
    DaysOfWeekex1[DaysOfWeekex1["Saturday"] = 5] = "Saturday";
    DaysOfWeekex1[DaysOfWeekex1["Sunday"] = 6] = "Sunday";
})(DaysOfWeekex1 || (DaysOfWeekex1 = {}));
//Dans cet exemple, nous avons défini une énumération DaysOfWeek qui contient 7 valeurs numériques nommées. Les valeurs numériques sont automatiquement assignées par défaut, commençant à 0 et s'incrémentant de 1 pour chaque valeur suivante. Ainsi, DaysOfWeek.Monday a la valeur 0, DaysOfWeek.Tuesday a la valeur 1, et ainsi de suite.
//Utilisation
let today = DaysOfWeekex1.Monday;
console.log(today);
//Assignation de valeurs personnalisées
var DaysOfWeekex2;
(function (DaysOfWeekex2) {
    DaysOfWeekex2[DaysOfWeekex2["Monday"] = 1] = "Monday";
    DaysOfWeekex2[DaysOfWeekex2["Tuesday"] = 2] = "Tuesday";
    DaysOfWeekex2[DaysOfWeekex2["Wednesday"] = 3] = "Wednesday";
    DaysOfWeekex2[DaysOfWeekex2["Thursday"] = 4] = "Thursday";
    DaysOfWeekex2[DaysOfWeekex2["Friday"] = 5] = "Friday";
})(DaysOfWeekex2 || (DaysOfWeekex2 = {}));
//Énumérations utilisées pour une application de pizzeria
var PizzaType;
(function (PizzaType) {
    PizzaType[PizzaType["Margherita"] = 0] = "Margherita";
    PizzaType[PizzaType["Pepperoni"] = 1] = "Pepperoni";
    PizzaType[PizzaType["Hawaiian"] = 2] = "Hawaiian";
    PizzaType[PizzaType["Vegetarian"] = 3] = "Vegetarian";
})(PizzaType || (PizzaType = {}));
let order = {
    customerName: "Alice",
    pizzaType: PizzaType.Pepperoni
};
//Nous pouvons ensuite utiliser cette information pour préparer la commande de pizza :
switch (order.pizzaType) {
    case PizzaType.Margherita:
        console.log(`Préparation de la pizza margherita pour ${order.customerName}...`);
        break;
    case PizzaType.Pepperoni:
        console.log(`Préparation de la pizza pepperoni pour ${order.customerName}...`);
        break;
    case PizzaType.Hawaiian:
        console.log(`Préparation de la pizza hawaiian pour ${order.customerName}...`);
        break;
    case PizzaType.Vegetarian:
        console.log(`Préparation de la pizza végétarienne pour ${order.customerName}...`);
        break;
}
