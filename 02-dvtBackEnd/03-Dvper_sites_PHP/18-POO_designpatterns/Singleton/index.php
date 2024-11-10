<?php

require_once "18-singleton.php";

//$example = new Singleton(); => erreur
$example = Singleton::getInstance();
$example->sayHello();