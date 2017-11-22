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
						<h3 class="page_name_h3">Обратная связь</h3>
						
						

						<form action="" class="contact-form feedback">

						
					      <div class="input-block">
					        <label >Ваше имя? <span class="necessarily">*</span></label>
					        <input type="text" class="form-control">
					      </div>

					    
					    
					    
					    
					      <div class="input-block">
					      	<label >Ваш e-mail <span class="necessarily">*</span></label>
					        <input type="text" class="form-control">
					      </div>

					      <div class="input-block">
					      	 <label >Метро</label>
					        <input type="text" class="form-control">
					      </div>

					      

					      <div class="input-block textarea">
					      <label >Ваше сообщение <span class="necessarily">*</span></label>
					        <textarea rows="3" type="text" class="form-control"></textarea>
					      </div>
					    
					    
					    
							

							<button class="button">отправить</button>

					   
					    
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


