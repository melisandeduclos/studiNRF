<?php
//************************************** */
// __get
class MyClass {
private $myProperty = 'value';

public function __get($property) {
   if (property_exists($this, $property)) {
      return $this->$property;
   }
}
}

$obj = new MyClass();
echo $obj->myProperty; // Affiche 'value'

//******************************************* */
//__set
class MyClass {
private $myProperty = 'value';

public function __set($property, $value) {
   if (property_exists($this, $property)) {
      $this->$property = $value;
   }
}
}

$obj = new MyClass();
$obj->myProperty = 'new value';
echo $obj->myProperty; // Affiche 'new value'

 //********************************* */
 //Exemple
class Produit {
private $nom;
private $prix;

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

$monProduit = new Produit();
$monProduit->nom = "Ordinateur";
$monProduit->prix = 1200;
echo $monProduit->nom; // affiche "Ordinateur"
echo $monProduit->prix; // affiche "1200"

