<?php
class userManager {
   private PDO $pdo;

   public function __construct(PDO $pdo){
      //injection de dépendances de l'objet PDO
      $this->pdo = $pdo;
   }

   public function getAll() :array{
      $statement = $this->pdo->prepare('SELECT * FROM users');
      $statement->setFetchMode(PDO::FETCH_ASSOC);
      $statement->execute();
      return $statement->fetchAll();
   }

   public function subscribe(string $email, string $password, string $nom, 
   string $prenom, string $dptNumber): bool {
      $statement = $this->pdo->prepare(
         'INSERT INTO users (id, email, password, nom, prenom, dptNumber)
         VALUES (UUID(), :email, :password, :nom, :prenom, :dptNumber)'
      );
      $statement->bindValue(':email', $email, PDO::PARAM_STR);
      $statement->bindValue(':password', password_hash($password, PASSWORD_BCRYPT), PDO::PARAM_STR);
      $statement->bindValue(':nom', $nom, PDO::PARAM_STR);
      $statement->bindValue(':prenom', $prenom, PDO::PARAM_STR);
      $statement->bindValue(':dptNumber', $dptNumber, PDO::PARAM_STR);
      return $statement->execute();
   }


   public function connect(string $emailUser, string $passwordUser):Users{
      require_once 'users.php';
      $statement = $this->pdo->prepare('SELECT * FROM users WHERE email = :email');
      $statement->setFetchMode(PDO::FETCH_CLASS, 'Users');
      $statement->bindValue(':email', $emailUser);
      if ($statement->execute()){
         //l'email est unique, fetch() suffit
         $user = $statement->fetch();
         //Il faut vérifier que fetch n'a pas retournée false
         if($user !== false && password_verify($passwordUser, $user->password)){
            if(in_array($user->dptNumber ,['75','94','92','93'])){
               $user->addRole('ROLE_DELIVERABLE');
            }
            return $user;
         }
      } throw new Exception("Identifiants invalides");
   }
}


// $pdo = new PDO('mysql:host=localhost;dbname=08gestions_users;charset=UTF8','root', '');
// //$pdo = new PDO('mysql:host=localhost;dbname=0401pdo_application;charset=UTF8','root', '');
// //$page = $_GET['page'] ?? 1;
// $manager = new userManager($pdo);
// $users = $manager->getAll();
// var_dump($users);
//    foreach($users as $user) {
//       echo $user['email'].PHP_EOL ;
//    }

// try {
//    $user = $manager->connect('johnhenry@example.com', 'testdemotdepasse');
//    echo $user->sayHello();
// } catch (Exception $e) {
//    echo "Erreur : " . $e->getMessage();
// }
