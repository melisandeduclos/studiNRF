<?php
try {
   $pdo = new PDO('mysql:host=localhost;dbname=0401pdo_application;charset=UTF8','root', '');
   $sql = 'SELECT users.name AS U_name, users.email AS U_email, `groups`.name AS G_name FROM users
   JOIN `groups` ON `groups`.id = users.group_id';
   foreach ($pdo->query($sql,PDO::FETCH_ASSOC) as $user) {
      echo $user['U_name'].' '.$user['U_email'].' '.$user['G_name'].'😛<br>';
   }

} catch (PDOException $e) {
   echo $e->getmessage() . PHP_EOL . '<br>';
   echo 'Impossible de se connecter à la BDD';
}