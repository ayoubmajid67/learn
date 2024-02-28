<?php

# retourne un tableau à deux éléments [ C , N ] où :
# - C est une chaîne de caractères de la forme
#   "n1, n2, n3, n4, n5" où n1, n2,..., n5
#   sont cinq nombres triés croissant tirés au hasard
#   dans l'intervalle [1, 49]
# - N un nombre tiré au hasard dans l'intervalle [1, 10]
function loto()
{
	$loto = [];
	while (count($loto) <= 5) {
		$nombre = rand(1, 49);
		if (!in_array($nombre, $loto)) {
			$loto[] = $nombre;
		}
	}
	sort($loto);
	return implode(",", $loto);
}

$chance = rand(1, 10);



?>
<!DOCTYPE html>
<html lang="fr">

<head>
	<meta charset="utf-8">
	<title>TP 1 - Exo 8</title>
	<link rel="stylesheet" href="css/tp1.css">
</head>

<body>
	<h1>TP 1 - Exo 8</h1>
	<hr>
	<h2>Loto Flash</h2>
	<p>

	</p>
	Les cinq numéros : <?php echo loto(); ?> - Le numéro chance : <?php echo $chance; ?>
	<p>
		<a class="bouton" href="exo8.php">Un autre Loto Flash</a>
	</p>
</body>

</html>