var express = require('express');
var app = express();
var stud_routes = require("./stud_routes")
var emp_routes = require("./emp_routes")

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.set('view engine', 'pug');
app.set('views','./views');

app.get("/",function(req,res){
    res.sendFile(__dirname+"/home.html")
})

app.use("/students",stud_routes)
app.use("/employees",emp_routes)

app.listen(8070,function(){console.log("started")})