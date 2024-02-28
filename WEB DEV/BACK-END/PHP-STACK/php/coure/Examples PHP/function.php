<?php
function isAllowed($email)
{
    if ($email == "z.oufkir@emsi.ma") {
        return true;
    } else {
        return false;
    }
}

$monEmail = "test@emsi.ma";
isAllowed($monEmail);

//////////////////////////////////////////////

?>

<?php
$recipe = 'Etape 1 : des flageolets ! Etape 2 : de la saucisse toulousaine';
$length = strlen($recipe);


echo 'La phrase ci-dessous comporte ' . $length . ' caractères :' . PHP_EOL . $recipe;

?>


<?php
$recipe = [
    'title' => 'Salade Romaine',
    'recipe' => 'Etape 1 : Lavez la salade ; Etape 2 : euh ...',
    'author' => 'laurene.castor@exemple.com',
];

if (array_key_exists('title', $recipe)) {
    echo 'La clé "title" se trouve dans la recette !';
}

if (array_key_exists('commentaires', $recipe)) {
    echo 'La clé "commentaires" se trouve dans la recette !';
}

?>


<?php

$school = "EMSI"; # global

function studies()
{
    global $school;
    $suffix = "(3IIR)"; # local
    echo "$school $suffix";
}
studies();

?>


<?php  ?>