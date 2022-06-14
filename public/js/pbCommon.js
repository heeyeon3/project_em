jQuery(function($){

	//하단 스크립트는 uI확인을 위해 임시로 해놓은것 입니다. 개발자분께서 다시 작성하세요~

	containerComHSet();	
	function containerComHSet(){
		var bodyW = $(window).width();
		var bodyH = $(window).height();
		var headerH = $('#header').outerHeight();
		var footerH = $('#footer').outerHeight();
		var containerH = $('#container').outerHeight();		
		var containerSetH = bodyH-headerH-footerH;
		/*alert("bodyH : " + bodyH);
		alert("headerH : " + headerH);
		alert("footerH : " + footerH);
		alert("containerH : " +containerH);
		alert("containerSetH : " +containerSetH);*/
		if (containerH >= containerSetH ) {
			//$('#container').css('height','');
			$('#footer').removeClass('fixed');	
		}else if(containerH < containerSetH) {
			//$('#container').css('height',containerSetH);	
			$('#footer').addClass('fixed');			
		}
	}		
	$( window ).on( 'resize', function( ) { 
			
	});	


	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

		
	if(isMobile) {
		$("#menulist").hide();
		//content 클래스를 가진 div를 표시/숨김(토글)
		$("#menuhead").click(function()
		{	console.log("!2")
			$(this).next("#menulist").slideToggle(500);
			$("i", this).toggleClass("fa-chevron-down fa-chevron-up");
		});
		//MOBILE

		if($('.sub_menu').length){
			
			//상대적인 좌표 값을 반환, .offset()가 반환 하는 객체는 left와 top 속성을 제공
			//top 속성을 이용해서 메뉴의 수직 위치를 구함
			var menu_offset = $('.sub_menu').offset();
	
			//스크롤 바를 스크롤할 때 매개변수로 전달된 함수를 실행시킴
			$(window).scroll(function() {
				//문서의 스크롤바 위치와 메뉴의 수직 위치를 비교해서 
				//문서의 스크롤바 위치가 메뉴의 수직 위치보다 크면(위치로 표현하면 아래)
				if ($(document).scrollTop()+64 > menu_offset.top) {
					//메뉴에 menu-fixed 클래스를 추가해서 메뉴를 고정시킴
					$('.sub_menu').addClass('fixed');
					$('#content').css({'padding': '74px 16px 48px'});
				}else {
					//메뉴에서 menu-fized 클래스를 제거해서 메뉴를 수직으로 이동할 수 있도록 처리함
					$('.sub_menu').removeClass('fixed');
					$('#content').css({'padding': '20px 16px 48px'});
				}
			});
			
		}	
		$('#container').css("padding-top",'0');

	} else {
		//PC
		// 스크롤바 디자인
		if($('.scrollbar-dynamic').length){
			$('.scrollbar-dynamic').scrollbar();
		}

		// 모바일일때 h1 메인페이지로 이동
		$('.header_tit h1').on('click', function () {
			window.location.href = "/"
		});
	}

	// select 디자인
	/*if($('select').length){
		$('select').selectric();
	}*/	

	//상단 로그인 버튼 클릭
	// $(document).on('click', '.header_tit .btn_login', function() {		
	// 	$('.profile_sel').addClass('on');
	// 	$(this).addClass('off');	
	// });

	//프로필버튼 클릭시 하단 메뉴 보이기 - 2022.03월 수정됨
	$(document).on('click', '#btnProfileSel', function() {
		if($(this).hasClass('on') == true){
			$(this).removeClass('on');
			$('.profile_menu').hide();
		}else{ 
			$(this).addClass('on');
			$('.profile_menu').show();
		} 
	});

	//프로필의 로그아웃 버튼 클릭시
	$(document).on('click', '#btnProfile', function() {	
		$('.profile_menu').hide();
	});

	//프로필의 로그아웃 버튼 클릭시
	$(document).on('click', '#btnLogout', function() {		
		$('.btn_login').removeClass('off');
		$('.profile_sel').removeClass('on');
		$('.profile_menu').hide();
	});

	//모바일 왼쪽 메뉴에서 로그인 버튼 클릭
	$(document).on('click', '.user_logout .btn_login', function() {		
		$('.user_info .user_logout').addClass('off');
		$('.user_info .user_login').addClass('on');
		$('.menu_wrap .menu_logout').addClass('on');
	});

	//왼쪽 메뉴 열기	
	$(document).on('click', '.btn_menu_open', function() {		
		//$('.menu_wrap').addClass('open');
		$('.menu_wrap').animate({'left':'0' }, 300);		
	});

	//왼쪽 메뉴 닫기
	$(document).on('click', '.btn_menu_close', function() {		
		//$('.menu_wrap').removeClass('open');
		$('.menu_wrap').animate({'left':'-100%' }, 300);		
	});
	
	//2022.01.26 추가	
	$(document).on('click', '.sel_language button.off', function() {
		var languageOnText = $('.sel_language button.on').text();
		var languageOffText = $('.sel_language button.off').text();	
		$('.sel_language button.on').text(languageOffText);
		$('.sel_language button.off').text(languageOnText);	
	});

	// 레이어 팝업창 X 버튼으로 닫기
	$(document).on('click', '.btn_pop_close', function() {	
		var hidePopupID = $(this).data('hideId');
		$('#'+hidePopupID+'').hide();
		$('body').removeClass('overflow_none');
	});
	// aler 창 아니오 버튼으로 닫기
	$(document).on('click', '.btn_pop_cancel', function() {		
		var hidePopupID = $(this).data('hideId');
		$('#'+hidePopupID+'').hide();
		$('body').removeClass('overflow_none');
	});	

	// input focus add
	$('input[type=text], select').focus(function () {
		$(this).addClass('focus');
	});

	// input focus remove
	$('input[type=text], select').blur(function () {
		$(this).removeClass('focus');
	});


	

	loginprofile()


	
});
//jquery end

//레이어 팝업 띄우기
function openLayerPopup(targetID){
	$('#'+targetID+'').show();
	$('body').addClass('overflow_none');
}

//레이어 팝업의 취소 버튼 클릭하여 팝업창 닫기	
function closeLayerPopup(targetID){
	$('#'+targetID+'').hide();
	$('body').removeClass('overflow_none');
}	


function loginprofile(){
	var current_user = "";
	$.ajax({
		type: "get",
		url: "/main/currenuser",
		async : false,
		success : function(data) {
			console.log(data)
			current_user = data
		},
		error: function(json){
			alert("조회 오류")
		}
	});

	if(current_user){
		$('.profile_sel').addClass('on');
		$('.btn_login').addClass('off');

		// 모바일 로그인시 왼쪽메뉴 처리
		$('.user_info .user_logout').addClass('off');
		$('.user_info .user_login').addClass('on');	
		$('.profile_menu .user_login strong').text(current_user);	
		$('.user_login.on strong').text(current_user);	

	}
	else{
		$('.profile_sel').removeClass('on')
		$('.btn_login').removeClass('off')
		$('.user_info .user_logout').addClass('on');
		$('.user_info .user_login').addClass('off');
		$('.profile_menu .user_login strong').text('');	
	}
}


var logout = function(){

    var form_data = $('#frmLogin').serialize();


    $.ajax({
          url : '/login/logout',
          data:form_data,
          type: 'post',
          contentType: false,
          processData: false,
          error:function(){
             alert("서버 응답이 없습니다. 서버 확인후 다시 시도해 주세요.");
          },
          success:function(data) {

             alert(data.resultString)
             location.href="/";
         }
    });
}



let privacypolicy = function(){
	window.location.href ="/privacypolicy"
}

let terms = function(){
	window.location.href ="/terms"
}


function historyago(){
	console.log("1")
	history.go(-1)
}

function buyselalret(){
	alert("서비스 준비 중 입니다.")
	// window.location.href = '/buy_sel'
}

