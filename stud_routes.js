var express = require('express');
var router = express.Router()
var students = []

router.get("/studregister",function(req,res){
    res.sendFile(__dirname+"/studregister.html");
})

router.get("/studentlist",function(req,res){
    res.render("student",{allstudents:students})
})

router.post("/studreg",function(req,res){
    students.push(req.body);
    res.send("Registered Successfully!!!!")
})

module.exports = router