<!DOCTYPE html>
<html lang="fr">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Envoi d'un message</title>
</head>
<body>
   <pre>
      <h1>Envoi d'un message</h1>
      <?php if($hasSuccessAlert) {?>
         <b>Votre message a bien été ajouté !</b>
      <?php } ?>
      <form action="index.php" method="post">
            <label for="messageLabel">Message :</label>
            <textarea name="messageField" rows="10" cols="50"></textarea>
            
            <br><br>
            <input type="submit" value="Envoyer">
      </form>

      <?php
      //pour tous les messages de $messages
      foreach($messages as $message){
         include 'messageView.php';
      } ?>
   </pre>
</body>
</html>



