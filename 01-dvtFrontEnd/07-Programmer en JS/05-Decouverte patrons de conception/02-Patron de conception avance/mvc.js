// Modèle
class Model {
   constructor() {
     this.data = [];
   }
 
   addData(item) {
     this.data.push(item);
   }
 
   getData() {
     return this.data;
   }
 }
 
 // Vue
 class View {
   constructor() {}
 
   render(data) {
     console.log(`Données actuelles : ${JSON.stringify(data)}`);
   }
 }
 
 // Contrôleur
 class Controller {
   constructor(model, view) {
     this.model = model;
     this.view = view;
   }
 
   addData(item) {
     this.model.addData(item);
     this.view.render(this.model.getData());
   }
 }
 
 // Utilisation du MVC
 const model = new Model();
 const view = new View();
 const controller = new Controller(model, view);
 
 // Ajout de données
 controller.addData("Donnée 😎");
 controller.addData("Donnée 2");