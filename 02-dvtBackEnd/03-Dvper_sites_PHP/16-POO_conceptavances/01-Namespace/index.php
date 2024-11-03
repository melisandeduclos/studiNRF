<?php

namespace main;
require_once 'chien.php';
require_once 'chat.php';

$monChien = new \chien\Chien();
echo($monChien->aboie());

$monChat = new \chat\Chat();
echo($monChat->aboie());
