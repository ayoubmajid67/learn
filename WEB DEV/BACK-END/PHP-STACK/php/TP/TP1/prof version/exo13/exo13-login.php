<?php
# vérification de l'authentification


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
		<h1>TP1 - Exercice 13</h1>
		<hr>

		<h2>Page d'authentification</h2>
		<form class="exo13" action="exo13-login.php" method="post">
			<?php
			# afficher les erreurs d'authentification ici
			if(isset($error))
				echo "<div style='color:red;'>$error</div>";
			?>
			<div>
			<label for="email">E-Mail</label>
			<input type="email" id="email" name="email" />
			</div>
			<div>
			<label for="passe">Mot de passe</label>
			<input type="password" id="passe" name="passe" />
			</div>
			<div>
			<input type="submit" value="Login"/>
			</div>
			<small><a href="exo13-register.php" title="Créer un compte">Créer un compte</a></small>
		</form>
	</body>
</html>
