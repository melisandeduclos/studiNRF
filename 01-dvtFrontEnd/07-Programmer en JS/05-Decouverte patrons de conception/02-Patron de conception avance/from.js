// import { from } from 'rxjs';
const { from } = rxjs;

// Crée un tableau
const items = [1, 2, 3, 4, 5];

// Crée un Observable à partir du tableau
const observable = from(items);

// Un observateur qui affiche les valeurs émises
const observer = {
  next: value => console.log(value),
  error : err => console.error(err),
  complete: () => console.log('Terminé'),
};

// S’abonne à l’Observable et affiche les valeurs émises
observable.subscribe(observer);
// Affiche :
// 1
// 2
// 3
// 4
// 5
// Terminé