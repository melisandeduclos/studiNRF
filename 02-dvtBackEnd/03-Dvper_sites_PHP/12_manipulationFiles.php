<?php $file = fopen("monfichier1.txt", "w");
if($file) {
    fwrite($file, " Voici un texte d'exemple pour monfichier1.txt");
}
fclose($file);
$count = 0;
$file_count = fopen('monfichier1.txt', 'r');
while(!feof($file_count)) {
    $line = fgets($file_count);
    $count++;    }
echo " Le fichier contient " .$count . " lignes";
$file_add = fopen('monfichier1.txt', 'a');

if($file_add) { 
    fwrite($file_add,  "\nNouvelle entrée");
    fclose($file_add);
}
$file_update = fopen('monfichier1.txt', 'r');
echo "<br><br> Le fichier contient désormais : ";
while(!feof($file_update)) { 
    $line = fgets($file_update);
    echo "<br>".$line;
}
fclose($file_update);

?>