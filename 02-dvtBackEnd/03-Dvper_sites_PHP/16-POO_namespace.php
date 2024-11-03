<?php
namespace animal;

class Animal{
    protected string $nom;

    public function getNom(){
        return $this->nom;
    }

    public function setNom(string $nom = null){
        $this->nom = $nom;
    }

    public function dort(){
        echo('Zzzz 💤');
    }
}

namespace main;
/*en exécutant ce code, PHP renvoie une erreur car PHP comprend que l'on veut
créer une instance dans l'objet namespace main*/
$myAnimal = new Animal();
/*pour se référer à la classe Animal la syntaxe est la suivante*/
$myAnimal = new \animal\Animal();