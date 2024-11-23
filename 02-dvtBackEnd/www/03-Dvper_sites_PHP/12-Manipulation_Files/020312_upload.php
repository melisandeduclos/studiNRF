<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Téléchargement de fichier</title>
</head>
<body>
    <h1>Téléchargement de fichier</h1>
    <form action="020312_upload.php" method="post" enctype="multipart/form-data">
        <label for="file">Choisissez un fichier à télécharger</label>
        <input type="file" name="file" id="file"><br><br>
        <input type="submit" value="Télécharger">
    </form>
</body>
</html>

<?php 
if ($_SERVER['REQUEST_METHOD'] === "POST") {
    $file = $_FILES['file']['name'];
    $destination = "uploads/";
    $target_dir = $destination . basename($file);
    if (file_exists($target_dir)) {
        //creation d'une copie de sauvegarde
        $backup_file = $destination . 'backup' . basename($file); 
        copy($target_dir, $backup_file);
        //renommer le fichier original
        $rename_file = $destination . 'rename' . basename($file);
        rename($target_dir, $rename_file);
        //suppression du fichier original
        unlink($backup_file);
        echo "Le fichier a bien été remplacé avec succès.";
    } else {
        move_uploaded_file($_FILES['file']['tmp_name'],$target_dir);
        echo "Le fichier ".$file."a bien été téléchargé.";
    }
} else {
    echo "Il y a eu une erreur lors de téléchargement du fichier";
}
?>