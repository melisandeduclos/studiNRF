<?php
//phpinfo();
date_default_timezone_set("Europe/Paris");
$abstracts = [
	[
		'id' => 1,
		'name' => 'git',
		'url' => 'http://git.test/abstract'
	],
	[
		'id' => 2,
		'name' => null,
		'url' => 'http://php.test/abstract'
	],
	[
		'id' => 3,
		'name' => 'handling-errors-best-practices',
		'url' => 'http://programming.test/abstract/handling-errors/best-pratices'
	],
	[
		'id' => 4,
		'name' => null,
		'url' => 'geocities.test/abstract'
	],
];

$errors = [];

function validationDatas(array $datas, array &$localErrors) {
	if (!isset($datas['name']) || is_null($datas['name'])) {
		$localErrors[] = "Nom indéfini";
	}

	if (!isset($datas['url']) || !str_contains($datas['url'], 'http://')) {
		$localErrors[] = "URL invalide";
	}

	return empty($localErrors); // Retourne true si pas d'erreurs
}

foreach ($abstracts as $abstract) {
	$localErrors = [];
	try {
		if (validationDatas($abstract, $localErrors)) {
			echo ("L'id " . $abstract['id'] . " est valide" . PHP_EOL);
		} else {
			throw new DomainException("Erreurs de validation");
		}
	} catch (DomainException $e) {
		$errors[$abstract['id']] = $localErrors;
		echo ("L'id " . $abstract['id'] . " n'est pas valide : " . PHP_EOL);
		foreach ($localErrors as $error) {
			echo $error . PHP_EOL;
			error_log("[". date("Y-m-d H:i:s") . "] L'id " . $abstract['id'] . " n'est pas valide : " . $error . "\n",3,"./errors.log");
		}
	}
}

// Affiche toutes les erreurs
echo PHP_EOL . "Résumé des erreurs :" . PHP_EOL;
print_r($errors);

set_exception_handler(function (Exception $e) {
	$log = sprintf(
	"%s %s %s %s %s",
	date('Y-m-d H:i:s'),
	$e->getMessage(),
	$e->getCode(),
	$e->getFile(),
	$e->getLine()
	);
	echo $log;
	error_log($log, 3, 'errors.log');
	});
	throw new Exception('Oups !', 400);
