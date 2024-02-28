<?php
require_once('exo13.inc.php');
# controle du droit d'accès

# récupération de la liste des clients


$nbClients=0;
?>
<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title>TP 1 - Exo 13</title>
		<meta name="author" content="Mohammed BELATAR">
		<meta name="viewport" content="width=device-width; initial-scale=1.0">
		<link rel="stylesheet" href="tp1.css">
	</head>
	<body>
		<h1>
			<?php
			#afficher un message de bienvenue
			?>
		</h1>
		<hr>

		<h2>
			<?php
			echo "Nous avons $nbClients clients :"
				?>
		</h2>
		<table class="exo6">
			<tr><th>Prénom Nom</th><th>Téléphone</th><th>E-mail</th></tr>
			<?php
			#afficher les clients dans la table
			?>
		</table>
	</body>
</html>
