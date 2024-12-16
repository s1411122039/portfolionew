const express = require("express");
const cors = require('cors');

const DB = require("nedb-promises");

const server = express();
const ContactDB = DB.create(__dirname + "/contact.db");

// 靜態檔案
server.use(express.static(__dirname));
const ProfolioDB = DB.create(__dirname+"/porfolio.db");
// 中介軟體解析 body
server.use(express.json());
server.use(express.urlencoded({ extended: true }));


/*ContactDB.insert({ uname: "test", phone: "1234567890", text: "Hello world" })
    .then(() => console.log("Test data inserted"))
    .catch((err) => console.error("Database insert error:", err));*/
  /* ProfolioDB.insert({
        modal:"card1",
        title: "My First Card",
        text: "This is a description for my first card.",
        imgSrc: "picture/basketballbook.png",
        link: "#",
      })*/
      
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
// 路由
server.post("/contact_me",  (req, res) => {
 
        ContactDB.insert(req.body);
        res.redirect("/aftercontactme.html");
   
});


// 啟動伺服器
server.listen(3001,  () => {
    console.log("Server is running at port 3001.");
});