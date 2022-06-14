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
  console.log(req.user)
  var id = req.user; //현재 로그인한 아이디
  res.sendFile(path.join(__dirname ,"../public/html/user_create.html"))
});

//회원가입
router.post('/add', async (req, res, next) =>{
  console.log("USER ADD IN !!!!!");
  console.log(req)
  console.log(req.body)

 
  
  await db.query("select * from userInfo where id = ?", [req.body.user_id], (err, data) =>{
    if(err){
      console.log(err)
    }
    var hash = bcrypt.hash(req.body.user_pwd, 10);
    console.log(hash)

    console.log(data)
    if(!data){
      res.json({"resultCode":"100", "resultString":"회원가입 실패했습니다."})
    }else{
      console.log("QWQ")
      bcrypt.hash(req.body.user_pwd, 10, (err, encryptedPassword)=>{
        
        db.query("insert into userInfo (id, pw, name, gender, phoneNum, birth, date) values(?,?,?,?,?,?, now())", [req.body.user_id, encryptedPassword, req.body.kidname, req.body.kidgender, req.body.user_phone, req.body.kidbirth], (err, data) =>{
          if(err){
            console.log(err)
          }
  
          res.json({"resultCode":"0", "resultString":"회원가입 성공했습니다."})
      })
      });
     
      // console.log(hash)

       
    }

    

  })

   

//   try{
//     var findid = ""
//     var finduser = await sequelize.query("select * from tbl_users where user_id =(:user_id);", {
//       replacements: {user_id : param[0]},
//       type: sequelize.QueryTypes.SELECT, 
//       row:true
//     }).then(function(result){
//       findid = result
//     });
//     console.log(findid)
//     if(findid.length > 0){
//       console.log('이미 가입된 아이디 입니다.')
//       res.json({'resultCode': '100', "resultString" : "이미 가입된 아이디입니다."})
//       return res.sendFile(path.join(__dirname ,"../public/html/user_create.html"))
//     }
//     var hash = await bcrypt.hash(param[1], 12);
//     var user = sequelize.query("insert into tbl_users(user_id, user_pwd) values (?,?);", {
//       replacements: [param[0],hash] ,
//       type: sequelize.QueryTypes.INSERT, 
//       row:true
//     });
//     res.json({'resultCode': '0', "resultString" : "회원가입 성공했습니다."})
    
//   }catch(err){
//     console.log(err)
//     res.json({'resultCode': '100', "resultString" : "회원가입 실패했습니다."})
//   }
    
//     res.end()
}
)


//아이디 중복 확인
router.get('/add',  (req, res, next) =>{
  
  console.log("USER DUPLICATE CHECK IN !!!!!");
  console.log(req)
  console.log(req.query)

  db.query("select * from userInfo where id = ?", [req.query.user_id], (err, data) =>{
    if(err){
      console.log(err)
    }

    console.log(data)
   

    if(data.length > 0){
      res.json({"resultCode":"100", "resultString":"사용중인 아이디입니다."})
    }else{
          res.json({"resultCode":"0", "resultString":"사용가능한 아이디입니다."})
      
      }
 
    })

})



//비밀번호 수정
router.put('/add',  (req, res, next) =>{
  console.log("121212")
  console.log(req.body, req.user)

  // const result = bcrypt.compare(user_pwd, findid[0].passwd);
  db.query("select * from tbl_Userinfo where email = ?", [req.user], (err, data) =>{
    if(err){
      console.log(err)
    }
    console.log(data)
     bcrypt.compare(req.body.user_pwd, data[0].passwd, function(err, result){
       console.log(result)
      if(result == true){
        bcrypt.hash(req.body.new_pwd, 10, (err, encryptedPassword)=>{
          
          db.query("update tbl_Userinfo set passwd = ?, updatedate = now() where email = ?", [encryptedPassword, req.user], (err, data) =>{
            if(err){
              console.log(err)
            }
    
            console.log("비밀번호 수정된")
          })
        })
  
  
        res.json({"resultCode":"100", "resultString":"비밀번호가 변경되었습니다." })
  
      }else{
            res.json({"resultCode":"0", "resultString":"비밀번호가 올바르지 않습니다."})
        
        }
    });
  

    
 
    })

})


module.exports = router;
