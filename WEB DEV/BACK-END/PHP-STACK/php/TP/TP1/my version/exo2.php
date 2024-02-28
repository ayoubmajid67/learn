<?php

# retourne le nom du jour de la semaine
# correspondant à '$week', le  numéro du
# jour de la semaine (0 -> dimanche, 1 -> lundi, ...)



?>
<!DOCTYPE html>
<html lang="fr">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>TP 1 - Exo 2</title>
	<meta name="author" content="Marc Gaetano">
	<meta name="viewport" content="width=device-width; initial-scale=1.0">
	<link rel="stylesheet" href="css/tp1.css">
</head>

<body>
	<h1>TP 1 - Exo 2</h1>
	<hr>
	<h2>
		<?php

		function jour($week)
		{
			switch ($week) {
				case 0:
					return "Dimanche";
				case 1:
					return "Lundi";
				case 2:
					return "Mardi";
				case 3:
					return "Mercredi";
				case 4:
					return "Jeudi";
				case 5:
					return "Vendredi";
				case 6:
					return "Samedi";
			}
		}
		function mois($month)
		{
			switch ($month) {
				case 1:
					return "Janvier";
				case 2:
					return "Février";
				case 3:
					return "Mars";
				case 4:
					return "Avril";
				case 5:
					return "Mai";
				case 6:
					return "Juin";
				case 7:
					return "Juillet";
				case 8:
					return "Aout";
				case 9:
					return "Septembre";
				case 10:
					return "Octobre";
				case 11:
					return "Novembre";
				case 12:
					return "Decembre";
			}
		}
		$annee = date("Y");
		$day = date("d");
		$dayOfTheWeek = jour(date("w"));
		$mois = mois(date("m"));
		echo "Nous sommes le $dayOfTheWeek $day $mois $annee";

		?>

	</h2>
</body>

</html>