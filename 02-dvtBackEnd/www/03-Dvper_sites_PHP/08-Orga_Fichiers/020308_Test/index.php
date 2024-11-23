<?php

require_once 'back/recipesLoader.php';

foreach (getRecipes() as $recipe) {
  $title = $recipe['title'];
  $preparationTime = $recipe['time'];
  $difficulty = $recipe['difficulty'];

  include 'front/recipe.php';
}