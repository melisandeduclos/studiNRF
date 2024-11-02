<?php
// Configuration du fuseau horaire.
date_default_timezone_set('UTC');
$date3 = date("H:i:s");                          
$date4 = date("Y-m-d H:i:s");  
$date1 = date("m.d.y");                                                
$date2 = date("Ymd");                                  
$date5 = date("d l F Y");  
$date6 = date("L");

if($date6!=0){
    $responds="Oui";
}else{
    $responds="Non";
}


echo "date 1 : ".$date1."\n";
echo "date 2 : ".$date2."\n";
echo "date 3 : ".$date3."\n";
echo "date 4 : ".$date4."\n";
echo "date 5 : ".$date5."\n";
echo "date 6 : l'année est-elle bissextile ? ".$responds."\n";

echo "La date d'aujourd'hui au format Timestamp : ".time()."\n";
echo "La date d'aujourd'hui au format GMT : ".gmdate("d/m/Y")."\n";
echo print_r(getdate());

// Affiche : July 1, 2000 est un Saturday
echo "July 1, 2000 est un " . date("l", mktime(0, 0, 0, 7, 1, 2000))."\n";

// Affiche quelque chose comme : 2006-04-05T01:02:03+00:00
echo date('c', mktime(1, 2, 3, 4, 5, 2006))."\n";

echo strtotime("09 June 1992")."\n";
echo date("d.m.Y",strtotime("09 June 1992"))."\n";

var_dump(checkdate(2,29 , 2023));
var_dump(checkdate(2, 29, 2024));

$Date = "2023-03-27";
echo date('Y-m-d', strtotime($Date. ' + 1 days'))." | ";
echo date('Y-m-d', strtotime($Date. ' + 1 months'))."\n";

/*Date plus ancienne qu'une autre */
/* Méthode 1 */
$Date1 = "2023-03-27";
$Date2 = "2023-04-01";
echo "'/*Date plus ancienne qu'une autre *'/"." | ".$Date1." | ".$Date2."\n";

if($Date1>$Date2){
 
  echo "la date 1 est plus récente"."\n";
}else{
 
    echo "la date 2 est plus récente"."\n";
}


/* Méthode 2 */


$Date1 = "2023-03-27";
$Date2 = "2023-04-01";

if(strtotime($Date1)>strtotime($Date2)){
 
  echo "la date 1 est plus récente"."\n";
}else{
 
    echo "la date 2 est plus récente"."\n";
}

/* Méthode 3 */

$Date1 = new DateTime("2023-03-27");
$Date2  =  new DateTime("2023-04-01");
$Date1format = $Date1->format("d/m/Y");
$Date2format = $Date2->format("d/m/Y");

if($Date1 > $Date2){
	 echo "La date 1 : ".$Date1format." est supérieur à la date 2 :".$Date2format."\n";
}else{
	 echo "La date 2 : ”.$Date2format.” est supérieur à la date 1 :".$Date1format."\n";
}

/*Intervalle entre deux date*/
$start = date_create('2023-03-27');
$end = date_create('2023-04-02');
echo "\*Date plus ancienne qu'une autre */ | ".$start->format("d/m/Y") ." | ". $end->format("d/m/Y") ."\n";
$nbdays = date_diff($start, $end);
echo "La différence entre les deux dates est ".$nbdays->format("%d")." jours"."\n";

/*Est-ce un jour de we*/

$date = '2022-06-15';
echo "\*Jour de we ? : */ | ".date("d/m/Y",strtotime($date))."\n";
$weekendday = date('N', strtotime($date));

if ($weekendday >= 6) {
   
  echo 'la date est un weekend';

} else {

  echo "la date n'est pas un weekend";
}

?>