var express = require('express');
var app = express()
var router = express.Router();
var path = require('path')
const db = require("../config/db");

const bodyParser = require('body-parser');
var bcrypt = require('bcrypt')
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


router.post('/', function(req,res){

    console.log("enhanceInfo API 연동 START! ");
    console.log(req);
    console.log(typeof(req));
    console.log("enhanceInfo API 연동 END!");

    res.json({"resultCode":0, "resultString":"전송되었습니다."})
})




// Array MAX 값 찾기
function find_array_max(array){
	if(array.length == 0){
    	var max_num = 1;
	}else{
    	var max_num = Math.max.apply(null, array);
	}

    return max_num;
}

// 연속 점수 데이터
function formula_2_5(n, max, x, y, z){

    var numerator = 0;
    var denominator = parseInt(max);

    var x_value = parseFloat(x);
    var y_value = parseFloat(y);
    var z_value = parseFloat(z);

    for(var i=1; i <= n; i++){
        numerator += (x_value * z_value);
        numerator += (i-1) * (x_value * y_value * z_value);
    }

	var result = numerator/denominator

    return result;
}



// GONOGO (주의력, 억제력)
// "featureList" : {
//     "gngVld":true,
//     "gngNumOfRound":20,
//     "gngNumOfSuccessRound":20,
//     "gngNumOfCorrTar":15,
//     "gngNumOfWrongTar":0,
//     "gngNumOfCorrNonTar":5,
//     "gngNumOfWrongNonTar":0,
//     "gngRndSuccessList":[true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true],
//     "gngStateList":[1,1,2,1,1,1,1,2,1,1,1,1,1,2,1,2,1,1,1,2],
//     "gngCnsctvSuccessList":[19],
//     "gngPerformanceTime":30.86,
//     "gngResponseTimeListCalc":[0.68,0.7,-1,0.67,1.15,0.78,0.77,-1,0.75,0.87,1.18,0.83,0.8,-1,0.72,-1,0.78,0.77,0.7,-1]
// }

// 주의력
function GNG_02(featureList){
    
    var numerator = parseInt(featureList.gngNumOfCorrTar);
    var denominator = 0;

    var gngNumOfRound = parseInt(featureList.gngNumOfRound);
    var TargerAntiRes = 0;

    var gngCnsctvSuccessList = featureList.gngCnsctvSuccessList;
    var maxCnsctvSuccess = find_array_max(gngCnsctvSuccessList);

    for(var i=0; i < featureList.gngRndSuccessList.length; i++){
        var ResponseTime = parseFloat(featureList.gngRndSuccessList[i]);

        if(featureList.gngRndSuccessList[i] && ResponseTime <= 0.15){
            TargerAntiRes++;
        }
    }

    denominator = gngNumOfRound - TargerAntiRes;

    var formula_25 = formula_2_5(maxCnsctvSuccess, maxCnsctvSuccess, x, y, z);

    var result = numerator / denominator;

    return result + formula_25
}

// 억제력
function GNG_04(featureList){
    
    var numerator = parseInt(featureList.gngNumOfCorrNonTar);
    var denominator = 0;

    var gngNumOfCorrNonTar = parseInt(featureList.gngNumOfCorrNonTar);
    var gngNumOfWrongNonTar = parseInt(featureList.gngNumOfCorrNonTar);
    
    denominator = gngNumOfCorrNonTar + gngNumOfWrongNonTar;

    var result = numerator / denominator;

    return result;
}

// SYMBOL SEARCH (주의력, 억제력, 처리속도)
// "featureList" : {
//     "ssVld":true,
//     "ssNumOfRound":30,
//     "ssPerformedRound":18,
//     "ssNumOfSuccessRound":14,
//     "ssNumOfRotErr":1,
//     "ssNumOfSetErr":2,
//     "ssCnsctvSuccessList":[5,6],
//     "ssRndSuccessList":[true,true,true,true,true,true,false,true,false,false,true,true,true,true,true,true,true,false],
//     "ssRndErrStateList":[0,0,0,0,0,0,1,0,2,2,0,0,0,0,0,0,0,4],
//     "ssResponseTimeListCalc":[4.43,3.28,4.98,3.78,1.96,3.66,15.91,12.77,2.91,2.93,5.41,3.28,8.69,5.91,4.33,11.1,5.51,-1],
//     "ssPerformanceTime":122.01
// }

// 주의력
function SYMBOLSEARCH_02(featureList){

    var CnsctvSuccessList = featureList.ssCnsctvSuccessList;
    var maxssCnsctvSuccessList = find_array_max(CnsctvSuccessList);

    var result = formula_2_5(maxssCnsctvSuccessList, maxssCnsctvSuccessList, x, y, z);

    return result;
}


// 억제력
function SYMBOLSEARCH_04(featureList){

    var numerator = parseInt(featureList.ssNumOfSuccessRound);
    var denominator = parseInt(featureList.ssPerformedRound);

    var result = numerator / denominator;

    return result;
}

// 처리속도
function SYMBOLSEARCH_05(featureList){

    var ssNumOfSuccessRound = parseInt(featureList.ssNumOfSuccessRound);
    var ssNumOfRotErr = parseInt(featureList.ssNumOfRotErr);
    var ssNumOfSetErr = parseInt(featureList.ssNumOfSetErr);

    var ssWrongRound = ssNumOfRotErr + ssNumOfSetErr;

    var ssNumOfRound = parseInt(featureList.ssNumOfRound);

    var ssPerformanceTime = parseFloat(featureList.ssPerformanceTime);

    var add_intime = 0;

    if((ssNumOfSuccessRound+ssWrongRound) == ssNumOfRound){
        if(ssPerformanceTime <= 110){
            add_intime = 2;
        } else if(ssPerformanceTime > 110 && ssPerformanceTime > 120){
            add_intime = 1;
        } else if(ssPerformanceTime >= 120){
            add_intime = 0;
        } 
    }


    var result = ssNumOfSuccessRound - ssWrongRound + add_intime;

    return result;
}


// CCTT (주의력, 인지적 유연성, 억제력)
// "featureList" : {
//     "ccttVld":true,
//     "ccttPerformedRound":6,
//     "ccttNumOfSuccessRound":3,
//     "ccttTryTotalNumList":[5,8,11,11,14,14],
//     "ccttTrySuccessNumList":[5,8,6,11,6,6],
//     "ccttTryErrStateList":[0,0,2,0,2,4],             // 0 : 오류 없음, 1 : 숫자 오류, 2 : 색상 오류, 3 : 둘다 오류, 4 : 그 외 오류  event A 숫자, event B 색상
//     "ccttCnsctvSuccessList":[1],
//     "ccttResponseTimeListCalc":[9.82,13.55,18.67,18.95,11.92,23.02],
//     "ccttPerformanceTime":98.1
// }

// 주의력
function CCTT_02(featureList){

    // 수행트라이 정답율
    var ccttTryTotalNumList = featureList.ccttTryTotalNumList;
    var ccttTrySuccessNumList = featureList.ccttTrySuccessNumList;

    // 수행라운드 정답율
    var ccttPerformedRound = parseInt(featureList.ccttPerformedRound);
    var ccttNumOfSuccessRound = parseInt(featureList.ccttNumOfSuccessRound);

    var TryTotal = 0 ;
    var SuccessTryTotal = 0;

    for(var i = 0; i< ccttTryTotalNumList.length ; i++){
        var RndTotaltry = parseInt(ccttTryTotalNumList[i]);
        TryTotal += RndTotaltry;
    }

    for(var i = 0; i< ccttTrySuccessNumList.length ; i++){
        var RndSuccesstry = parseInt(ccttTrySuccessNumList[i]);
        SuccessTryTotal += RndSuccesstry;
    }

    var try_success_per = SuccessTryTotal / TryTotal;                       // 수행트라이 정답율
    var rnd_success_per = ccttNumOfSuccessRound / ccttPerformedRound;       // 수행라운드 정답율

    // 다중 이벤트 전체 트라이 정답율
    var numerator_total = SuccessTryTotal - ccttTrySuccessNumList.length;
    var denominator_total = TryTotal * 2 - 4;
    var multi_event_total_try_per = numerator_total / denominator_total;

    // 다중 이벤트 수행 트라이 정답율
    var ccttTryErrStateList = featureList.ccttTryErrStateList;
    var perform_error = 0;

    for(var i = 0; i< ccttTryErrStateList.length ; i++){
        var TryErr = parseInt(ccttTryErrStateList[i]);
        if(TryErr != 0){
            perform_error++;
        }
    }


    var numerator_perform = SuccessTryTotal - ccttTrySuccessNumList.length;
    var denominator_perform = (SuccessTryTotal+perform_error) * 2 - ccttPerformedRound;
    var multi_event_perform_try_per = numerator_perform / denominator_perform;


	var ccttTrySuccessNumList = featureList.ccttTrySuccessNumList;
	console.log(ccttTrySuccessNumList);
	var MAXccttTrySuccessNum = find_array_max(ccttTrySuccessNumList);
	
    var formula24 = formula_2_5(MAXccttTrySuccessNum, MAXccttTrySuccessNum, x, y, z);

    var result = try_success_per + rnd_success_per + multi_event_total_try_per + multi_event_perform_try_per + formula24;
    return result;
}

// 인지적 유연성 (억제력도 동일)
function CCTT_03(featureList){

    var ccttTryTotalNumList = featureList.ccttTryTotalNumList;
    var ccttTrySuccessNumList = featureList.ccttTrySuccessNumList;

    var TryTotal = 0 ;
    var SuccessTryTotal = 0;

    for(var i = 0; i< ccttTryTotalNumList.length ; i++){
        var RndTotaltry = parseInt(ccttTryTotalNumList[i]);
        TryTotal += RndTotaltry;

        var RndSuccesstry = parseInt(ccttTrySuccessNumList[i]);
        SuccessTryTotal += RndSuccesstry;
    }

    var result = SuccessTryTotal / TryTotal;

    return result;
}

// REVERSE DIGIT SPAN (작업기억력, 주의력)
// "featureList" : {
//     "rdsVld":true,
//     "rdsPerformedRound":7,
//     "rdsNumOfSuccessRound":4,
//     "rdsCnsctvSuccessList":[2],
//     "rdsTryTotalNumList":[3,4,5,6,6,7,7],
//     "rdsTrySuccessNumList":[3,4,5,5,6,3,1],
//     "rdsResponseTimeListCalc":[2.87,4.37,5.3,13.02,17.13,2.33,4.3],
//     "rdsPerformanceTime":95.62
// }


// 작업기억력
function RDS_01(featureList){
    
    // 수행트라이정답율
    var rdsTryTotalNumList = featureList.rdsTryTotalNumList;
    var rdsTrySuccessNumList = featureList.rdsTrySuccessNumList;

    var TryTotal = 0 ;
    var SuccessTryTotal = 0;

    var correctLongestnum = 0;
    var totalLongestnum = 0;
    var perform_try_total = 0;
    var correct_try_wisc = 0;
    var wisc_rds = 1 ;                  // 웩슬러 가중치

    for(var i = 0; i< rdsTryTotalNumList.length ; i++){
        var RndTotaltry = parseInt(rdsTryTotalNumList[i]);
        TryTotal += RndTotaltry;

        var RndSuccesstry = parseInt(rdsTrySuccessNumList[i]);
        SuccessTryTotal += RndSuccesstry;

        if(rdsTryTotalNumList[i] == rdsTrySuccessNumList[i]){
            perform_try_total += parseInt(rdsTryTotalNumList[i]);

            // 성공한 가장 긴 자릿 수 
            if(correctLongestnum < parseInt(rdsTryTotalNumList[i])){
                correctLongestnum = parseInt(rdsTryTotalNumList[i])
            };

        } else {
            perform_try_total += parseInt(rdsTrySuccessNumList[i]);
            perform_try_total += 1;
        }

        // 가장 긴 자릿 수 
        if(totalLongestnum < parseInt(rdsTryTotalNumList[i])){
            totalLongestnum = parseInt(rdsTryTotalNumList[i]);
        }

        // 트라이정답율에 웩슬러 가중치
        correct_try_wisc += (RndSuccesstry / RndTotaltry) * wisc_rds;
    }

    // 수행트라이정답율
    var perform_try_per = SuccessTryTotal / perform_try_total;

    // 성공한 가장 긴 자릿수 / 가장 긴 자릿 수
    var Corrct_longet_num = correctLongestnum / totalLongestnum;

    // 성공한 라운드 정답율
    var rdsPerformedRound = parseInt(featureList.rdsPerformedRound);
    var rdsNumOfSuccessRound = parseInt(featureList.rdsNumOfSuccessRound);
    var correct_rnd_per = rdsNumOfSuccessRound / rdsPerformedRound;

    var result = perform_try_per + correct_try_wisc + Corrct_longet_num + correct_rnd_per;

		
    return result;
}

// 주의력
function RDS_02(featureList){

    var rdsCnsctvSuccessList = featureList.rdsCnsctvSuccessList;

    var maxrdsCnsctvSuccess =  find_array_max(rdsCnsctvSuccessList);

    var result = formula_2_5(maxrdsCnsctvSuccess, maxrdsCnsctvSuccess, x, y, z)

    return result;
}


// DCCS (작업기억력, 주의력, 인지적유연성)
// "featureList" : {
//     "dccsVld":true,
//     "dccsNumOfRound":12,
//     "dccsNumOfSuccessRound":5,
//     "dccsNumOfTotalRuleSwitch":8,
//     "dccsNumOfCrrctRuleSwitch":1,
//     "dccsNumOfTotalSelectSwitch":2,
//     "dccsNumOfCrrctSelectSwitch":1,
//     "dccsNumOfTotalBothSwitch":1,
//     "dccsNumOfCrrctBothSwitch":0,
//     "dccsCnsctvSuccessList":[1,1],
//     "dccsResponseTimeListCalc":[1.23,1.75,1.35,0.05,1.17,1.43,0.13,1.03,0.07,1.22,0.82,1.28],
//     "dccsPerformanceTime":42.75
// }

// 작업기억력
function DCCS_01(featureList){
    var dccsNumOfRound = parseInt(featureList.dccsNumOfRound);
    var dccsNumOfSuccessRound = parseInt(featureList.dccsNumOfSuccessRound);
    var result = dccsNumOfSuccessRound / dccsNumOfRound;

    return result;
}

// 주의력
function DCCS_02(featureList){
    var dccsCnsctvSuccessList = featureList.dccsCnsctvSuccessList;
    var maxdccsCnsctvSuccess = find_array_max(dccsCnsctvSuccessList);

    var result = formula_2_5(maxdccsCnsctvSuccess, maxdccsCnsctvSuccess, x, y, z);

    return result;
}

// 인지적유연성
function DCCS_03(featureList){
    var dccsNumOfRound = parseInt(featureList.dccsNumOfRound);
    var dccsNumOfSuccessRound = parseInt(featureList.dccsNumOfSuccessRound);

    var dccsNumOfTotalRuleSwitch = parseInt(featureList.dccsNumOfTotalRuleSwitch);
    var dccsNumOfCrrctRuleSwitch = parseInt(featureList.dccsNumOfCrrctRuleSwitch);
    
    var dccsNumOfTotalSelectSwitch = parseInt(featureList.dccsNumOfTotalSelectSwitch);
    var dccsNumOfCrrctSelectSwitch = parseInt(featureList.dccsNumOfCrrctSelectSwitch);
    
    var dccsNumOfTotalBothSwitch = parseInt(featureList.dccsNumOfTotalBothSwitch);
    var dccsNumOfCrrctBothSwitch = parseInt(featureList.dccsNumOfCrrctBothSwitch);

    var Total_Suc_per = dccsNumOfSuccessRound / dccsNumOfRound;
    var Rule_Chg_per = dccsNumOfCrrctRuleSwitch / dccsNumOfTotalRuleSwitch;
    var Sel_Chg_per = dccsNumOfCrrctSelectSwitch / dccsNumOfTotalSelectSwitch;
    var Both_Chg_per = dccsNumOfCrrctBothSwitch / dccsNumOfTotalBothSwitch;


    var result = Total_Suc_per + Rule_Chg_per + Sel_Chg_per + Both_Chg_per;

    return result;
}



// featureList : {
//     "vld": true, 
//     "numOfObs": 109,                 //장애물
//     "numOfSuccessObs": 103, 

//     "stateList": [3 , 3, 3, 2, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 3, 1, 3, 3, 3, 2, 3, 3, 3, 3, 2, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 3, 2, 3, 2, 3, 3, 3, 2, 3, 3, 1, 3, 3, 1, 3, 3, 1, 3, 3, 1, 3, 3, 1, 3, 1, 3, 3, 3, 2, 3, 3, 2, 3, 1, 3, 3, 3, 2, 3, 3, 3, 1, 3, 3, 1, 3, 1, 3, 3, 1, 3, 3, 1, 3, 3, 3, 2, 3, 3, 3, 1, 3, 3, 2, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 2, 3, 3, 2, 3, 3, 3, 3, 3], 
//     "successList": [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, true, true, true, true, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, true, true, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, true, true, false, true, true, true, true, true, true], 
//     "numOfSwitchA": 19, 
//     "numOfSwitchB": 17, 
//     "numOfSwitchC": 19, 
//     "numOfSwitchD": 17, 

//     "numOfWallHit": 0, 

//     "numOfCrrctTrgt": 19, 
//     "numOfIncrrctTrgt": 0,
//     "numOfCrrctNoneTrgt": 17, 
//     "numOfIncrrctNoneTrgt": 0

//     "performanceTime": 74.16, 

     
//     "responseTimeList": [-1, -1, -1, -1, -1, -1, 0.7, -1, -1, -1, 0.8, -1, -1, -1, -1, 0.74, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0.87, -1, -1, -1, -1, -1, 0.72, -1, -1, -1, 0.72, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0.69, -1, -1, 0.84, -1, -1, 1.09, -1, -1, 0, -1, -1, 0.67, -1, 0.74, -1, -1, -1, -1, -1, -1, -1, -1, 0.64, -1, -1, -1, -1, -1, -1, -1, 0.67, -1, -1, 0.62, -1, 0.65, -1, -1, 0.77, -1, -1, 0.9, -1, -1, -1, -1, -1, -1, -1, 0.69, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], 
//     "cnsctvSuccessList": [55, 3, 16, 1, 51, 1, 5], 

//     "numOfCrrctSwitchA": 19, 
//     "numOfCrrctSwitchB": 17, 
//     "numOfCrrctSwitchC": 19, 
//     "numOfCrrctSwitchD": 17, 

//     "resTimeListSwitchA": [0.7, 0.8, 0.74, 0.87, 0.72, 0.72, 0.69, 0.84, 1.09, 0, 0.67, 0.74, 0.64, 0.67, 0.62, 0.65, 0.77, 0.9, 0.69], 
// }

var x = 1;
var y = 0.1;
var z = 0.2;

var w = 1; //weight for task switching


// 장애물 피하기
function driving_01(featureList){
    var numOfObs = parseInt(featureList.numOfObs);
    var numOfSuccessObs = parseInt(featureList.numOfSuccessObs);

    var result = numOfSuccessObs / numOfObs;

    return result;
}

// 표적 탐지
function driving_02(featureList){
    var numOfCrrctTrgt = parseInt(featureList.numOfCrrctTrgt);
    var numOfIncrrctTrgt = parseInt(featureList.numOfIncrrctTrgt);

    var numOfTotalTrgt = numOfCrrctTrgt + numOfIncrrctTrgt;
    var TargerAntiRes = 0;

    for(var i=0; i < featureList.stateList.length; i++){
        var tagetstate = parseInt(featureList.stateList[i]);
        var ResponseTime = parseFloat(featureList.responseTimeList[i]);

        
        if(tagetstate == 1 && ResponseTime <= 0.15 && ResponseTime > 0){
            TargerAntiRes++;
        }
    }

    var result = 1 - (numOfIncrrctTrgt / (numOfTotalTrgt - TargerAntiRes));

    return result;
}

// 비표적 탐지
function driving_03(featureList){
    var numOfCrrctNoneTrgt = parseInt(featureList.numOfCrrctNoneTrgt);
    var numOfIncrrctNoneTrgt = parseInt(featureList.numOfIncrrctNoneTrgt);

    var numOfTotalNonTrgt = numOfCrrctNoneTrgt + numOfIncrrctNoneTrgt;
    var NonTargerAntiRes = 0;

    for(var i=0; i < featureList.stateList.length; i++){
        var tagetstate = parseInt(featureList.stateList[i]);
        var ResponseTime = parseFloat(featureList.responseTimeList[i]);

        
        if(tagetstate == 2 && ResponseTime <= 0.15 && ResponseTime > 0){
            TargerAntiRes++;
        }
    }

    var result = 1 - (numOfIncrrctNoneTrgt / (numOfTotalNonTrgt - NonTargerAntiRes));

    return result;
}

// 주헹
function driving_04(featureList){
    var numOfWallHit = parseInt(featureList.numOfWallHit);

    if(numOfWallHit == 0){
        var result = (numOfWallHit);
    }else{
        var result = (-numOfWallHit);
    }

    return result;
}
// switch A
function driving_05(featureList){
    var numOfSwitchA = parseInt(featureList.numOfSwitchA);
    var numOfCrrctSwitchA = parseInt(featureList.numOfCrrctSwitchA);
    var numOfInCrrctSwitchA = numOfSwitchA - numOfCrrctSwitchA;

    var SwitchAAntiRes = 0;

    for(var i=0; i < featureList.resTimeListSwitchA.length; i++){
        var resTimeSwitchA = parseInt(featureList.resTimeListSwitchA[i]);
        
        if(resTimeSwitchA <= 0.15 && resTimeSwitchA > 0){
            SwitchAAntiRes++;
        }
    }

    var result = 1 - (numOfInCrrctSwitchA / (numOfSwitchA - SwitchAAntiRes));

    return (result * w);
}

// switch B
function driving_06(featureList){
    var numOfSwitchB = parseInt(featureList.numOfSwitchB);
    var numOfCrrctSwitchB = parseInt(featureList.numOfCrrctSwitchB);
    var numOfInCrrctSwitchB = numOfSwitchB - numOfCrrctSwitchB;

    var SwitchBAntiRes = 0;

    // for(var i=0; i < featureList.resTimeListSwitchA.length; i++){
    //     var resTimeSwitchA = parseInt(featureList.resTimeListSwitchA[i]);
        
    //     if(resTimeSwitchA <= 0.15 && resTimeSwitchA > 0){
    //         SwitchAAntiRes++;
    //     }
    // }

    var result = 1 - (numOfInCrrctSwitchB / (numOfSwitchB - SwitchBAntiRes));

    return (result * w);
}

// switch C
function driving_07(featureList){
    var numOfSwitchC = parseInt(featureList.numOfSwitchC);
    var numOfCrrctSwitchC = parseInt(featureList.numOfCrrctSwitchC);

    var result = numOfCrrctSwitchC/numOfSwitchC;

    return (result * w);
}

// switch D
function driving_08(featureList){
    var numOfSwitchD = parseInt(featureList.numOfSwitchD);
    var numOfCrrctSwitchD = parseInt(featureList.numOfCrrctSwitchD);

    var result = numOfCrrctSwitchD/numOfSwitchD;

    return (result * w);
}

// 연속점수 식
function driving_09(featureList){
    var cnsctvSuccessList = featureList.cnsctvSuccessList;
    var cnsctvSuccess = find_array_max(cnsctvSuccessList);

    var formula25 = formula_2_5(cnsctvSuccess,cnsctvSuccess,x,y,z);

    var result = formula25;

    return result
}



// 공격 훈련 
// "featureList" : {
//     "vld": true, 
//     "stateList": [2, 6, 4, 5, 1, 2, 6, 1, 2, 6, 2, 6, 1, 5, 3, 6, 3, 1, 5, 4, 6, 2, 4, 6, 4, 1, 6, 2, 1, 6, 4, 6, 3, 4, 6, 6, 3, 4, 5, 3, 6, 4, 6, 3, 6, 1, 6, 5, 3, 6, 4, 5, 1, 3, 4, 6, 6], 
//     "numOfBullet": 25, 
//     "successList": [true, true, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false, true, true, true, true, true, true, true, true, true, true, true, false, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false, false, true, false, true, true, false, true, true], 
//     "responseTimeList": [1.02, -1, -1, -1, 1.69, 0.9, -1, 1.2, 0.85, -1, 0.95, -1, 1.05, 0.5, 1.35, -1, 1.3, 1.79, 0.28, 3.5, -1, -1, 0.95, -1, 0.95, 2.09, -1, 1.17, 1.65, -1, 1.27, -1, 1.47, -1, -1, -1, 0.93, 1.23, 0.3, 1.77, -1, 0.88, -1, 1.03, -1, 1.97, -1, -1, -1, -1, 0.92, -1, 1.33, 1.27, -1, -1, -1], 
//     "numOfSwitchA": 9, 
//     "numOfSwitchB": 13, 

//     // "numOfSwitchE": 4, 
//     // "numOfSwitchF": 8, 

//     "numOfSwitchA_": 2, 
//     "numOfSwitchB_": 3, 
    
//     "performanceTime": 95.72, 
    
//     "numOfAvoidBullet": 20, 



//     "cnsctvSuccessList": [1, 15, 10, 12, 1, 1], 
//     "numOfCrrctSwitchA": 9, 
//     "numOfCrrctSwitchB": 9, 
//     "numOfCrrctSwitchA_": 2, 
//     "numOfCrrctSwitchB_": 1, 
    
//     // "numOfObsCrrctSwitchE": 0, 
//     // "numOfObsCrrctSwitchF": 5, 

//     "numOfSwitchCBlue": 3, 
//     "numOfSwitchDBlue": 6, 
//     "numOfSwitchCYellow": 5, 
//     "numOfSwitchDYellow": 7, 

//     "numOfCrrctSwitchCBlue": 2, 
//     "numOfCrrctSwitchDBlue": 5, 
//     "numOfCrrctSwitchCYellow": 5, 
//     "numOfCrrctSwitchDYellow": 6, 
    
//     // "numOfTrgtCrrctSwitchE": 4, 
//     // "numOfTrgtCrrctSwitchF": 0, 
   
//     "numOfBlueCngrntCrrctTrgt": 5, 
//     "numOfTotalBlueCngrntTrgt": 6, 
//     "numOfBlueIncngrntCrrctTrgt": 7, 
//     "numOfTotalBlueIncngrntTrgt": 10, 

//     "numOfTotalYellowCngrntTrgt": 8, 
//     "numOfYellowCngrntCrrctTrgt": 8, 
//     "numOfTotalYellowIncngrntTrgt": 8, 
//     "numOfYellowIncngrntCrrctTrgt": 7
// }

// 총알 피하기
function attack_01(featureList){

    var numOfAvoidBullet = parseInt(featureList.numOfAvoidBullet);
    var numOfBullet = parseInt(featureList.numOfBullet);

    var result = numOfAvoidBullet / numOfBullet;

    return result;
}

// 사이먼 테스크 - 집중해서 표적을 터치하는 과제
function attack_02(featureList){

    var numOfBlueCngrntCrrctTrgt = parseInt(featureList.numOfBlueCngrntCrrctTrgt);
    var numOfYellowCngrntCrrctTrgt = parseInt(featureList.numOfYellowCngrntCrrctTrgt);
    var numOfTotalBlueCngrntTrgt = parseInt(featureList.numOfTotalBlueCngrntTrgt);
    var numOfTotalYellowCngrntTrgt = parseInt(featureList.numOfTotalYellowCngrntTrgt);

    var totalCongrntTrgt = numOfTotalBlueCngrntTrgt + numOfTotalYellowCngrntTrgt;
    var CorrectCongrntTrgt = numOfBlueCngrntCrrctTrgt + numOfYellowCngrntCrrctTrgt;

    var result = CorrectCongrntTrgt / totalCongrntTrgt;

    return result;
}

// 사이먼 테스크 - Incongruent 조건일때 억제력 점수 가중치
function attack_03(featureList){

    var numOfBlueIncngrntCrrctTrgt = parseInt(featureList.numOfBlueIncngrntCrrctTrgt);
    var numOfYellowIncngrntCrrctTrgt = parseInt(featureList.numOfYellowIncngrntCrrctTrgt);
    var numOfTotalBlueIncngrntTrgt = parseInt(featureList.numOfTotalBlueIncngrntTrgt);
    var numOfTotalYellowIncngrntTrgt = parseInt(featureList.numOfTotalYellowIncngrntTrgt);

    var totalInCongrntTrgt = numOfTotalBlueIncngrntTrgt + numOfTotalYellowIncngrntTrgt;
    var CorrectInCongrntTrgt = numOfBlueIncngrntCrrctTrgt + numOfYellowIncngrntCrrctTrgt;

    var result = CorrectInCongrntTrgt / totalInCongrntTrgt;

    return (result * w);
}

// 총알 피하기 switch A
function attack_04(featureList){

    var numOfSwitchA = parseInt(featureList.numOfSwitchA);
    var numOfSwitchA_ = parseInt(featureList.numOfSwitchA_);

    var numOfCrrctSwitchA = parseInt(featureList.numOfCrrctSwitchA);
    var numOfCrrctSwitchA_ = parseInt(featureList.numOfCrrctSwitchA_);

    var totalSwitchA = numOfSwitchA + numOfSwitchA_;
    var CorrectSwitchA = numOfCrrctSwitchA + numOfCrrctSwitchA_;

    var result = CorrectSwitchA / totalSwitchA;

    return (result * w);
}

// 총알 피하기 switch B
function attack_05(featureList){

    var numOfSwitchB = parseInt(featureList.numOfSwitchB);
    var numOfSwitchB_ = parseInt(featureList.numOfSwitchB_);

    var numOfCrrctSwitchB = parseInt(featureList.numOfCrrctSwitchB);
    var numOfCrrctSwitchB_ = parseInt(featureList.numOfCrrctSwitchB_);

    var totalSwitchB = numOfSwitchB + numOfSwitchB_;
    var CorrectSwitchB = numOfCrrctSwitchB + numOfCrrctSwitchB_;

    var result = CorrectSwitchB / totalSwitchB;

    return (result * w);
}

// 총알 피하기 switch C
function attack_06(featureList){

    var numOfSwitchCBlue = parseInt(featureList.numOfSwitchCBlue);
    var numOfSwitchCYellow = parseInt(featureList.numOfSwitchCYellow);

    var numOfCrrctSwitchCBlue = parseInt(featureList.numOfCrrctSwitchCBlue);
    var numOfCrrctSwitchCYellow = parseInt(featureList.numOfCrrctSwitchCYellow);

    var totalSwitchC = numOfSwitchCBlue + numOfSwitchCYellow;
    var CorrectSwitchC = numOfCrrctSwitchCBlue + numOfCrrctSwitchCYellow;

    var result = CorrectSwitchC / totalSwitchC;

    return (result * w);
}


// 총알 피하기 switch D
function attack_07(featureList){
    
    var numOfSwitchDBlue = parseInt(featureList.numOfSwitchDBlue);
    var numOfSwitchDYellow = parseInt(featureList.numOfSwitchDYellow);

    var numOfCrrctSwitchDBlue = parseInt(featureList.numOfCrrctSwitchDBlue);
    var numOfCrrctSwitchDYellow = parseInt(featureList.numOfCrrctSwitchDYellow);

    var totalSwitchD = numOfSwitchDBlue + numOfSwitchDYellow;
    var CorrectSwitchD = numOfCrrctSwitchDBlue + numOfCrrctSwitchDYellow;

    var result = CorrectSwitchD / totalSwitchD;

    return (result * w);
}


// 연속점수 식
function attack_08(featureList){
    var cnsctvSuccessList = featureList.cnsctvSuccessList;
    var cnsctvSuccess = find_array_max(cnsctvSuccessList);

    var formula25 = formula_2_5(cnsctvSuccess,cnsctvSuccess,x,y,z);

    var result = formula25;

    return result
}


module.exports = router;