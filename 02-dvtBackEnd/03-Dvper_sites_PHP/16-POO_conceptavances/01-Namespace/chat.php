<?php
namespace chat;
require_once 'animal.php';

class Chat extends \animal\Animal{
    public function aboie(){
        echo("\nMiaou");
    }
}
