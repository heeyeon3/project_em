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


	//현재비밀번호 input DELETE BTN
	$("#btn_input_delete01").on("click", function(){
		$("#now_pwd").val('');
	});

	//새비밀번호 input DELETE BTN
	$("#btn_input_delete02").on("click", function(){
		$("#new_pwd").val('');
	});

	//새비밀번호 체크 input DELETE BTN
	$("#btn_input_delete03").on("click", function(){
		$("#new_pwd_check").val('');
	});

	$("#change_pwd").on("click", function(){
		$("#warning01").hide();
		$("#warning02").hide();
		$("#warning03").hide();
		
		var is_error = false;

		var now_pwd = $("#now_pwd").val();
		var new_pwd = $("#new_pwd").val();
		var new_pwd_check = $("#new_pwd_check").val();

		let chkPW = chkPW(new_pwd)

		if(pwdch){
			$('#warning02').hide()
		}else{
			alert("비밀번호는 8자리 이상 영문, 숫자 조합해주세요.");
			$('#warning02').show()
			return;
		}


		if(now_pwd == ""){
			$("#warning01").show();
			is_error = true;
		} 
		if(new_pwd == ""){
			$("#warning02").show();
			is_error = true;
		}
		if(new_pwd_check == ""){
			$("#warning03").show();
			is_error = true;
		}

		if(new_pwd != new_pwd_check){
			$("#warning03").show();
			is_error = true;
		};
		
		if(is_error){
			console.log("IS ERROR!!");
			return;
		}

		$.ajax({
			url : "/user/add",
			data: {
				"user_pwd" : now_pwd,
				"new_pwd"  : new_pwd,
				
			},
			type: "put",
			async : false,
			// contentType: false,
			// processData: false,
			beforeSend: function() {
	
			},
			error:function(error){
				alert(error.resultString);
				console.log(error.resultString)
	
			},
			success:function(data) {
				alert(data.resultString);
				if(data.resultCode == 0){
					$("#warning01").show();
				}
	
			}
		});
	});
});




function chkPW(pwd){

	var pw = pwd;
	var num = pw.search(/[0-9]/g);
	var eng = pw.search(/[a-z]/ig);
	var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
   
	if(pw.length < 8){
   
	//  alert("8자리 ~ 20자리 이내로 입력해주세요.");
	 return false;
	}else if(pw.search(/\s/) != -1){
	//  alert("비밀번호는 공백 없이 입력해주세요.");
	 return false;
	}else if(num < 0 || eng < 0  ){
	//  alert("영문,숫자, 특수문자를 혼합하여 입력해주세요.");
	 return false;
	}else {
	   console.log("통과"); 
	   return true;
	}
   
   }