let phonenum = "";
let double_ch = 0;

let agree01 = false;
let agree02 = false;
let agree03 = false;

$(function(){

	let url = new URL(window.location.href);
    const urlParams = url.searchParams;
    phonenum =  urlParams.get('phonenum');


	$("#look_pwd").on('click',function(){
		$("#user_pwd").attr('type','text');
	});

	$("#btn_add").click(function(){
	
		var user_id   =                    $("#user_id").val()
		var user_pwd   =                   $("#user_pwd").val()
		var user_pwd_check   =                   $("#user_pwd_check").val()
		let kidname  =  $('#kidname').val()
		let kidbirth = $('#kidbirth').val()

		let pwdch = chkPW(user_pwd)
		console.log(pwdch)


		if(double_ch == 0){
			alert("email 중복 확인 해주세요.");
			$("#user_id").focus();
			return;
		}

		if(pwdch){
			$('#warning02').hide()
		}else{
			alert("비밀번호는 8자리 이상 영문, 숫자 조합해주세요.");
			$('#warning02').show()
			return;
		}

		if(user_pwd == user_pwd_check){
			$('#warning03').hide()
		}

		console.log(user_id)
		console.log(user_pwd)
		email_check(user_id)
		if(isBirthday(kidbirth)){

		}else{
			return;
		}
		// 유효성체크
		if(user_id == ""){
			alert("user_id 입력해주세요.");
			$("#user_id").focus();
			return;
		}else if(user_pwd == ""){
			alert("user_pwd 입력해주세요.");
			$("#user_pwd").focus();
			return;
		}else if(user_pwd != user_pwd_check){
			alert("비밀번호가 서로 다릅니다.");
			$("#user_pwd_check").focus();
			$('#warning03').show()
			return;

		}else if(kidname == ""){
			alert("아이의 이름을 입력해 주세요.");
			$("#kidname").focus();
			return;

		}else if(kidbirth.length != 7){
			alert("아이의 생일을 주민번호 7번째 자리까지 입력해 주세요.");
			$("#kidbirth").focus();
			return;

		}else if(!(kidbirth.substr(6,1)== 1 || kidbirth.substr(6,1)== 2||kidbirth.substr(6,1)== 3||kidbirth.substr(6,1)== 4)){
			alert("아이의 생일을 주민번호 7번째 자리까지 입력해 주세요.");
			$("#kidbirth").focus();
			return;

		}else if(!agree01){
			alert("서비스 이용약관을 동의해 주세요.");
			return;
		}else if(!agree02){
			alert("개인정보 처리방침을 동의해 주세요.");
			return;
		}else if(!agree03){
			alert("제 3자 개인정보 제공을 동의해 주세요.");
			return;
		}

		let kidgender = ""
		if(kidbirth.substr(6,1)== 1 ||kidbirth.substr(6,1)== 3){
			kidgender = "M"
		}else if(kidbirth.substr(6,1)== 2||kidbirth.substr(6,1)== 4){
			kidgender = "F"
		}

		let birth = ""
		if(kidbirth.substr(6,1)== 1 ||kidbirth.substr(6,1)== 2){
			birth = 19+kidbirth.substr(0,6)
		}else if(kidbirth.substr(6,1)== 3||kidbirth.substr(6,1)== 4){
			birth = 20+kidbirth.substr(0,6)
		}

		console.log("!@")
		$.ajax({
			url : "/user/add",
			data: {
				"user_id" : user_id,
				"user_pwd" : user_pwd,
				"user_phone" : phonenum,
				"kidname" : kidname,
				"kidbirth" : birth,
				"kidgender" : kidgender,
			},
			type: "POST",
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
	
			}
		});
	})


	$("#double_check").click(function(){
		
		console.log("12")
		var user_id   =                    $("#user_id").val()
		let emailck = email_check(user_id)
		console.log(emailck)
		var user_pwd   =                   $("#user_pwd").val()

		if(emailck){
			$('#warning01').hide();
			$.ajax({
				url : "/user/add?user_id="+ user_id,
				// data: {
				// 	"user_id" : user_id,
				// 	// "user_pwd" : user_pwd,
				// 	// "user_phone" : "00000000000",
				// },
				type: "GET",
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
					console.log(data)
					alert(data.resultString);

					if(data.resultString == "사용가능한 아이디입니다."){
						double_ch = 1
					}
		
				}
			});
		}else{
			alert("이메일 형식을 맞춰주세요")
			$('#warning01').show();
			return 
		}
		

		
	})

	$('#agreeAll').click(function(){
		let chk = $(this).is(":checked");

		console.log(chk)
		if(chk){
			$("input:checkbox[id='agree01']").prop("checked", true);
			$("input:checkbox[id='agree02']").prop("checked", true);
			$("input:checkbox[id='agree03']").prop("checked", true);
			
		}else{
			$("input:checkbox[id='agree01']").prop("checked", false);
			$("input:checkbox[id='agree02']").prop("checked", false);
			$("input:checkbox[id='agree03']").prop("checked", false);
		}
		
		agree01 = $("input:checkbox[id='agree01']").is(":checked")
		agree02 = $("input:checkbox[id='agree02']").is(":checked")
		agree03 = $("input:checkbox[id='agree03']").is(":checked")

	})

	$('#agree01, #agree02, #agree03').click(function(){
		let chk = $(this).is(":checked");

		agree01 = $("input:checkbox[id='agree01']").is(":checked")
		agree02 = $("input:checkbox[id='agree02']").is(":checked")
		agree03 = $("input:checkbox[id='agree03']").is(":checked")

		if(agree01 && agree02 && agree03){
			$("input:checkbox[id='agreeAll']").prop("checked", true);
		}else if(!chk){
			$("input:checkbox[id='agreeAll']").prop("checked", false);
		}

	})

	let pwdlook = false
	$('#pwdlook').click(function(){
		if(pwdlook){
			$('#user_pwd').attr("type", "password")
			pwdlook = false
		}else{
			$('#user_pwd').attr("type", "text")
			pwdlook = true
		}

	})

	
	

	
	


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




function email_check(email) {

	var reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
	// let emailch = reg.test(email)
	// if(!emailch){
	// 	alert("이메일 형식을 맞춰주세요")
	// 	return true;
	// }
	// console.log(reg.test(email))

	return reg.test(email);

}


function isBirthday(dateStr) { 

	let birth = ""
	console.log(dateStr)

	let gendernum = dateStr.substr(6,1)
	if(gendernum == 1 || gendernum == 2){
		birth = 19+dateStr.substr(0,6)
		console.log(birth)
	}else if(gendernum == 3 || gendernum == 4){
		birth = 20+dateStr.substr(0,6)
		console.log(birth)
	}

	var year = Number(birth.substr(0,4)); // 입력한 값의 0~4자리까지 (연) 
	var month = Number(birth.substr(4,2)); // 입력한 값의 4번째 자리부터 2자리 숫자 (월) 
	var day = Number(birth.substr(6,2)); // 입력한 값 6번째 자리부터 2자리 숫자 (일) 
	var today = new Date(); // 날짜 변수 선언 
	var yearNow = today.getFullYear(); // 올해 연도 가져옴 
	if (dateStr.length <=8) { // 연도의 경우 1900 보다 작거나 yearNow 보다 크다면 false를 반환합니다. 
		if (1900 > year || year > yearNow){ 
			alert("생년월일을 올바르게 입력해 주세요.");
			return false; 
		} 
		else if (month < 1 || month > 12) {alert("생년월일을 올바르게 입력해 주세요."); return false; } 
		else if (day < 1 || day > 31) {alert("생년월일을 올바르게 입력해 주세요."); return false; } 
		else if ((month==4 || month==6 || month==9 || month==11) && day==31) { alert("생년월일을 올바르게 입력해 주세요.");return false; } 
		else if (month == 2) { var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)); 
			if (day>29 || (day==29 && !isleap)) { alert("생년월일을 올바르게 입력해 주세요.");return false; } 
			else { return true; } //end of if (day>29 || (day==29 && !isleap)) 
		} else { return true; 
		}//end of if 
	} else {
		 //1.입력된 생년월일이 8자 초과할때 : auth:false 
		 alert("생년월일을 올바르게 입력해 주세요."); return false; } 
}

