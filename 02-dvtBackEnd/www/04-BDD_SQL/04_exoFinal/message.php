<?php
date_default_timezone_set('UTC');
class Message {
   private int $id;
   private string $message;
   private string $date;

   public function __construct() {
      // Initialise `date` avec la date et l'heure actuelles par défaut
      $this->date = gmdate('Y-m-d H:i');
   }

   public function __set($propriete, $value){
      if(property_exists($this, $propriete)){
         if($propriete == 'date'){
            $this->$propriete = gmdate('Y-m-d H:i');
         } else {
            $this->$propriete = $value;
         }
      }
   }

   public function __get($propriete) {
      if (property_exists($this, $propriete) && isset($this->$propriete)) {
         return $this->$propriete;
      }
      return null; // Retourne `null` si la propriété n'est pas initialisée
   }
}


/*$obj = new Message();
$obj->date = "";
$obj->message = 'Mon Texte';
echo $obj->message;
echo $obj->date;*/

