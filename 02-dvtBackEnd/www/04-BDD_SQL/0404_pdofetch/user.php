<?php
class User {
   private int $id;
   private string $name;
   private string $password = '';
   private string $email;
   private string $groupe;

   public function __construct(){
      //Vous pouvez définir d'autres valeurs par défaut ici si nécessaire
      $this->groupe = ''; //Initialisation explicite pour éviter l'erreur
   }

   public function __get($propriete) {
      if (property_exists($this, $propriete)) {
         return $this->$propriete;
      }
   }

   public function __set($propriete, $valeur) {
      if (property_exists($this, $propriete)) {
         $this->$propriete = $valeur;
      }
}
}