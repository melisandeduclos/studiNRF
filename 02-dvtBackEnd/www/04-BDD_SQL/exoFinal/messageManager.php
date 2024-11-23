<?php
class messageManager {
   private PDO $pdo;

   public function __construct(PDO $pdo){
      //injection de dépendances de l'objet PDO
      $this->pdo = $pdo;
   }

   public function addMessage(string $message, string $date):bool{
      //l'identifiant est calculés automatiquement
      $statement = $this->pdo->prepare('INSERT INTO messages (message, dateMessage)
      VALUES (:message, :dateMessage)');
      $statement->bindValue(':message', $message, PDO::PARAM_STR);
      $statement->bindValue(':dateMessage', $date, PDO::PARAM_STR);
      
      return $statement->execute();
   }

   public function getMessage(int $page):array {
      require_once 'message.php';
      $statement = $this->pdo->prepare('SELECT * FROM messages LIMIT :start, 10');
      //Récupération des messages sous formes d'ojet Messages
      $statement->setFetchMode(PDO::FETCH_CLASS, 'Message');
      //la position de départ du LIMIT dépend de la page
      $statement->bindValue(':start', 10 * ($page - 1),PDO::PARAM_INT);
      $statement->execute();

      return $statement->fetchAll();
   }
}

/*require_once 'message.php';

$pdo = new PDO('mysql:host=localhost;dbname=0401pdo_application;charset=UTF8','root', '');
//$page = $_GET['page'] ?? 1;
$manager = new messageManager($pdo);
$monMessage = new Message();
$monMessage->message = 'Mon texte';
$monMessage->date = '';
echo $monMessage->message.'\n';
echo $monMessage->date.'\n';
echo $manager->addMessage($monMessage->message, $monMessage->date);*/