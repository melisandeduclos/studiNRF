<?php
$fruits = ['banana', 'apple', 'kiwi'];
$array = array_slice($fruits, count($fruits) - 1, 1);

foreach( $array as $key => $value ){
    echo $key."\t=>\t".$value."\n";
} 

$names = ['Lea', 'Morgan', 'Lionel', 'Marina'];
foreach($names as $key => $name) {
    echo 'Le prénom ' . $name . ' est à la clé '. $key . " du taleau.\n";
};

//Le prénom Lea est à la clé 0 du tableau.
//Le prénom Morgan est à la clé 1 du tableau.
//Le prénom Lionel est à la clé 2 du tableau.
//Le prénom Marina est à la clé 3 du tableau.

$names = ['Lea', 'Morgan', 'Lionel', 'Marina'];
foreach($names as $name){
    echo $name . "\n";
};
//Lea 
//Morgan 
//Lionel
//Marina

$movie = "Children of Men";
$rates = [3,4,2,4,3,5,0];
$comment = ["Albert", "Super film, j'ai adoré"];

//A*****
$author = $comment[0];
$nameLength = strlen($author);
$stars = str_repeat('*', strlen($author)-1);
$anonymousAuthor = substr($author,0,1) . $stars;

echo ($anonymousAuthor);

