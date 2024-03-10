interface Address {
   street: string;
   city: string;
   postalCode: string;
 }

 interface Person {
   name: string;
   age: number;
   address: Address;
 }

 // Déclaration d’un objet imbriqué
let person: Person = {
   name: "John",
   age: 30,
   address: {
     street: "123 Main St",
     city: "Anytown",
     postalCode: "12345"
   }};

// Utilisation de l’objet imbriqué
console.log(person.name); // Output: John
console.log(person.address.city); // Output: Anytown