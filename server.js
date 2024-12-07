//install: node js
//install web server package: express >npm install express
var express = require("express");
var server = express();
var bodyParser = require("body-parser");

//web root
server.use(express.static(__dirname+"/portfolionew"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded());


var DB = require("nedb-promises");
var ProfolioDB = DB.create(__dirname+"/profolio.db");
var ContactDB = DB.create(__dirname+"/contact.db");
 
// ProfolioDB.insert([
//     { modal: "#portfolioModal1", imgSrc: "modalroundicons.png", heading: "Round Icons", text: "Graphic Design" },
//     { modal: "#portfolioModal2", imgSrc: "startup-framework.png", heading: "Startup Framework", text: "Website Design" },
//     { modal: "#portfolioModal3", imgSrc: "treehouse.png", heading: "Treehouse", text: "Website Design" },
//     { modal: "#portfolioModal1", imgSrc: "roundicons.png", heading: "Round Icons", text: "Graphic Design" },
//     { modal: "#portfolioModal2", imgSrc: "startup-framework.png", heading: "Startup Framework", text: "Website Design" },
//     { modal: "#portfolioModal3", imgSrc: "treehouse.png", heading: "Treehouse", text: "Website Design" }
// ])



server.post("/contact_me", (req,res)=>{
     ContactDB.insert(req.body);
     res.redirect("/#contact");
})

server.listen(80, ()=>{
    console.log("Server is running at port 80.");
})