var express = require('express');
var app = express()
var router = express.Router();
var path = require('path')
const db = require("../config/db");

const bodyParser = require('body-parser');



//update
router.post('/ChapterAttackSave/update', function(req,res){

    console.log("ChapterAttackSave API 연동 START! ");
    console.log(req);
    console.log(typeof(req));

    let query ="update ChapterAttackSave set 0 = ?, 1 = ?, 2 = ?, 3 = ?, 4 = ?, 5 = ?, 6 = ?, 7 = ?, 8 = ?, 9 = ?, 10 = ?, 11 = ?, 12 = ?, 13 = ?, 14 = ?, 15 = ?, 16 = ?, 17 = ?, 18 = ?, 19 = ?, 20 = ?, 21 = ?, 22 = ?, 23 = ?, 24 = ?, 25 = ?, 26 = ?, 27 = ?, 28 = ?, 29 = ?,30 = ?, 31 = ?, 32 = ?, 33 = ?, 34 = ?, 35= ?, 36= ?, 37= ?, 38= ?, 39= ?, updatedate = now() where id = ? "
    db.query(query, [JSON.stringify(req.body[`0`]), JSON.stringify(req.body[`1`]), JSON.stringify(req.body[`2`]), JSON.stringify(req.body[`3`]), JSON.stringify(req.body[`4`]), JSON.stringify(req.body[`5`]), JSON.stringify(req.body[`6`]), JSON.stringify(req.body[`7`]), JSON.stringify(req.body[`8`]), JSON.stringify(req.body[`9`]), JSON.stringify(req.body[`10`]), JSON.stringify(req.body[`11`]), JSON.stringify(req.body[`12`]), JSON.stringify(req.body[`13`]), JSON.stringify(req.body[`14`]), JSON.stringify(req.body[`15`]), JSON.stringify(req.body[`16`]), JSON.stringify(req.body[`17`]), JSON.stringify(req.body[`18`]), JSON.stringify(req.body[`19`]), JSON.stringify(req.body[`20`]), JSON.stringify(req.body[`21`]), JSON.stringify(req.body[`22`]), JSON.stringify(req.body[`23`]), JSON.stringify(req.body[`24`]), JSON.stringify(req.body[`25`]), JSON.stringify(req.body[`26`]), JSON.stringify(req.body[`27`]), JSON.stringify(req.body[`28`]), JSON.stringify(req.body[`29`]), JSON.stringify(req.body[`30`]), JSON.stringify(req.body[`31`]), JSON.stringify(req.body[`32`]), JSON.stringify(req.body[`33`]), JSON.stringify(req.body[`34`]), JSON.stringify(req.body[`35`]), JSON.stringify(req.body[`36`]), JSON.stringify(req.body[`37`]), JSON.stringify(req.body[`38`]), JSON.stringify(req.body[`39`]), req.query.id], (err,data)=>{
        console.log("ChapterAttackSave API 연동 END!");
        return res.json({"resultCode":"0", "resultString":"등록되었습니다."})
    })
})


router.post('/ChapterDrivingSave/update', function(req,res){

    console.log("ChapterDrivingSave API 연동 START! ");
    console.log(req);
    console.log(typeof(req));

    let query ="update ChapterDrivingSave set 0 = ?, 1 = ?, 2 = ?, 3 = ?, 4 = ?, 5 = ?, 6 = ?, 7 = ?, 8 = ?, 9 = ?, 10 = ?, 11 = ?, 12 = ?, 13 = ?, 14 = ?, 15 = ?, 16 = ?, 17 = ?, 18 = ?, 19 = ?, 20 = ?, 21 = ?, 22 = ?, 23 = ?, 24 = ?, 25 = ?, 26 = ?, 27 = ?, 28 = ?, 29 = ?,30 = ?, 31 = ?, 32 = ?, 33 = ?, 34 = ?, 35= ?, 36= ?, 37= ?, 38= ?, 39= ?, updatedate = now() where id = ? "
    db.query(query, [JSON.stringify(req.body[`0`]), JSON.stringify(req.body[`1`]), JSON.stringify(req.body[`2`]), JSON.stringify(req.body[`3`]), JSON.stringify(req.body[`4`]), JSON.stringify(req.body[`5`]), JSON.stringify(req.body[`6`]), JSON.stringify(req.body[`7`]), JSON.stringify(req.body[`8`]), JSON.stringify(req.body[`9`]), JSON.stringify(req.body[`10`]), JSON.stringify(req.body[`11`]), JSON.stringify(req.body[`12`]), JSON.stringify(req.body[`13`]), JSON.stringify(req.body[`14`]), JSON.stringify(req.body[`15`]), JSON.stringify(req.body[`16`]), JSON.stringify(req.body[`17`]), JSON.stringify(req.body[`18`]), JSON.stringify(req.body[`19`]), JSON.stringify(req.body[`20`]), JSON.stringify(req.body[`21`]), JSON.stringify(req.body[`22`]), JSON.stringify(req.body[`23`]), JSON.stringify(req.body[`24`]), JSON.stringify(req.body[`25`]), JSON.stringify(req.body[`26`]), JSON.stringify(req.body[`27`]), JSON.stringify(req.body[`28`]), JSON.stringify(req.body[`29`]), JSON.stringify(req.body[`30`]), JSON.stringify(req.body[`31`]), JSON.stringify(req.body[`32`]), JSON.stringify(req.body[`33`]), JSON.stringify(req.body[`34`]), JSON.stringify(req.body[`35`]), JSON.stringify(req.body[`36`]), JSON.stringify(req.body[`37`]), JSON.stringify(req.body[`38`]), JSON.stringify(req.body[`39`]), req.query.id], (err,data)=>{
        console.log("ChapterDrivingSave API 연동 END!");
        return res.json({"resultCode":"0", "resultString":"등록되었습니다."})
    
    })

})


router.post('/QuestSave/update', function(req,res){

    console.log("QuestSave API 연동 START! ");
    console.log(req);
    console.log(typeof(req));

    let query ="update QuestSave set GetCoinAmount = ?, GetDiaAmount= ?, GetChar=?, GetRocket = ?, updatedate = now() where id = ?"
    db.query(query, [req.query.id, JSON.stringify(req.body.GetCoinAmount), JSON.stringify(req.body.GetDiaAmount), JSON.stringify(req.body.GetChar), JSON.stringify(req.body.GetRocket)], (err,data)=>{
        console.log("QuestSave API 연동 END!");
        return res.json({"resultCode":"0", "resultString":"등록되었습니다."})
    
    })

})


router.post('/RabbitSave/update', function(req,res){

    console.log("RabbitSave API 연동 START! ");
    console.log(req);
    console.log(typeof(req));

    let query ="update RabbitSave set 0 = ?, 1= ?, 2=?, 3 = ?,4 = ?,5 = ?,6 = ?,7 = ?, updatedate = now() where id = ?"
    db.query(query, [JSON.stringify(req.body[`0`]), JSON.stringify(req.body[`1`]), JSON.stringify(req.body[`2`]), JSON.stringify(req.body[`3`]), JSON.stringify(req.body[`4`]), JSON.stringify(req.body[`5`]), JSON.stringify(req.body[`6`]), JSON.stringify(req.body[`7`]), req.query.id], (err,data)=>{
        console.log("RabbitSave API 연동 END!");
        
        return res.json({"resultCode":"0", "resultString":"등록되었습니다."})
    
    })

})


router.post('/RocketSave/update', function(req,res){

    console.log("RocketSave API 연동 START! ");
    console.log(req);
    console.log(typeof(req));

    let query ="update RocketSave set 0 = ?, 1= ?, 2=?, 3 = ?,4 = ?,5 = ?,6 = ?,7 = ?, updatedate = now() where id = ?"
    db.query(query, [JSON.stringify(req.body[`0`]), JSON.stringify(req.body[`1`]), JSON.stringify(req.body[`2`]), JSON.stringify(req.body[`3`]), JSON.stringify(req.body[`4`]), JSON.stringify(req.body[`5`]), JSON.stringify(req.body[`6`]), JSON.stringify(req.body[`7`]), req.query.id], (err,data)=>{
        console.log("RocketSave API 연동 END!");
        return res.json({"resultCode":"0", "resultString":"등록되었습니다."})
    
    })

})


router.post('/ScoreSave/update', function(req,res){

    console.log("ScoreSave API 연동 START! ");
    console.log(req);
    console.log(typeof(req));
    let query ="update ScoreSave set Gold = ?, Dia= ?, Star=?, HigherScore_Game01 = ?, HigherScore_Game02=?,Box=?,updatedate = now() where id = ?"
    db.query(query, [ JSON.stringify(req.body.Gold), JSON.stringify(req.body.Dia),JSON.stringify(req.body.Star), JSON.stringify(req.body.HigherScore_Game01), JSON.stringify(req.body.HigherScore_Game02), JSON.stringify(req.body.Box), req.query.id], (err,data)=>{
        console.log("ScoreSave API 연동 END!");
        
        return res.json({"resultCode":"0", "resultString":"등록되었습니다."})
    
    })

    

})


router.post('/StatSave/update', function(req,res){

    console.log("StatSave API 연동 START! ");
    console.log(req);
    console.log(typeof(req));
    let query ="update StatSave set Score = ?, Gold= ?, HP=?, AttackDamage = ?, updatedate = now() where id = ?"
    db.query(query, [ JSON.stringify(req.body.Score), JSON.stringify(req.body.Gold), JSON.stringify(req.body.HP), JSON.stringify(req.body.AttackDamage), req.query.id], (err,data)=>{
        console.log("StatSave API 연동 END!");
        
        return res.json({"resultCode":"0", "resultString":"등록되었습니다."})
    
    })


})


//select
router.post('/totaldata/select', function(req,res){

    console.log("/common/totaldata API 연동 START! ");
    console.log(req);
    console.log(typeof(req));
    let return_array = {"resultCode":0, "resultString" : "TOTAL DATA 전송되었습니다."} ;

    db.query("select * from ChapterAttackSave where email =? and id = ?", [req.body.user_id,req.body.rownum], (err, data)=>{
        if(err){
            console.log(err);
        }
        let ChapterAttackSave = data[0];
        return_array.ChapterAttackSave = ChapterAttackSave;

        db.query("select * from ChapterDrivingSave where email =? and id = ?", [req.body.user_id,req.body.rownum], (err, data)=>{
            if(err){
                console.log(err)
            }
            let ChapterDrivingSave = data[0];
            return_array.ChapterDrivingSave = ChapterDrivingSave;

            db.query("select * from QuestSave where email =? and id = ?", [req.body.user_id,req.body.rownum], (err, data)=>{
                if(err){
                    console.log(err)
                }
                let QuestSave = data[0];
                return_array.QuestSave = QuestSave;
                                
                db.query("select * from RocketSave where email =? and id = ?", [req.body.user_id,req.body.rownum], (err, data)=>{
                    if(err){
                        console.log(err)
                    }
                    let RocketSave = data[0];
                    return_array.RocketSave = RocketSave;
                                   
                    db.query("select * from ScoreSave where email =? and id = ?", [req.body.user_id,req.body.rownum], (err, data)=>{
                        if(err){
                            console.log(err)
                        }
                        let ScoreSave = data[0];
                        return_array.ScoreSave = ScoreSave;   
                                   
                        db.query("select * from StatSave where email =? and id = ?", [req.body.user_id,req.body.rownum], (err, data)=>{
                            if(err){
                                console.log(err)
                            }
                            let StatSave = data[0];
                            return_array.StatSave = StatSave;  
                            db.query("select * from RabbitSave where email =? and id = ?", [req.body.user_id,req.body.rownum], (err, data)=>{
                                if(err){
                                    console.log(err)
                                }
                                let RabbitSave = data[0];
                                return_array.RabbitSave = RabbitSave;  
    
                                console.log("totaldata API 연동 END!");
                                console.log(return_array);
                                return res.json(return_array)
                            });
                        });
                    });
                });
            });
        });

        
    })


})





router.post('/ChapterAttackSave/select', function(req,res){

    console.log("ChapterAttackSave API 연동 START! ");
    console.log(req);
    console.log(typeof(req));

    db.query("select * from ChapterAttackSave where email =? and id = ?", [req.body.user_id,req.body.rownum], (err, data)=>{
   
        if(err){
            console.log(err)
        }
        console.log("ChapterAttackSave API 연동 END!");

        let result = data[0];

        return res.json({"resultCode":0, "resultString" : "ChapterAttack DATA 전송되었습니다.", "data" : result})
    })    
})



router.post('/ChapterDrivingSave/select', function(req,res){

    console.log("ChapterDrivingSave API 연동 START! ");
    console.log(req);
    console.log(typeof(req));

    db.query("select * from ChapterDrivingSave where email =? and id = ?", [req.body.user_id,req.body.rownum], (err, data)=>{
   
        if(err){
            console.log(err)
        }
        console.log("ChapterDrivingSave API 연동 END!");

        let result = data[0];

        return res.json({"resultCode":0, "resultString" : "ChapterDriving DATA 전송되었습니다.", "data" : result})
    })

})


router.post('/QuestSave/select', function(req,res){

    console.log("QuestSave API 연동 START! ");
    console.log(req);
    console.log(typeof(req));
    

    db.query("select * from QuestSave where email =? and id = ?", [req.body.user_id,req.body.rownum], (err, data)=>{
   
        if(err){
            console.log(err)
        }
        console.log("QuestSave API 연동 END!");

        let result = data[0];

        return res.json({"resultCode":0, "resultString" : "Quest DATA 전송되었습니다.", "data" : result})
    })
})

router.post('/RabbitSave/select', function(req,res){

    console.log("RabbitSave API 연동 START! ");
    console.log(req);
    console.log(typeof(req));
    

    db.query("select * from RabbitSave where email =? and id = ?", [req.body.user_id,req.body.rownum], (err, data)=>{
   
        if(err){
            console.log(err)
        }
        console.log("RabbitSave API 연동 END!");

        let result = data[0];

        return res.json({"resultCode":0, "resultString" : "Rabbit DATA 전송되었습니다.", "data" : result})
    })

})


router.post('/RocketSave/select', function(req,res){

    console.log("RocketSave API 연동 START! ");
    console.log(req);
    console.log(typeof(req));
   

    db.query("select * from RocketSave where email =? and id = ?", [req.body.user_id,req.body.rownum], (err, data)=>{
   
        if(err){
            console.log(err)
        }
        console.log("RocketSave API 연동 END!");

        let result = data[0];

        return res.json({"resultCode":0, "resultString" : "Rocket DATA 전송되었습니다.", "data" : result})
    })

})


router.post('/ScoreSave/select', function(req,res){

    console.log("ScoreSave API 연동 START! ");
    console.log(req);
    console.log(typeof(req));
    

    db.query("select * from ScoreSave where email =? and id = ?", [req.body.user_id,req.body.rownum], (err, data)=>{
   
        if(err){
            console.log(err)
        }
        console.log("ScoreSave API 연동 END!");

        let result = data[0];

        return res.json({"resultCode":0, "resultString" : "Score DATA 전송되었습니다.", "data" : result})
    })

})


router.post('/StatSave/select', function(req,res){

    console.log("StatSave API 연동 START! ");
    console.log(req);
    console.log(typeof(req));
   

    db.query("select * from StatSave where email =? and id = ?", [req.body.user_id,req.body.rownum], (err, data)=>{
   
        if(err){
            console.log(err)
        }
        console.log("StatSave API 연동 END!");

        let result = data[0];

        return res.json({"resultCode":0, "resultString" : "Stat DATA 전송되었습니다.", "data" : result})
    })
})


module.exports = router;