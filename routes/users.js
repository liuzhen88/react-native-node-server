var express = require('express');
var router = express.Router();
var orderService = require('../service/order');
var pushService = require('../service/push');

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

router.post('/testParams',function(req, res){
	orderService.testParams(req, res).then(function(data){
		res.send(data);
	}).fail(function(err){
		res.send(err);
	});
});

router.get('/testPush',function(req, res){
	pushService.testPush(req, res).then(function(data){
		res.send(data);
	}).fail(function(err){
		res.send(err);
	});
});

module.exports = router;
