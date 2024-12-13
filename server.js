const express = require("express");
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
        title: "My First Card",
        text: "This is a description for my first card.",
        imgSrc: "picture/basketballbook.png",
        link: "#",
      })
        .then(() => {
          console.log("Data inserted successfully into ProfolioDB.");
        })
        .catch(err => {
          console.error("Error inserting data into ProfolioDB:", err);
        });*/
        server.get("/porfolio", (req, res) => {
            ProfolioDB.find({})
              .then(results => {
                res.json(results); // 返回資料庫中的所有資料
              })
              .catch(err => {
                console.error("Database query error:", err);
                res.status(500).send({ error: "Database query error" });
              });
          });
// 路由
server.post("/contact_me",  (req, res) => {
 
        ContactDB.insert(req.body);
        res.redirect("/aftercontactme.html");
   
});


// 啟動伺服器
server.listen(3001,  () => {
    console.log("Server is running at port 3001.");
});