const Singleton = (() => {
   let instance;
  
   // Fonction qui crée l’instance unique de la classe
   function createInstance() {
     const object = new Object("Je suis l’instance unique !");
     return object;
   }
  
   // Méthode publique pour obtenir l’instance unique de la classe
   return {
     getInstance : function() {
       if (!instance) {
         instance = createInstance();
       }
       return instance;
     }
   };
 })();
 
 // Utilisation de la méthode publique pour obtenir l’instance unique
 const instance1 = Singleton.getInstance();
 const instance2 = Singleton.getInstance();
 
 // Vérification que les deux instances sont identiques
 console.log(instance1 === instance2); // true