var express = require('express')
var app = express()
var mysql = require('mysql')
var cors = require('cors')

app.use(cors())
app.set('view engine', 'ejs')

// middleware
// app.use(bodyParser.json({ type: 'applictaion/json' }))
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(require('serve-static')(path.join(__dirname, 'public')))

// 建立 REST API     
// 載往之輸入 http://127.0.0.1:3000/1/hello  呼叫API    
app.get('/1/hello', function (req, res) {
    // 建立與SQL 的連線資訊
    // console.log(queryInfo["region"])
  var con = mysql.createConnection({
    host: "192.168.21.87",
    user: "testconn",
    password: "abcd1234",
    database: "travel"
  });

  // 建立與SQL 的連線
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
  });

  // Demo Select 語法
  con.query('SELECT * FROM restaurant where region_id = 900301;', function (error, rows, fields) {
    //檢查是否有錯誤
    if (error) {
      throw error;
    }
    // var user = rows[5].CompanyName;

  //   for (var i = 0; i < rows.length; i++) {
  //     var row = rows[i];
  //     res.json(row);
  // }
    // res.json(user);

var arr = [];
//印出拿到的ROW
    rows.forEach(rowselement => {
      // console.log(rowselement.CompanyName);
      var row = rowselement;
      arr.push(row);
    });

    res.json({ msg: arr});
  });

//回應JSON 字串 之後可改成資料庫中的資料

  // res.json({ msg: 'Hello World' })
})
// ############################################?
app.get('/2/hello', function (req, res) {
  // 建立與SQL 的連線資訊
  // console.log(queryInfo["region"])
var con = mysql.createConnection({
  host: "192.168.21.87",
  user: "testconn",
  password: "abcd1234",
  database: "travel"
});

// 建立與SQL 的連線
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

// Demo Select 語法
con.query('SELECT * FROM hotel where reigien_id = 9003;', function (error, rows, fields) {
  //檢查是否有錯誤
  if (error) {
    throw error;
  }
  // var user = rows[5].CompanyName;

//   for (var i = 0; i < rows.length; i++) {
//     var row = rows[i];
//     res.json(row);
// }
  // res.json(user);

var arr = [];
//印出拿到的ROW
  rows.forEach(rowselement => {
    // console.log(rowselement.CompanyName);
    var row = rowselement;
    arr.push(row);
  });

  res.json({ msg: arr});
});

//回應JSON 字串 之後可改成資料庫中的資料

// res.json({ msg: 'Hello World' })
})

// ----------------------------------------------------------------------------------------------
app.get('/3/hello', function (req, res) {
  // 建立與SQL 的連線資訊
  // console.log(queryInfo["region"])
var con = mysql.createConnection({
  host: "192.168.21.87",
  user: "testconn",
  password: "abcd1234",
  database: "travel"
});

// 建立與SQL 的連線
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

// Demo Select 語法
con.query('SELECT * FROM views;', function (error, rows, fields) {
  //檢查是否有錯誤
  if (error) {
    throw error;
  }
  // var user = rows[5].CompanyName;

//   for (var i = 0; i < rows.length; i++) {
//     var row = rows[i];
//     res.json(row);
// }
  // res.json(user);

var arr = [];
//印出拿到的ROW views
  rows.forEach(rowselement => {
    // console.log(rowselement.CompanyName);
    var row = rowselement;
    arr.push(row);
  });

  res.json({ msg: arr});
});

//回應JSON 字串 之後可改成資料庫中的資料

// res.json({ msg: 'Hello World' })
})
// ------------------------------------------------------------------------
app.get('/4/hello', function (req, res) {
  // 建立與SQL 的連線資訊
  console.log(req.query)
  console.log("QQQQQQQQQQQQQQ")
var con = mysql.createConnection({
  host: "192.168.21.87",
  user: "testconn",
  password: "abcd1234",
  database: "travel"
});

// 建立與SQL 的連線
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

});
var allobject = req.query
var xid = Math.floor((Math.random() * 100000) + 1);
console.log(allobject.data)
// Demo Select 語法
// var  addSql = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?,?)';
var  addSql = 'INSERT INTO oneday(idoneday,date,views,resname,resdate,hotelname,yourname,hotel) VALUES(?,?,?,?,?,?,?,?)';
var  addSqlParams = [xid,allobject.data,allobject.views,allobject.resname,allobject.resdate, allobject.hotelname,allobject.yourname,allobject.hottel];
con.query (addSql,addSqlParams , function (error, fields) {
  //檢查是否有錯誤
  if (error) {
    throw error;
  }
  // var user = rows[5].CompanyName;

//   for (var i = 0; i < rows.length; i++) {
//     var row = rows[i];
//     res.json(row);
// }
  // res.json(user);

var arr = [];
//印出拿到的ROW views

  res.json({ msg: arr});
});
})
//回應JSON 字串 之後可改成資料庫中的資料
//============================================================================================================
app.get('/6/hello', function (req, res) {
  // 建立與SQL 的連線資訊
  // console.log(queryInfo["region"])
var con = mysql.createConnection({
  host: "192.168.21.87",
  user: "testconn",
  password: "abcd1234",
  database: "travel"
});

// 建立與SQL 的連線
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

// Demo Select 語法
con.query('SELECT * FROM oneday;', function (error, rows, fields) {
  //檢查是否有錯誤
  if (error) {
    throw error;
  }
  // var user = rows[5].CompanyName;

//   for (var i = 0; i < rows.length; i++) {
//     var row = rows[i];
//     res.json(row);
// }
  // res.json(user);

var arr = [];
//印出拿到的ROW views
  rows.forEach(rowselement => {
    // console.log(rowselement.CompanyName);
    var row = rowselement;
    arr.push(row);
  });

  res.json({ msg: arr});
});

//回應JSON 字串 之後可改成資料庫中的資料

// res.json({ msg: 'Hello World' })
})
//=============================================================================================================
// res.json({ msg: 'Hello World' })
//```````````````````````````````````````````````````````````````````````````
// 建立PORT 3000 的服務
app.listen(3000, function () {
  console.log('App listening on port 3000!')
})
