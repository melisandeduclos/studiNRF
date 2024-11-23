<?php
// Initialiser les variables d'erreur
$commandErr = "";
$output = ""; 
$command =" ";
// Vérifier si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Valider et filtrer l'entrée utilisateur
  if (!isset($_POST["command"])) {
    $commandErr = "La commande est requise";
  } else {
    $command = test_input($_POST["command"]);
    // Vérifier que l'entrée utilisateur ne contient que des caractères alphanumériques et des espaces
    if (!preg_match('/^[a-zA-Z0-9\s]+$/', $command)) {
      $commandErr = "L'entrée utilisateur n'est pas valide";
    }
  }
  // Exécuter la commande si l'entrée utilisateur est valide
  if ($commandErr == "") {
    // Exécuter la commande en utilisant la fonction shell_exec()
    $output = shell_exec($command);
      }
}
// Fonction pour filtrer les données d'entrée utilisateur
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>
<!DOCTYPE html>
<html>
<head>
	<title>Exemple de formulaire pour éviter l'injection de commande</title>
</head>
<body>
<h2>Exemple de formulaire pour éviter l'injection de commande</h2>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">  
  Commande: <input type="text" name="command" value="<?php echo htmlspecialchars($command);?>">
  <span class="error"><?php echo $commandErr;?></span>
  <br><br>
  <input type="submit" name="submit" value="Exécuter la commande">  
</form>
<div>
  <?php echo $output; ?>
</div>
</body>
</html>