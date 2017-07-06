$(document).ready(init);
			function init () {
				console.log('init');

								$(function() {
				   $('a[href="#about"]').click(function(e) {
				       
				       var targetoffset = $('a[name="about"]').offset().top; 
				       $('body').animate(
				            {scrollTop: targetoffset}, 
				            1000
				       );
				   }); 
				});

								$(function() {
				   $('a[href="#service"]').click(function(e) {
				       
				       var targetoffset = $('a[name="service"]').offset().top; 
				       $('body').animate(
				            {scrollTop: targetoffset}, 
				            1000
				       );
				   }); 
				});

								$(function() {
				   $('a[href="#work"]').click(function(e) {
				       
				       var targetoffset = $('a[name="work"]').offset().top; 
				       $('body').animate(
				            {scrollTop: targetoffset}, 
				            1000
				       );
				   }); 
				});


								$(function() {
				   $('a[href="#blog"]').click(function(e) {
				       
				       var targetoffset = $('a[name="blog"]').offset().top; 
				       $('body').animate(
				            {scrollTop: targetoffset}, 
				            1000
				       );
				   }); 
				});

								$(function() {
				   $('a[href="#contact"]').click(function(e) {
				       
				       var targetoffset = $('a[name="contact"]').offset().top; 
				       $('body').animate(
				            {scrollTop: targetoffset}, 
				            1000
				       );
				   }); 
				});

				// $('.slider').slick();

				$('.nav-right a').click(function (event) {

					$('body').removeClass('pos-fixed'); 

					$('.nav-right').removeClass('is-active');

				});	

				$('.js-btn-open').click(function (event) {
					event.preventDefault();

					$('.nav-right').addClass('is-active');

					$('body').addClass('pos-fixed');
				});	

				$('.js-btn-closed').click(function (event) {
					event.preventDefault();

					$('body').removeClass('pos-fixed');

					$('.nav-right').removeClass('is-active');
				});	


				$('.btn-1').click(function (event) {
					event.preventDefault();

					$('.content-1').toggleClass('open');

					$('.toggle-1').toggleClass('rotate');
				});	

				$('.btn-2').click(function (event) {
					event.preventDefault();

					$('.content-2').toggleClass('open');

					$('.toggle-2').toggleClass('rotate');
				});				

				$('.btn-3').click(function (event) {
					event.preventDefault();

					$('.content-3').toggleClass('open');

					$('.toggle-3').toggleClass('rotate');
				});


				$('.slider-img:first').addClass('top');

				$('.header-bg-1-btn').addClass('active');
			

				var f = function () {
                	var activeBtn = $('.js-slider-btn.active');
                	var nextBtn = activeBtn.next();
            
                	if (!nextBtn.length) {
                    	nextBtn = $('.js-slider-btn').first();
                	}
            
                	activeBtn.removeClass('active');
                	nextBtn.addClass('active');
            		}
				
					var btn_interval = setInterval(f, 4000);


				var change = function() {
					// alert('sample');
					var curr = $('.slider-img.top');
					var next = curr.next();

					if(!next.length){
						next = $('.slider-img:first');
						next.addClass('top');

						curr.animate({opacity:0.0},300, function(){
							curr.removeClass('top');
							curr.css({opacity:1.0});
						});
						// curr.removeClass('top');
					}else{
						next.css({opacity:0.0})
						.addClass('top')
						.animate({opacity: 1.0},1000,function(){
							curr.removeClass('top');
						});
						// next.addClass('top');
						// curr.removeClass('top');
					}

				}

    			var slider_automated = setInterval(change, 4000);

    			$('.header-bg-1-btn').click(function (event){
					btn_1();
					clearInterval(slider_automated);
					clearInterval(btn_interval);

					$('.js-slider-btn').removeClass('active');

					$('.header-bg-1').animate({opacity:1.0},200);

				});	

				$('.header-bg-2-btn').click(function (event){
					btn_2();
					clearInterval(slider_automated);
					clearInterval(btn_interval);

					$('.js-slider-btn').removeClass('active');

					$('.header-bg-2').animate({opacity:1.0},200);
				});

				$('.header-bg-3-btn').click(function (event){
					btn_3();
					clearInterval(slider_automated);
					clearInterval(btn_interval);

					$('.js-slider-btn').removeClass('active');

					$('.header-bg-3').animate({opacity:1.0},200);
				});

				$('.header-bg-4-btn').click(function (event){
					btn_4();
					clearInterval(slider_automated);
					clearInterval(btn_interval);

					$('.js-slider-btn').removeClass('active');

					$('.header-bg-4').animate({opacity:1.0},200);
				});

				var btn_1 = function() {
					$('.header-bg-1').addClass('top');
					$('.header-bg-2').removeClass('top');
					$('.header-bg-3').removeClass('top');
					$('.header-bg-4').removeClass('top');

					$('.header-bg-2').css({opacity:0.0});
					$('.header-bg-3').css({opacity:0.0});
					$('.header-bg-4').css({opacity:0.0});
					$('.header-bg-1').css({opacity:0.0});

				}

				var btn_2 = function() {
					$('.header-bg-2').addClass('top');
					$('.header-bg-1').removeClass('top');
					$('.header-bg-3').removeClass('top');
					$('.header-bg-4').removeClass('top');

					$('.header-bg-1').css({opacity:0.0});
					$('.header-bg-3').css({opacity:0.0});
					$('.header-bg-4').css({opacity:0.0});
					$('.header-bg-2').css({opacity:0.0});
				}

				var btn_3 = function() {
					$('.header-bg-3').addClass('top');
					$('.header-bg-1').removeClass('top');
					$('.header-bg-2').removeClass('top');
					$('.header-bg-4').removeClass('top');

					$('.header-bg-2').css({opacity:0.0});
					$('.header-bg-4').css({opacity:0.0});
					$('.header-bg-1').css({opacity:0.0});
					$('.header-bg-3').css({opacity:0.0});
				}

				var btn_4 = function() {
					$('.header-bg-4').addClass('top');
					$('.header-bg-1').removeClass('top');
					$('.header-bg-2').removeClass('top');
					$('.header-bg-3').removeClass('top');

					$('.header-bg-2').css({opacity:0.0});
					$('.header-bg-3').css({opacity:0.0});
					$('.header-bg-1').css({opacity:0.0});
					$('.header-bg-4').css({opacity:0.0});
				}

				$(window).scroll(function(){
					var wScroll = $(this).scrollTop();
					$('.slider-img').css({
						'transform' : 'translateY('+ wScroll/2 +'px)'
					});

					$('.devices')
				});


				$(window).scroll(function(){
					var wScroll = $(this).scrollTop();
							
						// $('.devices-bg').css({
						// 'transform' : 'translateY('+ wScroll/2 +'px)'
						// });
				});

				$(window).scroll(function(){
					var wScroll = $(this).scrollTop();
					var b = $('.devices').offsetTop();
					
					if (wScroll > b) {
						$('.devices-bg').css({
							'transform' : 'translateY('+ (wScroll -b) /2 +'px)'
						});
					}
						
				});


				// $(window).scroll(function(){
				// 	var wScroll = $(this).scrollTop();

				// 		if(wScroll > $('.devices').offset().top) {
							
				// 		$('.devices-bg').css({
				// 		'transform' : 'translateY('+ wScroll/1 +'px)'
				// 		});

				// 		}
				// });
			}


