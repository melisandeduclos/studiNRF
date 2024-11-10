<?php
//Définition d'un gestionnaire d'exceptions global
set_exception_handler(function (Throwable $e) {
	echo 'Une Exception a été détectée. Nous mettons fin au programme.' . PHP_EOL;
});

//Définition d'un gestionnaire d'erreurs global
set_error_handler(function ($errno, $errstr, $errfile, $errline) {
//Transformer l'erreur en Exception avec la classe dédiée ErrorException
	echo 'Une erreur a été détéctée. On la relance sous forme d\'Exception !' . PHP_EOL;
	throw new ErrorException($errstr, $errno, 0, $errfile, $errline);
});

//Test : lancer une erreur avec l'une des deux instructions suivantes
// throw new Error();
trigger_error('Oups !', E_USER_WARNING);
//Ce code ne sera jamais executé...
echo '42 !' . PHP_EOL;