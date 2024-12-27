const express = require("express");
const cors = require('cors');

const DB = require("nedb-promises");

const server = express();
const ContactDB = DB.create(__dirname + "/contact.db");

// 靜態檔案
server.use(express.static(__dirname));
const ProfolioDB = DB.create(__dirname+"/porfolio.db");
const paintingDB = DB.create(__dirname+"/painting.db");
// 中介軟體解析 body
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

/*ProfolioDB.insert([
  {modal:"card1",title:"Painting",text:"This is a description for my first card.",imgSrc:"picture/basketballbook.png",link:"Painting.html","_id":"7ZJYJH2RLk8Nbtaa"},
{modal:"card2",title:"Photography",text:"This is a description for my second card.",imgSrc:"picture/IMG_9262 (1).jpg",link:"Photography.html","_id":"VBOa1pcJd4no9qyP"},
{modal:"card4",title:"Animation",text:"This is a description for my fourth card.",imgSrc:"picture/littlechick01.jpg",link:"Animation.html","_id":"f3yMEMCXFqa2v2yG"}
])*/

/*const paintingData = [
  {
    title: "黃昏下的夢境",
    img: "picture/sunset-dream.jpg",
    description: "這幅作品捕捉了黃昏時分的魔幻時刻，運用了細膩的筆觸。",
    date: "2024-12-01",
    detailsLink: "#",
    modal: {
      id: "modal-sunset-dream",
      header: "黃昏下的夢境",
      content: "這幅作品使用了橘紅與紫色的對比色，營造出強烈的黃昏氛圍，呈現出魔幻般的情境，讓人沉浸在夢境之中。"
    }
  },
  {
    title: "山巒的寧靜",
    img: "picture/mountain-serenity.jpg",
    description: "靈感來自一次山中旅行，描繪了山巒與清晨的薄霧。",
    date: "2024-11-15",
    detailsLink: "#",
    modal: {
      id: "modal-mountain-serenity",
      header: "山巒的寧靜",
      content: "此作品捕捉山嶺柔和的光影變化，展現了清晨薄霧的神秘與自然的寧靜，給觀者一種平和的心境。"
    }
  },
  {
    title: "深海的祕密",
    img: "picture/underwater-secrets.jpg",
    description: "探索海洋的深處，運用冷色調展現神秘感。",
    date: "2024-10-30",
    detailsLink: "#",
    modal: {
      id: "modal-underwater-secrets",
      header: "深海的祕密",
      content: "以深藍與綠色為主調，描繪海洋深處的寂靜與神秘，喚起人們對未知世界的好奇心。"
    }
  }
];

// 直接插入資料
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
// 路由
server.post("/contact_me",  (req, res) => {
 
        ContactDB.insert(req.body);
        res.redirect("/aftercontactme.html");
   
});


// 啟動伺服器
server.listen(3001,  () => {
    console.log("Server is running at port 3001.");
});