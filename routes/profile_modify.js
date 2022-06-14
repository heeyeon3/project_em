var express = require('express');
var app = express()
var router = express.Router();
var path = require('path')
const bodyParser = require('body-parser');
const db = require("../config/db");


router.get('/', function(req,res) {
    console.log(__dirname)
    res.sendFile(path.join(__dirname ,"../public/html/profile_modify.html"))
    // res.sendFile((__dirname + "../public/html/profile_modify.html"))
});


router.post('/add', async function(req,res) {
    console.log("!@1212")
    console.log("12",req.user)
    current_user = req.user
    console.log(req.body)
    
    await db.query("select * from profile where email =? and kidname = ? and use_yn ='Y'",
    [req.user, req.body.kidname], (err, data)=>{
        console.log("12")
        console.log("1",data)
        console.log("1",data.length)
        aaa = data
        if(data.length != 0){
            console.log("@#1")
            return res.json({"resultCode":"0", "resultString":"kidname이 중복되었습니다."})
        }else{
            console.log("12333333")
            db.query("insert into profile (email, kidname, icon_idx, birthday, gender, freechk, payment, use_yn, regdate) values(?,?,'1',?,?,'N','N','Y', now());",
            [req.user ,req.body.kidname, req.body.birthday, req.body.gender], (err, data)=>{
                console.log("@#")
                if(err){
                    console.log("실패")
                    console.log(err)
                    
                    res.json({"resultCode":"100", "resultString":"error"})
                } 

                
                
                db.query("select rownum from profile where email =? and kidname = ?", [req.user,req.body.kidname], (err, data)=>{
                    console.log(data[0].rownum)
                    kidname_rownum = data[0].rownum
                    let lockedtrue = "{\"locked\": true, \"clearStarNum\": 0}"
                    let lockedfalse =  "{\"locked\": false, \"clearStarNum\": 0}"

                    db.query("insert into ChapterAttackSave values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, now(), now())",
                    [kidname_rownum, req.user, lockedtrue, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse,  lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, ])
                    
                    db.query("insert into ChapterDrivingSave values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, now(), now())",
                    [kidname_rownum, req.user, lockedtrue, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse,  lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, lockedfalse, ])
                    
                    db.query("insert into QuestSave values (?, ?, ?, ?, ?, ?, now(), now())",
                    [kidname_rownum, req.user, "{\"get\": false, \"questLv\": 6, \"currentNum\": 0}", "{\"get\": false, \"questLv\": 6, \"currentNum\": 0}","{\"get\": false, \"questLv\": 6, \"currentNum\": 0}","{\"get\": false, \"questLv\": 6, \"currentNum\": 0}"])
                    
                    db.query("insert into RabbitSave values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, now(), now())",
                    [kidname_rownum, req.user, "{\"lv\": 1, \"get\": false, \"equip\": false, \"canBuy\": false}","{\"lv\": 1, \"get\": false, \"equip\": false, \"canBuy\": false}", "{\"lv\": 1, \"get\": false, \"equip\": false, \"canBuy\": false}", "{\"lv\": 1, \"get\": false, \"equip\": false, \"canBuy\": false}", "{\"lv\": 1, \"get\": false, \"equip\": false, \"canBuy\": false}", "{\"lv\": 1, \"get\": false, \"equip\": false, \"canBuy\": false}", "{\"lv\": 1, \"get\": false, \"equip\": false, \"canBuy\": false}", "{\"lv\": 1, \"get\": false, \"equip\": false, \"canBuy\": false}"])
                    
                    db.query("insert into RocketSave values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, now(), now())",
                    [kidname_rownum, req.user, "{\"lv\": 1, \"get\": false, \"equip\": false, \"canBuy\": false}","{\"lv\": 1, \"get\": false, \"equip\": false, \"canBuy\": false}", "{\"lv\": 1, \"get\": false, \"equip\": false, \"canBuy\": false}", "{\"lv\": 1, \"get\": false, \"equip\": false, \"canBuy\": false}", "{\"lv\": 1, \"get\": false, \"equip\": false, \"canBuy\": false}", "{\"lv\": 1, \"get\": false, \"equip\": false, \"canBuy\": false}", "{\"lv\": 1, \"get\": false, \"equip\": false, \"canBuy\": false}", "{\"lv\": 1, \"get\": false, \"equip\": false, \"canBuy\": false}"])
                    
                    db.query("insert into ScoreSave values (?, ?, ?, ?, ?, ?, ?, ?, now(), now())", 
                    [kidname_rownum, req.user, "{\"data\": 0}","{\"data\": 0}","{\"data\": 0}","{\"data\": 0}","{\"data\": 0}","{\"data\": 0}" ])
                    
                    db.query("insert into StatSave (id, email, Score, Gold, HP, AttackDamage, regdate) values (?, ?, ?, ?, ?, ?, now())",
                    [kidname_rownum, req.user, "{\"currentLV\": 1}", "{\"currentLV\": 1}", "{\"currentLV\": 1}", "{\"currentLV\": 1}"])
            
                    db.query("select * from tbl_Userinfo where email =?", [req.user], (err, data)=>{
                        console.log(data[0].kidname)
                        if(!data[0].kidname1){
                            
                            db.query("update tbl_Userinfo set kidname1 = ? where email = ?", [kidname_rownum, req.user], (err,data)=>{
                                return res.json({"resultCode":"0", "resultString":"등록되었습니다."})
                            })
                        }else if(!data[0].kidname2){
                            
                            db.query("update tbl_Userinfo set kidname2 = ? where email = ?", [kidname_rownum, req.user], (err,data)=>{
                                return res.json({"resultCode":"0", "resultString":"등록되었습니다."})
                            })
                        }else if(!data[0].kidname3){
                            
                            db.query("update tbl_Userinfo set kidname3 = ? where email = ?", [kidname_rownum, req.user], (err,data)=>{
                                return res.json({"resultCode":"0", "resultString":"등록되었습니다."})
                            
                            })
                        }
                
                        
                    })
            
                    }) 



            })
        }
    })

       

});

router.put('/add', function(req,res) {
    // console.log("12",req.user)
    current_user = req.user
    // console.log(req.body)

    db.query("update profile set kidname =?, birthday =?, gender=?, updatedate = now()  where rownum = ? and email = ?", 
    [req.body.kidname, req.body.birthday, req.body.gender, req.body.rownum, req.user], (err, data)=>{
        if(err){
            console.log("실패")
            console.log(err)
            
            res.json({resultCode:"100", resultString:"error"})
        }else{
            res.json({resultCode:"0", resultString:"등록되었습니다."})
        }

        
    })


    

});

router.delete('/add', function(req,res) {
    // console.log("12",req.user)
    let current_user = req.user
    // console.log(req.body)
    let kidname_rownum = req.body.rownum
    db.query("update profile set use_yn = 'N', updatedate = now()  where rownum = ? and email = ?", 
    [req.body.rownum, req.user], (err, data)=>{
        if(err){
            console.log("실패")
            console.log(err)
            
            res.json({resultCode:"100", resultString:"error"})
        }else{
            res.json({resultCode:"0", resultString:"삭제 되었습니다."})
        }

        
    })

    db.query("select * from tbl_Userinfo where email = ?", 
    [req.user], (err, data)=>{
        console.log(data)
        console.log(data[0].kidname1)
        console.log(kidname_rownum)

        if(data[0].kidname1 == kidname_rownum){
            db.query("update tbl_Userinfo set kidname1 = null where email = ?", [req.user], (err, data)=>{})
            console.log("111")
        }else if(data[0].kidname2 == kidname_rownum){
            db.query("update tbl_Userinfo set kidname2 = null where email = ?", [req.user])
            console.log("1222")
        }else if(data[0].kidname3 == kidname_rownum){
            db.query("update tbl_Userinfo set kidname3 = null where email = ?", [req.user])
            console.log("12333")
        }
        // if(err){
        //     console.log("실패")
        //     console.log(err)
            
        //     res.json({resultCode:"100", resultString:"error"})
        // }else{
        //     res.json({resultCode:"0", resultString:"등록되었습니다."})
        // }

        
    })

});

module.exports = router;