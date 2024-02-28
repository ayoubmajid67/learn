<?php
$x = rand(1, 9);
$y = rand(1, 9);

?>
<!DOCTYPE html>
<html lang="fr">

<head>
	<meta charset="utf-8">
	<title>TP 1 - Exo 11</title>
	<meta name="author" content="Marc Gaetano">
	<meta name="viewport" content="width=device-width; initial-scale=1.0">
	<link rel="stylesheet" href="css/tp1.css">
</head>

<body>
	<h1>TP 1 - Exo 11</h1>
	<hr>
	<form action="exo11-action.php" method="get">
		<?php echo $x; ?> * <?php echo $y; ?> =
		<input type="text" name="resultat">
		<input type="submit">
		<input type="hidden" value="<?php echo $x; ?>" name="x">
		<input type="hidden" value="<?php echo $y; ?>" name="y">
	</form>

</body>

</html>