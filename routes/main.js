var express = require('express');
var app = express()
var router = express.Router();
var path = require('path')
const bodyParser = require('body-parser');
const db = require("../config/db");

// localhost:5200/main 브라우저에 res.sendFile() 내부의 파일이 띄워진다.
router.get('/', function(req,res) {

    console.log(req.user)
    current_user = req.user
    res.sendFile(path.join(__dirname ,"../public/html/main.html"))
});

router.get('/currenuser', function(req,res) {
    console.log(req.user)
    current_user = req.user
    res.send(current_user)
});

router.get('/currentuser_profile', function(req,res) {
    console.log(req.user)
    current_user = req.user

    // var query = "select * from profile where (kidname = (select kidname1 from tbl_Userinfo where email =?) or kidname = (select kidname2 from tbl_Userinfo where email =?)"
    // query += "or kidname = (select kidname3 from tbl_Userinfo where email =? )) and email = ?;"
    var query = "select * from profile where email = ? and use_yn='Y';"
    
    db.query(query, [req.user, req.user, req.user, req.user], (err,data)=>{
        if(err){
            console.log(err)
        }
        // console.log("@3")
        // console.log(data)
        res.send(data)
    })
});

/// 현재 유저의 선택된 프로필
router.get('/currentuser/currentprofile', function(req,res) {
    console.log(req.user)
    console.log(req.query)
    console.log(req.query.kidname)

    current_user = req.user
    kidname = req.query.kidname
    var query = "select * from profile where email = ? and kidname = ? and use_yn='Y'"
    
    db.query(query, [current_user,kidname], (err,data)=>{
        if(err){
            console.log(err)
        }
   
        console.log(data)
        res.send(data)
    })
});

// **항상 맨밑!!
module.exports = router;

