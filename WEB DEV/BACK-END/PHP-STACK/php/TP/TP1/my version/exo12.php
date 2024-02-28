<?php
session_start();
if (!isset($_SESSION['secret']) && !isset($_SESSION['essais'])) {
	$_SESSION['secret'] = rand(1, 100);
	$_SESSION['essais'] = 1;
}
if (isset($_GET['proposition'])) {
	$proposition = $_GET['proposition'];
	$secret = $_SESSION['secret'];
	$essais = $_SESSION['essais'];

	if ($proposition < $secret) {
		$resultat = "Top petit";
		$_SESSION['essais']++;
	} else if ($proposition > $secret) {
		$resultat = "Top grand";
		$_SESSION['essais']++;
	} else {
		$resultat = "Bravo, vous avez trouvé en $essais essai(s) !";
		session_unset();
	}
}

?>
<!DOCTYPE html>
<html lang="fr">

<head>
	<meta charset="utf-8">
	<title>TP 1 - Exo 10</title>
	<meta name="author" content="Marc Gaetano">
	<meta name="viewport" content="width=device-width; initial-scale=1.0">
	<link rel="stylesheet" href="css/tp1.css">
</head>

<body>
	<h1>TP 1 - Exo 10</h1>
	<hr>
	<?php
	if (isset($resultat)) {
		echo $resultat;
	}
	?>

	<form class='exo12.php' method='get'>
		Votre proposition : <input type='text' name='proposition'>
		<input type='submit' value='Vérifier'>
	</form>
</body>

</html>