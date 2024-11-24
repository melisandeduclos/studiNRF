<?php
require_once 'message.php';
require_once 'messageManager.php';

try{
   //Création de l'instance
   $pdo = new PDO('mysql:host=localhost;dbname=0401pdo_application;charset=UTF8','root', '');
   $page = $_GET['page'] ?? 1;
   $manager = new messageManager($pdo);

   // On stocke l'affichage du message de succès dans une variable $hasSuccessAlert, 
   // qui sera utilisée dans la vue
   $hasSuccessAlert = false;

   if (!empty($_POST) AND isset($_POST['messageField'])) { 
      //exemple de validation
      if (empty($_POST['messageField'])){
         echo "Le message envoyé ne peut pas être vide";
      } else {
         $message = new Message();
         $message->message =  $_POST['messageField'];
         $message->date = "";
         $hasSuccessAlert = $manager->addMessage($message->message,$message->date);
      }
   }

   //Stockage des messages
   $messages = $manager->getMessage($page);
   include_once "view.php";

} catch (PDOException $e) {
   // Gérer les erreurs de connexion
   $logMessage = "[" . date("Y-m-d H:i:s") . "] Erreur PDO : " . $e->getMessage() . "\n";
   error_log($logMessage, 3, "./errors.log");

   echo "Impossible de se connecter à la base de données. Veuillez consulter le fichier de log.<br>";
}


