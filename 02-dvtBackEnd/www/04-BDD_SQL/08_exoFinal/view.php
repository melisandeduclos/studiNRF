<!DOCTYPE html>
<html lang="fr">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Création du compte</title>
</head>
<body>
   <pre>
      <h1>Création du compte</h1>
      <?php echo $hasSuccessAlert ? 'L’utilisateur a bien été ajouté !' : ''; ?>
      <form action="index.php" method="post">
            <label for="nom">Nom: </label>
            <input type="text" id="nom" name="nom" required></input>

            <label for="prenom">Prénom: </label>
            <input type="text" id="prenom" name="prenom" required></input>

            <label for="email"> E-mail: </label>
            <input type="email" id="email" name="email" required></input>

            <label for="password">Mot de passe: </label>
            <input type="password" id="password" name="password" required></input>

            <label for="dptNumber">Numéro du département: </label>
            <input type="text" id="dptNumber" name="dptNumber" required></input>
            
            <br><br>
            <input type="submit" value="Envoyer">
      </form>
   <br><br>
   <?php if (!empty($message)) { ?>
   <p><b><?php echo htmlspecialchars($message); ?></b></p>
   <?php } ?>


</body>
</html>



