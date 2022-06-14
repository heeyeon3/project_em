$(function(){
    $("#btn_add").click(function(){

        var user_id   =                    $("#user_id").val()
        var user_pwd   =                   $("#user_pwd").val()
       
        // 유효성체크
        if(user_id == ""){
            alert("user_id 입력해주세요.");
            $("#user_id").focus();
            return;
        }else if(user_pwd == ""){
            alert("user_pwd 입력해주세요.");
            $("#user_pwd").focus();
            return;
        }
        
        $.ajax({
            url : "/user/add",
            data: {
                "user_id" : user_id,
                "user_pwd" : user_pwd,
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
})