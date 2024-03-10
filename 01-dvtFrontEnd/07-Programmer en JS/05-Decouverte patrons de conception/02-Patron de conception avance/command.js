// Récepteur : objet qui exécute la commande
class Receiver {
   constructor() {}
 
   action() {
     console.log("Action effectuée.");
   }
 }
 
 // Commande : encapsule une commande à exécuter
 class Command {
   constructor(receiver) {
     this.receiver = receiver;
   }
 
   execute() {
     console.log("Commande exécutée.");
     this.receiver.action();
   }
 
   undo() {
     console.log("Commande annulée.");
   }
 }
 
 // Invocateur
 class Invoker {
   constructor() {
     this.commands = [];
   }
 
   setCommand(command) {
     this.commands.push(command);
   }
 
   executeCommands() {
     this.commands.forEach((command) => {
       command.execute();
     });
   }
 
   undoCommands() {
     this.commands.reverse().forEach((command) => {
       command.undo();
     });
   }
 }
 
 // Utilisation de Command
 const receiver = new Receiver();
 const command1 = new Command(receiver);
 const command2 = new Command(receiver);
 const invoker = new Invoker();
 
 // Configuration des commandes pour l’invocateur
 invoker.setCommand(command1);
 invoker.setCommand(command2);
 
 // Exécution des commandes
 invoker.executeCommands();
 
 // Annulation des commandes
 invoker.undoCommands();