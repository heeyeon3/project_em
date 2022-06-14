let newslist = [];
let btn_click = 0

$(function(){

    
    // <li>
    //     <a href="#none">
    //         <div class="news_img"><img src="./images/@news_sum01.png" alt="" class=""></div>
    //         <div class="news_conts">
    //             <span class="date">2021.09.10</span>
    //             <strong class="tit">이모티브, ITS 2021서 아동 ADHD 위한 디지털 치료제 ‘Star Ruckus’ 소개 나선다</strong>								
    //         </div>						
    //     </a>					
    // </li>

    // let news = "<li>"
    // news += "    <a href='#none'>"
    // news += "        <div class='news_img'><img src='./images/@news_sum01.png'></div>"
    // news += "         <div class='news_conts'>"
    // news += "             <span class='date'>2021.09.10</span>"
    // news += "             <strong class='tit'>이모티브, ITS 2021서 아동 ADHD 위한 디지털 치료제 ‘Star Ruckus’ 소개 나선다</strong>"
    // news += "         </div>"
    // news += "      </a>"
    // news += "</li>"

    // $("#news_list").append(news)

    $.ajax({
        url : "/company_news/newslist",
        type: "get",
        async : false,
        // contentType: false,
        // processData: false,
        beforeSend: function() {

        },
        error:function(error){
            alert(error.resultString);
            console.log(error.resultString)

        },
        success:function(json) {
           console.log(json.data)

           newslist = json.data
        //    console.log(newslist[0].news_img)

           

        }
    });

    // news_more()

    // btn_click = 0
})

function news_more(){

    // console.log(btn_click)
    let more_length = parseInt(newslist.length/4)

    // console.log(more_length)

    for(let i = 0; i < 4 ; i++){
        // console.log(i+btn_click*4)
        if(i+btn_click*4 < newslist.length){
            console.log(i+btn_click*4)
            let news_len = i+btn_click*4
            let newsdate = newslist[news_len].news_date
            // newsdate.substr(0,4)+"."+newsdate.substr(5,2)+"."+newsdate.substr(8,2)
            let news = "<li>"
            // news += "    <button type='button' class='btn_company_delete' id='btn_company_delete_"+news_len+"' value ="+news_len+" onclick ='btn_delete("+newslist[news_len].rownum+")'>삭제</button>"
            news += "    <a href='#none'>"
            news += "        <div class='news_img'><img src='"+newslist[news_len].news_img+"'></div>"
            news += "         <div class='news_conts'>"
            news += "             <span class='date'>"+newsdate.substr(0,4)+"."+newsdate.substr(5,2)+"."+newsdate.substr(8,2)+"</span>"
            news += "             <strong class='tit'>"+newslist[news_len].news_title+"</strong>"
            news += "         </div>"
            news += "      </a>"
            news += "</li>"

            $("#news_list").append(news)
            
        }

        if(i+btn_click*4 >=newslist.length-1){
            $('#btn_company').hide()
        }

        // $(".btn_company_delete").hide()

    }


    btn_click += 1
}

function btn_delete(value){
    
    // $(this).attr(id)

    let news_seq = value

    console.log("news_seq",news_seq)

    $.ajax({
        url : "/company_news/newslist",
        type: "delete",
        async : false,
        data:{
            rownum : news_seq
        },
        // contentType: false,
        // processData: false,
        beforeSend: function() {

        },
        error:function(error){
            alert(error.resultString);
            console.log(error.resultString)

        },
        success:function(json) {
           console.log(json.resultString)
           alert(json.resultString)
           location.href='company_news'

           
    

           

        }
    });


}