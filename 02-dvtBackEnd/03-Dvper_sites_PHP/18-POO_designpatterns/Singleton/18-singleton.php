<?php
//Bonne utilisation : accès à une base de données
//Mauvaise utilisation : pour déclarer des users

class Singleton {
    private static $__instance = null;
    private function __construct(){}

    public static function getInstance(){
        if(is_null(self::$__instance)){
            self::$__instance = new Singleton();
        }
        return self::$__instance;
    }

    public function sayHello(){
        echo('Affichage par le singleton');
    }
}