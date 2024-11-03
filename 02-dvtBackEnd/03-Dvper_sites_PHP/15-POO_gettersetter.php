<?php
class Voiture
{
    public string $modele;
    public string $marque;
    public int $vitesse = 0;
    
    public function setVitesse (int $vitesse){
        if($vitesse < 0){
            $this->vitesse = 0;
        } else {
            $this->vitesse = $vitesse;
        }
    }

    public function getVitesse(){
        return $this->vitesse;
    }

    public function accelerer(int $vitesse){
        /*$this->vitesse += $vitesse;*/
        /*Pour utiliser le setter dans la fonction accélérer*/
        $this->setVitesse($this->vitesse += $vitesse);
    }

    public function __construct(string $marque, string $modele){
        $this->marque = $marque;
        $this->modele = $modele;

    }

    public function showInfo(){
        return($this->marque." ".$this->modele.", sa vitesse est ".$this->vitesse." km/h.");
    }
}
$maVoiture = new Voiture("Chevrolet", "Aveo");
$maVoiture->accelerer(25);
echo($maVoiture->showInfo());