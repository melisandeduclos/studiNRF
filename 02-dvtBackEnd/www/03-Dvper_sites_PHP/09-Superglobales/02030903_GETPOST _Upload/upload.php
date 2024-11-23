<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire Methode GET/POST</title>
</head>
<body>
    <?php 
        /*
            $_FILES
            $_FILES['fichier']['name'] /* nom du fichier
            $_FILES['fichier']['type'] /* type du fichier
            $_FILES['fichier']['size'] /* taille en octets
            $_FILES['fichier']['tmp_name'] /* emplacement du fichier temporaire sur le serveur
            $_FILES['fichier']['error'] /* code erreur du téléchargement
        */

    ?>
    <br>
    <form action="upload.php" method="post" enctype="multipart/form-data">
        <label for="image">Choisir une image :</label><br><br>
        <input type="file" name="photo" id="image"><br><br>
        <button type="submit" name="submit">Envoyer</button>
    </form>
    <?php
 if (isset($_POST['submit']) && (isset($_FILES['photo'] ))) {

 // récupérer des informations sur notre image
 $image_name = $_FILES['photo']['name']; // nom de notre fichier
 $image_tmp_name = $_FILES['photo']['tmp_name']; // dossier temporaire
 $image_error = $_FILES['photo']['error']; // valeur d'erreur de notre image
 if($image_error === 0 ) {
 // Enregistrer l'image dans notre dossier uploads
 $destination = "uploads/".$image_name ; // uploads/1.png
 move_uploaded_file($image_tmp_name, $destination);
 echo " L'image a bien été enregistrée";}
 else {
 echo " Il y a eu une erreur lors du téléchargement de l'image";
 }}
  ?>
</body>
</html>