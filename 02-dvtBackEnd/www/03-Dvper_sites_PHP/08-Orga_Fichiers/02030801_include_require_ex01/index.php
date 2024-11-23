<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>0203081_include_require_ex01</title>
  <link rel="stylesheet" href="./css/reset.css">
  <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    

<?php
//require_once "css/reset.css";
//require_once "css/style.css";
require_once "html/header.html"; // L'inclusion d'un chemin de fichier erroné génère une erreur bloquante
require_once "constants.php";
?>

<h2 style="margin: 10px 0px"><?php echo WELCOME_TITLE?></h2>
<a style="margin: 10px 0px"; href="article.php"><?php echo ARTICLE_TITLE?></a>
</body>
</html>