/*
Site Template Name: Cristy
Theme URL: https://codecafe.upcoders.com/cristy/
Author: Code Café 
Author URI: http://themeforest.net/user/thecodecafe
Description: Cristy - Modern Website template
Version: 1.0.0
*/

/* 
recaptcha valdation on check - not working inside ;(function ($) {})
*/

var onReturnCallback = function(response) { 
	if(response){
		$(".g-recaptcha").css({
			"border": "1px solid #5cb85c"
		});
	}
}

;(function ($) {
	'use strict';
	/* 
	WOW activation for animation
	*/
	new WOW().init();
	/* 
	Dropdown menu on hover on desktop 
	*/
	if($(window).width() > 768) {
		$('ul.nav li.dropdown').mouseenter(function () {
			$(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn(200);
		}).mouseleave(function () {
			$(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(200);
		});
	}
	/* 
	Full hight menu on mobile
	*/
	if($(window).width() < 768) {
		$('.navbar-nav').height($(window).height() - $('.navbar-header').height());
	}
	/* 
	Check active collapse
	*/
	$('.panel-collapse').on('show.bs.collapse', function () {
		$(this).parents('.panel').addClass('toggled');
	});
	$('.panel-collapse').on('hidden.bs.collapse', function () {
		$(this).parents('.panel').removeClass('toggled');
	});
	/*
	Toggle menu on click layer
	*/
	$('.menu-two-handeler .navbar-toggle, .menu-two-one-handeler .navbar-toggle').on('click', function () {
		$('.menu-two').toggleClass('menu-open');
		if($('.navbar').hasClass('menu-open')) {
			$('.navbar-bglayer').fadeIn(200);
		} else {
			$('.navbar-bglayer').fadeOut(200);
		}
	});
	/*
	Hide menu on click layer
	*/
	$('.navbar-bglayer').on('click', function () {
		$('.menu-two').toggleClass('menu-open');
		$(this).fadeToggle(200);
	});
	/*
	Navbar function on window scroll
	*/
	$(window).on('scroll', function () {
		if($('body').hasClass('menu-one-two-body')) {
			var scrollpoint = 40;
		} else {
			var scrollpoint = 100;
		}
		if($(window).scrollTop() > scrollpoint) {
			$('body').addClass('scrolled');
		} else {
			$('body').removeClass('scrolled');
		}
		var pageEle = $(".page");
		var pageEleLength = pageEle.length;
		if(pageEleLength > 0) {
			for(var i = 0; i < pageEleLength; i++) {
				var id = $(pageEle[i]).attr("id");
				var height = $(pageEle[i]).outerHeight();
				var offsetTop = $(pageEle[i]).offset().top - 80;
				if($(window).scrollTop() > offsetTop - 1 && $(window).scrollTop() < offsetTop + height - 1) {
					var uu = $(".navbar-nav>li>a[href='#" + id + "']").parent().addClass("active");
				} else {
					var uu = $(".navbar-nav>li>a[href='#" + id + "']").parent().removeClass("active");
				}
			}
		}
	});
	/*
	dropdown toggle on click for mobile
	*/
	if($(window).height() < 768) {
		$('.dropdown-toggle').click(function () {
			$('.dropdown-menu').slideToggle();
		})
	}
	/*
	Nabvar function for one page
	*/
	$(".navbar-nav>li>a, .scroll_link").on('click', function () {

		if($('body').hasClass('menu-two-body')) {
			var offtop = 0;
			if($(window).width() > 767 && $(window).width() < 992) {
				var offtop = 110;
			}
		} else if($('body').hasClass('menu-one-three-body')) {
			var offtop = 160;
		}
		else {
			var offtop = 80;
			if($(window).width() > 767 && $(window).width() < 992) {
				var offtop = 190;
			}
		}


		$(this).parent().addClass("active");
		$(".navbar-nav li a").not(this).parent().removeClass("active");
		var TargetId = $(this).attr('href');
		if($(TargetId).length != 0) {
			$('html, body').animate({
				scrollTop: $(TargetId).offset().top - offtop
			}, 600, 'swing');
		}
		// r multi-page navbar problem * from v1.1
		if($('body').hasClass('op')) {
			return false;
		}



		
	});

	$('.menu-search a').on('click', function () {
		if($('.search_box:visible').length == 0){
			$('html').css({
				'overflow': 'hidden',
				'margin-right': '17px'
			});
			$('.navbar-fixed-top.menu-one').css({
				'padding-right': '19px'
			});
		} else {
			$('html').css({
				'overflow': '',
				'margin-right': ''
			});
			$('.navbar-fixed-top.menu-one').css({
				'padding-right': ''
			});

		}
		$('.menu-icon.menu-search i').toggleClass('fa-search fa-close');
		$('.search_box').fadeToggle(500);
		return false;
	});

	/*
	Tab to collapse for mobile
	*/
	$('#myServices, #myProcess').tabCollapse();
	/*
	Full height for home container
	*/
	$('.home-container').height($(window).height());
	$('.home6 .home-container').height(450);




	$('.home-two .carousel-inner, .home-two .carousel-inner .item').height($(window).height());
	$('.home-three .carousel-inner, .home-three .carousel-inner .item').height($(window).height() / 2 + 200);
	/*
	carousel slider image as background
	*/
	var carouselEle = $(".carousel-inner>.item>img");
	var carouselEleLength = carouselEle.length;
	if(carouselEleLength > 0) {
		for(var i = 0; i < carouselEleLength; i++) {
			$(carouselEle[i]).css({
				'opacity': '0',
			});
			var imgurl = $(carouselEle[i]).attr("src");
			$(carouselEle[i]).parent().css({
				"background": "url(" + imgurl + ") center center no-repeat",
				"background-size": "cover"
			});
		}
	}
	/*
	Popup image
	*/
	var zoom_imageEle = $(".zoom_image");
	var zoom_imageEleLength = zoom_imageEle.length;
	if(zoom_imageEleLength > 0) {
		for(var i = 0; i < zoom_imageEleLength; i++) {
			$(zoom_imageEle[i]).magnificPopup({
				type: 'image',
				closeOnContentClick: true,
				mainClass: 'mfp-with-zoom mfp-img-mobile',
				image: {
					verticalFit: true
				}
			});
		}
	}
	/*
	counter text
	*/
	var counterEle = $(".counter");
	var counterEleLength = zoom_imageEle.length;
	if(counterEleLength > 0) {
		for(var i = 0; i < counterEleLength; i++) {
			$(counterEle[i]).counterUp({
				delay: 10,
				time: 3000
			});
		}
	}
	$('.tweet').twittie({
		dateFormat: '%B %d, %Y',
		template: '{{tweet}} <span class="time">{{date}}</span>',
		count: 5,
		loadingText: 'Loading!'
	});
	/*
	Slider for featured project
	*/
	var $f_project = $('.f-pro .slider');
	$f_project.owlCarousel({
		dots: false,
		margin: 0,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			600: {
				items: 3,
				nav: false,
			},
			1000: {
				items: 5,
				nav: false,
				loop: true
			}
		}
	});
	/*
	Slider for testimonial type one
	*/
	var $testimonial = $('.testimonial-one .slider');
	$testimonial.owlCarousel({
		loop: true,
		dots: true,
		margin: 50,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			600: {
				items: 1,
				nav: false,
			},
			1000: {
				items: 2,
				nav: false,
				loop: true
			}
		}
	});
	/*
	Slider for testimonial type two
	*/
	var $testimonial = $('.testimonial-two .slider');
	$testimonial.owlCarousel({
		loop: true,
		dots: true,
		margin: 50,
		items: 1,
		nav: false
	});
	/*
	Single image slider
	*/
	var $single_image_slider = $('.single_image_slider');
	$single_image_slider.owlCarousel({
		loop: true,
		dots: true,
		margin: 50,
		items: 1,
		nav: false
	});
	/*
	Slider for Twitter feed 
	*/
	var bb = setInterval(function () {
		var bbb = $(".tweet").find('.tweet_slider').text();
		if(!bbb) {} else {
			clearInterval(bb);
			var $twitter = $('.twitter .tweet_slider');
			$twitter.owlCarousel({
				loop: true,
				dots: false,
				margin: 50,
				responsiveClass: true,
				responsive: {
					0: {
						items: 1,
						nav: false
					},
					600: {
						items: 1,
						nav: false,
					},
					1000: {
						items: 1,
						nav: false,
						loop: true
					}
				}
			});
		}
	}, 100);
	/*
	Slider for clients logo
	*/
	var $c_slider = $('.clients .slider');
	$c_slider.owlCarousel({
		loop: false,
		dots: false,
		margin: 30,
		responsiveClass: true,
		responsive: {
			0: {
				items: 2,
				nav: false
			},
			600: {
				items: 4,
				nav: false,
			},
			1000: {
				items: 6,
				nav: false,
				loop: true
			}
		}
	});
	/*
	Tab content same height
	*/
	function tabcontentsameheight() {
		$('.active .services-details').each(function () {
			var highestBox = 0;
			$('.col-md-4', this).each(function () {
				if($(this).height() > highestBox) {
					highestBox = $(this).height();
				}
			});
			$('.col-md-4', this).height(highestBox);
		});
	}
	tabcontentsameheight();
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		tabcontentsameheight();
	});
	/*
	Same height features box
	*/
	$('.features').each(function () {
		var highestBox = 0;
		$('.feature', this).each(function () {
			if($(this).height() > highestBox) {
				highestBox = $(this).height();
			}
		});
		$('.feature', this).height(highestBox);
	});
	/*
	Same height Footer box
	*/
	$('footer').each(function () {
		var highestBox = 0;
		$('.footer_single', this).each(function () {
			if($(this).height() > highestBox) {
				highestBox = $(this).height();
			}
		});
		$('.footer_single', this).height(highestBox);
	});
	/*
	Same height block
	*/
	$(window).on('load', function () {
		$('.block').each(function () {
			var highestBox = 0;
			$('.block-inner', this).each(function () {
				if($(this).height() > highestBox) {
					highestBox = $(this).height();
				}
			});
			$('.block-inner', this).height(highestBox);
		});
	});
	/*
	Pi chart - Used on Service section
	*/
	$('.percentage').easyPieChart({
		animate: 2000,
		size: 150,
		lineWidth: 2
	});
	/*
	Portfolio grid and filter
	*/
	var $grid = $('.grid').isotope({
		itemSelector: '.grid-item',
		masonry: {
			columnWidth: '.grid-sizer'
		}
	});
	$('#filters').on('click', 'button', function () {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({
			filter: filterValue
		});
	});
	$('.btn-group').each(function (i, buttonGroup) {
		var $buttonGroup = $(buttonGroup);
		$buttonGroup.on('click', 'button', function () {
			$buttonGroup.find('.active').removeClass('active');
			$(this).addClass('active');
		});
	});
	/*
	Portfolio Category toggle for mobile
	*/
	$('.portfolio .mobile-pf-filter-toggle').on('click', function () {
		$('.portfolio .filters.btn-group').fadeToggle();
		$('.portfolio .mobile-pf-filter-toggle span').toggleClass('pe-7s-keypad pe-7s-close');
		return false;
	});
	/*
	Mailchimmp Integration 
	*/
	$('#subscribe-form').ajaxChimp({
		url: "http://bestlooker.us10.list-manage.com/subscribe/post?u=e16312d09b1b43f5c26fc526c&amp;id=195aaab5cb" //Replace this with your own mailchimp post URL. 
	});
	/*
	Video background example - Testimonial section
	*/
	$('.testimonial .bg.video').vide({
		'mp4': 'video/ocean',
		'webm': 'video/ocean',
		'ogv': 'video/ocean',
		'poster': 'video/ocean',
	}, {
		volume: 1,
		playbackRate: 1,
		muted: true,
		loop: true,
		autoplay: true,
		position: '50% 50%',
		posterType: 'detect',
		resizing: true,
		bgColor: 'transparent',
		className: ''
	});
	/*
	Video background example - Testimonial section
	*/
	$('.home .bg.video').vide({
		'mp4': 'video/ocean',
		'webm': 'video/ocean',
		'ogv': 'video/ocean',
		'poster': 'video/ocean',
	}, {
		volume: 1,
		playbackRate: 1,
		muted: true,
		loop: true,
		autoplay: true,
		position: '50% 50%',
		posterType: 'detect',
		resizing: true,
		bgColor: 'transparent',
		className: ''
	});



	/*
	Contact form validation and submissions
	*/

	$("#name").keyup(function () {
		"use strict";
		var value = $(this).val();
		if(value.length > 1) {
			$(this).parent().find(".error_message").remove();
			$(this).css({
				"border": "1px solid #5cb85c"
			})
		} else {
			$(this).css({
				"border": "1px solid #e0e0e0"
			})
			$(this).parent().find(".error_message").remove();
			$(this).parent().append("<div class='error_message'>Name value should be at least 2</div>");
		}
	});
	$("#email").keyup(function () {
		"use strict";
		var value = $(this).val();
		var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
		if(testEmail.test(value)) {
			$(this).parent().find(".error_message").remove();
			$(this).css({
				"border": "1px solid #5cb85c"
			})
		} else {
			$(this).css({
				"border": "1px solid #e0e0e0"
			})
			$(this).parent().find(".error_message").remove();
			$(this).parent().append("<div class='error_message'>Please entire a valid email. </div>");
		}
	});
	$("#contact_submit").click(function () {
		"use strict";
		var nameValue = $("#name").val();
		if(!nameValue.length) {
			$("#name").css({
				"border": "1px solid red"
			});
			$("#name").parent().find(".error_message").remove();
			$("#name").parent().append("<div class='error_message'>Name is required</div>");
			return false;
		}
		if(nameValue.length < 1) {
			$("#name").css({
				"border": "1px solid red"
			});
			$("#name").parent().find(".error_message").remove();
			$("#name").parent().append("<div class='error_message'>Name value should be at least 2</div>").show();
			return false;
		}
		var emailValue = $("#email").val();
		var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
		if(!emailValue) {
			$("#email").css({
				"border": "1px solid red"
			});
			$("#email").parent().find(".error_message").remove();
			$("#email").parent().append("<div class='error_message'>Email is required</div>").show();
			return false;
		}
		if(!testEmail.test(emailValue)) {
			$("#email").css({
				"border": "1px solid red"
			});
			$("#email").parent().find(".error_message").remove();
			$("#email").parent().append("<div class='error_message'>Please entire a valid email.</div>").show();
			return false;
		}



		var telValue = $("#tel").val();
		var messageValue = $("#message").val();


		var response = grecaptcha.getResponse();
		if(!response){
			$(".g-recaptcha").css({
				"border": "1px solid red"
			});
			console.log(response);
			return false;
		}


		if(nameValue && emailValue) {
			$.ajax({
				url: 'contact/mail.php',
				data: {
					name: nameValue,
					email: emailValue,
					tel: telValue,
					message: messageValue
				},
				type: 'POST',
				success: function (result) {
					"use strict";
					var array = result.split(',');
					$(".show_result").append("<div class='result_message'>" + array[1] + "</div>");
					if(array[0] == 1) {
						$('.result_message').addClass('alert alert-success');
					}
					if(array[0] == 0) {
						$('.result_message').addClass('alert alert-danger');
					}
					$(".show_result").delay(3000).fadeOut(1000);
					$("#name").val("");
					$("#email").val("");
					$("#tel").val("");
					$("#message").val("");
					$("#name, #email").css({
						"border": "1px solid #e0e0e0"
					})
				}
			});
		}
		return false;
	});
	/*
	Map for contact us section
	*/
	google.maps.event.addDomListener(window, 'load', init);

	function init() {
		var mapOptions = {
			scrollwheel: false,
			zoom: 16,
			center: new google.maps.LatLng(23.710551, 90.415643), // New York
			styles: [{
				featureType: "landscape",
				stylers: [{
					saturation: -100
				}, {
					lightness: 6
				}, {
					visibility: "on"
				}]
			}, {
				featureType: "poi",
				stylers: [{
					saturation: -100
				}, {
					lightness: 5
				}, {
					visibility: "simplified"
				}]
			}, {
				featureType: "road.highway",
				stylers: [{
					saturation: -100
				}, {
					visibility: "simplified"
				}]
			}, {
				featureType: "road.arterial",
				stylers: [{
					saturation: -100
				}, {
					lightness: 3
				}, {
					visibility: "on"
				}]
			}, {
				featureType: "road.local",
				stylers: [{
					saturation: -100
				}, {
					lightness: 4
				}, {
					visibility: "on"
				}]
			}, {
				featureType: "transit",
				stylers: [{
					saturation: -100
				}, {
					visibility: "simplified"
				}]
			}, {
				featureType: "administrative.province",
				stylers: [{
					visibility: "off"
				}] /**/
			}, {
				featureType: "administrative.locality",
				stylers: [{
					visibility: "off"
				}]
			}, {
				featureType: "administrative.neighborhood",
				stylers: [{
					visibility: "on"
				}] /**/
			}, {
				featureType: "water",
				elementType: "labels",
				stylers: [{
					visibility: "on"
				}, {
					lightness: -2
				}, {
					saturation: -100
				}]
			}, {
				featureType: "water",
				elementType: "geometry",
				stylers: [{
					hue: "#ffff00"
				}, {
					lightness: -2
				}, {
					saturation: -97
				}]
			}]
		};
		var contentString = '<div id="mapcontent">' + '<p>Yup, we are here!</p></div>';
		var infowindow = new google.maps.InfoWindow({
			maxWidth: 320,
			content: contentString
		});
		var mapElement = document.getElementById('map');
		if(mapElement != null) {
			var map = new google.maps.Map(mapElement, mapOptions);
			var image = new google.maps.MarkerImage('images/pin.png', null, null, null, new google.maps.Size(50, 71))
			var myLatLng = new google.maps.LatLng(23.710551, 90.415643);
			var marker = new google.maps.Marker({
				position: myLatLng,
				map: map,
				icon: image,
				title: 'Code Cafe'
			});
			google.maps.event.addListener(marker, 'click', function () {
				infowindow.open(map, marker);
			});
		}
	}
	$(window).on('load', function () {
		/*
		portfolio load issue * added on v1.1
		*/
		$('.portfolio .filters.btn-group>.btn:first-child').trigger('click');
		$('.f-pro-in .home-container').height($(window).height() - $('.f-pro-container-inner').height() + 35);
		/*
		Fade out loader sniper when page load done
		*/
		$('._loader').fadeOut(500);
		/*
		parallax
		*/
		parallaxInit();

		function parallaxInit() {
			var parallaxEle = $('.parallax');
			var parallaxEleLength = parallaxEle.length;
			if(parallaxEleLength > 0) {
				for(var i = 0; i < parallaxEleLength; i++) {
					$(parallaxEle[i]).parallax("30%", 0.1);
				}
			}
		}
	});
})(jQuery);
