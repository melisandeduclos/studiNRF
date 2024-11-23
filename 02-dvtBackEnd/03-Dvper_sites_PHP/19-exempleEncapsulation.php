<?php
class Utilisateur {
    private string $nom;
    private string $prenom;
    private string $email;

    public function __construct(String $nom,string  $prenom,string  $email) {
        $this->nom = $nom;
        $this->prenom = $prenom;
        $this->email = $email;
    }

    public function getNom() :string {
        return $this->nom;
    }

    public function setNom(string $nom) {
        $this->nom = $nom;
    }

    public function getPrenom() :string {
        return $this->prenom;
    }

    public function setPrenom(string $prenom) {
        $this->prenom = $prenom;
    }

    public function getEmail():string {
        return $this->email;
    }

    public function setEmail(string $email) {
        $this->email = $email;
    }
}

class Animal {
   protected string $nom;

   public function setNom(string$nom) {
       $this->nom = $nom;
   }
}

class Chat extends Animal {
   public function getNom() :string {
       return $this->nom;
   }
}

$monChat = new Chat();
$monChat->setNom("Minou");
echo $monChat->getNom(); // affiche "Minou"