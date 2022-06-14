
var current_user = "";
let scrollValue = "";

var x = 1;
var y = 0.1;
var z = 0.2;

$(function(){


    // $('#image_3d_0').show();
    // $(window).scroll(function () { 
    //     scrollValue = $(document).scrollTop(); 
    //     console.log(scrollValue); 
        
    //     scroll_range(1500);
    //     $('#image_3d_0').attr("style","background-image:'../'");
    // });
    white_mode();
    $('#image_3d_0').show();
    // $(window).scroll(function () { 
    // 	scrollValue = $(document).scrollTop(); 
    // 	console.log(scrollValue); 
        
    // 	scroll_range(1500);
    // 	$('#image_3d_0').attr("style","background-image:'../'");
    // });

	
		
	// KAKAO MAP 시점 잡기
	window.onload = function(){
		kakaomap();
	}
})

function kakaomap(){
	// kakaomap
	var mapContainer = document.getElementById('map'), // 지도의 중심좌표
    mapOption = { 
        center: new kakao.maps.LatLng(37.5072599174579, 127.06128445714869), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    }; 
	
	var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

	// 지도에 마커를 표시합니다 
	var marker = new kakao.maps.Marker({
		map: map, 
		position: new kakao.maps.LatLng(37.5072599174579, 127.06128445714869)
	});

	// 커스텀 오버레이에 표시할 컨텐츠 입니다
	// 커스텀 오버레이는 아래와 같이 사용자가 자유롭게 컨텐츠를 구성하고 이벤트를 제어할 수 있기 때문에
	// 별도의 이벤트 메소드를 제공하지 않습니다 
	var content = '<div class="wrap">' + 
				'    <div class="info">' + 
				'        <div class="title">' + 
				'            EMOTIV' + 
				'            <div class="close" id="close_overlay" title="닫기"></div>' + 
				'        </div>' + 
				'            <div class="desc">' + 
				'                <div class="ellipsis">서울특별시 강남구 테헤란로92길 11</div>' + 
				'                <div class="jibun ellipsis">(지번)서울 강남구 대치동 945-28</div>' + 
				'                <div><button type="button" class="btn_direction" id="findroad">길찾기</button></div>' + 
				'            </div>' + 
				'    </div>' +    
				'</div>';

	// 마커 위에 커스텀오버레이를 표시합니다
	// 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
	var overlay = new kakao.maps.CustomOverlay({
		content: content,
		map: map,
		position: marker.getPosition()       
	});

	// 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
	kakao.maps.event.addListener(marker, 'click', function() {
		overlay.setMap(map);
	});

	// 맵 오버레이 닫기
	$("#close_overlay").on('click', function(){
		overlay.setMap(null);
	})

	// 길찾기 클릭시 카카오 맵으로 연결
	$("#findroad").on('click', function(){
		window.open("https://map.kakao.com/link/to/이모티브,37.5072599174579,127.06128445714869")
	})
}


function image_3d_hide(){
	for(let i = 0; i<61; i++ ){
		$("#image_3d_"+i).hide()
		$("#image_3d_"+i).removeClass('fixinner')
	}
	
}

function scroll_range(scsroll_range_int){
	var scsroll_range_int = scsroll_range_int
	var scsroll_range_int31 = scsroll_range_int/61
	for(var i=0; i< 61; i++ ){
		if(scsroll_range_int31*(i+1) >= scrollValue && scrollValue > scsroll_range_int31*i){
			image_3d_hide();
			// $('#image_3d_0').attr("style","background-image:'../main3/main300"+i+"'")
			$("#image_3d_"+i).show();
			$("#image_3d_"+i).addClass('fixinner');

			dark_mode();
		}
	}

	if(scrollValue >scsroll_range_int){
		image_3d_hide();
		$('#image_3d_59').removeClass('fixinner')
		$('#image_3d_59').show()
		white_mode();
	}
}

function dark_mode(){
	$("#header").attr('style','background : #232323;');
	$("li a").attr({
		style : 'color : #f3f3f3;'
	});
	$("#header_h1").attr("style","background-image:url('../images/img_logo_wht.png');");
	$("#btnProfileSel").attr("style","background-image: url(../images/btn_arrow_down_wht.png);");
}

function white_mode(){
	$("#header").attr('style','');
	$("li a").attr({
		style : 'color : #101010;'
	});
	$("#header_h1").attr("style","background-image:url('../images/img_logo.png');");
	$("#btnProfileSel").attr("style","background-image: url(../images/btn_arrow_down.png);");

}





