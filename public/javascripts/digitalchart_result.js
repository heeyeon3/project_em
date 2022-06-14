
// digitalchart_result.html


var flexibility_def = ["‘유연성’이란, 서로 다른 활동을 수행할 때 기존의 규칙에서 새로운 규칙으로 자신의 주의와 생각을 조정하고 전환하는 능력을 말합니다.", "‘유연성’이란, 서로 다른 활동을 수행할 때 기존의 규칙에서 새로운 규칙으로 자신의 주의와 생각을 조정하고 전환하는 능력을 말합니다.", "‘유연성’이란, 서로 다른 활동을 수행할 때 기존의 규칙에서 새로운 규칙으로 자신의 주의와 생각을 조정하고 전환하는 능력을 말합니다.", "‘유연성’이란, 서로 다른 활동을 수행할 때 기존의 규칙에서 새로운 규칙으로 자신의 주의와 생각을 조정하고 전환하는 능력을 말합니다."];
var workingMem_def = ["‘작업 기억력’이란, 어떤 활동을 수행하기 위해서 머릿속에 정보를 일시적으로 유지하고 그 정보를 활용할 수 있는 능력을 말합니다.", "‘작업 기억력’이란, 어떤 활동을 수행하기 위해서 머릿속에 정보를 일시적으로 유지하고 그 정보를 활용할 수 있는 능력을 말합니다.", "‘작업 기억력’이란, 어떤 활동을 수행하기 위해서 머릿속에 정보를 일시적으로 유지하고 그 정보를 활용할 수 있는 능력을 말합니다.", "‘작업 기억력’이란, 어떤 활동을 수행하기 위해서 머릿속에 정보를 일시적으로 유지하고 그 정보를 활용할 수 있는 능력을 말합니다."];
var dividedAttn_def = ["‘주의력’이란, 외부 환경의 방해 요소를 통제하고 특정한 활동에 지속적으로 의식을 집중시킬 수 있는 능력을 말합니다.", "‘주의력’이란, 외부 환경의 방해 요소를 통제하고 특정한 활동에 지속적으로 의식을 집중시킬 수 있는 능력을 말합니다.", "‘주의력’이란, 외부 환경의 방해 요소를 통제하고 특정한 활동에 지속적으로 의식을 집중시킬 수 있는 능력을 말합니다.", "‘주의력’이란, 외부 환경의 방해 요소를 통제하고 특정한 활동에 지속적으로 의식을 집중시킬 수 있는 능력을 말합니다."];
var procSpd_def = ["‘처리 속도’란, 시청각적 정보를 받아들이고 빠르고 정확하게 처리하는 능력을 말합니다.", "‘처리 속도’란, 시청각적 정보를 받아들이고 빠르고 정확하게 처리하는 능력을 말합니다.", "‘처리 속도’란, 시청각적 정보를 받아들이고 빠르고 정확하게 처리하는 능력을 말합니다.", "‘처리 속도’란, 시청각적 정보를 받아들이고 빠르고 정확하게 처리하는 능력을 말합니다."];
var inhibition_def = ["‘억제력’이란, 자동적이거나 불필요한 반응을 억누르고 목표 지향적으로 행동하고 사고할 수 있는 능력을 말합니다.", "‘억제력’이란, 자동적이거나 불필요한 반응을 억누르고 목표 지향적으로 행동하고 사고할 수 있는 능력을 말합니다.", "‘억제력’이란, 자동적이거나 불필요한 반응을 억누르고 목표 지향적으로 행동하고 사고할 수 있는 능력을 말합니다.", "‘억제력’이란, 자동적이거나 불필요한 반응을 억누르고 목표 지향적으로 행동하고 사고할 수 있는 능력을 말합니다."];

var flexibility_cha = ["유연성이 좋은 어린이는 갑작스러운 상황에 잘 대처할 수 있습니다. 또, 다른 사람의 마음을 이해하는 능력과 창의력이 우수합니다.", "유연성이 좋은 어린이는 갑작스러운 상황에 잘 대처할 수 있습니다. 또, 다른 사람의 마음을 이해하는 능력과 창의력이 우수합니다.", "유연성이 좋은 어린이는 갑작스러운 상황에 잘 대처할 수 있습니다. 또, 다른 사람의 마음을 이해하는 능력과 창의력이 우수합니다.", "유연성이 부족한 어린이는 갑작스러운 상황에 대처하는 것을 힘들어 합니다. 또, 타인의 관점을 취하고 마음을 이해하는 일도 어려워 할 수 있습니다."];
var workingMem_cha = ["작업 기억력이 좋은 어린이는 여러 단계의 복잡한 활동을 곧잘 기억하고 수행합니다. 또, 방금 보거나 들은 정보를 즉시 회상할 수 있습니다.", "작업 기억력이 좋은 어린이는 여러 단계의 복잡한 활동을 곧잘 기억하고 수행합니다. 또, 방금 보거나 들은 정보를 즉시 회상할 수 있습니다.", "작업 기억력이 좋은 어린이는 여러 단계의 복잡한 활동을 곧잘 기억하고 수행합니다. 또, 방금 보거나 들은 정보를 즉시 회상할 수 있습니다.", "작업 기억력이 부족한 어린이는 발표를 하겠다고 손을 들고 발표할 내용을 잊어버리곤 합니다. 또, 여러 단계를 거쳐야 하는 지시 사항이나 과제를 하는 도중에 헤맬 수 있습니다."];
var dividedAttn_cha = ["주의력이 좋은 어린이는 다른 사람의 말을 경청합니다. 또, 지속적인 정신적 노력을 요구하는 활동에도 곧잘 참여합니다.", "주의력이 좋은 어린이는 다른 사람의 말을 경청합니다. 또, 지속적인 정신적 노력을 요구하는 활동에도 곧잘 참여합니다.", "주의력이 좋은 어린이는 다른 사람의 말을 경청합니다. 또, 지속적인 정신적 노력을 요구하는 활동에도 곧잘 참여합니다.", "주의력이 부족한 어린이는 외부 자극에 의해 쉽게 산만해지고 상대방의 말에 집중하는 것을 어려워 합니다. 지속적인 정신적 노력을 요구하는 활동을 기피하고 싫어하기도 합니다."];
var procSpd_cha = ["처리 속도가 좋은 어린이는 과제나 놀이 활동에서 빠르고 정확하게 반응합니다. 또, 읽기와 산수 연산도 빠르게 수행할 수 있습니다.", "처리 속도가 좋은 어린이는 과제나 놀이 활동에서 빠르고 정확하게 반응합니다. 또, 읽기와 산수 연산도 빠르게 수행할 수 있습니다.", "처리 속도가 좋은 어린이는 과제나 놀이 활동에서 빠르고 정확하게 반응합니다. 또, 읽기와 산수 연산도 빠르게 수행할 수 있습니다.", "처리속도가 부족한 어린이들은 간단한 과제나 놀이 활동에서의 반응이 느립니다. 시간적 압박은 아이의 속도를 더 느려지게 할 수 있으니 충분한 시간을 제공해주는 것이 중요합니다."];
var inhibition_cha =["억제력이 좋은 어린이는 자신의 목표를 위해 감정을 적절히 통제할 수 있고, 더 큰 보상을 위해 인내할 수 있습니다.", "억제력이 좋은 어린이는 자신의 목표를 위해 감정을 적절히 통제할 수 있고, 더 큰 보상을 위해 인내할 수 있습니다.", "억제력이 좋은 어린이는 자신의 목표를 위해 감정을 적절히 통제할 수 있고, 더 큰 보상을 위해 인내할 수 있습니다.", "억제력이 부족한 어린이는 상황에 부적절한 말을 참지 못하고 자신의 차례를 기다리는 일을 어려워 합니다. 아이가 스스로 충분히 생각하고 행동할 수 있도록 하는 연습이 억제력 향상에 도움이 됩니다."];

var flexibility_activity = ["바뀌어가는 그림","바뀌어가는 그림","바뀌어가는 그림","바뀌어가는 그림"];
var flexibility_activity_detail = ["한 가지 주제를 정하고 그림을 그리기로 합니다. 대상의 특징을 5초에 하나씩 추가해가면서 아이가 그림을 완성하도록 합니다.", "한 가지 주제를 정하고 그림을 그리기로 합니다. 대상의 특징을 5초에 하나씩 추가해가면서 아이가 그림을 완성하도록 합니다.", "한 가지 주제를 정하고 그림을 그리기로 합니다. 대상의 특징을 5초에 하나씩 추가해가면서 아이가 그림을 완성하도록 합니다.", "한 가지 주제를 정하고 그림을 그리기로 합니다. 대상의 특징을 5초에 하나씩 추가해가면서 아이가 그림을 완성하도록 합니다."];
var workingMem_activity = ["이어 말하기","이어 말하기","이어 말하기","이어 말하기"];
var workingMem_activity_detail = ["하나의 주제를 정하고 그에 알맞은 단어를 말합니다. 다음 사람은 앞 사람이 말했던 단어를 말하고, 주제에 알맞은 새로운 단어를 이어서 말합니다.","하나의 주제를 정하고 그에 알맞은 단어를 말합니다. 다음 사람은 앞 사람이 말했던 단어를 말하고, 주제에 알맞은 새로운 단어를 이어서 말합니다.","하나의 주제를 정하고 그에 알맞은 단어를 말합니다. 다음 사람은 앞 사람이 말했던 단어를 말하고, 주제에 알맞은 새로운 단어를 이어서 말합니다.","하나의 주제를 정하고 그에 알맞은 단어를 말합니다. 다음 사람은 앞 사람이 말했던 단어를 말하고, 주제에 알맞은 새로운 단어를 이어서 말합니다."];
var dividedAttn_activity = ["책 읽는 시간 늘리기","책 읽는 시간 늘리기","책 읽는 시간 늘리기","책 읽는 시간 늘리기"];
var dividedAttn_activity_detail = ["아이가 좋아하는 책을 한 권 골라 짧은 시간동안 읽고 요약해봅니다. 목표 시간 동안 아이가 집중하여 잘 읽으면, 조금씩 책 읽는 시간을 늘립니다. 집중하여 책을 읽는 시간을 늘려가면서 주의력을 향상시킬 수 있습니다.", "아이가 좋아하는 책을 한 권 골라 짧은 시간동안 읽고 요약해봅니다. 목표 시간 동안 아이가 집중하여 잘 읽으면, 조금씩 책 읽는 시간을 늘립니다. 집중하여 책을 읽는 시간을 늘려가면서 주의력을 향상시킬 수 있습니다.",
                                "아이가 좋아하는 책을 한 권 골라 짧은 시간동안 읽고 요약해봅니다. 목표 시간 동안 아이가 집중하여 잘 읽으면, 조금씩 책 읽는 시간을 늘립니다. 집중하여 책을 읽는 시간을 늘려가면서 주의력을 향상시킬 수 있습니다.","아이가 좋아하는 책을 한 권 골라 짧은 시간동안 읽고 요약해봅니다. 목표 시간 동안 아이가 집중하여 잘 읽으면, 조금씩 책 읽는 시간을 늘립니다. 집중하여 책을 읽는 시간을 늘려가면서 주의력을 향상시킬 수 있습니다."];
var procSpd_activity  = ["퍼즐 빨리 맞추기","퍼즐 빨리 맞추기","퍼즐 빨리 맞추기","퍼즐 빨리 맞추기"];
var procSpd_activity_detail = ["아이가 재미있게 할 수 있는 난이도의 퍼즐을 골라 완성하는데 걸리는 시간을 측정합니다. 아이가 성공할 때마다 제한 시간을 줄여나가는 걸 목표로 하여 아이의 정보 처리 속도를 향상시킬 수 있습니다.","아이가 재미있게 할 수 있는 난이도의 퍼즐을 골라 완성하는데 걸리는 시간을 측정합니다. 아이가 성공할 때마다 제한 시간을 줄여나가는 걸 목표로 하여 아이의 정보 처리 속도를 향상시킬 수 있습니다.","아이가 재미있게 할 수 있는 난이도의 퍼즐을 골라 완성하는데 걸리는 시간을 측정합니다. 아이가 성공할 때마다 제한 시간을 줄여나가는 걸 목표로 하여 아이의 정보 처리 속도를 향상시킬 수 있습니다.","아이가 재미있게 할 수 있는 난이도의 퍼즐을 골라 완성하는데 걸리는 시간을 측정합니다. 아이가 성공할 때마다 제한 시간을 줄여나가는 걸 목표로 하여 아이의 정보 처리 속도를 향상시킬 수 있습니다."];
var inhibition_activity = ["순서를 주고받는 게임","순서를 주고받는 게임","순서를 주고받는 게임","순서를 주고받는 게임"];
var inhibition_activity_detail = ["오목이나 체스처럼 앉아서 상대방의 순서가 끝나기까지 기다려야 하는 보드게임을 해봅니다. 즉각적으로 행동하고 싶은 충동을 억누르고 자신의 순서를 기다려야 하기 때문에 억제력을 향상시킬 수 있습니다.", "오목이나 체스처럼 앉아서 상대방의 순서가 끝나기까지 기다려야 하는 보드게임을 해봅니다. 즉각적으로 행동하고 싶은 충동을 억누르고 자신의 순서를 기다려야 하기 때문에 억제력을 향상시킬 수 있습니다.",
                                "오목이나 체스처럼 앉아서 상대방의 순서가 끝나기까지 기다려야 하는 보드게임을 해봅니다. 즉각적으로 행동하고 싶은 충동을 억누르고 자신의 순서를 기다려야 하기 때문에 억제력을 향상시킬 수 있습니다.","오목이나 체스처럼 앉아서 상대방의 순서가 끝나기까지 기다려야 하는 보드게임을 해봅니다. 즉각적으로 행동하고 싶은 충동을 억누르고 자신의 순서를 기다려야 하기 때문에 억제력을 향상시킬 수 있습니다."]


                                
var chart_list;
var assesslist;
var avglist;
var Percentile;
var maxmin;
var good_cont;
var bad_cont;
var category_idx = [0,1,2,3,4];
var user_id = '';
var dataindex = '';
var myChart04;
$(function(){

    // URLSearchParams 객체
    var url = new URL(window.location.href);
    const urlParams = url.searchParams;

    // URLSearchParams.get()
    user_id =      urlParams.get('id');
    dataindex =     urlParams.get('dataIndex');

    if(!user_id){
        alert("올바른 접근 경로가 아닙니다.")
        window.history.back();
    }

    $(document).on('click', '.digital_tab button', function() {	  
        $('.digital_tab button').removeClass('active');
        $(this).addClass('active');        
    });

    $(document).on('click', '.digital_tab_sub button', function() {	  
        $('.digital_tab_sub button').removeClass('active');
        $(this).addClass('active');        
    });

    stickBarHeight();
    function stickBarHeight(){
        $('.stick_wrap .stick .bar').each(function(){
            var barValue = $(this).text();
            $(this).css({'height': barValue});
        });
    }

    $(document).on('click', '.stick_wrap .stick .bar', function() {	  
        $('.stick_wrap .stick .bar').removeClass('active');
        $(this).addClass('active');        
    });



    // var context01 = document.getElementById('myChart01').getContext('2d');
    // var myChart01 = new Chart(context01, {
    //     type: 'line', // 차트의 형태
    //     data: { // 차트에 들어갈 데이터
    //         labels: ['지난달','이달'],
    //         datasets: [
    //             { //데이터
    //                 label: '', //차트 제목
    //                 fill: true, // line 형태일 때, 선 안쪽을 채우는지 안채우는지
    //                 data: [ 10,20 ],
    //                 backgroundColor:'rgba(222, 103, 97, 0.35)',
    //                 borderColor: 'rgba(255, 99, 132, 1)',
    //                 borderWidth: 1,
    //                 pointStyle:'circle',
    //                 pointBackgroundColor:'rgba(255, 255, 255, 1)'
    //             }
    //         ]
    //     },
    //     options: {
    //         plugins: {
    //             legend: { display: false }
    //         },
    //         scales: {
    //             x: { 
    //                 ticks : { display: false },
    //                 grid: { drawBorder: false, lineWidth: 0,} 
    //             },
    //             y: { 
    //                 ticks : { display: false },
    //                 beginAtZero: true,
    //                 grid: { drawBorder: false, lineWidth: 0,}
    //             }
    //         }
    //     }
    // });

    // var context02 = document.getElementById('myChart02').getContext('2d');
    // var myChart02 = new Chart(context02, {
    //     type: 'line', // 차트의 형태
    //     data: { // 차트에 들어갈 데이터
    //         labels: ['지난달','이달'],
    //         datasets: [
    //             { //데이터
    //                 label: '', //차트 제목
    //                 fill: true, // line 형태일 때, 선 안쪽을 채우는지 안채우는지
    //                 data: [ 11,25 ],
    //                 backgroundColor:'rgba(57, 185, 116, 0.35)',
    //                 borderColor: 'rgba(57, 185, 116, 1)',
    //                 borderWidth: 1,
    //                 pointStyle:'circle',
    //                 pointBackgroundColor:'rgba(255, 255, 255, 1)'
    //             }
    //         ]
    //     },
    //     options: {
    //         plugins: {
    //             legend: { display: false },
    //         },
    //         scales: {
    //             x: { 
    //                 ticks : { display: false },
    //                 grid: { drawBorder: false, lineWidth: 0,} 
    //             },
    //             y: { 
    //                 ticks : { display: false },
    //                 beginAtZero: true,
    //                 grid: { drawBorder: false, lineWidth: 0,}
    //             }
    //         }
    //     }
    // });

    // var context03 = document.getElementById('myChart03').getContext('2d');
    // var myChart03 = new Chart(context03, {
    //     type: 'line', // 차트의 형태
    //     data: { // 차트에 들어갈 데이터
    //         labels: ['20년1월','20년2월','20년3월','20년4월','20년5월','20년6월','20년7월','20년8월','20년9월','20년10월','20년11월','20년12월,21년1월','21년2월','21년3월','21년4월','21년5월','21년6월','21년7월','21년8월','21년9월','21년10월','21년11월','21년12월','20년1월','20년2월','20년3월','20년4월','20년5월','20년6월','20년7월','20년8월','20년9월','20년10월','20년11월','20년12월,21년1월','21년2월','21년3월','21년4월','21년5월','21년6월','21년7월','21년8월','21년9월','21년10월','21년11월','21년12월'],
    //         datasets: [
    //             { //데이터
    //                 label: '', //차트 제목
    //                 fill: false, // line 형태일 때, 선 안쪽을 채우는지 안채우는지
    //                 data: [ 1,3,10,2,3,6,3,5,4,7,3,4,2,5,6,8,4,6,3,2,4,3,5,8,2,3,5,2,3,6,3,5,4,7,3,4,2,5,9,8,4,6,3,2,4,3,5,8 ],
    //                 backgroundColor:'rgba(89, 121, 235, 0.35)',
    //                 borderColor: 'rgba(89, 121, 235, 1)',
    //                 borderWidth: 1,
    //                 pointStyle:'circle',
    //                 pointBackgroundColor:'rgba(255, 255, 255, 1)'
    //             }
    //         ]
    //     },
    //     options: {
    //         plugins: {
    //             legend: { display: false },
    //         },
    //         scales: {
    //             x: { 
    //                 ticks : { display: false },
    //                 grid: { drawBorder: false, lineWidth: 0,} 
    //             },
    //             y: { 
    //             // ticks : { display: false },
    //                 //beginAtZero: true,
    //                 //grid: { drawBorder: false, lineWidth: 0,}
    //             }
    //         }
    //     }
    // });


    // $('#myChart04').attr('width','260');
    // $('#myChart04').attr('height','260');
    
    // {
    //     "userName" : "Ymh",
    //     "assessList": {
    //         "0": {
    //             "workingMem" : "116.77",
    //             "dividedAttn" : "85.36",
    //             "inhibition" : "82.5",
    //             "flexibility" : "88",
    //             "procSpd" : "65.2",
    //             "assessDate" : "2022-03-28T02:47:45.948Z"
    //         }
    //     },
    //     "avgList":{
    //         "workingMem" : 0,
    //         "dividedAttn" : 0,
    //         "inhibition" : 0,
    //         "flexibility" : 0,
    //         "procSpd" : 0
    //     },
    //     "Percentile":{
    //         "CalcFlexPercentScore" : "null",
    //         "CalcWMPercentScore" : "null",
    //         "CalcATTPercentScore" : "null",
    //         "CalcPSPercentScore" : "null",
    //         "CalcInhibitPercentScore" : "null"
    //     },
    //     "maxmin":{
    //         "maxIndex":0,
    //         "minIndex":0
    //     }
    // }
    console.log(dataindex)
    chart_data(user_id,dataindex);
    
    $('#more_btn').on('click', function(){
        $('#first_section').show();
        $('#second_section').show();
        $('#third_section').show();
        $('#more_btn').hide();
    })

    // 날짜 선택시 다시.
    $('#chart_date').on('change',function(){
        var select_index = $(this).val();
        console.log(select_index);
        chart_data(user_id, select_index);
    })


    // ALERT
    $('#digitalchart_result2').on('click', function(){
        alert('서비스 준비 중 입니다.');
    })

});


function chart_data(id, index){
    

    $.ajax({
        type: "GET",
        // url: "http://192.168.0.13:3001/assess/digitalchart?id="+id+"&dataIndex="+index,
        // url: "http://13.209.223.224:3006/assess/digitalchart?id="+id+"&dataIndex="+index,
        // url: "http://15.165.245.5:3001/assess/digitalchart_result?id="+id+"&dataIndex="+index,
        url: "http://prod.emotivdtx.com/assess/digitalchart?id="+id+"&dataIndex="+index,
        async : false,
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        success : function(json) {
            console.log(json)
            chart_list = json;
            console.log(chart_data["assessList"]);
            assesslist = chart_list.assessList;
            avglist = chart_list.avgList;
            Percentile = chart_list.Percentile;
            maxmin = chart_list.maxmin;

            draw_chart();
    
            // 이름, 나이 매핑
            $('#name_text').text(chart_list.userName);
            $('#name_text1').text(chart_list.userName);
            $('#avgage').text(chart_list.age+"세 평균");

            // 측정날짜 SELECT box
            $("#chart_date").html('');
            var select_box = '';
            for(i=0; i < Object.keys(assesslist).length;i++){
                var date = assesslist[i].assessDate.split('T');
                select_box += "<option value='"+i+"'>"+date[0]+"</option>"
            }
            $("#chart_date").append(select_box);
            console.log("HELLO",index)
            $("#chart_date").val(index).prop("selected", true);
            
            console.log(maxmin);
            // 가장 뛰어난, 가장 부족한
            // 0 : 유연성 type01 / 1 : 기억력 type02 / 2 :  주의력 type05 / 3 : 처리속도 type03 / 4 : 억제력 type04 
            
            set_grayscale();


        },
        error: function(json){
            console.log(json);
        }
    });
}

function draw_chart(){
    if(myChart04){
        myChart04.destroy();
    }
    console.log(assesslist[0].workingMem)
    console.log(avglist)

    var context04 = document.getElementById('myChart04').getContext('2d');
    myChart04 = new Chart(context04, {
        type: 'radar', // 차트의 형태
        data: { // 차트에 들어갈 데이터
            labels: [['기억력',assesslist[dataindex].workingMem],['억제력',assesslist[dataindex].inhibition], ['처리속도',assesslist[dataindex].procSpd],['유연성',assesslist[dataindex].flexibility],['주의력',assesslist[dataindex].dividedAttn]],

            //data: { min: 0, max: 100},
            datasets: [
                { //데이터
                    label: '', //차트 제목
                    fill: true, // line 형태일 때, 선 안쪽을 채우는지 안채우는지
                    data: [ assesslist[dataindex].workingMem, assesslist[dataindex].inhibition, assesslist[dataindex].procSpd, assesslist[dataindex].flexibility, assesslist[dataindex].dividedAttn],
                    backgroundColor:'rgba(89, 121, 235, 0.35)',
                    borderColor: 'rgba(89, 121, 235, 1)',
                    borderWidth: 0,
                    pointStyle:'circle',
                    // pointBackgroundColor:'rgba(255, 255, 255, 1)'
                },
                { //데이터
                    label: '', //차트 제목
                    fill: false, // line 형태일 때, 선 안쪽을 채우는지 안채우는지
                    data: [ avglist.workingMemoryAvg, avglist.inhibitionAvg, avglist.procSpdAvg, avglist.flexibilityAvg, avglist.dividedAttnAvg],
                    backgroundColor:'rgba(120, 120, 120, 0.7)',
                    borderColor: 'rgba(120, 120, 120, 0.7)',
                    borderWidth: 1,
                    pointStyle:'circle',
                    borderDash : [2,5]
                // pointBackgroundColor:'rgba(255, 255, 255, 1)'
                }
            ]
        },
        options: {
            responsive: false,
            elements: {
                point: {
                    radius: 0
                }
            },
            plugins: {
                legend: { display: false },
            },
            scales: {
                r: {
                    suggestedMin: 0,
                    suggestedMax: 120,
                    angleLines: {
                        color:'rgba(225, 225, 225, 0.7)'
                    },
                    grid:{
                        color:['rgba(225, 225, 225, 0)','rgba(225, 225, 225, 0)','rgba(225, 225, 225, 0)','rgba(225, 225, 225, 0)','rgba(120, 120, 120, 0)','rgba(225, 225, 225, 0.8)','rgba(225, 225, 225, 0)','rgba(225, 225, 225, 0)','rgba(225, 225, 225, 0)','rgba(120, 120, 120, 0.8)','rgba(120, 120, 120, 0.8)','rgba(120, 120, 120, 0.8)' ]
                        //borderDash: [3, 3] [5, 5]           
                    },
                    pointLabels:{
                        color:'rgba(77, 77, 77, 1)',
                        font : 10,
                        // display: true,
                        // fontColor: ['rgba(177, 77, 77, 1)', '#F00'],
                        // callback : function(pointLabel, index){
                        //     console.log("HELLO!!", pointLabel)
                        //     console.log("HELLO!!", index)
                        //     e[0].fontColor = '#fff';
                        //     // var new_label = e[0].fontColor("green");
                            
                        //     return e[0]
                        // },
                        // textAlign : 'end' ,
                        // callback: function(value, index, values) {
                        //         console.log(value)
                        //         return '$' + value;
                        //     }
                        
                    },
                    ticks:{
                        display: false,
                    },
                    
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
}

// 가장 뛰어나요!
// 0 : 유연성 type01 bg01 / 1 : 기억력 type02 bg03 / 2 :  주의력 type05 bg04 / 3 : 처리속도 type03 bg02 / 4 : 억제력 type04 bg05


// CalcATTPercentScore: {dataCount: 8, dividedAttnPercent: 11.11111111111111, index: 3}
// CalcFlexPercentScore: {dataCount: 8, flexibilityPercent: 100, index: 2}
// CalcInhibitPercentScore: {dataCount: 8, inhibitionPercent: 11.11111111111111, index: 3}
// CalcPSPercentScore: {dataCount: 8, procSpdPercent: 12.5, index: 3}
// CalcWMPercentScore: {dataCount: 8, workingMemPercent: 12.5, index: 3}
// -125~125
function data_maxidx(maxidx, type){
    var cont_name = '';
    if(maxidx == 0){
        cont_name = '유연성';
        var idx = category_idx.indexOf(0);
        category_idx.splice(idx, 1);

        if(type == 0){
            $('#good_people').text(0);
            $('#good_top_per').text(0);
            $('#good_content_per').text(0+"%");
            var gauge_deg = (0)*-2.5;
            console.log(gauge_deg.toFixed(2))
            $('#good_gauge').css('transform','rotate('+gauge_deg+'deg)')
        } else {
            $('#good_people').text(Percentile.CalcFlexPercentScore.dataCount);
            $('#good_top_per').text(Percentile.CalcFlexPercentScore.flexibilityPercent);
            $('#good_content_per').text(parseFloat(Percentile.CalcFlexPercentScore.flexibilityPercent).toFixed(2)+"%");
            var gauge_deg = (parseFloat(Percentile.CalcFlexPercentScore.flexibilityPercent)-50)*-2.5;
            console.log(gauge_deg.toFixed(2))
            $('#good_gauge').css('transform','rotate('+gauge_deg+'deg)')
        }

        $('#good_def').text(flexibility_def[Percentile.CalcFlexPercentScore.index]);
        $('#good_Cha').text(flexibility_cha[Percentile.CalcFlexPercentScore.index]);
        $('#good_activity_title').text(flexibility_activity[Percentile.CalcFlexPercentScore.index]);
        $('#good_activity_detail').text(flexibility_activity_detail[Percentile.CalcFlexPercentScore.index]);
        $('#good_activity').removeClass();
        $('#good_activity').addClass('img_cont');
        $('#good_activity').addClass('bg01');
        $('#good_type').removeClass();
        $('#good_type').addClass('type01');
    } else if(maxidx == 1){
        cont_name = '기억력';
        var idx = category_idx.indexOf(1);
        category_idx.splice(idx, 1);

        if(type == 0){
            $('#good_people').text(0);
            $('#good_top_per').text(parseFloat(0));
            $('#good_content_per').text(0+"%");
            var gauge_deg = (0)*-2.5;
            console.log(gauge_deg.toFixed(2))
            $('#good_gauge').css('transform','rotate('+gauge_deg.toFixed(2)+'deg)')
        } else {
            $('#good_people').text(Percentile.CalcWMPercentScore.dataCount);
            $('#good_top_per').text(parseFloat(Percentile.CalcWMPercentScore.workingMemPercent).toFixed(2));
            $('#good_content_per').text(parseFloat(Percentile.CalcWMPercentScore.workingMemPercent).toFixed(2)+"%");
            var gauge_deg = (parseFloat(Percentile.CalcWMPercentScore.workingMemPercent)-50)*-2.5;
            console.log(gauge_deg.toFixed(2))
            $('#good_gauge').css('transform','rotate('+gauge_deg.toFixed(2)+'deg)')
        }


        $('#good_def').text(workingMem_def[Percentile.CalcWMPercentScore.index]);
        $('#good_Cha').text(workingMem_cha[Percentile.CalcWMPercentScore.index]);
        $('#good_activity_title').text(workingMem_activity[Percentile.CalcWMPercentScore.index]);
        $('#good_activity_detail').text(workingMem_activity_detail[Percentile.CalcWMPercentScore.index]);
        $('#good_activity').removeClass();
        $('#good_activity').addClass('img_cont');
        $('#good_activity').addClass('bg03');
        $('#good_type').removeClass();
        $('#good_type').addClass('type02');
    } else if(maxidx == 2){
        cont_name = '주의력';
        var idx = category_idx.indexOf(2);
        category_idx.splice(idx, 1);

        if(type == 0){
            $('#good_people').text(0);
            $('#good_top_per').text(0);
            $('#good_content_per').text(0+"%");
            var gauge_deg = (0)*-2.5;
            console.log(gauge_deg.toFixed(2))
            $('#good_gauge').css('transform','rotate('+gauge_deg.toFixed(2)+'deg)')
        }else{
            $('#good_people').text(Percentile.CalcATTPercentScore.dataCount);
            $('#good_top_per').text(parseFloat(Percentile.CalcATTPercentScore.dividedAttnPercent).toFixed(2));
            $('#good_content_per').text(parseFloat(Percentile.CalcATTPercentScore.dividedAttnPercent).toFixed(2)+"%");
            var gauge_deg = (parseFloat(Percentile.CalcATTPercentScore.dividedAttnPercent)-50)*-2.5;
            console.log(gauge_deg.toFixed(2))
            $('#good_gauge').css('transform','rotate('+gauge_deg.toFixed(2)+'deg)')
        }


        $('#good_def').text(dividedAttn_def[Percentile.CalcATTPercentScore.index]);
        $('#good_Cha').text(dividedAttn_cha[Percentile.CalcATTPercentScore.index]);
        $('#good_activity_title').text(dividedAttn_activity[Percentile.CalcATTPercentScore.index]);
        $('#good_activity_detail').text(dividedAttn_activity_detail[Percentile.CalcATTPercentScore.index]);
        $('#good_activity').removeClass();
        $('#good_activity').addClass('img_cont');
        $('#good_activity').addClass('bg04');
        $('#good_type').removeClass();
        $('#good_type').addClass('type05');
    } else if(maxidx == 3){
        cont_name = '처리속도';
        var idx = category_idx.indexOf(3);
        category_idx.splice(idx, 1);

        if(type == 0){
            $('#good_people').text(0);
            $('#good_top_per').text(0);
            $('#good_content_per').text(0+"%");
            var gauge_deg = (0)*-2.5;
            console.log(gauge_deg.toFixed(2))
            $('#good_gauge').css('transform','rotate('+gauge_deg.toFixed(2)+'deg)')
        }else{
            $('#good_people').text(Percentile.CalcPSPercentScore.dataCount);
            $('#good_top_per').text(parseFloat(Percentile.CalcPSPercentScore.procSpdPercent).toFixed(2));
            $('#good_content_per').text(parseFloat(Percentile.CalcPSPercentScore.procSpdPercent).toFixed(2)+"%");
            var gauge_deg = (parseFloat(Percentile.CalcPSPercentScore.procSpdPercent)-50)*-2.5;
            console.log(gauge_deg.toFixed(2))
            $('#good_gauge').css('transform','rotate('+gauge_deg.toFixed(2)+'deg)')
        }
       
        $('#good_def').text(procSpd_def[Percentile.CalcPSPercentScore.index]);
        $('#good_Cha').text(procSpd_cha[Percentile.CalcPSPercentScore.index]);
        $('#good_activity_title').text(procSpd_activity[Percentile.CalcPSPercentScore.index]);
        $('#good_activity_detail').text(procSpd_activity_detail[Percentile.CalcPSPercentScore.index]);
        $('#good_activity').removeClass();
        $('#good_activity').addClass('img_cont');
        $('#good_activity').addClass('bg02');
        $('#good_type').removeClass();
        $('#good_type').addClass('type03');
    } else if(maxidx == 4){
        cont_name = '억제력';
        var idx = category_idx.indexOf(4);
        category_idx.splice(idx, 1);

        if(type == 0){
            $('#good_people').text(0);
            $('#good_top_per').text(0);
            $('#good_content_per').text(0+"%");
            var gauge_deg = (0)*-2.5;
            console.log(gauge_deg.toFixed(2))
            $('#good_gauge').css('transform','rotate('+gauge_deg.toFixed(2)+'deg)')
        } else {
            $('#good_people').text(Percentile.CalcInhibitPercentScore.dataCount);
            $('#good_top_per').text(parseFloat(Percentile.CalcInhibitPercentScore.inhibitionPercent).toFixed(2));
            $('#good_content_per').text(parseFloat(Percentile.CalcInhibitPercentScore.inhibitionPercent).toFixed(2)+"%");
            var gauge_deg = (parseFloat(Percentile.CalcInhibitPercentScore.inhibitionPercent)-50)*-2.5;
            console.log(gauge_deg.toFixed(2))
            $('#good_gauge').css('transform','rotate('+gauge_deg.toFixed(2)+'deg)')
        }
       
        $('#good_def').text(inhibition_def[Percentile.CalcInhibitPercentScore.index]);
        $('#good_Cha').text(inhibition_cha[Percentile.CalcInhibitPercentScore.index]);
        $('#good_activity_title').text(inhibition_activity[Percentile.CalcInhibitPercentScore.index]);
        $('#good_activity_detail').text(inhibition_activity_detail[Percentile.CalcInhibitPercentScore.index]);
        $('#good_activity').removeClass();
        $('#good_activity').addClass('img_cont');
        $('#good_activity').addClass('bg05');
        $('#good_type').removeClass();
        $('#good_type').addClass('type04');
    }

    $('#good_content').text(cont_name);
    $('#good_content0').text(cont_name);
    $('#good_content1').text(cont_name);
    $('#good_content2').text(cont_name);
}

function data_minidx(minidx, type){
    var cont_name = '';
    if(minidx == 0){
        
        cont_name = '유연성';
        var idx = category_idx.indexOf(0);
        category_idx.splice(idx, 1);

        if(type == 0){
            $('#bad_people').text(0);
            $('#bad_top_per').text(0);
            $('#bad_content_per').text(0+"%");
            var gauge_deg = (0)*-2.5;
            console.log(gauge_deg.toFixed(2))
            $('#bad_gauge').css('transform','rotate('+gauge_deg.toFixed(2)+'deg)')
        }  else {
            $('#bad_people').text(Percentile.CalcFlexPercentScore.dataCount);
            $('#bad_top_per').text(parseFloat(Percentile.CalcFlexPercentScore.flexibilityPercent).toFixed(2));
            $('#bad_content_per').text(parseFloat(Percentile.CalcFlexPercentScore.flexibilityPercent).toFixed(2)+"%");
            var gauge_deg = (parseFloat(Percentile.CalcFlexPercentScore.flexibilityPercent)-50)*-2.5;
            console.log(gauge_deg.toFixed(2))
            $('#bad_gauge').css('transform','rotate('+gauge_deg.toFixed(2)+'deg)')
        }



        $('#bad_def').text(flexibility_def[Percentile.CalcFlexPercentScore.index]);
        $('#bad_Cha').text(flexibility_cha[Percentile.CalcFlexPercentScore.index]);
        $('#bad_activity_title').text(flexibility_activity[Percentile.CalcFlexPercentScore.index]);
        $('#bad_activity_detail').text(flexibility_activity_detail[Percentile.CalcFlexPercentScore.index]);
        $('#bad_activity').removeClass();
        $('#bad_activity').addClass('img_cont');
        $('#bad_activity').addClass('bg01');
        $('#bad_type').removeClass();
        $('#bad_type').addClass('type01');
    } else if(minidx == 1){
        cont_name = '기억력';
        var idx = category_idx.indexOf(1);
        category_idx.splice(idx, 1);

        if(type == 0){
            $('#bad_people').text(0);
            $('#bad_top_per').text(0);
            $('#bad_content_per').text(0+"%");
            var gauge_deg = (0)*-2.5;
            console.log(gauge_deg.toFixed(2))
            $('#bad_gauge').css('transform','rotate('+gauge_deg.toFixed(2)+'deg)')
        } else {
            $('#bad_people').text(Percentile.CalcWMPercentScore.dataCount);
            $('#bad_top_per').text(parseFloat(Percentile.CalcWMPercentScore.workingMemPercent).toFixed(2));
            $('#bad_content_per').text(parseFloat(Percentile.CalcWMPercentScore.workingMemPercent).toFixed(2)+"%");
            var gauge_deg = (parseFloat(Percentile.CalcWMPercentScore.workingMemPercent)-50)*-2.5;
            console.log(gauge_deg.toFixed(2))
            $('#bad_gauge').css('transform','rotate('+gauge_deg.toFixed(2)+'deg)')
        }
        
        $('#bad_def').text(workingMem_def[Percentile.CalcWMPercentScore.index]);
        $('#bad_Cha').text(workingMem_cha[Percentile.CalcWMPercentScore.index]);
        $('#bad_activity_title').text(workingMem_activity[Percentile.CalcWMPercentScore.index]);
        $('#bad_activity_detail').text(workingMem_activity_detail[Percentile.CalcWMPercentScore.index]);
        $('#bad_activity').removeClass();
        $('#bad_activity').addClass('img_cont');
        $('#bad_activity').addClass('bg03');
        $('#bad_type').removeClass();
        $('#bad_type').addClass('type02');
    } else if(minidx == 2){
        cont_name = '주의력';
        var idx = category_idx.indexOf(2);
        category_idx.splice(idx, 1);

        if(type == 0){
            $('#bad_people').text(0);
            $('#bad_top_per').text(0);
            $('#bad_content_per').text(0+"%");
            var gauge_deg = (0)*-2.5;
            console.log(gauge_deg.toFixed(2))
            $('#bad_gauge').css('transform','rotate('+gauge_deg.toFixed(2)+'deg)')
        } else {
            $('#bad_people').text(Percentile.CalcATTPercentScore.dataCount);
            $('#bad_top_per').text(parseFloat(Percentile.CalcATTPercentScore.dividedAttnPercent).toFixed(2));
            $('#bad_content_per').text(parseFloat(Percentile.CalcATTPercentScore.dividedAttnPercent).toFixed(2)+"%");
            var gauge_deg = (parseFloat(Percentile.CalcATTPercentScore.dividedAttnPercent)-50)*-2.5;
            console.log(gauge_deg.toFixed(2))
            $('#bad_gauge').css('transform','rotate('+gauge_deg.toFixed(2)+'deg)')
        }
        
        $('#bad_def').text(dividedAttn_def[Percentile.CalcATTPercentScore.index]);
        $('#bad_Cha').text(dividedAttn_cha[Percentile.CalcATTPercentScore.index]);
        $('#bad_activity_title').text(dividedAttn_activity[Percentile.CalcATTPercentScore.index]);
        $('#bad_activity_detail').text(dividedAttn_activity_detail[Percentile.CalcATTPercentScore.index]);
        $('#bad_activity').removeClass();
        $('#bad_activity').addClass('img_cont');
        $('#bad_activity').addClass('bg04');
        $('#bad_type').removeClass();
        $('#bad_type').addClass('type05');
    } else if(minidx == 3){
        cont_name = '처리속도';
        var idx = category_idx.indexOf(3);
        category_idx.splice(idx, 1);

        if(type == 0){
            $('#bad_people').text(0);
            $('#bad_top_per').text(0);
            $('#bad_content_per').text(0+"%");
            var gauge_deg = (0)*-2.5;
            console.log(gauge_deg.toFixed(2))
            $('#bad_gauge').css('transform','rotate('+gauge_deg.toFixed(2)+'deg)')
        } else {
            $('#bad_people').text(Percentile.CalcPSPercentScore.dataCount);
            $('#bad_top_per').text(parseFloat(Percentile.CalcPSPercentScore.procSpdPercent).toFixed(2));
            $('#bad_content_per').text(parseFloat(Percentile.CalcPSPercentScore.procSpdPercent).toFixed(2)+"%");
            var gauge_deg = (parseFloat(Percentile.CalcPSPercentScore.procSpdPercent)-50)*-2.5;
            console.log(gauge_deg.toFixed(2))
            $('#bad_gauge').css('transform','rotate('+gauge_deg.toFixed(2)+'deg)')
        }
        
        $('#bad_def').text(procSpd_def[Percentile.CalcPSPercentScore.index]);
        $('#bad_Cha').text(procSpd_cha[Percentile.CalcPSPercentScore.index]);
        $('#bad_activity_title').text(procSpd_activity[Percentile.CalcPSPercentScore.index]);
        $('#bad_activity_detail').text(procSpd_activity_detail[Percentile.CalcPSPercentScore.index]);
        $('#bad_activity').removeClass();
        $('#bad_activity').addClass('img_cont');
        $('#bad_activity').addClass('bg02');
        $('#bad_type').removeClass();
        $('#bad_type').addClass('type03');
    } else if(minidx == 4){
        cont_name = '억제력';
        var idx = category_idx.indexOf(4);
        category_idx.splice(idx, 1);

        if(type == 0){
            $('#bad_people').text(0);
            $('#bad_top_per').text(0);
            $('#bad_content_per').text(0+"%");
            var gauge_deg = (0)*-2.5;
            console.log(gauge_deg.toFixed(2))
            $('#bad_gauge').css('transform','rotate('+gauge_deg.toFixed(2)+'deg)')
        } else {
            $('#bad_people').text(Percentile.CalcInhibitPercentScore.dataCount);
            $('#bad_top_per').text(parseFloat(Percentile.CalcInhibitPercentScore.inhibitionPercent).toFixed(2));
            $('#bad_content_per').text(parseFloat(Percentile.CalcInhibitPercentScore.inhibitionPercent).toFixed(2)+"%");
            var gauge_deg = (parseFloat(Percentile.CalcInhibitPercentScore.inhibitionPercent)-50)*-2.5;
            console.log(gauge_deg.toFixed(2))
            $('#bad_gauge').css('transform','rotate('+gauge_deg.toFixed(2)+'deg)')
        }
        
        $('#bad_def').text(inhibition_def[Percentile.CalcInhibitPercentScore.index]);
        $('#bad_Cha').text(inhibition_cha[Percentile.CalcInhibitPercentScore.index]);
        $('#bad_activity_title').text(inhibition_activity[Percentile.CalcInhibitPercentScore.index]);
        $('#bad_activity_detail').text(inhibition_activity_detail[Percentile.CalcInhibitPercentScore.index]);
        $('#bad_activity').removeClass();
        $('#bad_activity').addClass('img_cont');
        $('#bad_activity').addClass('bg05');
        $('#bad_type').removeClass();
        $('#bad_type').addClass('type04');
    }

    $('#bad_content').text(cont_name);
    $('#bad_content0').text(cont_name);
    $('#bad_content1').text(cont_name);
    $('#bad_content2').text(cont_name);
}


function data_other(type){
    var cont_name = '';
    for(i=0;i<category_idx.length;i++){
        cont_name = '';

        var section_id ='';
        if(i == 0){
            section_id = "first";
        } else if(i == 1){
            section_id = "second";
        } else if(i == 2){
            section_id = "third";
        }

        if(category_idx[i] == 0){
            cont_name = '유연성';

            if(type == 0){
                $('#'+section_id+'_people').text(0);
                $('#'+section_id+'_top_per').text(0);
                $('#'+section_id+'_content_per').text(0+"%");
                var gauge_deg = (0)*-2.5;
                console.log(gauge_deg.toFixed(2))
                $('#'+section_id+'_gauge').css('transform','rotate('+gauge_deg.toFixed(2)+'deg)')
            } else {
                $('#'+section_id+'_people').text(Percentile.CalcFlexPercentScore.dataCount);
                $('#'+section_id+'_top_per').text(parseFloat(Percentile.CalcFlexPercentScore.flexibilityPercent).toFixed(2));
                $('#'+section_id+'_content_per').text(parseFloat(Percentile.CalcFlexPercentScore.flexibilityPercent).toFixed(2)+"%");
                var gauge_deg = (parseFloat(Percentile.CalcFlexPercentScore.flexibilityPercent)-50)*-2.5;
                console.log(gauge_deg.toFixed(2))
                $('#'+section_id+'_gauge').css('transform','rotate('+gauge_deg.toFixed(2)+'deg)')
            }

            $('#'+section_id+'_def').text(flexibility_def[Percentile.CalcFlexPercentScore.index]);
            $('#'+section_id+'_Cha').text(flexibility_cha[Percentile.CalcFlexPercentScore.index]);
            $('#'+section_id+'_activity_title').text(flexibility_activity[Percentile.CalcFlexPercentScore.index]);
            $('#'+section_id+'_activity_detail').text(flexibility_activity_detail[Percentile.CalcFlexPercentScore.index]);
            $('#'+section_id+'_activity').removeClass();
            $('#'+section_id+'_activity').addClass('img_cont');
            $('#'+section_id+'_activity').addClass('bg01');
            $('#'+section_id+'_type').removeClass();
            $('#'+section_id+'_type').addClass('type01');
        } else if(category_idx[i] == 1){
            cont_name = '기억력';

            if(type == 0){
                $('#'+section_id+'_people').text(0);
                $('#'+section_id+'_top_per').text(0);
                $('#'+section_id+'_content_per').text(0+"%");
                var gauge_deg = (0)*-2.5;
                console.log(gauge_deg.toFixed(2))
                $('#'+section_id+'_gauge').css('transform','rotate('+gauge_deg.toFixed(2)+'deg)')
            } else {
                $('#'+section_id+'_people').text(Percentile.CalcWMPercentScore.dataCount);
                $('#'+section_id+'_top_per').text(parseFloat(Percentile.CalcWMPercentScore.workingMemPercent).toFixed(2));
                $('#'+section_id+'_content_per').text(parseFloat(Percentile.CalcWMPercentScore.workingMemPercent).toFixed(2)+"%");
                var gauge_deg = (parseFloat(Percentile.CalcWMPercentScore.workingMemPercent)-50)*-2.5;
                console.log(gauge_deg.toFixed(2))
                $('#'+section_id+'_gauge').css('transform','rotate('+gauge_deg.toFixed(2)+'deg)')
            }
            
            $('#'+section_id+'_def').text(workingMem_def[Percentile.CalcWMPercentScore.index]);
            $('#'+section_id+'_Cha').text(workingMem_cha[Percentile.CalcWMPercentScore.index]);
            $('#'+section_id+'_activity_title').text(workingMem_activity[Percentile.CalcWMPercentScore.index]);
            $('#'+section_id+'_activity_detail').text(workingMem_activity_detail[Percentile.CalcWMPercentScore.index]);
            $('#'+section_id+'_activity').removeClass();
            $('#'+section_id+'_activity').addClass('img_cont');
            $('#'+section_id+'_activity').addClass('bg03');
            $('#'+section_id+'_type').removeClass();
            $('#'+section_id+'_type').addClass('type02');
        } else if(category_idx[i] == 2){
            cont_name = '주의력';

            if(type == 0){
                $('#'+section_id+'_people').text(0);
                $('#'+section_id+'_top_per').text(0);
                $('#'+section_id+'_content_per').text(0+"%");
                var gauge_deg = (0)*-2.5;
                console.log(gauge_deg.toFixed(2))
                $('#'+section_id+'_gauge').css('transform','rotate('+gauge_deg.toFixed(2)+'deg)')
            } else {
                $('#'+section_id+'_people').text(Percentile.CalcATTPercentScore.dataCount);
                $('#'+section_id+'_top_per').text(parseFloat(Percentile.CalcATTPercentScore.dividedAttnPercent).toFixed(2));
                $('#'+section_id+'_content_per').text(parseFloat(Percentile.CalcATTPercentScore.dividedAttnPercent).toFixed(2)+"%");
                var gauge_deg = (parseFloat(Percentile.CalcATTPercentScore.dividedAttnPercent)-50)*-2.5;
                console.log(gauge_deg.toFixed(2))
                $('#'+section_id+'_gauge').css('transform','rotate('+gauge_deg.toFixed(2)+'deg)')
            }
            
            $('#'+section_id+'_def').text(dividedAttn_def[Percentile.CalcATTPercentScore.index]);
            $('#'+section_id+'_Cha').text(dividedAttn_cha[Percentile.CalcATTPercentScore.index]);
            $('#'+section_id+'_activity_title').text(dividedAttn_activity[Percentile.CalcATTPercentScore.index]);
            $('#'+section_id+'_activity_detail').text(dividedAttn_activity_detail[Percentile.CalcATTPercentScore.index]);
            $('#'+section_id+'_activity').removeClass();
            $('#'+section_id+'_activity').addClass('img_cont');
            $('#'+section_id+'_activity').addClass('bg04');
            $('#'+section_id+'_type').removeClass();
            $('#'+section_id+'_type').addClass('type05');
        } else if(category_idx[i] == 3){
            cont_name = '처리속도';

            if(type == 0){
                $('#'+section_id+'_people').text(0);
                $('#'+section_id+'_top_per').text(0);
                $('#'+section_id+'_content_per').text(0+"%");
                var gauge_deg = (0)*-2.5;
                console.log(gauge_deg.toFixed(2))
                $('#'+section_id+'_gauge').css('transform','rotate('+gauge_deg.toFixed(2)+'deg)')
            } else {
                $('#'+section_id+'_people').text(Percentile.CalcPSPercentScore.dataCount);
                $('#'+section_id+'_top_per').text(parseFloat(Percentile.CalcPSPercentScore.procSpdPercent).toFixed(2));
                $('#'+section_id+'_content_per').text(parseFloat(Percentile.CalcPSPercentScore.procSpdPercent).toFixed(2)+"%");
                var gauge_deg = (parseFloat(Percentile.CalcPSPercentScore.procSpdPercent)-50)*-2.5;
                console.log(gauge_deg.toFixed(2))
                $('#'+section_id+'_gauge').css('transform','rotate('+gauge_deg.toFixed(2)+'deg)')
            }
            
            $('#'+section_id+'_def').text(procSpd_def[Percentile.CalcPSPercentScore.index]);
            $('#'+section_id+'_Cha').text(procSpd_cha[Percentile.CalcPSPercentScore.index]);
            $('#'+section_id+'_activity_title').text(procSpd_activity[Percentile.CalcPSPercentScore.index]);
            $('#'+section_id+'_activity_detail').text(procSpd_activity_detail[Percentile.CalcPSPercentScore.index]);
            $('#'+section_id+'_activity').removeClass();
            $('#'+section_id+'_activity').addClass('img_cont');
            $('#'+section_id+'_activity').addClass('bg02');
            $('#'+section_id+'_type').removeClass();
            $('#'+section_id+'_type').addClass('type03');
        } else if(category_idx[i] == 4){
            cont_name = '억제력';

            if(type == 0){
                $('#'+section_id+'_people').text(0);
                $('#'+section_id+'_top_per').text(0);
                $('#'+section_id+'_content_per').text(0+"%");
                var gauge_deg = (0)*-2.5;
                console.log(gauge_deg.toFixed(2))
                $('#'+section_id+'_gauge').css('transform','rotate('+gauge_deg.toFixed(2)+'deg)')
            } else {
                $('#'+section_id+'_people').text(Percentile.CalcInhibitPercentScore.dataCount);
                $('#'+section_id+'_top_per').text(parseFloat(Percentile.CalcInhibitPercentScore.inhibitionPercent).toFixed(2));
                $('#'+section_id+'_content_per').text(parseFloat(Percentile.CalcInhibitPercentScore.inhibitionPercent).toFixed(2)+"%");
                var gauge_deg = (parseFloat(Percentile.CalcInhibitPercentScore.inhibitionPercent)-50)*-2.5;
                console.log(gauge_deg.toFixed(2))
                $('#'+section_id+'_gauge').css('transform','rotate('+gauge_deg.toFixed(2)+'deg)')
            }

            $('#'+section_id+'_gauge').css('transform','rotate('+gauge_deg.toFixed(2)+'deg)')
            $('#'+section_id+'_def').text(inhibition_def[Percentile.CalcInhibitPercentScore.index]);
            $('#'+section_id+'_Cha').text(inhibition_cha[Percentile.CalcInhibitPercentScore.index]);
            $('#'+section_id+'_activity_title').text(inhibition_activity[Percentile.CalcInhibitPercentScore.index]);
            $('#'+section_id+'_activity_detail').text(inhibition_activity_detail[Percentile.CalcInhibitPercentScore.index]);
            $('#'+section_id+'_activity').removeClass();
            $('#'+section_id+'_activity').addClass('img_cont');
            $('#'+section_id+'_activity').addClass('bg05');
            $('#'+section_id+'_type').removeClass();
            $('#'+section_id+'_type').addClass('type04');
        }
        $('#'+section_id+'_content').text(cont_name);
        $('#'+section_id+'_content0').text(cont_name);
        $('#'+section_id+'_content1').text(cont_name);
        $('#'+section_id+'_content2').text(cont_name);

    }
}

function set_grayscale(){
    
    if(Percentile.CalcFlexPercentScore.block || Percentile.CalcWMPercentScore.block || Percentile.CalcATTPercentScore.block || Percentile.CalcPSPercentScore.block || Percentile.CalcInhibitPercentScore.block){
        $('.digital_conts_text.chart.first').addClass('grayscale');
        $('.chart_hide').addClass('show');

        // 0 true!!
        data_maxidx(maxmin.maxIndex, 0);
        data_minidx(maxmin.minIndex, 0);
        data_other(0);
        return
    } else {
        // 1 false!!
        data_maxidx(maxmin.maxIndex, 1);
        data_minidx(maxmin.minIndex, 1);
        data_other(1);
    }
}