<?php
namespace chien;
require_once 'animal.php';

class Chien extends \animal\Animal{
    public function aboie(){
        echo("\nWouf");
    }
}
