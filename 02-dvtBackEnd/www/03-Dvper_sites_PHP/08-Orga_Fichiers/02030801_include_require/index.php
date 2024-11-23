<?php 
//include "html/index.html"; //Affiche le HTML contenant Hello world"

include "html/index.html"; // L'inclusion d'un chemin de fichier erroné génère un warning non bloquant
require "html/index.html"; // L'inclusion d'un chemin de fichier erroné génère une erreur bloquante