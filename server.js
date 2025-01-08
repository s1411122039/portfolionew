const express = require("express");
const cors = require('cors');

const DB = require("nedb-promises");

const server = express();
const ContactDB = DB.create(__dirname + "/contact.db");

// 靜態檔案
server.use(express.static(__dirname+"/project"));
const ProfolioDB = DB.create(__dirname+"/porfolio.db");
const paintingDB = DB.create(__dirname+"/painting.db");
const photographyDB = DB.create(__dirname+"/photography.db");
// 中介軟體解析 body
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

/*ProfolioDB.insert([
  {modal:"card1",title:"Painting",text:"This is a description for my first card.",imgSrc:"picture/basketballbook.png",link:"Painting.html","_id":"7ZJYJH2RLk8Nbtaa"},
{modal:"card2",title:"Photography",text:"This is a description for my second card.",imgSrc:"picture/IMG_9262 (1).jpg",link:"Photography.html","_id":"VBOa1pcJd4no9qyP"},
{modal:"card4",title:"Animation",text:"This is a description for my fourth card.",imgSrc:"picture/littlechick01.jpg",link:"Animation.html","_id":"f3yMEMCXFqa2v2yG"}
])*/

/*const paintingData = [
  
  { title: "光柵動畫", description: "", imgsrc: "picture/time.jpg" },
  { title: "手繪怪物設計", description: "", imgsrc: "picture/monster.jpg" },
  { title: "手繪人體設計", description: "", imgsrc: "picture/body.jpg" },
  { title: "手翻書", description: "", imgsrc: "picture/basketballbook.png" },
  { title: "材質縫合", description: "", imgsrc: "picture/02.jpg" },
  { title: "點線面繪畫", description: "", imgsrc: "picture/03.jpg" }
  
 
  
];

 //直接插入資料
paintingDB.insert(paintingData)
  .then(() => console.log("Initial painting data inserted"))
  .catch(err => console.error("Error inserting initial data:", err));*/
   
      
        server.get("/profolio", (req,res)=>{
          //DB
          ProfolioDB.find({}).then(results=>{
            if(results != null){
                 res.send(results);
            }else{
                res.send("Error!");
            }
          })
    })
    server.get("/painting", (req,res)=>{
      //DB
      paintingDB.find({}).then(results=>{
        if(results != null){
             res.send(results);
        }else{
            res.send("Error!");
        }
      })
})
server.get("/photography", (req,res)=>{
  //DB
  photographyDB.find({}).then(results=>{
    if(results != null){
         res.send(results);
    }else{
        res.send("Error!");
    }
  })
})
// 路由
server.post("/contact_me",  (req, res) => {
 
        ContactDB.insert(req.body);
        res.redirect("/aftercontactme.html");
   
});


// 啟動伺服器
server.listen(3001,  () => {
    console.log("Server is running at port 3001.");
});