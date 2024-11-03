<?php
namespace person;
class Person{
    protected string $prenom;

    public function getPrenom(){
        return $this->prenom;
    }

    public function setPrenom(string $prenom = null){
        $this->prenom = $prenom;
    }

    public function getAge(){
        return $this->age;
    }

    public function setAge(string $age = null){
        $this->age = $age;
    }

    public function __construct(string $prenom, int $age){
        $this->setPrenom($prenom);
        $this->setAge($age);
    }
}

interface PersonInterface{
        public function sePresenter();
}

namespace homme;
class Homme extends \person\Person implements \person\PersonInterface{
	public function sePresenter(){
		echo("Je suis un Homme de ".$this->getAge()." ans et je m'appelle ".$this->getPrenom().".\n");
	}
}

namespace femme;
class Femme extends \person\Person implements \person\PersonInterface{
	public function sePresenter(){
		echo("Je suis une Femme de ".$this->getAge()." ans et je m'appelle ".$this->getPrenom().".\n");
	}
}

namespace main;
$homme1 = new \homme\Homme("Jean",25);
$homme1->sePresenter();
$femme1 = new \femme\Femme("Jeanne", 28);
$femme1->sePresenter();
