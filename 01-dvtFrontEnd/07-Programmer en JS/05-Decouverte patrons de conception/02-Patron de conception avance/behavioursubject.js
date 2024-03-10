const { BehaviorSubject, of } = rxjs;
// import { BehaviorSubject } from 'rxjs'; si import par npm

// Crée un BehaviorSubject avec une valeur initiale
const subject = new BehaviorSubject('Hello');

// Les observateurs peuvent s’abonner au BehaviorSubject
const observer1 = {
  next: value => console.log('Observer 1:', value),
};

const observer2 = {
  next: value => console.log('Observer 2:', value),
};

// Lorsqu’un observateur s’abonne, il reçoit immédiatement la dernière valeur émise
subject.subscribe(observer1); // Affiche "Observer 1: Hello"

// La valeur du BehaviorSubject peut être mise à jour
subject.next('World');

// Les observateurs actifs reçoivent la nouvelle valeur
// Affiche "Observer 1: World"

// Les nouveaux observateurs reçoivent également la dernière valeur émise lorsqu’ils s’abonnent
subject.subscribe(observer2); // Affiche "Observer 2: World"