var express = require('express');
var app = express()
var router = express.Router();
var path = require('path')
const db = require("../config/db");

const bodyParser = require('body-parser');
var bcrypt = require('bcrypt')
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
// const { runInContext } = require('vm');

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

router.get('/', function(req,res) {
    console.log(__dirname)
    res.sendFile(path.join(__dirname ,"../public/html/company_news.html"))
    // res.sendFile((__dirname + "../public/html/profile_modify.html"))
});

router.get('/newslist', function(req,res){


    db.query("select * from CompanyNews where use_yn = 'Y'", (err,data)=>{
        // console.log(data)
        
        res.json({"resultCode":0, "data": data})
    })
})

router.delete('/newslist', function(req,res){
    console.log("rrr",req.body)

    let rownum = req.body.rownum
    console.log(rownum)

    db.query("update CompanyNews set use_yn = 'N' where rownum= ? ", [rownum], (err,data)=>{
        console.log("성공")
        
        res.json({"resultCode":0, "resultString": "삭제 되었습니다."})  
    })
})



module.exports = router;

