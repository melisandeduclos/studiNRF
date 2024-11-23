<?php

try {
   $pdo = new PDO('mysql:host=localhost;dbname=0401pdo_application;charset=UTF8','root', '');

   /*$sql = 'SELECT users.name AS U_name, users.email AS U_email, `groups`.name AS G_name FROM users
   RIGHT JOIN `groups` ON `groups`.id = users.group_id
   WHERE users.name LIKE :search';*/
   
   $sql = 'SELECT users.name AS U_name, users.email AS U_email, `groups`.name AS G_name FROM users
   JOIN `groups` ON `groups`.id = users.group_id
   WHERE users.email LIKE :search';

   //$search = 'D\'%';
   $search = '%.com';
   //var_dump($search);

   $statement = $pdo->prepare($sql);
   $statement->bindValue(':search',$search,PDO::PARAM_STR);

   if($statement->execute()){
      /*foreach ($pdo->query($sql,PDO::FETCH_ASSOC) as $user) {
         echo $user['U_name'].' '.$user['U_email'].' '.$user['G_name'].'😛<br>';*/
      while ($user = $statement->fetch(PDO::FETCH_ASSOC)){
         //var_dump($user);
         echo $user['U_name'].' '.$user['U_email'].' '.$user['G_name'].'😛<br>';
      }
      } else {
        // Récupérer les informations d'erreur
        $errorInfo = $statement->errorInfo();

        // Écrire les erreurs dans un fichier log
        $logMessage = "[" . date("Y-m-d H:i:s") . "] SQLSTATE: " . $errorInfo[0] .
                      " | Code d'erreur: " . $errorInfo[1] .
                      " | Message : " . $errorInfo[2] . "\n";
        error_log($logMessage, 3, "./errors.log");

        echo "Une erreur s'est produite. Veuillez consulter le fichier de log pour plus d'informations.<br>";
    }

} catch (PDOException $e) {
    // Gérer les erreurs de connexion
    $logMessage = "[" . date("Y-m-d H:i:s") . "] Erreur PDO : " . $e->getMessage() . "\n";
    error_log($logMessage, 3, "./errors.log");

    echo "Impossible de se connecter à la base de données. Veuillez consulter le fichier de log.<br>";
}