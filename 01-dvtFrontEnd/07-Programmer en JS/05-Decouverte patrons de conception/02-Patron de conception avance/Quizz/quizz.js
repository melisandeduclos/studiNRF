// Assurez-vous d'importer RxJS
const { from } = rxjs;
const messages = ['Bonjour', 'Comment ça va ?', 'Au revoir'];
const observable = from(messages);

class Model {
  constructor() {
  this.messages = [];
  }
  
  ajouterMessage(message) {
  this.messages.push(message);
  }
}
class View {
  afficherMessage(message) {
  console.log(message);
  }
}
class Controller {
  constructor(model, view) {
  this.model = model;
  this.view = view;
  }
  
  nouveauMessage(message) {
  this.model.ajouterMessage(message);
  this.view.afficherMessage(message);
  }
}

const model = new Model();
const view = new View();
const controller = new Controller(model, view);

const observer = {
next: message => controller.nouveauMessage(message),
error: err => console.error(err),
complete: () => console.log('Terminé')
};

observable.subscribe(observer);
