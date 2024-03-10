//Déclaration
enum DaysOfWeekex1 {
   Monday,
   Tuesday,
   Wednesday,
   Thursday,
   Friday,
   Saturday,
   Sunday
 }

 //Dans cet exemple, nous avons défini une énumération DaysOfWeek qui contient 7 valeurs numériques nommées. Les valeurs numériques sont automatiquement assignées par défaut, commençant à 0 et s'incrémentant de 1 pour chaque valeur suivante. Ainsi, DaysOfWeek.Monday a la valeur 0, DaysOfWeek.Tuesday a la valeur 1, et ainsi de suite.

 //Utilisation
 let today : DaysOfWeekex1 = DaysOfWeekex1.Monday;
 console.log(today);

 //Assignation de valeurs personnalisées
 enum DaysOfWeekex2 {
   Monday = 1,
   Tuesday,
   Wednesday,
   Thursday,
   Friday,
 }

 //Énumérations utilisées pour une application de pizzeria
 enum PizzaType {
   Margherita,
   Pepperoni,
   Hawaiian,
   Vegetarian
 }

 //Nous pouvons utiliser cette énumération pour stocker le type de pizza commandé par un utilisateur :
 
 interface Order {
   customerName: string;
   pizzaType: PizzaType;
 }
 let order: Order = {
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