<?php

require_once "Model/model.php";
require_once "Vue/view.php";
require_once "Controller/controller.php";

$model = new Model();
$controller = new Controller($model);
$view = new View($model);

if(isset($_GET['action']) && !empty($_GET['action'])){
    $controller->{$_GET['action']}();
}

echo $view->output();