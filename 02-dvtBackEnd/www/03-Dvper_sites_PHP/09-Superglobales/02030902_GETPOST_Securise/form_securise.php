<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Les superglobales</title>
</head>
<style>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    * {
    background-color: rgb(222, 255, 238);
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 300;
    /* font-size: 15px; */
    }
        
    .button {
    font-size:15px;
    font-family:Arial;
    width:140px;
    height:50px;
    border-width:1px;
    color:#ffffff;
    border-color:#74b807;
    font-weight:bold;
    border-top-left-radius:6px;
    border-top-right-radius:6px;
    border-bottom-left-radius:6px;
    border-bottom-right-radius:6px;
    box-shadow:inset 0px 1px 0px 0px #a4e271;
    text-shadow:inset 0px 1px 0px #528009;
    background:linear-gradient(#89c403, #77a809);
    }
    .button:hover {
    background: linear-gradient(#77a809, #89c403);
    }
              
</style>
<body>
    <?php ?>
    <br>
    <pre>
        <form action="form_securise.php" method="post">
            <label for="text">Adresse mail :</label>
            <!-- Etape 1 : ajouter required aux inputs -->
            <input type="email" name="email" required><br><br>
            <label for="mot de passe">Mot de passe :</label>
            <input type="password" name="password" required><br><br>
    
            <input class="button" type="submit" value="Envoyer">
        </form>
    </pre>
    <?php
        if(!empty($_POST) AND $_POST['email'] AND $_POST['password']){
            $email = $_POST['email'];
            $password = $_POST['password'];
            if(filter_var($email, FILTER_VALIDATE_EMAIL)){
                echo "Votre adresse mail est valide.";
                if(strlen($password)<= 7){
                    echo " Votre mot de passe doit contenir minimum 8 caractères";
                    echo "<br>";
                } else {
                    echo " Bienvenue " .$email;
                }
            } else {
                echo "Votre adresse mail n'est pas valide.";
            }
        }
    ?>
</body>
</html>