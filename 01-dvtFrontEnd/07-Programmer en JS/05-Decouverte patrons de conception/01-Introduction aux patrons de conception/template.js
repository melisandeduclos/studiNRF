class AbstractClass {
   templateMethod() {
     this.operation1();
     this.operation2();
     // ...
   }
 
   operation1() {
     throw new Error('La méthode operation1() doit être implémentée');
   }
 
   operation2() {
     throw new Error('La méthode operation2() doit être implémentée');
   }
 }
 class ConcreteClassA extends AbstractClass {
   operation1() {
     console.log('Opération 1 de la classe A');
   }
 
   operation2() {
     console.log('Opération 2 de la classe A');
   }
 }
 
 class ConcreteClassB extends AbstractClass {
   operation1() {
     console.log('Opération 1 de la classe B');
   }
 
   operation2() {
     console.log('Opération 2 de la classe B');
   }
 }
 const concreteA = new ConcreteClassA();
 concreteA.templateMethod();
 // Output:
 // Opération 1 de la classe A
 // Opération 2 de la classe A
 
 const concreteB = new ConcreteClassB();
 concreteB.templateMethod();
 // Output:
 // Opération 1 de la classe B
 // Opération 2 de la classe B