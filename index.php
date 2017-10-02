<?php
	ob_start();
	session_start();
?>

<!DOCTYPE html>
<html lang="vi">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Bon Club - Sòng Bài Hoàng Gia</title>

	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Quicksand:400,700&amp;subset=latin-ext,vietnamese" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet">
	<link href="/libs/w3.css" rel="stylesheet">
	<link href="/styles/index.css" rel="stylesheet">

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.0/velocity.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.0/velocity.ui.min.js"></script>
	<script src="/scripts/index.js"></script>
</head>
<body>
	<div class="main">
		<?php
		include"/views/header.php";
		include"/views/topbar.php";
		include"/views/banner.php";
		include"/views/gamelist.php";
		?>
	</div>
</body>
</html>
