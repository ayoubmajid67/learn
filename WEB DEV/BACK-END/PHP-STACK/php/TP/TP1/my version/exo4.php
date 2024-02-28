<?php

# si '$N' est premier, retourne '$N'
# sinon retourne le plus petit diviseur
# de '$N'. Par exemple :
# - premier(13) -> 13
# - premier(35) -> 5
function premier($N)
{
	for ($i = 2; $i < $N; $i++) {
		if ($N % $i == 0) {
			return $i;
		}
	}

	return $N;
}
function resultat($N)
{
	$resultat = "";
	$nombre = premier($N);
	if ($nombre == $N) {
		$resultat = "est premier";
	} else {
		$resultat = "n'est pas premier car il est divisible par $nombre !";
	}
	return $resultat;
}
$n = $_GET['nombre'];
?>
<!DOCTYPE html>
<html lang="fr">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>TP 1 - Exo 4</title>
	<meta name="author" content="Marc Gaetano">
	<meta name="viewport" content="width=device-width; initial-scale=1.0">
	<link rel="stylesheet" href="css/tp1.css">
</head>

<body>
	<h1>TP 1 - Exo 4</h1>
	<hr>
	<h2>
		Le nombre <?php echo $n;  ?> <?php echo resultat($n);  ?>
	</h2>
	<a class="bouton" href="exo4.html">Autre test</a>
</body>

</html>