<?php
# vérification des données et création du compte

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

		<h2>Page de nouveau compte</h2>
		<form class="exo13" action="exo13-register.php" method="post">
			<?php
			# afficher les erreurs/confirmations ici
			?>
			<div>
                <label for="nom">Nom <sup>*</sup></label>
                <input type="text" id="nom" name="nom"  required/>
			</div>
			<div>
                <label for="prenom">Prénom <sup>*</sup></label>
                <input type="text" id="prenom" name="prenom" required/>
			</div>
			<div>
                <label for="prenom">Genre <sup>*</sup></label>
                <input type="radio" name="genre" value="H" required/> Homme
                <input type="radio" name="genre" value="F" required/> Femme
			</div>
			<div>
                <label for="telephone">Téléphone</label>
                <input type="text" id="telephone" name="telephone"/>
			</div>
			<div>
                <label for="email">E-Mail</label>
                <input type="email" id="email" name="email"  required/>
			</div>
			<div>
                <label for="passe">Mot de passe</label>
                <input type="password" id="passe" name="passe"  required/>
			</div>

			<div>
                <label for="role">Rôle</label>
                <select id="role" name="role">
                    <option value="client">Utilisateur client</option>
                    <option value="admin">Utilisateur Administrateur</option>
                </select>
			</div>
			<div>
			<input type="submit" name="register" value="Enregistrer"/>
			</div>
			<small><a href="exo13-login.php" title="Authentification">J'ai déjà un compte</a></small>
		</form>
	</body>
</html>
