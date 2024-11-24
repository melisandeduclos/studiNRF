<!DOCTYPE html>
<html lang="fr">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Connexion</title>
</head>
<body>
   <pre>
      <h1>Connexion</h1>
      <?php echo $hasSuccessAlert ? 'L’utilisateur est connecté !' : ''; ?>
      <form action="index.php" method="post">
            <label for="email"> E-mail: </label>
            <input type="email" id="email" name="email" required></input>

            <label for="password">Mot de passe: </label>
            <input type="password" id="password" name="password" required></input>

            <br><br>
            <input type="submit" value="Connexion">
      </form>
   <br><br>
   <?php if (!empty($message)) { 
      if(!$hasSuccessAlert) {?>
    <p><b style="color: red;"><?php echo htmlspecialchars($message); ?></b></p>
<?php } else {?>
   <p><b style="color: green;"><?php echo htmlspecialchars($message); ?></b></p>
<?php }} ?>



</body>
</html>



