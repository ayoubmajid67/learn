<?php
session_start();
# vérification de l'authentification

if (isset($_POST['email']) && isset($_POST['passe'])) {
	require_once('exo13.inc.php');
	$sql = "SELECT * FROM utilisateur WHERE email= :email and pass = :pass";
	$statement = $db->prepare($sql);
	$statement->execute([
		"email" => $_POST['email'],
		"pass" => MD5($_POST['passe'])
	]);
	$utilisateur = $statement->fetch(PDO::FETCH_ASSOC);
	$found = $statement->rowCount();
	if ($found == 1) {
		$_SESSION['utilisateur'] = $utilisateur;
		header("Location: exo13.php");
	} else {
		$error = "email ou mot de passe incorrect";
	}
}

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
		if (isset($error))
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
			<input type="submit" value="Login" />
		</div>
		<small><a href="exo13-register.php" title="Créer un compte">Créer un compte</a></small>
	</form>
</body>

</html>