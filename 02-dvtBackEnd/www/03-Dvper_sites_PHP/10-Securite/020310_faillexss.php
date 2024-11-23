<!DOCTYPE html>
<html>
<head>
	<title>Télécharger un fichier</title>
</head>
<body>
	<h1>Télécharger un fichier</h1>
	<form method="post" enctype="multipart/form-data">
		<input type="file" name="file" required>
		<button type="submit" name="submit">Télécharger</button>
	</form>
</body>
</html>
<?php 
if (isset($_POST['submit'])){
// récupération des informations de notre fichier 
$file_name = strip_tags($_FILES['file']['name']);
$file_size = $_FILES['file']['size'];
$file_tmp = $_FILES ['file']['tmp_name'];
$file_type = $_FILES['file']['type'];

$file_ext = explode('.', $file_name); // cahier.jgp   => ['cahier' , 'jpg'] 
$file_end = end($file_ext);  // jpg $
$file_end = strtolower($file_end);
$extensions  = [ 'doc', 'jpg', 'docx', 'xls'];
if(in_array($file_end, $extensions) === false) {
// Si l'extension du fichier n'est pas autorisée, on affiche un message d'erreur
    echo " Veuillez utiliser les extensions suivantes : DOC, JPG , DOCX , XLS";
}
// Si la taille du fichier dépasse la limite autorisée, on affiche un message d'erreur
elseif($file_size > 300000) { 
    echo " le fichier est trop volumineux";
}else {
// On nettoie le nom de fichier en supprimant les caractères spéciaux
    $file_name = preg_replace('/[^A-Za-z0-9.\-]/', '' ,$file_name);
// On déplace le fichier uploadé vers le répertoire "uploads" avec son nom d'origine
    move_uploaded_file($file_tmp, "uploads/".$file_name);
// On affiche un message de succès pour indiquer que le téléchargement a réussi
    echo " Le fichier ".$file_name." a été téléchargé avec succès";
}
}