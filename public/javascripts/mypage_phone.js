var code_timer;

$(function(){

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

    if(current_user == ""){
		alert("로그인을 해주세요")
        window.location.href = "/login"
    }



	// 핸드폰번호 input DELETE BTN
	$("#delete_phone").on("click", function(){
		$("#input_phone").val('');
	});

	// 인증번호전송 버튼
	$("#btn_send_code").on("click", function(){
		$("#code_resend").show();
		$("#btn_send_code").hide();
		$("#btn_check_code").show();
		$("#code_input_wrap").show();
		var time = 180;

		code_timer = setInterval(function(){	

			var min = parseInt(time/60);
			var sec = time%60;
	
			var tm = min;
			var ts = sec;

			if(ts < 10){
			ts = "0" + sec;
			}
			
			$("#code_timeSec").text(ts);
			$("#code_timeMin").text(tm);

			time--;

			if(time < 0){
				clearInterval(code_timer);
				alert("시간이 초과되었습니다. 다시 시도해주세요.");
				$("#btn_send_code").show();
				$("#btn_check_code").hide();
				$("#code_input_wrap").hide();
			}
		}, 1000);
	});
});

function editpwdpage(){
	window.location.href="/mypage_pw"
}