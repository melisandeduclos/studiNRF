class PersonCollection {
   constructor() {
     this.persons = [];
   }
 
   addPerson(person) {
     this.persons.push(person);
   }
 
   getIterator() {
     return new PersonIterator(this.persons);
   }
 }
 
 
 class PersonIterator {
   constructor(persons) {
     this.index = 0;
     this.persons = persons;
   }
 
   hasNext() {
     return this.index < this.persons.length;
   }
 
   next() {
     const person = this.persons[this.index];
     this.index++;
     return person;
   }
 }
 
 
 class Person {
   constructor(name, age) {
     this.name = name;
     this.age = age;
   }
 }
 
 const personCollection = new PersonCollection();
 personCollection.addPerson(new Person("Alice", 25));
 personCollection.addPerson(new Person("Bob", 30));
 personCollection.addPerson(new Person("Charlie", 35));
 
 const iterator = personCollection.getIterator();
 
 while (iterator.hasNext()) {
   const person = iterator.next();
   console.log(person.name + ", " + person.age + " ans");
 }