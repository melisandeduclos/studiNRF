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
		echo("zzz 💤\n");
	}
}
namespace chien;

trait Canides{
    public function aboie(){
        echo("Wouf\n");
    }
}
class Chien extends \animal\Animal{
    use Canides;
}
namespace chat;
class Chat extends \animal\Animal{
	public function miaule(){
		echo("Miaou\n");
	}
}
namespace main;
$monChien = new \chien\Chien();
$monChat = new \chat\Chat();
$monChien->aboie();
$monChien->dort();
$monChat->miaule();
