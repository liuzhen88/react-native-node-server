var express = require('express');
var router = express.Router();
var orderService = require('../service/order');
var pushService = require('../service/push');
var imageCode = require('../service/code');

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

router.get('/imageCode',function (req, res) {
	imageCode.getImageCode(req, res).then(function (data) {
		res.send(data);
	}).fail(function (err) {
		res.send(err);
	});
});

router.get('/transaction',function(req, res){
	orderService.transaction(req, res).then(function(data){
		res.send(data);
	}).fail(function(err){
		res.send(err);
	})
});

router.post('/getData',function(req,res){
	orderService.getData(req, res).then(function(data){
		res.send(data);
	}).fail(function(err){
		res.send(err);
	})
});

router.get('/test',function(req, res){
	orderService.transaction(req, res).then(function(data){
		res.jsonp(data);
	}).fail(function(err){
		res.jsonp(err);
	})
});

module.exports = router;
