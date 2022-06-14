// JavaScript Document
$(document).ready(function () {
	var $table = $('table#table1');
	var $tableBody = $table.find('tbody');
	var $tableTr = $tableBody.find('tr');
	var depth1Str = undefined;
	var depth1Seq = undefined;
	var depth2Str = undefined;
	var depth2Seq = undefined;

	var menuObj = {};
	
	// 넘버링을 위한 태그 추가 
	$table.find('colgroup').prepend('<col style="width:50px" />');
	$table.find('thead').find('tr').eq(0).prepend('<th scope="col">No</th>');
	
	// 대메뉴 메뉴 데이터 생성
	$tableTr.each(function (idx) {
		// 넘버링
		$(this).prepend('<td class="no">'+ (idx + 1)+ '</td>');
	});

	
});


$(function($){

	
	var noneNum = $('#table1 .none').length;
	var ingNum = $('#table1 .ing').length;
	var doneNum = $('#table1 .done').length + noneNum ;
	var editNum = $('#table1 .edit').length;
	var totalNum = ingNum + doneNum ;
	
	$('.siteInfo .total').text(totalNum);
	$('.siteInfo .none').text(noneNum);
	$('.siteInfo .ing').text(ingNum);
	$('.siteInfo .done').text(doneNum);
	$('.siteInfo .edit').text(editNum);
	
	$('#noneRate').text(Math.round(((noneNum/totalNum)*100)) + '%'); 
	$('#ingRate').text(Math.round(((ingNum/totalNum)*100)) + '%'); 
	$('#doneRate').text(Math.round(((doneNum/totalNum)*100)) + '%'); 
	$('#editRate').text(Math.round(((editNum/totalNum)*100)) + '%');
	
	//논리적인 탭 세팅 부분
	/*$('#tabCont1, #tabCont2, #tabCont3').css('display','none');
	
	tabSetting();
	function tabSetting(){
		$('.tabDepth1 li').each(function(){
			var clickHref = $(this).find('a').attr("href");
			
			if($(this).hasClass('on') == true){
				$('' + clickHref + '').show();
			}else{
				$('' + clickHref + '').hide();
			}
		});
	}
	
	$('.tabDepth1 li').find('a').click(function() {
		$('.tabDepth1 li').removeClass('on');
		$(this).parent().addClass('on');
		tabSetting();
		return false;
	});*/

	
	
	$('.notice li').append('<span class="bul"></span>');


	// to top
	var scrollDiv = document.createElement('div');
	$(scrollDiv).attr('id', 'toTop').html('<a href="#nohref">↑ 처음으로 이동</a>').appendTo('body');    
	$(window).scroll(function(){
		if ($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function(){
		$('body,html').animate({scrollTop: 0}, 'fast');
		return false;
	});

});