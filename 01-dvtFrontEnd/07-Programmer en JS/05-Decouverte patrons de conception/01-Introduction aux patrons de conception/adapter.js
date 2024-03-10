// Interface requise par le client
class Target {
   request() {}
 }
 
 // Objet existant avec une interface incompatible avec celle requise par le client
 class Adaptee {
   specificRequest() {
     return "Requête spécifique de l’Adaptee";
   }
 }
 
 // Adapter qui adapte l’interface de l’Adaptee à celle requise par le client
 class Adapter extends Target {
   constructor(adaptee) {
     super();
     this.adaptee = adaptee;
   }
 
   request() {
     const specificRequestResult = this.adaptee.specificRequest();
     return `Adapter: (TRANSLATED) ${specificRequestResult}`;
   }
 }
 
 // Utilisation du client avec l’Adapter
 function clientCode(target) {
   console.log(target.request());
 }
 
 // Utilisation de l’Adaptee avec une interface incompatible avec celle requise par le client
 const adaptee = new Adaptee();
 console.log("Adaptee: ", adaptee.specificRequest());
 
 // Utilisation de l’Adapter pour adapter l’interface de l’Adaptee à celle requise par le client
 const adapter = new Adapter(adaptee);
 console.log("Adapter : ", adapter.request());
 
 // Utilisation du client avec l’Adapter
 console.log("Client : ");
 clientCode(adapter);