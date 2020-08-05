//npm install express --save
//npm install ejs --save
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
//node index.js
app.listen(PORT,function (){
    console.log("server is running ...");
})
app.use(express.static("public"));
app.set("view engine","ejs");
//localhost:5000
var counter = 0
app.get("/",function (req,res){
    // res.sendFile(__dirname+"/views/login.html");
    let title = "Du bao thoi tiet";
    counter++;
    res.render("Ass13",{
        title : title,
        counter : counter
    });
})
const fs = require("fs");
app.get("/chitiet",function (req,res){
    let cats=fs.readFileSync("data/data.json","UTF-8");
    cats=JSON.parse(cats);
    //cap nhat json html tu cap nhat ko can reset may chu
    res.render("lab10",{
        cats : cats
    });
})

app.get("/chitiet/:ct",function (req,res){
    let a = req.params.ct;
    let cats=fs.readFileSync("data/data.json","UTF-8");
    cats=JSON.parse(cats);
    let count = 0
    cats.map(e=>{
        if(e.id == a){
          res.render("chitiet",{
             cat : e
          });
          count = 0;
        };
    });
    if(count>=cats.length){
        res.send("Khong tim thay");
    };
})