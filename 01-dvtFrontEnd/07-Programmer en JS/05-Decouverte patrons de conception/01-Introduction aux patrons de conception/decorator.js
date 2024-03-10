// Définition de la classe initiale pour les objets graphiques
class Shape {
   draw() {
     console.log("Je suis une forme.");
   }
 }
 
 // Définition de la classe de décorateur pour ajouter une bordure
 class BorderDecorator {
   constructor(shape) {
     this.shape = shape;
   }
 
   draw() {
     this.shape.draw();
     console.log("Je suis une bordure rouge.");
   }
 }
 
 // Définition de la classe de décorateur pour ajouter une ombre
 class ShadowDecorator {
   constructor(shape) {
     this.shape = shape;
   }
 
   draw() {
     this.shape.draw();
     console.log("Je suis une ombre noire.");
   }
 }
 
 // Création d’un objet de la classe initiale
 const shape = new Shape();
 
 // Création d’un objet de la classe de décorateur pour ajouter une bordure
 const shapeWithBorder = new BorderDecorator(shape);
 
 // Création d’un objet de la classe de décorateur pour ajouter une ombre
 const shapeWithShadow = new ShadowDecorator(shape);
 
 // Création d’un objet de la classe de décorateur pour ajouter une bordure et une ombre
 const shapeWithBorderAndShadow = new ShadowDecorator(new BorderDecorator(shape));
 
 // Utilisation des différents objets créés
 shape.draw(); // Je suis une forme.
 shapeWithBorder.draw(); // Je suis une forme. Je suis une bordure rouge.
 shapeWithShadow.draw(); // Je suis une forme. Je suis une ombre noire.
 shapeWithBorderAndShadow.draw(); // Je suis une forme. Je suis une bordure rouge. Je suis une ombre noire.