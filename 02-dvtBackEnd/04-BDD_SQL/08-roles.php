<?php

class User
{
    private string $id;
    private string $email;
    private string $password;
    // Tableau de rôles
    private array $roles = [];

    public function getId(): string
    {
        return $this->id;
    }

    public function addRole(string $role): void
    //void est une déclaration de type de retour uniquement, 
    //indiquant que la fonction ne retourne pas de valeur, 
    //mais que la fonction peut quand même se terminer.
    {
        $this->roles[] = $role;
    }

    public function getRoles(): array
    {
        return $this->roles;
    }
}

// ... Processus de connexion
// $user est un objet User retourné par PDO

$statement = $pdo->prepare('SELECT * FROM userRoles JOIN roles ON roles.id = userRoles.roleId WHERE id = :id');
$statement->bindValue(':id', $user->getId());
if ($statement->execute()) {
    while ($role = $statement->fetch(PDO::FETCH_ASSOC)) {
        $user->addRole($role['name']);
    }
}

// ... Processus de connexion
// $user est un objet User retourné par PDO

$statement = $pdo->prepare('SELECT COUNT(*) AS count FROM agences WHERE managerId = :id');
$statement->bindValue(':id', $user->getId());
if ($statement->execute()) {
    $count = $statement->fetch(PDO::FETCH_ASSOC);
    if ($count['count'] > 0) {
        // Si l'utilisateur est chef d'une agence, alors on lui ajoute le rôle ROLE_MANAGER
        $user->addRole('ROLE_MANAGER');
    }
}

//Vérification des droits
// ... Processus de connexion et de deduction des rôles

if (!in_array('ROLE_MANAGER', $user->getRoles()))
{
    throw new Exception('Vous n\'avez pas le droit d\'acceder à cette fonctionnalité');
}