<?php

set_error_handler(function($errno, $errstr,$errfile, $errline){
    //Personnaliser le rapport d'erreur
    echo "Génération du rapport d'erreur" . PHP_EOL;
    //Exécution d'un code personnalisé
    if($errno === E_WARNING){
        echo ('l\'erreur est de type E_WARNING');
        exit();
    }

});

try {
    require 'foo.php';
    echo 'Cette instruction ne sera pas exécutée.' . PHP_EOL;
} catch (Error $e) {
    echo 'l\'erreur a été attrappée par le bloc catch.' . PHP_EOL;
}
echo 'l\'exécution continue ici.' . PHP_EOL;