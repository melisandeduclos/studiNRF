"use strict";
//Implémentation de classes
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    drive() {
        console.log(`Driving a ${this.make} ${this.model} from ${this.year}`);
    }
}
const myCar = new Car('Tesla', 'Model S', 2022);
myCar.drive(); // affiche "Driving a Tesla Model S from 2022"
