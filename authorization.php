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

				<h1 class="page_name">Авторизация</h1>

				<div class="row">
					<div class="col-lg-4 col-md-6 col-xs-12">
					<span>Пожалуйста, авторизуйтесь </span>
						<form action="" class="contact-form authorization_form">
						

						<div class="input-block">
					        <label for="">Логин</label>
					        <input type="text" class="form-control">
					      </div>

					      <div class="input-block">
					        <label for="">Пароль</label>
					        <input type="text" class="form-control">
					      </div>

					      	<a href="#" class="aut_zabil">Забыли свой пароль?</a>

							<a href="#" class="aut_reg">Регистрация</a>

							<div class="check_wr">
								<label class="label_newform"><input type="checkbox" checked="" class="form_style" />Запомнить меня </label>
							</div>


						
							<button class="button">Войти</button>
							
							<br/>

							
							
							
						</form>

						<div class="vhod_from">
							<h3>Войти как пользователь</h3>
							<p>Вы можете войти на сайт, если вы зарегистрированы на одном из этих сервисов</p>
							<ul>
								
								<li>
									<a href="#"><img src="img/reg_1.png" alt=""></a>
								</li>

								<li>
									<a href="#"><img src="img/reg_2.png" alt=""></a>
								</li>

								<li>
									<a href="#"><img src="img/reg_3.png" alt=""></a>
								</li>

								<li>
									<a href="#"><img src="img/reg_4.png" alt=""></a>
								</li>

								<li>
									<a href="#"><img src="img/reg_5.png" alt=""></a>
								</li>

								<li>
									<a href="#"><img src="img/reg_6.png" alt=""></a>
								</li>
								
							</ul>
						</div>
					</div>
				</div>





			</div>
		</div>
			
	<?php include('includes/footer.php'); ?>


