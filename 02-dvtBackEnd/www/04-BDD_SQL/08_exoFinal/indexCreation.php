<?php
require_once 'users.php';
require_once 'userManager.php';

try{
   //Création de l'instance
   $pdo = new PDO('mysql:host=localhost;dbname=08gestions_users;charset=UTF8','root', '');
   $page = $_GET['page'] ?? 1;
   $manager = new userManager($pdo);

   // On stocke l'affichage du message de succès dans une variable $hasSuccessAlert, 
   // qui sera utilisée dans la vue
   $hasSuccessAlert = false;

   $message = "";
   if (!empty($_POST) && isset($_POST['email'])) { 
      if (empty($_POST['email'])) {
         $message = "L'utilisateur ne peut pas être créé.";
      } elseif (strlen($_POST['password']) < 8) {
         $message = "Le mot de passe doit avoir une longueur de 8 caractères minimum.";
      } else {
         $user = new Users();
         $user->nom = $_POST['nom'];
         $user->prenom = $_POST['prenom'];
         $user->email = $_POST['email'];
         $user->password = $_POST['password'];
         $user->dptNumber = $_POST['dptNumber'];
         $hasSuccessAlert = $manager->subscribe(
               $user->email, 
               $user->password, 
               $user->nom, 
               $user->prenom, 
               $user->dptNumber
         );
         $message = $hasSuccessAlert ? "L'utilisateur a bien été ajouté !" : "Erreur lors de l'ajout de l'utilisateur.";
      }
   }


   //$users = $manager->getUser($page);
   include_once "view.php";

} catch (PDOException $e) {
   // Gérer les erreurs de connexion
   $logMessage = "[" . date("Y-m-d H:i:s") . "] Erreur PDO : " . $e->getMessage() . "\n";
   error_log($logMessage, 3, "./errors.log");

   echo "Impossible de se connecter à la base de données. Veuillez consulter le fichier de log.<br>";
}


