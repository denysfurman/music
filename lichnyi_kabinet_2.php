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
					<div class="col-lg-8 col-md-12 col-xs-12 first-lg  ">
						<h3 class="page_name_h3">Изменить аватар</h3>
							<form action="" class="personal_room_form">
								<img src="img/ava.jpg" alt="" class="avatar_personal">
								<br/>
								<input type="file" class="form_style" />
								<br/>
								<button class="button_light_grey">Сохранить изменения</button>
							</form>			
					</div>
					
					<div class="col-lg-4 col-md-12 first-md first-sm first-xs col-sm-12 col-xs-12">
						<?php include('includes/personal_room_sitebar.php'); ?>
					</div>

					<div class="col-xs-12">
						<?php include('includes/you_saw_block.php'); ?>
					</div>

					
		





			</div>
		</div>
	</div>		
			
	<?php include('includes/footer.php'); ?>


