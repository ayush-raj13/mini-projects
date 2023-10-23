const express=require("express")
const app=express()
const path = require('path');
const http=require('http')
app.use(express.json({ limit: "50mb" }))
app.use(express.urlencoded({ extended: false, limit: "50mb" }))
app.use(express.static(path.join(__dirname)))
var Sentiment = require('sentiment');
var sentiment = new Sentiment();
app.get("/",(req,res)=>{
    res.render("index.html");
});
app.post("/result",(req,res)=>{
text=req.body.message;
var result=sentiment.analyze(text);
if(+result.score<0)
res.send("inappropriate or hate speech is being used");
else
res.send("language is fine");
});
http.createServer(app).listen(8000)