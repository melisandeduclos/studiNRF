<?php
$users = [
	'Adam' => 8,
	'Julie' => 13,
	'Karima' => 11,
	'Anna' => 11,
	'Marina' => 9,
	'Mohamed' => 7,
	'Arthur' => 12,
	'Morgan' => 14
];

$newUsers = [
	'Hector' => 6,
	'Manon' => 8,
	'Elisa' => 10,
	'Leo' => 12,
	'Enzo' => 13,
	'Ada' => 9
];

$users += $newUsers;
var_dump($users);

//Comment trier les valeurs du tableau par ordre d’âge croissant, puis les filtrer pour créer deux nouveaux tableaux, un contenant tous les enfants de moins de 10 ans, l’autre tous les enfants de 10 ans et plus ?

asort($users);
var_dump($users);

function filterUnderTen ($age) {
	return $age < 10;
};
function filterTenAndOver ($age) {
	return $age >= 10;
};
$underTen = array_filter($users, 'filterUnderTen');
$tenAndOver = array_filter($users, 'filterTenAndOver');

var_dump($underTen);
var_dump($tenAndOver);
