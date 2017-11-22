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
					<li class="active"><a href="#">Личный кабинет</a></li>
				</ul>

				<h1 class="page_name">Личный кабинет</h1>

				<div class="row">
					<div class="col-lg-8 col-md-12 col-xs-12 first-lg">

						<h3 class="page_name_h3">Персональные данные</h3>
						

						<form action="" class="contact-form personal_room_form">

						<label >Аватар</label>
						<img src="img/ava.jpg" alt="" class="avatar_personal">
											    
					      <div class="input-block">
					        <label >Фамилия Имя Отчество</label>
					        <input type="text" class="form-control">
					      </div>

					       <div class="input-block">
					        <label for="">E-Mail<span class="necessarily">*</span></label>
					        <input type="email" class="form-control">
					      </div>
					    
					    
					    
					      <div class="input-block">
					      	<label >Мобильный телефон</label>
					        <input type="text" class="form-control">
					      </div>

					      <div class="input-block">
					      	 <label >Профессия</label>
					        <input type="text" class="form-control">
					      </div>
					    
					    
					    
					      <div class="input-block">
					       <label >Интересы</label>
					        <input type="text" class="form-control">
					      </div>

					      <div class="input-block">
					       <label >Город</label>
					        <input type="text" class="form-control">
					      </div>
					    
					    
					    
					      <div class="input-block">
					        <label >Почтовый индекс</label>
					        <input type="text" class="form-control">
					      </div>

					       <div class="input-block">
					        <label >Почтовый индекс</label>
					        <input type="text" class="form-control">
					      </div>

					      <h3>Изменить пароль</h3>



					       <div class="input-block">
					       <label>Введите новый пароль</label>
					        <input type="password" class="form-control">
					      </div>

					      <div class="input-block">
					       <label> Подтверждение пароля</label>
					        <input type="password" class="form-control">
					      </div>
							

							<button class="button_light_grey">Сохранить изменения</button>

					   
					    
					  </form>



					</div>
					
					<div class="col-lg-4 col-md-12 first-md first-sm first-xs col-sm-12 col-xs-12 start-xs">
						<?php include('includes/personal_room_sitebar.php'); ?>
					</div>

					<div class="col-xs-12">
						<?php include('includes/you_saw_block.php'); ?>
					</div>

					
		





			</div>
		</div>
	</div>	
			
	<?php include('includes/footer.php'); ?>


