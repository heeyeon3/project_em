
var current_user = "";
let scrollValue = "";

var x = 1;
var y = 0.1;
var z = 0.2;
var main_video = 0;
$(function(){

	console.log("!")

	// $(window).on('load', function(){
	// 	$(document).scrollTo(0,0);
	// });

	window.scrollTo(0,0);

	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
	
	if(isMobile) {
		//MOBILE
        $(window).scroll(function() {
			if ($(document).scrollTop() == 0) {
				$('#header').css({'backgroundColor': 'transparent'}).removeClass('fixed');
			}else {            
				$('#header').css({'backgroundColor': '#fff'}).addClass('fixed');
			}
   		});
		$('.bg_video video').attr('src','../images/video_main_mob.mp4');
	}


	// 스크롤 테스트
	const scrollElements = document.querySelectorAll(".js-scroll");
	const scroll_bgvideo = document.querySelectorAll(".bg_video");
	main_video = scroll_bgvideo[0].getBoundingClientRect().bottom * 2;

	const elementInView = (el, dividend = 1) => {
		const elementTop = el.getBoundingClientRect().top;
		return (
			elementTop+200 <= (window.innerHeight || document.documentElement.clientHeight) / dividend
		);
	};

	const elementOutofView = (el) => {
		const elementTop = el.getBoundingClientRect().top;

		return (
			elementTop > (window.innerHeight || document.documentElement.clientHeight)
		);
	};


	const displayScrollElement = (element) => {
		element.classList.add("scrolled");
	};

	const hideScrollElement = (element) => {

		element.classList.remove("scrolled");
	};


	const headerCheck = (el, dividend=1) => {
		const elementTop = el.getBoundingClientRect().bottom;
		return (
			elementTop <= 90
			// elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
		);
	};

	const headerChangeColor = (el, dividend=1) => {
		$("#header").css("background-color", 'white');
	};


	const handleScrollAnimation = () => {
		scrollElements.forEach((el) => {
			if (elementInView(el)) {
				displayScrollElement(el);
			} else if (elementOutofView(el)) {
				hideScrollElement(el)
			} 
		})
	}

	
	const scrollVideo = () => {
		scroll_bgvideo.forEach((el) => {
			console.log(headerCheck(el))
			if (headerCheck(el)){
				$("#header").addClass("header_white");
				$("#user_set").attr("src", "./images/user_set.png");
				$('#header').attr("style","background-color:#FFFFFF !important;")

			} else if(!headerCheck(el)){
				$("#header").removeClass("header_white");
				$("#user_set").attr("src", "./images/user_set02.png");
				$('#header').attr("style","background-color: transparent")
			}	
		})
	}


	window.addEventListener("scroll", (e) => { 
		$("#header").removeClass("fixed");
		handleScrollAnimation();
		scrollVideo();
	});

})

