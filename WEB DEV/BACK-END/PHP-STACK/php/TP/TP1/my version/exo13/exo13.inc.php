<?php
$db_host = "localhost";
$db_name = "exo13";
$db_user = "root";
$db_pass = "";



$civilite = array('H' => 'M.', 'F' => 'Mme./Mlle.');

#ici la connexion à la BDD

try {
    $db = new PDO(
        "mysql:host=$db_host;dbname=$db_name;charset=utf8",
        $db_user,
        $db_pass
    );
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $e) {
    die("Erreur: " . $e->getMessage());
}
