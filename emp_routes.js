var express = require('express');
var router = express.Router()
var employees = []

router.get("/empregister",function(req,res){
    res.sendFile(__dirname+"/empregister.html");
})

router.get("/employeelist",function(req,res){
    res.render("employee",{allemployees:employees})
})

router.post("/empreg",function(req,res){
    employees.push(req.body);
    res.send("Registered Successfully!!!!")
})

module.exports = router