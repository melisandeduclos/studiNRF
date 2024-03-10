class Memento {
   constructor(state) {
     this.state = state;
   }
 
   getState() {
     return this.state;
   }
 
   setState(state) {
     this.state = state;
   }
 }
 
 class Caretaker {
   constructor(originator) {
     this.originator = originator;
     this.mementos = [];
   }
 
   save() {
     const state = this.originator.getState();
     const memento = new Memento(state);
     this.mementos.push(memento);
   }
 
   undo() {
     const memento = this.mementos.pop();
     this.originator.setState(memento.getState());
   }
 }
 
 class Originator {
   constructor(state) {
     this.state = state;
   }
 
   getState() {
     return this.state;
   }
 
   setState(state) {
     this.state = state;
   }
 }
 
 const originator = new Originator("état initial");
 const caretaker = new Caretaker(originator);
 
 console.log(originator.getState());  // affiche "état initial"
 
 caretaker.save();
 originator.setState("état modifié");
 caretaker.save();
 
 console.log(originator.getState()); // affiche "état modifié"
 
 caretaker.undo();
 console.log(originator.getState()); // affiche "état modifié"