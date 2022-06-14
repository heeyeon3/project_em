$(function(){


    $("#user_id").on("focus", function(){
        $("#user_id").attr('style', 'border-bottom : 1px solid #5079F3;')
    })
    $("#user_id").on("blur", function(){
        $("#user_id").attr('style', '')
    })
    $("#user_pwd").on("focus", function(){
        $("#user_pwd").attr('style', 'border-bottom : 1px solid #5079F3;')
    })

    $("#user_pwd").on("blur", function(){
        $("#user_pwd").attr('style', '')
    })


});








var login = function(){

    var remember = $("#remember").is(":checked");
    var user_id = $("#user_id").val();
    var user_pwd = $("#user_pwd").val();
    console.log(user_id)
    if(user_id.trim() == ""){
       alert("아이디를 입력하세요");
       $("#user_id").focus();
       return;
    }

    if(user_pwd.trim() == ""){
       alert("패스워드를 입력하세요");
       $("#user_pwd").focus();
       return;
    }

//    var form_data = new FormData($('#frmLogin')[0]);
   var form_data = $('#frmLogin').serialize();
   console.log(form_data)
//    for (var pair of form_data.entries()) {
//     // 예외처리 진행
//     console.log(pair[0]+ ', ' + pair[1]);
//    }
   $.ajax({
         url : '/login/in',
         data:form_data,
        //  data:{user_id : user_id,
        //     user_pwd : user_pwd
        // },
         type: 'post',
        //  contentType: false,
        //  processData: false,
         success:function(data) {

            console.log(data);
            // alert(data);
           if(data.resultCode == "0"){

               location.href=data.next_url;

            //    if(remember){
            //    localStorage.setItem("user_id",user_id);
            //    }else{
            //    localStorage.removeItem("user_id");
            //    }
            //    document.cookie=("fold=Y");
           }else if(data.resultCode == "100"){
               alert(data.resultString)
            //    location.href=data.next_url;
           }else{
               alert(data.resultString);
            //    $("#warning01").show();
            //    $("#user_id").attr('style', 'border-bottom : 1px solid #EF5C5C;')
            //    $("#user_pwd").attr('style', 'border-bottom : 1px solid #EF5C5C;')
            //    if(data.resultCode == "101")
            //    {
            //      $("#modalInsert").modal('show');
            //    }
           }
       }
   });
}


// var logout = function(){

//     var form_data = $('#frmLogin').serialize();


//     $.ajax({
//           url : '/login/logout',
//           data:form_data,
//           type: 'post',
//           contentType: false,
//           processData: false,
//           error:function(){
//              alert("서버 응답이 없습니다. 서버 확인후 다시 시도해 주세요.");
//           },
//           success:function(data) {

//              alert(data.resultString)
//              location.href="/";
//          }
//     });
// }