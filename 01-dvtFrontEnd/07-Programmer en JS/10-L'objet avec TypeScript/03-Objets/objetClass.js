"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
let person = new Person("John", 30);
person.sayHello(); // Output: Hello, my name is John and I am 30 years old.
