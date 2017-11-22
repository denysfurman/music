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
						
							<h3 class="page_name_h3">Все профили</h3>
							<div class="table_wr_st">
							
								<table class="cont_table">
						        	<tbody>
						        		<tr>
				                
						                <th>Название</th>
						                <th>Индекс</th> 
						                <th>Город</th> 
						                <th>Метро</th> 
						                <th>Адрес</th> 
						               
						                <th></th> 
						               
						       		 </tr>
						        	<tr>
						                <td>ООО «Ангстрем» </td> 
						                <td>0123456789</td> 
						                <td>Санкт-Петербург</td> 
						                <td>Трамвайный проспект </td> 
						                <td>Трамвайный проспект 12 </td> 
						                 
						                <td><a class="del_requisites "> <span class="icon-80"></span></a> </td> 
						              
						        	</tr>

						        	<tr>
						                <td>ООО «Ангстрем» </td> 
						                <td>0123456789</td> 
						                <td>Санкт-Петербург</td> 
						                <td>Трамвайный проспект </td> 
						                <td>Трамвайный проспект 12 </td> 
						                 
						                <td><a class="del_requisites "> <span class="icon-80"></span></a> </td> 
						              
						        	</tr>

						        	
									</tbody>
								</table>

							
							</div>
							<a href="#" class="new_prod_butt" >Добавить профиль</a>
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


