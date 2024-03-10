// Définition de l’interface commune pour les objets simples et les objets composés
class DocumentComponent {
   constructor(name) {
     this.name = name;
   }
 
   add(component) {}
   remove(component) {}
   getChild(index) {}
   display() {}
 }
 
 // Définition de la classe pour les objets simples
 class Paragraph extends DocumentComponent {
   display() {
     console.log("Je suis un paragraphe.");
   }
 }
 
 // Définition de la classe pour les objets composés
 class Document extends DocumentComponent {
   constructor(name) {
     super(name);
     this.children = [];
   }
 
   add(component) {
     this.children.push(component);
   }
 
   remove(component) {
     const index = this.children.indexOf(component);
     if (index !== -1) {
       this.children.splice(index, 1);
     }
   }
 
   getChild(index) {
     return this.children[index];
   }
 
   display() {
     console.log(`Je suis le document ${this.name}.`);
     for (const child of this.children) {
       child.display();
     }
   }
 }
 
 // Création de différents objets simples et composés
 const paragraph1 = new Paragraph("premier paragraphe");
 const paragraph2 = new Paragraph("deuxième paragraphe");
 const myDocument = new Document("document principal");
 const subDocument = new Document("sous-document");
 
 // Ajout des objets simples au sous-document
 subDocument.add(paragraph1);
 subDocument.add(paragraph2);
 
 // Ajout du sous-document et d’un paragraphe au document principal
 myDocument.add(subDocument);
 myDocument.add(new Paragraph("dernier paragraphe"));
 
 // Affichage du document principal, qui affiche tous les objets ajoutés à la hiérarchie
 myDocument.display();