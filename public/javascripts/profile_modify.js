let kidname_rownum = "";

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


    var url = new URL(window.location.href);
    const urlParams = url.searchParams;
    
    // URLSearchParams.get()
    var type =    urlParams.get('type');
    var kidname =    urlParams.get('kidname');
    console.log(kidname)

    new Date(20, 02, 0).getDate();
    console.log(new Date(20, 02, 0).getDate())
    if(type =='add'){
        $('#profile_Del').hide()
        console.log( $('#profile_type').text())
        $('#profile_type').text('프로필 추가')

        $('#btn_add').on("click",function(){
            console.log("123")
            console.log($("#btn_name").val())
            console.log($("#btn_birth").val())
            console.log($("#btn_gender :checked").val())
    
            btn_name = $("#btn_name").val()
            btn_birth = $("#btn_birth").val()
            btn_gender = $("#btn_gender :checked").val()
        
    
            // if(btn_name.length == 0){
            //     alert("이름을 입력해주세요.");
            //     $("#btn_name").focus();
            //     return;
            // }else if(btn_birth.substr(3,2) > 13 || btn_birth.substr(3,2) == 0 ){
            //     alert("생일을 올바르게 입력해주세요.");
            //     $("#btn_birth").focus();
            //     return;
            // }else if(btn_birth.substr(6,2) > 31 && (btn_birth.substr(3,2) == 01 || btn_birth.substr(3,2) == 03 || btn_birth.substr(3,2) == 05 || btn_birth.substr(3,2) == 07 || btn_birth.substr(3,2) == 08 || btn_birth.substr(3,2) == 10 || btn_birth.substr(3,2) == 12) ){
            //     alert("생일을 올바르게 입력해주세요.");
            //     $("#btn_birth").focus();
            //     return;
            // }else if(btn_birth.substr(6,2) > 31 && (btn_birth.substr(3,2) == 01 || btn_birth.substr(3,2) == 03 || btn_birth.substr(3,2) == 05 || btn_birth.substr(3,2) == 07 || btn_birth.substr(3,2) == 08 || btn_birth.substr(3,2) == 10 || btn_birth.substr(3,2) == 12) ){
            //     alert("생일을 올바르게 입력해주세요.");
            //     $("#btn_birth").focus();
            //     return;
            // }else if(btn_birth.substr(6,2) > 30 && (btn_birth.substr(3,2) == 04 || btn_birth.substr(3,2) == 06 || btn_birth.substr(3,2) == 09 || btn_birth.substr(3,2) == 11) ){
            //     alert("생일을 올바르게 입력해주세요.");
            //     $("#btn_birth").focus();
            //     return;
            // }else if(new Date(parseInt(btn_birth.substr(0,2)), parseInt(btn_birth.substr(3,2)), 0).getDate() < btn_birth.substr(6,2) ){
            //     alert("생일을 올바르게 입력해주세요.");
            //     $("#btn_birth").focus();
            //     return;
            // }
    
            // $.ajax({
            //     type: "POST",
            //     url: "/profile_modify/add",
            //     async : false,
            //     data:{
            //         kidname : $("#btn_name").val(),
            //         birthday : $("#btn_birth").val(),
            //         gender : $("#btn_gender :checked").val()
            //     },
            //     success : function(json) {
            //         data = json
            //         console.log(data)
            //         alert(json.resultString)
            //     },
            //     error: function(json){
            //         alert(json.resultString)
            //     }
            // });
        })
    }

    if(type=='edit'){
        console.log("dkdk")
        $.ajax({
            type: "get",
            url: "/main/currentuser/currentprofile?kidname="+kidname,
            async : false,
            success : function(json) {
                data = json
                console.log(data)
                $("#btn_name").val(data[0].kidname)
                var birthday = data[0].birthday

                $("#btn_birth").val(birthday.substr(2,2)+"."+birthday.substr(5,2)+"."+birthday.substr(8,2))

                if(data[0].gender == 'M'){
                    console.log("mmmm")
                    $('#gender_m').prop("checked", true)
                }else if(data[0].gender == 'W'){
                    console.log('ffff')
                    $('#gender_f').prop("checked", true)
                }
                kidname_rownum = data[0].rownum
                
            },
            error: function(json){
                alert("ztree data loading error")
            }
        });


        
    }

    

    
    $('#btn_add').on("click",function(){
        console.log("123")
        console.log($("#btn_name").val())
        console.log($("#btn_birth").val())
        console.log($("#btn_gender :checked").val())

        btn_name = $("#btn_name").val()
        btn_birth = $("#btn_birth").val()
        btn_gender = $("#btn_gender :checked").val()

        if(btn_birth.length == 6){
            $("#btn_birth").val(btn_birth.substr(0,2)+"."+btn_birth.substr(2,2)+"."+btn_birth.substr(4,2))
            btn_birth = $("#btn_birth").val()
        }

        if(btn_name.length == 0){
            alert("이름을 입력해주세요.");
            $("#btn_name").focus();
            return;
        }else if(btn_birth.substr(3,2) > 13 || btn_birth.substr(3,2) == 0 ){
            alert("생일을 올바르게 입력해주세요.");
            $("#btn_birth").focus();
            return;
        }else if(new Date(parseInt(btn_birth.substr(0,2)), parseInt(btn_birth.substr(3,2)), 0).getDate() < btn_birth.substr(6,2) ){
            alert("생일을 올바르게 입력해주세요.");
            $("#btn_birth").focus();
            return;
        }

        if(type=="edit"){
            $.ajax({
                type: "PUT",
                url: "/profile_modify/add",
                async : false,
                data:{
                    rownum : kidname_rownum,
                    kidname : $("#btn_name").val(),
                    birthday : $("#btn_birth").val(),
                    gender : $("#btn_gender :checked").val()
                },
                success : function(json) {
                    data = json
                    console.log(data)
                    alert(json.resultString)
                },
                error: function(json){
                    alert(json.resultString)
                }
            });
        }else if(type == 'add'){
            $.ajax({
                type: "POST",
                url: "/profile_modify/add",
                async : false,
                data:{
                    kidname : $("#btn_name").val(),
                    birthday : $("#btn_birth").val(),
                    gender : $("#btn_gender :checked").val()
                },
                success : function(json) {
                    data = json
                    console.log(data)
                    alert(json.resultString)
                },
                error: function(json){
                    alert(json.resultString)
                }
            });
        }

        
    })


    // 클릭 시 자동완성 리스트 꺼짐 
    $(document).click(function(e){ 
        if (!$(e.target).is('#btn_birth')) { //이벤트 
            var birth = $("#btn_birth").val()
            if(birth.length == 6) {
                $("#btn_birth").val(birth.substr(0,2)+"."+birth.substr(2,2)+"."+birth.substr(4,2))
            }
            
        }else{
            var birth = $("#btn_birth").val()
            if(birth.length == 8){
                $("#btn_birth").val(birth.substr(0,2)+birth.substr(3,2)+birth.substr(6,2))
            }
            
        }
           
    });

    // $("#btn_add").blur(function(){
    //     console.log("qw")
    //     var birth = $("#btn_birth").val()
    //     if(birth.length == 6) {
    //         $("#btn_birth").val(birth.substr(0,2)+"."+birth.substr(2,2)+"."+birth.substr(4,2))
    //     }
    // })

    

    $("#profile_Del").click(function(){
        console.log("12")
        $.ajax({
            type: "DELETE",
            url: "/profile_modify/add",
            async : false,
            data:{
                rownum : kidname_rownum,
                // kidname : $("#btn_name").val(),
                // birthday : $("#btn_birth").val(),
                // gender : $("#btn_gender :checked").val()
            },
            success : function(json) {
                data = json
                console.log(data)
                alert("삭제되었습니다.")
                location.href='mypage_info'
            },
            error: function(json){
                alert("수정 실패")
            }
        });

    })

    // $("#btn_birth").on("keyup", function() {
    //     console.log($('#btn_birth').val())
    //     $(this).val( $(this).val().replace(/[^0-9.]/gi,"") );
    // })



})

// function birthday(){
//     console.log("!@")
//     console.log($('#btn_birth').val())
//     let birth = $('#btn_birth').val()
//     // if(birth.substr)

//     $('#btn_birth').val($('#btn_birth').val().replace(/[^0-9.]/g, '').replace(/(\.*)\./g, '$1'));
//     if(birth.length==2){
//         $('#btn_birth').val(birth+".")
//     }

// }