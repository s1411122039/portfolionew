const express = require("express");
const cors = require('cors');

const DB = require("nedb-promises");

const server = express();
const ContactDB = DB.create(__dirname + "/contact.db");

// 靜態檔案
server.use(express.static(__dirname));
const ProfolioDB = DB.create(__dirname+"/porfolio.db");
const paintingDB = DB.create(__dirname+"/painting.db");
const photographyDB = DB.create(__dirname+"/photography.db");
// 中介軟體解析 body
server.use(express.json());
server.use(express.urlencoded({ extended: true }));


/*const paintingData = [
  
    { src: 'picture/IMG_7592.jpg', alt: '攝影作品1', title: '夕陽' },
        { src: 'picture/IMG_6072.jpg', alt: '攝影作品2', title: '台中歌劇院' },
        { src: 'picture/IMG_6383.jpg', alt: '攝影作品3', title: '雲層' },
        { src: 'picture/IMG_6716.jpg', alt: '攝影作品4', title: '湖面 1' },
        { src: 'picture/IMG_7084.jpg', alt: '攝影作品5', title: '湖面 2' },
        { src: 'picture/IMG_7996.jpg', alt: '攝影作品6', title: '湖面3' },
        { src: 'picture/IMG_7430.jpg', alt: '攝影作品7', title: '落日前' },
        { src: 'picture/IMG_8383.jpg', alt: '攝影作品8', title: '繁榮城市' },
        { src: 'picture/IMG_9262 (1).jpg', alt: '攝影作品9', title: '台中火車站' },
  
 
  
];

// 直接插入資料
photographyDB.insert(paintingData)
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