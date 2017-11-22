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
					<li class="active"><a href="#">Оформление заказа</a></li>
				</ul>

				<h1 class="page_name">Оформление заказа</h1>
				

				<div class="row">
				 <div class="col-xs-12">
				 	
				 </div>
					<div class="col-lg-6 col-lg-md-6 col-md-12 col-xs-12">
						
							
							

								<div class="basket_form_block_wr">
										<span>Заполните пожалуйста данные заказа</span>
										<p class="warning"><span class="icon-79"></span>Пройдите <a href="#">авторизацию</a> , и все поля будут заполнены</p>
									</div>

								
								<form action="#" class="basket_form contact-form">
									
									<div class="basket_form_block_wr">
										<h4>Личные данные</h4>
										<div class="input-block">
									        <label for="">E-Mail</label>
									        <input type="email" class="form-control">
									      </div>

									      <div class="input-block">
									        <label >Мобильный телефон</label>
									        <input type="text" class="form-control">
									      </div>
									    
										
									</div>

									
									<div class="basket_form_block_wr">
										<h4>Данные для доставки</h4>
										

										
										<div class="sitebar_filter_select_wr">
											<div class="row">
												<div class="col-lg-7 col-md-12 col-xs-12">
													<label  class="mar_t0">Профили доставки</label>
													<select class="form_style">
														<option value="">Юридическое лицо</option>
														<option value="">Физичиское лицо</option>
														
													</select>
												</div>
												<div class="col-lg-5 col-md-12 col-xs-12">
													
													<label class="mar_t0" >Название организации</label>
													<label class="radio_label"><input type="radio" name="browser" class="form_style" />Adam Hall </label>
													<label class="radio_label"><input type="radio" name="browser" class="form_style" checked>Adam Hall </label>
												</div>
											</div>
										</div>		

											<br/>
											<br/>

												<div class="input-block">
										        <label >Город</label>
										        <input type="text" class="form-control">
										      </div>
										      <div class="input-block">
										        <label >Станция метро</label>
										        <input type="text" class="form-control">
										      </div>
										      <div class="input-block">
										        <label >Адрес</label>
										        <input type="text" class="form-control">
										      </div>
						
											
											
									
										

										
									</div>

									<div class="basket_form_block_wr">
										<h4>Способ доставки</h4>
										
										<div class="sitebar_filter_select_wr">
					
											<select class="form_style">
												<option value="">Самовывоз - 0 p</option>
												<option value="">Физичиское лицо</option>
												
											</select>
											
										</div>	
									</div>

									<div class="basket_form_block_wr">
										<h4>Способ oплаты</h4>
										<div class="sitebar_filter_select_wr">
											<select class="form_style">
												<option value="">Наличный расчет</option>
												<option value="">Физичиское лицо</option>
												
											</select>
										</div>	
									</div>

									<div class="input-block textarea">
								       <label >Комментарий к заказу</label>
								        <textarea rows="3" type="text" class="form-control"></textarea>
								      </div>
								    

									<div class="row">
										<div class="col-md-6 col-xs-12">
											<div class="basket_total_korz">
												<h3>Итого:</h3>
												<div class="punkt_total"><p>Всего товаров:</p> <span class="kol_total">3шт</span></div>
												<div class="punkt_total"><p>Доставка:</p> <span class="kol_total">140<i class="rub">a</i></span></div>
												<div class="punkt_total"><p>Сумма заказа:</p> <span class="price">1400000 <i class="rub">a</i></span></div>
												<div class="punkt_total"><p>Ваша экономия:</p> <span class="total_korz_econom">1400000 <i class="rub">a</i></span></div>
												
											</div>
										</div>
										<div class="col-md-6 col-xs-12">
											<a href="#" class="oformit_zakaz ">оформить заказ</a>
										</div>
									</div>	
								</form>
								
							
							
							
					</div>
					
					<div class="col-lg-6 col-lg-md-6  col-md-12 col-xs-12">
									

							<div class="table_wr_st">
								<h3>Состав заказа</h3>							
								<table class="cont_table basket_table rwd-table">
						        	<tbody>
						        		<tr>
				                
						                <th class="basket_img">Фото</th>
						                <th>Наименование</th> 
						                <th>Кол-во</th> 
						                
						                
										<th>Скидка</th> 
										<th>Сумма</th> 
						                
						               
						       		 </tr>
						        	<tr>
						                <td  data-th="Фото" class="basket_img"><img src="img/prod_2.jpg" alt=""></td> 
						                <td data-th="Наименование" >
						                	<span class="articul">Артикул: MI-1299707287</span>
						                	<a href="#" class="basket_table_name">Beyerdynamic DT770 PRO закрытые наушники, 250 Ом</a></td> 
						                <td data-th="Количество">
						                	1шт
											
						                </td > 
						              
						                <td data-th="Цена">13000 <i class="rub">a</i> </td> 
						                <td data-th="Скидка"><span class="basket_sale">15%</span></td> 
						                <td data-th="Сумма"><span class="basket_sum">13000 <i class="rub">a</i></span> </td> 
						                <td data-th="Удалить"><a class="del_requisites "> <span class="icon-80"></span></a> </td> 
						              
						        	</tr>

						        	<tr>
						                <td  data-th="Фото" class="basket_img"><img src="img/prod_2.jpg" alt=""></td> 
						                <td data-th="Наименование" >
						                	<span class="articul">Артикул: MI-1299707287</span>
						                	<a href="#" class="basket_table_name">Beyerdynamic DT770 PRO закрытые наушники, 250 Ом</a></td> 
						                <td data-th="Количество">
						                	1шт
											
						                </td > 
						              
						                <td data-th="Цена">13000 <i class="rub">a</i> </td> 
						                <td data-th="Скидка"><span class="basket_sale">15%</span></td> 
						                <td data-th="Сумма"><span class="basket_sum">13000 <i class="rub">a</i></span> </td> 
						                <td data-th="Удалить"><a class="del_requisites "> <span class="icon-80"></span></a> </td> 
						              
						        	</tr>

						        	<tr>
						                <td  data-th="Фото" class="basket_img"><img src="img/prod_2.jpg" alt=""></td> 
						                <td data-th="Наименование" >
						                	<span class="articul">Артикул: MI-1299707287</span>
						                	<a href="#" class="basket_table_name">Beyerdynamic DT770 PRO закрытые наушники, 250 Ом</a></td> 
						                <td data-th="Количество">
						                	1шт
											
						                </td > 
						              
						                <td data-th="Цена">13000 <i class="rub">a</i> </td> 
						                <td data-th="Скидка"><span class="basket_sale">15%</span></td> 
						                <td data-th="Сумма"><span class="basket_sum">13000 <i class="rub">a</i></span> </td> 
						                <td data-th="Удалить"><a class="del_requisites "> <span class="icon-80"></span></a> </td> 
						              
						        	</tr>
						        	

						        	
						        	


						        	
						        	
						        	
									</tbody>
								</table>
							</div>		
					</div>	
						

					
					
		





			</div>
		</div>
	</div>	
			
	<?php include('includes/footer.php'); ?>


