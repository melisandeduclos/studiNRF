<?php
/*$fruits = ['banana', 'ananas', 'pear', 'apple'];
var_dump($fruits);
sort($fruits);
var_dump($fruits);*/


$texte = "Atchoum ! Je suis... Atchoum ! enrhumé. C'est... Atchoum ! embêtant.";
$masque = "#Atchoum ! #";
$sortie = preg_split($masque,$texte,-1,PREG_SPLIT_NO_EMPTY);
print_r($sortie);