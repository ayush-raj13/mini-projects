const express= require("express");
const bodyParser= require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
    
});

app.post("/",function(req,res){

    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var add= num1+num2;
    res.send("Result: "+ add);
})
app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname + "/bmicalculator.html");
})
app.post("/bmicalculator",function(req,res){
    var w=parseFloat(req.body.weight);
    var h=parseFloat(req.body.height);
    var bmi = w /(h*h);
    res.send("Your BMI Is "+bmi);
})
app.listen(3000,function(){
    console.log("Server is Running on port 3000.");
})