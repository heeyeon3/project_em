var current_user = "";
let profile_id = "";
let profile_id_kidname = "";
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

	$('#current_user').text(current_user)
	$('#current_email').text(current_user+"@emotiv.com")


	$.ajax({
		type: "get",
		url: "/main/currentuser_profile",
		async : false,
		success : function(json) {
			data = json
			console.log(data)
			// alert("성공")
			for(let i=0; i < data.length; i++){
				$('#mypage_info_profile').append("<button type='button' class='btn_profile active'><img src='./images/@profile01.png'><span>"+data[i].kidname+"</span></button>")
				$('#conts_profile_edit').append("<button type='button' class='btn_profile' id='edit_profile"+i+"'><img src='./images/@profile01.png'><span>"+data[i].kidname+"</span></button>")
			}
			if(data.length < 3){
				$('#mypage_info_profile').append("<button type='button' class='btn_profile add'><img src='./images/ico_profile_add.png'  onclick="+"location.href='/profile_modify?type=add'"+"><span>추가하기</span></button>")
				$('#conts_profile_edit').append("<button type='button' class='btn_profile add'><img src='./images/ico_profile_add.png'  onclick="+"location.href='/profile_modify?type=add'"+"><span>추가하기</span></button>")
			}
			
			
		},
		error: function(json){
			alert("ztree data loading error")
		}
	});

	$(".btn_profile").on("mouseover", function(){
		var id1 = $(this).attr("id")
		console.log(id1)
		$("#"+id1).addClass('modify')
	})

	$(".btn_profile").on("mouseleave", function(){
		var id1 = $(this).attr("id")
		console.log(id1)
		$("#"+id1).removeClass('modify')
	})

	$(".btn_profile").on("click", function(){
		for(let i=0; i<3; i++){
			$("#edit_profile"+i).removeClass('click')
		}
		profile_id = $(this).attr("id")
		profile_id_kidname = $("#"+profile_id+" span").text()
		// console.log($(this).attr("span").text())
		console.log($("#"+profile_id+" span").text())
		console.log(profile_id)
		$("#"+profile_id).addClass('click')
	})

	$("#popup_close").on("click", function(){
		for(let i=0; i<3; i++){
			$("#edit_profile"+i).removeClass('click')
		}
	})


})


function profile_edit(){
    
    console.log(profile_id_kidname)
	window.location.href = "profile_modify?type=edit&kidname="+profile_id_kidname;
    
    
}