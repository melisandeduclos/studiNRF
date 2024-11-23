<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Les superglobales</title>
</head>
<body>
    <?php ?>
    <br>
    <pre>
        <form action="form.php" method="post">
            <label for="pseudo">Pseudo :</label>
            <input type="text" name="pseudo" id="pseudo"><br><br>
            <label for="mot de passe">Mot de passe :</label>
            <input type="password" name="password" id="password"><br><br>
    
            <input type="submit" value="Envoyer">
        </form>
    </pre>
    <?php
        if(!empty($_POST) AND $_POST['pseudo'] AND $_POST['password']){
            $password = $_POST['password'];
            $pseudo = $_POST['pseudo'];
            if(strlen($password) <= 8){
                ?><br>*<br><?php echo "le mot de passe est trop court 👙";}
                else{
                    ?><br>**<br><?php echo "Votre pseudo est $pseudo ";
                }
            }
    ?>
    <?php
// Vérifie si les champs ont été soumis
if (isset($_POST['pseudo']) && isset($_POST['password'])) 
{ 
  $pseudo = $_POST['pseudo'];
  $password = $_POST['password'];
       // exemple de validation
  if (empty($pseudo) || empty($password)) 
	{
        echo "Veuillez entrer un pseudo et un mot de passe";
	} 
	else 
	{
	    ?><br>***<br><?php echo "Bienvenue, $pseudo !";	   
	}
}
?> 
</body>
</html>