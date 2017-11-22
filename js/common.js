
$(document).ready(function() {
  setTimeout(function() {
    $('body').addClass('loaded');
    
  }, 2000);


});





//  mobile menu
jQuery(document).ready(function($){
	var $lateral_menu_trigger = $('#cd-menu-trigger'),
		$content_wrapper = $('.cd-main-content'),
		$navigation = $('header');

	//open-close lateral menu clicking on the menu icon
	$lateral_menu_trigger.on('click', function(event){
		event.preventDefault();
		
		$lateral_menu_trigger.toggleClass('is-clicked');
		$navigation.toggleClass('lateral-menu-is-open');
		$content_wrapper.toggleClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			// firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
			$('body').toggleClass('overflow-hidden');
		});
		$('#cd-lateral-nav').toggleClass('lateral-menu-is-open');
		
		//check if transitions are not supported - i.e. in IE9
		if($('html').hasClass('no-csstransitions')) {
			$('body').toggleClass('overflow-hidden');
		}
	});

	//close lateral menu clicking outside the menu itself
	$(".cd-lateral-nav_close").on('click', function(event){
		
		$('#cd-lateral-nav').removeClass('lateral-menu-is-open');
			//check if transitions are not supported
		if( !$(event.target).is('#cd-menu-trigger, #cd-menu-trigger span') ) {
			$lateral_menu_trigger.removeClass('is-clicked');
			$navigation.removeClass('lateral-menu-is-open');
			$content_wrapper.removeClass('lateral-menu-is-open').one('transitionend', function(){
				$('body').removeClass('overflow-hidden');
			});
			
			if($('html').hasClass('no-csstransitions')) {
				$('body').removeClass('overflow-hidden');
			}

		}
	});

	

	//open (or close) submenu items in the lateral menu. Close all the other open submenu items.
	$('.item-has-children').children('a').on('click', function(event){
		event.preventDefault();
		$(this).toggleClass('submenu-open').next('.sub-menu').slideToggle(200).end().parent('.item-has-children').siblings('.item-has-children').children('a').removeClass('submenu-open').next('.sub-menu').slideUp(200);
	});
});

$(function() {


	

	$('.li_one').matchHeight();
	$('.li_two').matchHeight();
	$('.li_three').matchHeight();
	$('.li_four').matchHeight();
	$('.li_five').matchHeight();
	$('.li_six').matchHeight();
	$('.li_seven').matchHeight();
	$('.li_eight').matchHeight();
	$('.li_nine').matchHeight();
	$('.li_ten').matchHeight();
	$('.li_eleven').matchHeight();
	$('.li_twelve').matchHeight();
	$('.li_thirteen').matchHeight();
	$('.li_fourteen').matchHeight();
	$('.li_fiveteen').matchHeight();
	$('.li_sixteen').matchHeight();
	// $('.top-info').matchHeight();

	//nalichie table
	$(".open_all_table").on('click', function() {
    
    $(this).parents("tr").next(".fold").slideToggle(); 
    
	    if ($(this).text()=='+') {$(this).text('-');}
	 
	    else {$(this).text('+');}

	});
	


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};



	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });


	//sitebar menu
	$(".sitebar_nav li").hover(function(){
                            
    	$(this).children(".mega_menu_item ").stop().toggle(200);
    	$(this).toggleClass("active");
    });


	$(".mega_menu_item li").hover(function(){
                            
    	$(this).children(".mega_menu_item_step2").stop().toggle(200);
    	
    });

    //tabs

    $('.tabgroup > div').hide();
		$('.tabgroup > div:first-of-type').show();
		$('.tabs_main a').click(function(e){
		  e.preventDefault();
		    var $this = $(this),
		        tabgroup = '#'+$this.parents('.tabs_main').data('tabgroup'),
		        others = $this.closest('li').siblings().children('a'),
		        target = $this.attr('href');

		    others.removeClass('active');
		    $this.addClass('active');
		     $(tabgroup).children('div').hide(50); 
		    $(target).fadeIn(900);

		  
		})    






	
	//bigbaner slider
	
	$('.main_bigbaner_slider').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:false,
	    
	    items:1,
	   	autoplay:true,
	    autoplayTimeout:5000
	  
	});	


	//seo reklam slider
	
	$('.seo_text_slider').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:false,
	    
	    items:1,
	   	autoplay:true,
	    autoplayTimeout:5000
	  
	});	

//rangeSlider

var rangeSlider = function(){
  var slider = $('.range-slider'),
      range = $('.range-slider__range'),
      value = $('.range-slider__value');
    
  slider.each(function(){

    value.each(function(){
      var value = $(this).prev().attr('value');
      $(this).html(value);
    });

    range.on('input', function(){
      $(this).next(value).html(this.value);
    });
  });
};

rangeSlider();


$('.form_style , select').styler({
        selectSearch: true
      });


$(".product_card_buttont_availability").click(function() {

		$(this).parents(".product_card.little_card").find(".product_card_price").hide();
		
		$(this).parents(".product_card").find(".product_card_img img").addClass("click_availability");

   	 	$(this).parents(".product_card").find(".product_card_img p").addClass("click_availability");

   	 	$(this).parents(".product_card").find(".product_card_block_availability").fadeIn();

   	 	$(this).parents(".product_card_big").find(".product_card_block_availability").fadeIn();

   	 	$(this).parents(".product_card_big").find(".product_card_block_availability").fadeIn();

   	 	$(this).parents(".product_card_big").find(".product_card_big_right_part .product_card_img .product_card_descript").hide();

   	 	$(this).parents(".product_card_big").find(".product_card_price").hide(); 
  		
  		$(this).parents(".product_card_big").find(".product_card_img p").addClass("click_availability");

  		 $(this).parents(".product_card.catalog_product_card ").find(".button").hide();
	  });



 	 $(".block_availability_close").click(function() {

 	 	 $(this).parents(".product_card.catalog_product_card ").find(".button").fadeIn();

 	 	  $(this).parents(".product_card").find(".product_card_block_availability").hide();

 	     $(this).parents(".product_card").find(".product_card_img img").removeClass("click_availability");

     	 $(this).parents(".product_card").find(".product_card_img p").removeClass("click_availability");

    	$(this).parents(".product_card.little_card").find(".product_card_price").fadeIn(100);

  		$(this).parents(".product_card_big").find(".product_card_block_availability").hide();

   	 	$(this).parents(".product_card_big").find(".product_card_block_availability").hide();

   	 	$(this).parents(".product_card_big").find(".product_card_big_right_part .product_card_img .product_card_descript").fadeIn();

   	 	$(this).parents(".product_card_big").find(".product_card_price").fadeIn(); 

   	 	$(this).parents(".product_card_big").find(".product_card_img p").removeClass("click_availability");

	   });

 $(".mobile_smart_search_open").click(function() {

 	 	

   	 	$(".sitebar").fadeIn();

	   });

$(".sitebar_tab_close").click(function() {

 	 	

   	 	$(".sitebar").hide();

	   });




//header_search_preview 

$( ".header_serch input[type=text]" ).focus(function() {
  $(" .header_search_preview").fadeIn();
});

$( ".header_serch input[type=text]" ).focusout(function() {
  $(" .header_search_preview").hide();
});


$(".open_product_reviews_hiden_text").on('click', function() {
    $(this).toggleClass("active");
    $( ".product_reviews_hiden_text" ).slideToggle();
    
    if ($(this).text()=='...') {$(this).text('cкрыть ');}
 
    else {$(this).text('...');}

});




$(document).mousedown(function (e) {
    var container = $(".personal_area_click.visib,.basket_click_wr.visib");
    if (container.has(e.target).length === 0){
        container.removeClass("visib");
        
    }
     
    



});



$(".open_tultip").click(function() {
	$(".tultip_main").slideToggle();

});


//basket_hidden




	


$(".footer_but_basket").click(function() {
 if ($(this).hasClass("active")){
       	$(this).removeClass("active");
		$(".basket_click_wr").removeClass("visib");
    }
	else{

		$(this).addClass("active");
		$(".basket_click_wr").addClass("visib");
	}    
		
		

});


	$(".personal_area").click(function() {
		 if ($(this).hasClass("active")){
		       $(this).removeClass("active");
				$(".personal_area_click").removeClass("visib");
		    }
		else{

			$(this).addClass("active");
			$(".personal_area_click").addClass("visib");
		}    


				
		

	});


	


//lichyy mob menu
$(".personal_room_open_mobile_butt").click(function() {

		 $(this).toggleClass("active");
		 $(".personal_room_sitebar").slideToggle(50);

	});


//sort mob menu
$(".sort_but_mob").click(function() {

		 $(this).toggleClass("active");
		 $(".catalog_sort").toggleClass("display_inline");

	});
//nalichie class active

	$(".nalichie_redaction_wr a").click(function() {

		 $(this).toggleClass("active");

	});




//sort
$(".click_sort_top_bottom").click(function() {

	$(this).parents(".sort_top_bottom").find(".click_sort_top_bottom").removeClass("actived");
	$(this).addClass("actived");


	});


$(".catalog_sort_ulsort li > a").click(function() {

	$(".catalog_sort_ulsort li > a").removeClass("active");
	$(this).addClass("active");


	});

$(".sort_block_ul li > a").click(function() {

	$(".sort_block_ul li > a").removeClass("active");
	$(this).addClass("active");


	});

$(".sort_page li > a").click(function() {

	$(".sort_page li > a").removeClass("active");
	$(this).addClass("active");


	});



	// main newproduct slider

 	 $('.main_newproduct_slider').owlCarousel({
	    loop:false,
	    margin:0,
	    nav:true,
		    navText:[
		           "<span class='sl_nav'></span>",
		            "<span class='sl_nav'></span>"
		        ],
	    items:1
	   	
	  
	});	


 	 $('.main_newproduct_slider_3').owlCarousel({
	    loop:false,
	    margin:0,
	    nav:true,
		    navText:[
		           "<span class='sl_nav'></span>",
		            "<span class='sl_nav'></span>"
		        ],
	    items:1
	   	
	  
	});	

 	 $('.main_newproduct_slider_2').owlCarousel({
	    loop:false,
	    margin:0,
	    nav:true,
		    navText:[
		           "<span class='sl_nav'></span>",
		            "<span class='sl_nav'></span>"
		        ],
	    items:1
	   	
	  
	});	


 	  $('.main_newproduct_slider_4').owlCarousel({
	    loop:false,
	    margin:0,
	    nav:true,
		    navText:[
		           "<span class='sl_nav'></span>",
		            "<span class='sl_nav'></span>"
		        ],
	    items:1
	   	
	  
	});	


 	(function ($) { 
		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
		
		$('.tab ul.tabs li a').click(function (g) { 
			var tab = $(this).closest('.tab'), 
				index = $(this).closest('li').index();
			
			tab.find('ul.tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');
			
			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
			
			g.preventDefault();
		} );
	})(jQuery); 


 	//    // product card slider
		// $('.product_card_big_slider').owlCarousel({
		//     loop:true,
		//     margin:20,
		//     nav:true,
		//     navText:[
		//            "<span class='sl_nav'></span>",
		//             "<span class='sl_nav'></span>"
		//         ],
		//     items:3,
		//     // autoplay:true,
		//     // autoplayTimeout:5000,
		//     responsive:{
		//         0:{
		//             items:1
		//         },
		//         480:{
		//             items:1
		//         },
		//         767:{
		//             items:2
		//         },
		//         1000:{
		//             items:3
		//         },
		       
		//         1400:{
		//             items:3
		//         }
		//     }
		// });


		$(".product_card_big_slider img").click(function () {
	      $(".product_card_big_slider img").removeClass("galactive");
	      $(this).addClass("galactive");
	      var  atrsl = $(".galactive").attr('src');
	      $(".main_img_slider img").attr('src', atrsl);
	      
	    });



		// product card slider
		$('.product_card_product_slider_thumb').owlCarousel({
		    loop:true,
		    margin:20,
		    nav:true,
		    navText:[
		           "<span class='sl_nav'></span>",
		            "<span class='sl_nav'></span>"
		        ],
		    items:3,
		    // autoplay:true,
		    // autoplayTimeout:5000,
		    responsive:{
		        0:{
		            items:2
		        },
		        480:{
		            items:3
		        },
		        767:{
		            items:3
		        },
		        1000:{
		            items:3
		        },
		       
		        1400:{
		            items:3
		        }
		    }
		});


		$(".product_card_product_slider_thumb img").click(function () {
	      $(".product_card_product_slider_thumb img").removeClass("galactive");
	      $(this).addClass("galactive");
	      var  atrslider = $(".galactive").attr('src');
	      $(".product_card_product_slider_main_img img").attr('src', atrslider);
	      $(".product_card_product_slider_main_img a").attr('href', atrslider);
	      
	    });

		// // Header Scroll
	   


	    
	  //  	$(window).on('scroll', function() {
	  //    var scroll = $(window).scrollTop();
	  //    if ($('.main_wr').height() >= 2000) { 
			//      if (scroll >= 200) {
			//        $('header').addClass('header_fixed');
			//        $('.main_wr').addClass('header_fixed_main_wr');
			//        $('.header_fixed_col-4').addClass('col-lg-4');
			// 	   $(".hidden_header_fixed_phone").hide();
			// 	   $(".header_about_shop").removeClass("open_hidden_header_shop_time"); 
			        
			       
			     
			     
			//     } else {
			//         $('header').removeClass('header_fixed');
			//         $('.header_fixed_col-4').removeClass('col-lg-4');
			//         $('.main_wr').removeClass('header_fixed_main_wr');
			//         $(".hidden_header_fixed_phone").fadeIn();
			//         $(".button_close_all_about_shop").hide();
			//         $(".hidden_header_shop_time").hide();
			        
			//      }
			// } 

		 //      	if ($(window).width() < 960) {
			// 	      $('header').removeClass('header_fixed');
				     
			// 	      $(".hidden_header_fixed_phone").fadeIn();
			// 	  }
				
					
			
	 	//  });



		 //fixed_header
 		$(".button_open_all_about_shop").click(function () {
	      
	      $(this).parents(".header_about_shop").find(".hidden_header_fixed_phone").fadeIn(); 
	      $(this).parents(".header_about_shop").addClass("open_hidden_header_shop_time"); 
	      $(this).parents(".header_about_shop").find(".button_close_all_about_shop").fadeIn(); 
	      $(this).parents(".header_about_shop").find(".hidden_header_shop_time").fadeIn();
	    });


	    $(".button_close_all_about_shop").click(function () {
	      
	     $(this).parents(".header_fixed .header_about_shop").find(" .hidden_header_fixed_phone").hide(); 
	     $(this).parents(".header_about_shop").removeClass("open_hidden_header_shop_time"); 
	     $(this).parents(".header_about_shop").find(".hidden_header_shop_time").hide();
	      
	    });

		//header hidden inform

	    $(".header_fixed .header_about_shop .header_shop_time span span").click(function () {
	      
	     $(this).parents(".header_fixed .header_about_shop").find(".hidden_header_shop_time").fadeIn(); 
	       $(this).parents(".header_fixed .header_about_shop").addClass("open_hidden_header_shop_time"); 
	      
	    });


	    $(".header_fixed .button_close_all_about_shop").click(function () {
	      
	     $(this).parents(".header_fixed .header_about_shop").find(".hidden_header_shop_time").hide(); 
	       $(this).parents(".header_fixed .header_about_shop").removeClass("open_hidden_header_shop_time"); 
	      
	    });



$(".sitebar_filter_open").click(function() {

	$(".sitebar_filter").fadeIn();
});

$(".sitebar_filter_close").click(function() {

	$(".sitebar_filter").hide();
});

$(".pswp__zoom-wrap .pswp__img").click(function() {

	$('.pswp').hide();
});



    $('.salon_tab  a').click(function(j) {
        $('.salon_tab  a').removeClass("active");
        $(this).addClass("active");
        $(".contact_item_salon").removeClass('hidden_salon');

        if ($(".ofis_moskov_but").hasClass('active')) {
            $(".salom_moskow").addClass('hidden_salon');
        } 

        if ($(".salom_moskow_but").hasClass('active')) {
            $(".ofis_moskov").addClass('hidden_salon');
        } 

    });

// Product card slider







	//PARTNERS SLIDER
	$('.partner_slider_wr').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    navText:[
	           "<span class='sl_nav'></span>",
	            "<span class='sl_nav'></span>"
	        ],
	    items:5,
	    // autoplay:true,
	    // autoplayTimeout:5000,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        900:{
	            items:3
	        },
	        1200:{
	            items:4
	        },
	        1400:{
	            items:5
	        }
	    }
	});


	//hit_product
	$('.hit_product_slider').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    navText:[
	           "<span class='sl_nav'></span>",
	            "<span class='sl_nav'></span>"
	        ],
	    items:3,
	    // autoplay:true,
	    // autoplayTimeout:5000,
	    responsive:{
	        0:{
	            items:1
	        },
	        767:{
	            items:2
	        },
	        1024:{
	            items:2
	        },
	        1280:{
	            items:3
	        },
	        1366:{
	            items:4
	        },
	        1920:{
	            items:4
	        }
	    }
	});




	//hit_product
	$('.main_block_sales_slider').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    navText:[
	           "<span class='sl_nav'></span>",
	            "<span class='sl_nav'></span>"
	        ],
	    items:4,
	    // autoplay:true,
	    // autoplayTimeout:5000,
	    responsive:{
	        0:{
	            items:1
	        },
	        767:{
	            items:2
	        },
	        1024:{
	            items:2
	        },
	        1280:{
	            items:3
	        },
	         1366:{
	            items:4
	        },
	        1920:{
	            items:4
	        }
	       
	    }
	});




	//icon katalog SLIDER
	$('.icon_catalog_slider').owlCarousel({
	    loop: false,
	    margin: 30,
	    nav: true,
	    navText:[
	           "<span class='sl_nav'></span>",
	            "<span class='sl_nav'></span>"
	        ],
	    items: 12,
	    // autoplay:true,
	    // autoplayTimeout:5000,
	    responsive:{
	        0:{
	            items: 3
	        },
	        480:{
	            items: 4
	        },

	        600:{
	            items: 5
	        },
	        900:{
	            items: 7
	        },
	        1200:{
	            items: 9
	        },
	        1400:{
	            items: 12
	        },
	        1900:{
	            items: 12
	        }
	    }
	});


// product_reviews_slider

	 $('.product_reviews_slider').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
		    navText:[
		           "<span class='sl_nav'></span>",
		            "<span class='sl_nav'></span>"
		        ],
	    items:1
	   	
	  
	});	



	//YOU_SAW
	$('.you_saw_block_slider').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    navText:[
	           "<span class='sl_nav'></span>",
	            "<span class='sl_nav'></span>"
	        ],
	    items:4,
	    // autoplay:true,
	    // autoplayTimeout:5000,
	    responsive:{
	        0:{
	            items:1
	        },
	        767:{
	            items:2
	        },
	        1024:{
	            items:2
	        },
	        1280:{
	            items:3
	        },
	         1366:{
	            items:4
	        },
	        1920:{
	            items:4
	        }
	       
	    }
	});

	//.all_stars_slider
	$('.all_stars_slider').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    navText:[
	           "<span class='sl_nav'></span>",
	            "<span class='sl_nav'></span>"
	        ],
	    items:4,
	    // autoplay:true,
	    // autoplayTimeout:5000,
	    responsive:{
	        0:{
	            items:1
	        },
	        767:{
	            items:2
	        },
	        1024:{
	            items:2
	        },
	        1280:{
	            items:3
	        },
	        1366:{
	            items:4
	        },
	        1920:{
	            items:4
	        }
	       
	    }
	});


	$(".all_stars_slider a,.product_card_product_slider_main_img a").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
	});
    


	$(".fsb_popup").fancybox({
    	closeClick: false,
    	
		
     });


    //katalog menu accordion 

(function($) {


    $('.sitebar_nav_accordion .dropdown > a').click(function(j) {
        var dropDown = $(this).closest('li').find('.submenu');

        $(this).closest('.accordion').find('.submenu').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.sitebar_nav_accordion .accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);




(function($) {


    $('.prodlisrt_inform_accordion .dropdown > a').click(function(j) {
        var dropDown = $(this).closest('li').find('.submenu');

        $(this).closest('.prodlisrt_inform_accordion').find('.submenu').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.prodlisrt_inform_accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(true, true).slideToggle(100);

        j.preventDefault();
    });
})(jQuery);



(function($) {


    $('.prodline_inform_accordion .dropdown > a').click(function(j) {
        var dropDown = $(this).closest('li').find('.submenu');

        $(this).closest('.prodline_inform_accordion').find('.submenu').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.prodline_inform_accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);



$(".open_hidden_mobile_text").on('click', function() {
    
    $(this).prev(".hidden_mobile_text").slideToggle();
    $(this).toggleClass("active")
    
    if ($(this).find('.but_text').text()=='развернуть') {$(this).find('.but_text').text('свернуть');}
 
    else {$(this).find('.but_text').text('развернуть');}

});



$(".open_hidden_pc_text").on('click', function() {
    
    $(this).prev(".hidden_pc_text").slideToggle();
    $(this).toggleClass("active")
    
    if ($(this).find('.but_text').text()=='развернуть') {$(this).find('.but_text').text('свернуть');}
 
    else {$(this).find('.but_text').text('развернуть');}

});


$(".katalog_open_1366").on('click', function() {
    
	$('.sitebar').fadeIn();
    $('.main_wr').addClass("menu_active");
    $(".katalog_open_1366_close").addClass("active");
     $(".sitebar_filter").hide();
    
    
    
    
});


$(".sravnenie_close_harakteristic").on('click', function() {
    
    $(this).prev("form").slideToggle();
   
    
    if ($(this).text()=='скрыть характеристики') {$(this).text('открыть характеристики');}
 
    else {$(this).text('скрыть характеристики');}

});


$(".katalog_open_1366_close").on('click', function() {
   
	$('.sitebar').hide();
    $('.main_wr').removeClass("menu_active");
    $(".katalog_open_1366_close").removeClass("active");
    $(".sitebar_filter").hide();
    
    
});



$(".dropdown a").on('click', function() {
    
   
   
    
    if ($(".dropdown a").hasClass("active")) {

    	$(".dropdown a.active").find("p > span.acor_plus").text('-');
	}
 
    else {
    		$(".dropdown a").find("p > span.acor_plus").text('+');
    	}

});


$(".sitebar_filter_open.but_1366").on('click', function() {
    
	$('.sitebar').fadeIn();
    $('.main_wr').addClass("menu_active");
    $(".katalog_open_1366_close").addClass("active");
    $(".sitebar_filter").fadeIn();
   
    
    
    
});





//material contact form animation
$('.contact-form').find('.form-control').each(function() {
  var targetItem = $(this).parent();
  if ($(this).val()) {
    $(targetItem).find('label').css({
      'top': '8px',
      'fontSize': '10px'
    });
  }
})
$('.contact-form').find('.form-control').focus(function() {
  $(this).parent('.input-block').addClass('focus');
  $(this).parent().find('label').animate({
    'top': '8px',
    'fontSize': '10px'
  }, 300);
})
$('.contact-form').find('.form-control').blur(function() {
  if ($(this).val().length == 0) {
    $(this).parent('.input-block').removeClass('focus');
    $(this).parent().find('label').animate({
      'top': '20px',
      'fontSize': '12px'
    }, 300);
  }
})

$('.datepicker').datepicker({minDate:1});

$('#clearDateButton').click(function(){
	$('#mattDate').val('');
});



});






