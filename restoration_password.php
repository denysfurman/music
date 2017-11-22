<?php include('includes/header.php'); ?>

<body>
<div class="container">
	

	
	
	<!-- ______________ SITEBAR __________________  -->
	
	<?php include('includes/main_sitebar.php'); ?>
	
	<div class="main_wr">
		<div class="row marg_0">
			<div class="col-lg-12 col-xs-12 pad_0">
				<?php include('includes/header_main.php'); ?>
				
				<?php include('includes/mobile_navigation.php'); ?>


				<ul class="breadcrumbs_wr">
					<li> <a href="#">Главная</a> / </li>
					<li class="active"><a href="#">Каталог</a></li>
				</ul>

				<h1 class="page_name">Восстановление пароля</h1>

				<div class="row">
					<div class="col-lg-4 col-md-6 col-xs-12">
					<span>Если вы забыли пароль, введите логин или E-Mail</span>
					<p>Контрольная строка для смены пароля, а также ваши регистрационные данные, будут отправлены вам по E-Mail</p>
						<form action="#" class="restoration_form">
						

							<label >Логин или E-mail</label>
							<input type="text" required>

						

						
							<button class="button">Oтправить</button>
						
							
							
						</form>

						
					</div>
				</div>





			</div>
		</div>
			
	<?php include('includes/footer.php'); ?>


