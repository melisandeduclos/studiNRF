<?php
class Voiture
{
    public string $modele;
    public string $marque;
    public int $vitesse = 0;
    public static string $statique;
    
    public function accelerer(int $vitesse){
        $this->vitesse += $vitesse;
    }   

    public static function Statique(){
        /*echo("Je suis statique");*/
        /*echo($this->vitesse);*/
        self::$statique = "Je suis statique";
        echo(self::$statique);
    }
}

$maVoiture = new Voiture();
$maVoiture->marque = 'Mercedes';
$maVoiture->accelerer(10);
Voiture::Statique();