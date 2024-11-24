<?php
require_once 'userManager.php';

try{
   //Création de l'instance
   $pdo = new PDO('mysql:host=localhost;dbname=08gestions_users;charset=UTF8','root', '');
   $manager = new userManager($pdo);
   $message = "";
   $hasSuccessAlert = false;

   if (!empty($_POST) && isset($_POST['email'])) { 
      if (empty($_POST['email'])) {
         $message = "Renseigner un email.";
      } elseif (strlen($_POST['password']) < 8) {
         $message = "Le mot de passe doit avoir une longueur de 8 caractères minimum.";
      } else {
         try {
            $user = $manager->connect($_POST['email'], $_POST['password']);
            if(!in_array('ROLE_DELIVERABLE',(array)$user->roles)){
               throw new Exception("Accès interdit");
            } else {
               $hasSuccessAlert = true;
               $message =  $user->sayHello();
            }
         } catch (Exception $e) {
            $message =  "Erreur : " . $e->getMessage();
         }
      }
   }
   include_once "viewConnect.php";
} catch (PDOException $e) {
   // Gérer les erreurs de connexion
   $logMessage = "[" . date("Y-m-d H:i:s") . "] Erreur PDO : " . $e->getMessage() . "\n";
   error_log($logMessage, 3, "./errors.log");
   
   echo "Impossible de se connecter à la base de données. Veuillez consulter le fichier de log.<br>";
}