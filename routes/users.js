var express = require('express');
var router = express.Router();
var orderService = require('../service/order');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getOrderList',function(req, res){
	orderService.getOrderList(req, res).then(function(data){
		res.send(data);
	}).fail(function(err){
		res.send(err);
	});
});

router.get('/getCanlendarData',function(req, res){
	orderService.getCanlendarData(req, res).then(function(data){
		res.send(data);
	}).fail(function(err){
		res.send(err);
	});
});

module.exports = router;
