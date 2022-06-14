var express = require('express');
var app = express()
var router = express.Router();
var path = require('path')
var {User} = require('../models');
var session = require("express-session")
var flash = require("connect-flash")
const db = require("../config/db");

const jwt = require('jsonwebtoken');

//로그인 세션
app.use(session({
    secret:'keyboard cat',
    resave: false,
    saveUninitialized : true
}))


const bodyParser = require('body-parser');
// const { sequelize } = require('../models'); 
var bcrypt = require('bcrypt')
var passport = require('passport');
    LocalStrategy = require('passport-local').Strategy;

app.use(passport.initialize())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))


app.use(passport.session())
app.use(flash())

router.get('/', function(req,res) {
  console.log(__dirname)
  res.sendFile(path.join(__dirname ,"../public/html/login.html"))
});

passport.serializeUser(function(user, done){
    done(null,user.id)
});

passport.deserializeUser(function(id, done){
    done(null, id)
});

passport.use('local', new LocalStrategy({
    usernameField: 'user_id', // req.body.email 라고 명시적으로 알려줌 (정확한 명을 넣어야한다.)
    passwordField: 'user_pwd'
  }, async ( user_id, user_pwd, done) => { // 함수가 추가된다.
    try {
        console.log("!@#!@#")
        console.log(user_id)
        console.log("!@#!@#2")
    //   const user = await User.findOne({ // 로그인 시도에서 이메일 있는 조건으로 찾아보기.
    //     where: { user_id }
        
    //   });
        var findid = ""
        const query = "select * from tbl_Userinfo where email = (?);"
        db.query(query, [user_id], (err, data) => {
          // console.log(data)
          // console.log(data[0].email)
          // findid = data
          if (err) return done(err);
          console.log("1111")
 
          if (data.length == 0) {
            console.log("들어옴?")
            // passport에서는 res로 응답이 아닌, 우선 done으로 처리를 한다.
           
            return done(null, false, { reason: '이메일이 일치하지 않습니다.'});
          }

          // const result = bcrypt.compare(user_pwd, data[0].passwd);
          // console.log("123123123",result)

          bcrypt.compare(user_pwd, data[0].passwd, function(err, result){
            console.log("vfdgdfdhhgdhhd")
            if(result == true){
              console.log("맞맞맞")
              if(!data[0].firstlogintime){
              console.log("!1111111")
              db.query("update tbl_Userinfo set loginupdate = now(), firstlogintime = now() where email = ?", [user_id],(err, data) =>{
              })
              }else{
              console.log("?????")
              db.query("update tbl_Userinfo set loginupdate = now(), firstlogintime = now() where email = ?", [user_id],(err, data) =>{})
              }
              return done(null,  { reason: '비밀번호가 일치.' , id: user_id, passwd:data[0].passwd}); // 두번째 user는 성공의 의미
            }else{
              console.log("틀틀틀")
              return done(null, false, { id: '비밀번호가 일치하지 않습니다.' });
            }
          })
  
          
        })

        
      
    } catch (err) {
      console.error(err);
      return done(err); // done의 첫번째 인자는 서버 에러시 넣는다.
    }
  }));


//로그인 - 웹
router.post('/in', async (req, res, next) =>{
    console.log("LOGIN IN!! web API")
    // console.log(req)
    console.log(req.body)
    user_id = req.body.user_id
    user_pwd = req.body.user_pwd

  
    passport.authenticate('local', (err, user, info) => { // 여기서 local를 실행한다.
        console.log("LOGIN IN!!", user)
        if (err) { // 서버 에러
          console.error(err);
          return next(err);
        }
        if (!user) { // 클라이언트 에러 (비밀번호가 틀렸거나, 계정이 없거나), info.reason에 에러 내용이 있음.
         
          next_url = "/login"
            return res.json({'resultCode': '100', "resultString" : "로그인 실패했습니다.",  "next_url" : next_url});
        //   return res.status(403).send(info.reason);
        }

        req.login(user, function(err){
            if(err){ return next(err);}
            
            const token = jwt.sign(
                      { email: user.id, passwd:user.passwd },
                      'jwt-secret-key'
             );
            console.log(token);

            const decode = jwt.verify(token, 'jwt-secret-key');
            console.log(decode);
            // console.log(user)
            
            db.query("update tbl_Userinfo set login_token = ? where email = ?", [token, user.id],(err, data) =>{})
                      
            next_url = "/"
            return res.json({'resultCode': '0', "resultString" : "로그인 되었습니다.", "jwt_token" : token , "next_url" : next_url });
        })
        
      })(req, res, next);
})


//로그인 - APP
router.post('/applogin', async (req, res, next) =>{
  console.log("app LOGIN!! APP API")
  console.log(req)
  console.log(req.body)
  user_id = req.body.user_id
  user_pwd = req.body.user_pwd


  passport.authenticate('local', (err, user, info) => { // 여기서 local를 실행한다.
      console.log("app LOGIN!!", user);
      if (err) { // 서버 에러
        console.error(err);
        return next(err);
      }
      if (!user) { // 클라이언트 에러 (비밀번호가 틀렸거나, 계정이 없거나), info.reason에 에러 내용이 있음.
       
          return res.json({'resultCode': '100', "resultString" : "로그인 실패했습니다.", "jwttoken" : null, "profiledata" : null});
          
      //   return res.status(403).send(info.reason);
      }

      req.login(user, function(err){
          if(err){ return next(err);}
          
          const token = jwt.sign(
            { email: user.id, passwd:user.passwd },
            'jwt-secret-key'
          );
          console.log(token);

          const decode = jwt.verify(token, 'jwt-secret-key');
          console.log(decode);

          
          db.query("update tbl_Userinfo set login_token = ? where email = ?", [token, user.id],(err, data) =>{})
          var query = "select icon_idx idx, rownum, email, kidname, freechk, payment from profile where email = ? and use_yn='Y';"
    
          var profile_data = 0 ;
          db.query(query, [user.id], (err,data)=>{
              if(err){
                  console.log(err)
              }
              var string=JSON.stringify(data);
              var json =  JSON.parse(string);

              console.log("CHECK!")
              console.log(json)

              profile_data = json
              
              return res.json({'resultCode': '0', "resultString" : "로그인 되었습니다.", "jwttoken" : token, "profiledata" : profile_data});
          })       
      })


    })(req, res, next);
})

isLoggedin = function(req, res, next){
    if(req.isAuthenticated()){
        next();
    } 
    else {
        req.flash('errors', {login:'Please login first'});
        res.redirect('/login');
    }
    }

noPermission = function(req, res){
    req.flash('errors', {login:"You don't have permission"});
    req.logout();
    res.redirect('/login');
    }

router.post('/logout', isLoggedin,  (req, res) => {
  // console.log(req)
    db.query("update tbl_Userinfo set login_token = null where email = ?", [req.user],(err, data) =>{
      console.log("들어옴")
    })
    req.logOut();
    req.session.destroy();
    res.json({'resultCode': '0', "resultString": "로그아웃 되었습니다."});
  });


module.exports = router;