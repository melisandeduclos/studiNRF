<?php
set_exception_handler(function(Exception $e){
    echo "Une exception a été détectée: " . $e->getMessage() . PHP_EOL;
    //Décidier d'échouer avec grâce: die/exit?
    die;
});

/***
 * Retourne l'inverse du carré d'un nombre
 * @param int|float $d le nombre à inverser et à élever au carré
 * @return float
 * @throws Exception Si le nombre à inverser est égal à ézéro
 */
function inverseSquare(int $d):float{
    if($d < 1E-10){
        //Programmation offensive
        throw new Exception('Attention, division par zéro !');
    }
    return 1/($d * $d);
}

//Programmation défensive
try{
    echo inverseSquare(10) . PHP_EOL;
    echo inverseSquare(0) . PHP_EOL;
} catch(Exception $e){
    echo "Impossible de calculer l'inverse du carré de la distance entre les deux planètes." . PHP_EOL;
}
restore_exception_handler();
