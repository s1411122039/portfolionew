var express = require("express");
var server = express();
var bodyParser = require("body-parser");
server.use(express.static(__dirname + "/portfolionew"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

var DB = require("nedb-promises");
var homepageDB = DB.create(__dirname + "/homepage.db");
var ContactDB = DB.create(__dirname + "/contact.db");

server.post("/contact_me", async (req, res) => {
    try {
        await ContactDB.insert(req.body);
        res.redirect("/#contact");
    } catch (error) {
        console.error("Database insert failed:", error);
        res.status(500).send("An error occurred while saving your data.");
    }
});
console.log("123");

server.listen(3001, ()=>{
    console.log("Server is running at port 3000.");
})