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




// 개인정보처리방침
router.get('/', function(req,res){
  res.sendFile(path.join(__dirname ,"../public/html/common/privacypolicy.html"))
})

// 이용약관
router.get('/user', function(req,res){
  res.sendFile(path.join(__dirname ,"../public/html/common/terms.html"))
})



module.exports = router;
