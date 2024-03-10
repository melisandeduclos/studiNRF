//Implémentation de classes
class Car {
   make: string;
   model: string;
   year: number;
   constructor(make: string, model: string, year: number) {
     this.make = make;
     this.model = model;
     this.year = year;
   }
   drive(): void {
     console.log(`Driving a ${this.make} ${this.model} from ${this.year}`);
   }}

const myCar = new Car('Tesla', 'Model S', 2022);

myCar.drive(); // affiche "Driving a Tesla Model S from 2022"