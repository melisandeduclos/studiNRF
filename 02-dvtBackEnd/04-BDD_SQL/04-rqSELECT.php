<?php
// Initialisation de l'objet PDO, construction de la requête...
foreach ($pdo->query($sqlRequest, PDO::FETCH_ASSOC) as $row) {
    // Ici, la variable $row est un tableau associatif
}

try {
    $pdo = new PDO('mysql:host=localhost;dbname=php_app', 'root', '');
    foreach ($pdo->query('SELECT name, email FROM users', PDO::FETCH_ASSOC) as $user) {
        echo $user['name'].' '.$user['email'].'<br>';
    }
} catch (PDOException $e) {
    echo 'Impossible de récupérer la liste des utilisateurs';
}


try {
    $pdo = new PDO('mysql:host=localhost;dbname=php_app', 'root', '');
    // On utilise un alias, grâce au mot-clé AS
    foreach ($pdo->query('SELECT name AS nom, email AS adresse FROM users', PDO::FETCH_ASSOC) as $user) {
        // Ici, on utilise le nom de l'alias et non celui de la colonne
        echo $user['nom'].' '.$user['adresse'].'<br>';
    }
} catch (PDOException $e) {
    echo 'Impossible de récupérer la liste des utilisateurs';
}