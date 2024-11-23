<?php
require_once 'user.php';
try {
   $pdo = new PDO('mysql:host=localhost;dbname=0401pdo_application;charset=UTF8','root', '');
   $page = $_GET['page'] ?? 1;
   $usersPerPage = 3;

   $sql = 'SELECT users.name AS U_name, users.email as U_email,`groups`.name AS G_name FROM users
   JOIN `groups` ON `groups`.id = users.group_id
   WHERE users.email LIKE :search
   LIMIT :start, :usersPerPage';


   //$search = 'D\'%';
   $search = '%.com';
   //var_dump($search);

   $statement = $pdo->prepare($sql);
   $statement->bindValue(':search',$search,PDO::PARAM_STR);
   $statement->bindValue(':start', $usersPerPage * ($page - 1),PDO::PARAM_INT);
   $statement->bindValue(':usersPerPage',$usersPerPage,PDO::PARAM_INT);
   
   $statement->setFetchMode(PDO::FETCH_ASSOC);

   if ($statement->execute()) {
      while ($user = $statement->fetch()) {
         //var_dump($row); // Inspecter les données brutes
         echo $user['U_name'].' '.$user['U_email'].' '.$user['G_name'].'😛<br>';
         }
   } else {
      // Récupérer les informations d'erreur
      $errorInfo = $statement->errorInfo();

      // Écrire les erreurs dans un fichier log
      $logMessage = "[" . gmdate("Y-m-d H:i:s") . "] SQLSTATE: " . $errorInfo[0] .
                     " | Code d'erreur: " . $errorInfo[1] .
                     " | Message : " . $errorInfo[2] . "\n";
      error_log($logMessage, 3, "./errors.log");

      echo "Une erreur s'est produite. Veuillez consulter le fichier de log pour plus d'informations.<br>";
   }

   $countStatement = $pdo->prepare('SELECT COUNT(*) AS totalUsers FROM users');
   if ($countStatement->execute()) {
      $totalUsers = $countStatement->fetch(PDO::FETCH_ASSOC);
      $pageNumber = ceil($totalUsers['totalUsers'] / $usersPerPage);
      for ($i = 1; $i <=$pageNumber;$i++){
         echo '<a href="?page='.$i.'">'.$i.'</a> - ';
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

//echo memory_get_peak_usage();