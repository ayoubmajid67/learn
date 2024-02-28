<?php

# retourne le code HTML (une chaîne de caractères)
# d'une table contenant les diviseurs de '$N'
# (une seule ligne, autant de colonnes que de diviseurs)
function diviseurs($N)
{
	$resultat = "<table class='exo4'><tr><td>1</td>";
	for ($i = 2; $i <= $N; $i++) {
		if ($N % $i == 0) {
			$resultat .= "<td>{$i}</td>";
		}
	}
	return $resultat . "</tr></table>";
}

$nombre = $_GET['n'];

?>
<!DOCTYPE html>
<html lang="fr">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>TP 1 - Exo 3</title>
	<meta name="author" content="LP IMApp">
	<meta name="viewport" content="width=device-width; initial-scale=1.0">
	<link rel="stylesheet" href="css/tp1.css">
</head>

<body>
	<h1>TP 1 - Exo 3</h1>
	<hr>
	<h2>Les diviseurs de <?php echo $nombre ?> sont :</h2>
	<?php echo diviseurs($nombre) ?>

</body>

</html>