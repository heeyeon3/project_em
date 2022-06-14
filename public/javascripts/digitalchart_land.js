var user_name;
var phoneNum;

$(function(){
    console.log("!!")

    // URLSearchParams 객체
    var url = new URL(window.location.href);
    const urlParams = url.searchParams;

    // URLSearchParams.get()
    user_name =      urlParams.get('name');
    phoneNum =     urlParams.get('phoneNum');

    

    let data01 = {
        "success": true,
        "chartList": {
        "assessList": {
            "age": 4,
            "attention": 74.31285764600347,
            "processSpeed": 56.13636363636364,
            "workingMemory": 67.47222222222223,
            "flexibility": 85.95448852115207,
            "totalTime": 342.614
         },
         "index": {
            "AttentionIndex": 10,
            "workingMemoryIndex": 9,
            "ProcessingSpeedIndex": 8,
            "flexibilityIndex": 10
                   },
                  "avgList": {
            "workingMemoryAvg": 69.51495454545456,
            "attentionAvg": 72.00184545454546,
            "flexibilityAvg": 69.50961818181818,
            "processSpeedAvg": 64.22178181818181
                   },
                  "normalization": {
            "grade": {
                     "attGrade": 4,
                     "workingGrade": 3,
                     "psGrade": 2,
                                    "flexibilityGrade": 4
            },
            "score": {
                     "CalcATTNorScore": 37.47330956729713,
                      "CalcWMNorScore": 83.7310953754699,
                                    "CalcPSNorScore": 79.24242424242426,
                         "CalcFlexNorScore": 44.04178693686083
            }
                   }
        }
    }

   

    // let send_data = { “phoneNum” : “01022222222”,“name” : “박서준”}

    let send_data = {"phoneNum" : phoneNum, "name": user_name}

    $.ajax({
        type: "POST",
        url: "http://3.36.135.103:3002/assesssave",
        async : false,
        data: JSON.stringify(send_data),
        contentType : "application/json",
        dataType: 'JSON',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        success : function(json) {
            console.log(json)
            console.log(json["chartList"]);

            let data = json["chartList"]

            let age = data["assessList"]["age"]
            let attention = data["assessList"]["attention"]
            let processSpeed = data["assessList"]["processSpeed"]
            let workingMemory = data["assessList"]["workingMemory"]
            let flexibility = data["assessList"]["flexibility"]

            let attentionAvg = data["avgList"]["attentionAvg"]
            let flexibilityAvg = data["avgList"]["flexibilityAvg"]
            let processSpeedAvg = data["avgList"]["processSpeedAvg"]
            let workingMemoryAvg = data["avgList"]["workingMemoryAvg"]

            let attGrade = data["normalization"]["grade"]["attGrade"]
            let flexibilityGrade = data["normalization"]["grade"]["flexibilityGrade"]
            let psGrade = data["normalization"]["grade"]["psGrade"]
            let workingGrade = data["normalization"]["grade"]["workingGrade"]

            let CalcATTNorScore = data["normalization"]["score"]["CalcATTNorScore"]
            let CalcFlexNorScore = data["normalization"]["score"]["CalcFlexNorScore"]
            let CalcPSNorScore = data["normalization"]["score"]["CalcPSNorScore"]
            let CalcWMNorScore = data["normalization"]["score"]["CalcWMNorScore"]

            $('#avgage').text(age+"세 평균")

            $('#flexibilityAvg').text("평균"+flexibilityAvg.toFixed(2))
            let reflexibilityAvg = 0.96*flexibilityAvg+2
            $('#flexibilityAvg').attr("style","left:"+reflexibilityAvg+"%")

            $('#processSpeedAvg').text("평균"+processSpeedAvg.toFixed(2))
            let reprocessSpeedAvg = 0.96*processSpeedAvg+2
            $('#processSpeedAvg').attr("style","left:"+reprocessSpeedAvg+"%")

            $('#workingMemoryAvg').text("평균"+workingMemoryAvg.toFixed(2))
            let reworkingMemoryAvg = 0.96*workingMemoryAvg+2
            $('#workingMemoryAvg').attr("style","left:"+reworkingMemoryAvg+"%")

            $('#attentionAvg').text("평균"+attentionAvg.toFixed(2))
            let reattentionAvg = 0.96*attentionAvg+2
            $('#attentionAvg').attr("style","left:"+reattentionAvg+"%")
           
            if(flexibilityGrade==1){
                let startvalue = 16.6 * 0
                let totalgrade = 0.166*CalcFlexNorScore
                let ariavalue = startvalue +totalgrade
                $('#flexibility').attr("aria-value", ariavalue) 
                barMarkSet();
                
            }else if(flexibilityGrade==2){
                let startvalue = 16.6 * 1
                let totalgrade = 0.166*CalcFlexNorScore
                let ariavalue = startvalue +totalgrade
                $('#flexibility').attr("aria-value", ariavalue) 
                barMarkSet();

            }else if(flexibilityGrade==3){
                let startvalue = 16.6 * 2
                let totalgrade = 0.166*CalcFlexNorScore
                let ariavalue = startvalue +totalgrade
                $('#flexibility').attr("aria-value", ariavalue) 
                barMarkSet();
                
            }else if(flexibilityGrade==4){
                let startvalue = 16.6 * 3
                let totalgrade = 0.166*CalcFlexNorScore
                let ariavalue = startvalue +totalgrade
                console.log(totalgrade)

                $('#flexibility').attr("aria-value", ariavalue) 
                barMarkSet();
                
            }else if(flexibilityGrade==5){
                let startvalue = 16.6 * 4
                let totalgrade = 0.166*CalcFlexNorScore
                let ariavalue = startvalue +totalgrade
                $('#flexibility').attr("aria-value", ariavalue) 
                barMarkSet();
                
            }else if(flexibilityGrade==6){
                let startvalue = 16.6 * 5
                let totalgrade = 0.166*CalcFlexNorScore
                let ariavalue = startvalue +totalgrade
                $('#flexibility').attr("aria-value", ariavalue) 
                barMarkSet();
                
            }

            //ps
            if(psGrade==1){
                let startvalue = 16.6 * 0
                let totalgrade = 0.166*CalcPSNorScore
                let ariavalue = startvalue +totalgrade
                $('#processSpeed').attr("aria-value", ariavalue) 
                barMarkSet();
                
            }else if(psGrade==2){
                let startvalue = 16.6 * 1
                let totalgrade = 0.166*CalcPSNorScore
                let ariavalue = startvalue +totalgrade
                $('#processSpeed').attr("aria-value", ariavalue) 
                barMarkSet();

            }else if(psGrade==3){
                let startvalue = 16.6 * 2
                let totalgrade = 0.166*CalcPSNorScore
                let ariavalue = startvalue +totalgrade
                $('#processSpeed').attr("aria-value", ariavalue) 
                barMarkSet();
                
            }else if(psGrade==4){
                let startvalue = 16.6 * 3
                let totalgrade = 0.166*CalcPSNorScore
                let ariavalue = startvalue +totalgrade
                console.log(totalgrade)

                $('#processSpeed').attr("aria-value", ariavalue) 
                barMarkSet();
                
            }else if(psGrade==5){
                let startvalue = 16.6 * 4
                let totalgrade = 0.166*CalcPSNorScore
                let ariavalue = startvalue +totalgrade
                $('#processSpeed').attr("aria-value", ariavalue) 
                barMarkSet();
                
            }else if(psGrade==6){
                let startvalue = 16.6 * 5
                let totalgrade = 0.166*CalcPSNorScore
                let ariavalue = startvalue +totalgrade
                $('#processSpeed').attr("aria-value", ariavalue) 
                barMarkSet();
                
            }

            //memory
            if(workingGrade==1){
                let startvalue = 16.6 * 0
                let totalgrade = 0.166*CalcWMNorScore
                let ariavalue = startvalue +totalgrade
                $('#workingMemory').attr("aria-value", ariavalue) 
                barMarkSet();
                
            }else if(workingGrade==2){
                let startvalue = 16.6 * 1
                let totalgrade = 0.166*CalcWMNorScore
                let ariavalue = startvalue +totalgrade
                $('#workingMemory').attr("aria-value", ariavalue) 
                barMarkSet();

            }else if(workingGrade==3){
                let startvalue = 16.6 * 2
                let totalgrade = 0.166*CalcWMNorScore
                let ariavalue = startvalue +totalgrade
                $('#workingMemory').attr("aria-value", ariavalue) 
                barMarkSet();
                
            }else if(workingGrade==4){
                let startvalue = 16.6 * 3
                let totalgrade = 0.166*CalcWMNorScore
                let ariavalue = startvalue +totalgrade
                console.log(totalgrade)

                $('#workingMemory').attr("aria-value", ariavalue) 
                barMarkSet();
                
            }else if(workingGrade==5){
                let startvalue = 16.6 * 4
                let totalgrade = 0.166*CalcWMNorScore
                let ariavalue = startvalue +totalgrade
                $('#workingMemory').attr("aria-value", ariavalue) 
                barMarkSet();
                
            }else if(workingGrade==6){
                let startvalue = 16.6 * 5
                let totalgrade = 0.166*CalcWMNorScore
                let ariavalue = startvalue +totalgrade
                $('#workingMemory').attr("aria-value", ariavalue) 
                barMarkSet();
                
            }

            //attention
            if(attGrade==1){
                let startvalue = 16.6 * 0
                let totalgrade = 0.166*CalcATTNorScore
                let ariavalue = startvalue +totalgrade
                $('#attention').attr("aria-value", ariavalue) 
                barMarkSet();
                
            }else if(attGrade==2){
                let startvalue = 16.6 * 1
                let totalgrade = 0.166*CalcATTNorScore
                let ariavalue = startvalue +totalgrade
                $('#attention').attr("aria-value", ariavalue) 
                barMarkSet();

            }else if(attGrade==3){
                let startvalue = 16.6 * 2
                let totalgrade = 0.166*CalcATTNorScore
                let ariavalue = startvalue +totalgrade
                $('#attention').attr("aria-value", ariavalue) 
                barMarkSet();
                
            }else if(attGrade==4){
                let startvalue = 16.6 * 3
                let totalgrade = 0.166*CalcATTNorScore
                let ariavalue = startvalue +totalgrade
                console.log(totalgrade)

                $('#attention').attr("aria-value", ariavalue) 
                barMarkSet();
                
            }else if(attGrade==5){
                let startvalue = 16.6 * 4
                let totalgrade = 0.166*CalcATTNorScore
                let ariavalue = startvalue +totalgrade
                $('#attention').attr("aria-value", ariavalue) 
                barMarkSet();
                
            }else if(attGrade==6){
                let startvalue = 16.6 * 5
                let totalgrade = 0.166*CalcATTNorScore
                let ariavalue = startvalue +totalgrade
                $('#attention').attr("aria-value", ariavalue) 
                barMarkSet();
                
            }


            var context01 = document.getElementById('myChart01').getContext('2d');
            var myChart01 = new Chart(context01, {
                width : 300,
                height : 300,
                type: 'radar', // 차트의 형태
                data: { // 차트에 들어갈 데이터
                    labels: [['기억력',workingMemory.toFixed(2)],['유연성',' '+workingMemory.toFixed(2) ],['처리속도', processSpeed.toFixed(2)],['주의력', attention.toFixed(2)+' ']],
                    //data: { min: 0, max: 100},
                    
                    datasets: [
                        { //데이터
                            label: '', //차트 제목
                            fill: true, // line 형태일 때, 선 안쪽을 채우는지 안채우는지
                            data: [ workingMemory, flexibility, processSpeed, attention ],
                            backgroundColor:'rgba(77, 191, 117, 0.35)',
                            borderColor: 'rgba(77, 191, 117, 1)',
                            borderWidth: 0,
                            pointStyle:'circle',
                           
                        // pointBackgroundColor:'rgba(255, 255, 255, 1)'
                        },
                        { //데이터
                            label: '', //차트 제목
                            fill: false, // line 형태일 때, 선 안쪽을 채우는지 안채우는지
                            data: [ workingMemoryAvg, flexibilityAvg, processSpeedAvg, attentionAvg ],
                            backgroundColor:'rgba(120, 120, 120, 0.4)',
                            borderColor: 'rgba(120, 120, 120, 0.4)',
                            borderWidth: 1,
                            pointStyle:'circle',
                        // pointBackgroundColor:'rgba(255, 255, 255, 1)'
                        }
                    ]
                },
                options: {
                    elements: {
                        point: {
                            radius: 0
                        }
                    },
                    plugins: {
                        legend: { display: false },
                    },
                    scales: {
                        // pointLabels: { fontColor: ['#FFFFFF', '#F00'] },
                        r: {
                            suggestedMin: 0,
                            suggestedMax: 100,
                            angleLines: {
                                color:'rgba(225, 225, 225, 0.7)'
                            },
                            grid:{
                                color:['rgba(225, 225, 225, 0)','rgba(225, 225, 225, 0)','rgba(225, 225, 225, 0)','rgba(225, 225, 225, 0)','rgba(225, 225, 225, 0)','rgba(225, 225, 225, 0)','rgba(225, 225, 225, 0)','rgba(225, 225, 225, 0)','rgba(225, 225, 225, 0)','rgba(120, 120, 120, 0.8)' ]
                                //borderDash: [3, 3] [5, 5]           
                            },
                            pointLabels:{
                                color:'rgba(77, 77, 77, 1)',
                                font:10 
                            },
                            ticks:{
                                display: false 
                            }
                        },
                        x: { 
                            ticks : { display: false },
                            beginAtZero: true,
                            grid: { drawBorder: false, lineWidth: 0,} 
                        },
                        y: { 
                            ticks : { display: false },
                            beginAtZero: true,
                            grid: { drawBorder: false, lineWidth: 0,}
                        }
                    }
                }
            });



           
        },
        error: function(json){
            console.log(json);
        }
    });



    $('#btnGameMore').click(function(){
        console.log("1")
        $('#btnGameMore').hide()
    })
})

function barMarkSet(){
    $('.chart_land_bar').each(function (index, item) {
        var barW = $(this).find('.bar').outerWidth();
        var markW = $(this).find('.mark').outerWidth()/2;
        var todayMarkValue = $(this).find('.today .mark').attr('aria-value');
        var markPos =((barW/100)*todayMarkValue) ;
            $(this).find('.today .mark').css({'left': markPos+10 });
            $(this).find('.today .mark_prev').css({'width': markPos });
            $(this).find('.today .mark_next').css({'width': barW-markPos });
    })       
}    