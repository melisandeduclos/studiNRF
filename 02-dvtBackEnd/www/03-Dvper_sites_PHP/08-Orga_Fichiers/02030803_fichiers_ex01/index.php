<?php
  require_once 'user.php';
  require_once 'language.php';

  $user = getUser();
  loadLanguage($user['language']);
  $name = $user['name'];
  $sports = getUserSports($user);
  
  include 'template.php';