var express = require('express');
var attack = require("../models/attack.js");
var router = express.Router();
var EventEmitter = require('events').EventEmitter;
var myEvents = new EventEmitter();
var schedule = require('node-schedule');
var rule = new schedule.RecurrenceRule();
var times = [];
rule.second = times;
var  abc=0;
for (var i = 0; i < 60; i = i + 2) {
  times.push(i);
}


/* GET home page. */
router.get('/', function(req, res, next) {
  // for(var i=0;i<100;i++){
    myEvents.emit("abc");
  //
  // }



  res.render('index', { title: 'Express' });
});
myEvents.on("abc",function () {
  schedule.scheduleJob(rule, function () {
    attack.doit("1");
    abc++;
    console.log(abc+"次")
  });
});
module.exports = router;
