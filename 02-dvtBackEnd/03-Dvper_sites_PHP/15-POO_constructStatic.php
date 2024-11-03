<?php
class Voiture
{
    public string $modele;
    public string $marque;
    public int $vitesse = 0;
    
    public function accelerer(int $vitesse){
        $this->vitesse += $vitesse;
    }   

    /*public function __construct(string $marque, string $modele){
        $this->marque = $marque;
        $this->modele = $modele;
    }*/

    public static function /*__construct*/ marqueEtModele (string $marque, string $modele){
        $instance = new self();
        $instance->marque = $marque;
        $instance->modele = $modele;
        return $instance;
    }    

    public function __construct(){
    }
}

$maVoiture = Voiture::marqueEtModele("Chevrolet", "Aveo");
$maVoiture->accelerer(25);
echo($maVoiture->vitesse);