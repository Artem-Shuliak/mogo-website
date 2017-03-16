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

					$('.toggle-2').toggleClass('rotate');
				});	

				$('.header-bg-1-btn').click(function (event) {
					event.preventDefault();
					$('.header-bg-1').addClass('top');
				});

				$('.header-bg-2-btn').click(function (event) {
					event.preventDefault();
					$('.header-bg-2').addClass('top');
				});

				$('.header-bg-3-btn').click(function (event) {
					event.preventDefault();
					$('.header-bg-3').addClass('top');
				});

				$('.header-bg-4-btn').click(function (event) {
					event.preventDefault();
					$('.header-bg-4').addClass('top');
				});

				$('.header-bg-1').addClass('top');

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

				setInterval(change, 5000);
			}		