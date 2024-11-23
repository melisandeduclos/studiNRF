<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mes recettes 🥨</title>
</head>
<body>
    <h3><?php echo $title?></h3>
    <div>
        <p>Temps de préparation : <?php echo $preparationTime?> minutes</p>
    </div>
    <div>
        <p>Difficulté : <?php 
            for ($startNumber = 0; $startNumber <= $difficulty; $startNumber ++){
                echo '*';
            }
        ?></p>
    </div>
</body>
</html>