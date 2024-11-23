<?php
session_start(); // Démarrer la session
// Vérification CSRF
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
    die('Erreur CSRF !');
  } else {
// Jeton CRSF defini ou celui-ci =
    echo "<br>";
    echo " Jeton CSRF transmis";      
    echo "<br>";
  }
}
// Générer un nouveau jeton CSRF
$_SESSION['csrf_token'] = bin2hex(random_bytes(32));
// Connexion à la base de données
$host = 'localhost';
$username = 'admin';
$password = 'admin';
$dbname = 'faille';
try {
  $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
} catch (PDOException $e) {
  echo "Erreur : " . $e->getMessage();
}
// Vérification des informations d'identification
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $username = $_POST['username'];
  $password = $_POST['password'];
  $stmt = $pdo->prepare('SELECT * FROM user WHERE username = ? AND password = ?');
  $stmt->execute([$username, $password]);
  $user = $stmt->fetch();
  if ($user) {
    // Authentification réussie
    $_SESSION['user_id'] = $user['id'];
    echo " Connexion réussie";
    var_dump( $_SESSION);   
    exit;
  } else {
    // Authentification échouée
    $error = 'Adresse e-mail ou mot de passe incorrect.';
  }
}
?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Formulaire de connexion</title>
</head>
<body>
  <?php if (isset($error)) { ?>
    <p><?php echo $error; ?></p>
  <?php } ?>
  <form method="post">
    <input type="" name="csrf_token" value="<?php echo $_SESSION['csrf_token']; ?>">
    <label for="username">username</label>
    <input type="username" id="username" name="username" required>
    <label for="password">Mot de passe :</label>
    <input type="password" id="password" name="password" required>
    <button type="submit">Se connecter</button>
  </form>
</body>
</html>