<?php
class Users{
   private string $id;
   private string $email;
   private string $password;
   private string $nom;
   private string $prenom;
   private string $dptNumber;
   private array $roles = [];


   public function __set($propriete, $value){
      if(property_exists($this, $propriete)){
         $this->$propriete = $value;
      }
   }

   public function __get($propriete) {
      if (property_exists($this, $propriete)) {
         return $this->$propriete;
      }
      return null; // Retourne `null` si la propriété n'est pas initialisée
   }

   public function addRole(string $role): void {
      if (!in_array($role, $this->roles)) {
          $this->roles[] = $role;
      }
  }  

   public function sayHello():string{
      return 'Bonjour ' . $this->nom.' '.$this->prenom;
   }
}