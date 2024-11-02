<?php
//Fonctions callback
$grades = [2,8,12,6,9,12,13,5];
//=> pour chaque note, ajouter 1

//array_map prend 2 arguments
    //1er argument = fonction de rappel
    //2e argument = le tableau

function incrementByOne ($grade){
    return $grade + 1;
}

$gradesPlusOne = array_map('incrementByOne', $grades);
var_dump($gradesPlusOne);

//array_filter : appliquer un filtre sur chaque élément du tabelau,
//si la fonction array_filtre renvoie true, la vealeur sera garder dans le nouveau tableau
 //nous allons les garder uniquement les notes < 10

 //définition de la fonction de rappel
 function filterUnderTen($grade){
    return $grade < 10;
 }
 $gradeUnderTen = array_filter($grades,'filterUnderTen');
var_dump($gradeUnderTen);

$fruits = ['banana', 'ananas', 'pear', 'apple'];
var_dump($fruits);
sort($fruits);
var_dump($fruits);