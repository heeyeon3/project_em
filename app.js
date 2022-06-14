// node_modules 에 있는 express 관련 파일을 가져온다.
var express = require('express');

// express 는 함수이므로, 반환값을 변수에 저장한다.
var app = express();

var bodyParser = require('body-parser')
const cors = require('cors');
app.use(cors());

// var ejs = require('ejs')

// app.set('views',__dirname + "/views")
// app.set('view engine', 'ejs')
// app.engine('html', ejs.renderFile)

//로그인 관련 
var passport = require('passport');
var localstratege = require('passport-local').Strategy;
var session = require("express-session")
var flash = require("connect-flash")

// 3000 포트로 서버 오픈
app.listen(5200, function() {
    console.log("start! express server on port 5200")
})

// db 실시간 연동
var db = require('./config/db');

//로그인 세션
app.use(session({
    secret:'keyboard cat',
    resave: false,
    saveUninitialized : true
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

// app.use(router)



// public 디렉토리를 static으로 기억한다.
// public 내부의 파일들을 localhost:3000/파일명 으로 브라우저에서 불러올 수 있다.
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))



var usersRouter = require('./routes/users');
app.use('/user', usersRouter);

var main = require("./routes/main")
app.use("/main", main)

var login = require("./routes/login")
app.use("/login", login)


// var policy = require('./routes/policy');
// app.use('/privacypolicy', policy);


// app.get('/main', function(req,res) {
//     res.sendFile(__dirname + "/public/html/main.html")
// })




var bcrypt = require('bcrypt')


//첫 화면 main화면 
app.get('/', async function(req, res){
        
    
    res.sendFile(__dirname + "/public/html/main.html")

    // var findid = ""
    // var finduser = await sequelize.query("select * from tbl_Userinfo;", {
    //     type: sequelize.QueryTypes.SELECT, 
    //     row:true,
    // }).then(function(result){
    //     findid = result
    //     console.log("findid", findid)
    //     console.log("findid", findid.length)
    // });
    // if(findid.length == 0){
    //     var hash = await bcrypt.hash('admin123!@#', 12);
    //     var addadmin = sequelize.query("insert into tbl_Userinfo(id, email, passwd, phonenum, adultcertification, regdate) values(NULL,?,?,?,?,now());", {
    //         replacements: ['admin',hash, "01012345678",'Y'],
    //         type: sequelize.QueryTypes.insert, 
    //         row:true,
    //     }).then(function(result){
    //         findid = result
    //         console.log("findid", findid)
    //         console.log("findid", findid.length)
    //     });
    // }
})

app.get('/company_info', function(req,res) {
    console.log(__dirname)
    res.sendFile((__dirname + "/public/html/company_info.html"))
});

app.get('/mypage_info', function(req,res) {
    console.log(__dirname)
    res.sendFile((__dirname + "/public/html/mypage_info.html"))
});

app.get('/buy_mng', function(req,res) {
    console.log(__dirname)
    res.sendFile((__dirname + "/public/html/buy_mng.html"))
});

app.get('/buy_sel', function(req,res) {
    console.log(__dirname)
    res.sendFile((__dirname + "/public/html/buy_sel.html"))
});


app.get('/buy_cancel', function(req,res) {
    console.log(__dirname)
    res.sendFile((__dirname + "/public/html/buy_cancel.html"))
});


app.get('/mypage_phone', function(req,res) {
    console.log(__dirname)
    res.sendFile((__dirname + "/public/html/mypage_phone.html"))
});

app.get('/digitalchart_info', function(req,res) {
    console.log(__dirname)
    res.sendFile((__dirname + "/public/html/digitalchart_info.html"))
});

app.get('/digitalchart_land', function(req,res) {
    console.log(__dirname)
    res.sendFile((__dirname + "/public/html/digitalchart_land.html"))
});

// 째깍섬결과
app.get('/assess/digitalchart_result', function(req,res){
    res.sendFile((__dirname + "/public/html/digitalchart_result.html"))
})


app.get('/digitalchart_info2', function(req,res) {
    console.log(__dirname)
    res.sendFile((__dirname + "/public/html/digitalchart_info2.html"))
});


app.get('/digitalchart_result2', function(req,res) {
    console.log(__dirname)
    res.sendFile((__dirname + "/public/html/digitalchart_result2.html"))
});

app.get('/mypage_pw', function(req,res) {
    console.log(__dirname)
    res.sendFile((__dirname + "/public/html/mypage_pw.html"))
});

app.get('/mypage_out', function(req,res) {
    console.log(__dirname)
    res.sendFile((__dirname + "/public/html/mypage_out.html"))
});

app.get('/faq', function(req,res) {
    console.log(__dirname)
    res.sendFile((__dirname + "/public/html/faq.html"))
});

app.get('/join_phone', function(req,res) {
    console.log(__dirname)
    res.sendFile((__dirname + "/public/html/join_phone.html"))
});

app.get('/join_account', function(req,res) {
    console.log(__dirname)
    res.sendFile((__dirname + "/public/html/join_account.html"))
});

app.get('/find_email', function(req,res) {
    console.log(__dirname)
    res.sendFile((__dirname + "/public/html/find_email.html"))
});

app.get('/find_pw', function(req,res) {
    console.log(__dirname)
    res.sendFile((__dirname + "/public/html/find_pw.html"))
});



var profile_modify = require("./routes/profile_modify")
app.use("/profile_modify", profile_modify)



app.get('/edu_info', function(req,res) {
    console.log(__dirname)
    res.sendFile((__dirname + "/public/html/edu_info.html"))
});

app.get('/company_info', function(req,res) {
    console.log(__dirname)
    res.sendFile((__dirname + "/public/html/company_info.html"))
});

app.get('/company_ci', function(req,res) {
    console.log(__dirname)
    res.sendFile((__dirname + "/public/html/company_ci.html"))
});

// app.get('/company_news', function(req,res) {
//     console.log(__dirname)
//     res.sendFile((__dirname + "/public/html/company_news.html"))
// });

const company_news = require("./routes/company_news")
app.use("/company_news", company_news)


app.get('/star_info', function(req,res) {
    console.log(__dirname)
    res.sendFile((__dirname + "/public/html/star_info.html"))
});

const assessinfo = require("./routes/assessinfo")
app.use("/assessinfo", assessinfo)

const enhanceInfo = require("./routes/enhanceInfo")
app.use("/enhanceInfo", enhanceInfo)


app.get('/buy_sel', function(req,res){
    res.sendFile((__dirname + "/public/html/buy_sel.html"))
})

app.get('/service_star', function(req,res){
    res.sendFile((__dirname + "/public/html/service_star.html"))
})

app.get('/service_adhd', function(req,res){
    res.sendFile((__dirname + "/public/html/service_adhd.html"))
})

app.get('/service_land', function(req,res){
    res.sendFile((__dirname + "/public/html/service_land.html"))
})

app.get('/digitalchart_info', function(req,res){
    res.sendFile((__dirname + "/public/html/digitalchart_info.html"))
})

// app.get('/digitalchart_land', function(req,res){
//     res.sendFile((__dirname + "/public/html/digitalchart_land.html"))
// })


app.get('/profile_select_modify', function(req,res){
    res.sendFile((__dirname + "/public/html/profile_select_modify.html"))
})




//  째깍악어 게임
// let ticto_route = require("./routes/ticto");

// app.use('/',ticto_route);

app.get('/ticto', function(req,res){
    res.sendFile((__dirname + "/public/ticto/html/gamestart.html"))
})

app.get('/ticto/touch', function(req,res){
    res.sendFile((__dirname + "/public/ticto/html/touch.html"))
})

app.get('/ticto/gonogo', function(req,res){
    res.sendFile((__dirname + "/public/ticto/html/gonogo.html"))
})

app.get('/ticto/wisc', function(req,res){
    res.sendFile((__dirname + "/public/ticto/html/wisc.html"))
})

app.get('/ticto/memory', function(req,res){
    res.sendFile((__dirname + "/public/ticto/html/memory.html"))
})

app.get('/ticto/dccs', function(req,res){
    res.sendFile((__dirname + "/public/ticto/html/dccs.html"))
})

app.get('/ticto/end', function(req,res){
    res.sendFile((__dirname + "/public/ticto/html/gameend.html"))
})

// 개인정보처리방침
app.get('/privacypolicy', function(req,res){
    res.sendFile((__dirname + "/public/html/privacypolicy.html"))
})

// 이용약관
app.get('/terms', function(req,res){
    res.sendFile((__dirname + "/public/html/terms.html"))
})



// 데이터 업데이트 API
const loginSuccess = require("./routes/login_success")
app.use("/", loginSuccess)