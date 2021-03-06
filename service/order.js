var q = require('q');

module.exports = {
	getOrderList:function(req, res){
		var deferred = q.defer();
		console.log(req.query);
		var pageIndex = req.query.pageIndex ? req.query.pageIndex : 1;
		var data = [];
		for(let i=1;i<=10;i++){
			data.push({
				title:'苏州到盐城，3天2晚，第'+pageIndex+'页的数据',
				time:'6月7日出发，6月9日返回',
				person:'5名成人',
				status:'设计中',
				id:i
			});
		}
		deferred.resolve(data);

		return deferred.promise;
	},
	getCanlendarData:function(req, res){
		var deferred = q.defer();
		var data = {
		  "LinePirceMonthList": [
		    {
		      "Year": 2017,
		      "Month": 6,
		      "Price": 100.0,
		      "Currency": 1,
		      "HasPrice": true
		    },
		    {
		      "Year": 2017,
		      "Month": 7,
		      "Price": 100.0,
		      "Currency": 1,
		      "HasPrice": false
		    },
		    {
		      "Year": 2017,
		      "Month": 8,
		      "Price": 100.0,
		      "Currency": 1,
		      "HasPrice": true
		    },
		    {
		      "Year": 2017,
		      "Month": 9,
		      "Price": 200.0,
		      "Currency": 1,
		      "HasPrice": true
		    },
		    {
		      "Year": 2017,
		      "Month": 10,
		      "Price": 200.0,
		      "Currency": 1,
		      "HasPrice": true
		    },
		    {
		      "Year": 2017,
		      "Month": 11,
		      "Price": 200.0,
		      "Currency": 1,
		      "HasPrice": true
		    },
		    {
		      "Year": 2017,
		      "Month": 12,
		      "Price": 200.0,
		      "Currency": 1,
		      "HasPrice": true
		    },
		    {
		      "Year": 2018,
		      "Month": 1,
		      "Price": 200.0,
		      "Currency": 1,
		      "HasPrice": true
		    },
		    {
		      "Year": 2018,
		      "Month": 2,
		      "Price": 200.0,
		      "Currency": 1,
		      "HasPrice": true
		    }
		  ],
		  "LinePriceList": [
		    {
		      "SalesDate": "2017-06-09T18:57:45.4407539+08:00",
		      "SalesPrice": 100.0,
		      "IsValid": true,
		      "LegalHolidayName": "¹úÇì",
		      "Currency": 0
		    },
		    {
		      "SalesDate": "2017-06-10T18:57:45.4407539+08:00",
		      "SalesPrice": 100.0,
		      "IsValid": true,
		      "LegalHolidayName": "¹úÇì",
		      "Currency": 0
		    }
		  ],
		  "TheLastDate": "0001-01-01T00:00:00",
		  "Year":2018,
		  "Month":2,
		  "Header": null
		}

		deferred.resolve(data);
		return deferred.promise;
	},
	testParams:function(req, res){
		var deferred = q.defer();
		var readType = req.body.readtype;
		deferred.resolve({
			'code':'200',
			'message':'您传的参数是readtype='+readType
		});

		return deferred.promise;
	},
	transaction:function(req, res){
		var deferred = q.defer();
		var type = req.query.type || '1';
		var data = [];

		if(type == '1'){
			data = [
				{
					'time':'16',
					'value':123
				},
				{
					'time':'17',
					'value':221
				},
				{
					'time':'18',
					'value':128
				},
				{
					'time':'19',
					'value':226
				},
				{
					'time':'20',
					'value':233
				},
				{
					'time':'21',
					'value':288
				},
				{
					'time':'22',
					'value':282
				}
			]
		}

		if(type == '0'){
			data = [
				{
					'time':'16',
					'value':223
				},
				{
					'time':'17',
					'value':221
				},
				{
					'time':'18',
					'value':128
				},
				{
					'time':'19',
					'value':276
				},
				{
					'time':'20',
					'value':183
				},
				{
					'time':'21',
					'value':288
				},
				{
					'time':'22',
					'value':182
				}
			]
		}

		if(type == '2'){
			data = [
				{
					'time':'16',
					'value':62880
				},
				{
					'time':'17',
					'value':52410
				},
				{
					'time':'18',
					'value':74360
				},
				{
					'time':'19',
					'value':48746
				},
				{
					'time':'20',
					'value':66235
				},
				{
					'time':'21',
					'value':99214
				},
				{
					'time':'22',
					'value':49753
				}
			]
		}

		if(type == '3'){
			data = [
				{
					'time':'16',
					'value':150
				},
				{
					'time':'17',
					'value':200
				},
				{
					'time':'18',
					'value':150
				},
				{
					'time':'19',
					'value':200
				},
				{
					'time':'20',
					'value':150
				},
				{
					'time':'21',
					'value':200
				},
				{
					'time':'22',
					'value':100
				}
			]
		}

		if(type == '4'){
			data = [
				{
					'time':'16',
					'value':120
				},
				{
					'time':'17',
					'value':140
				},
				{
					'time':'18',
					'value':100
				},
				{
					'time':'19',
					'value':111
				},
				{
					'time':'20',
					'value':150
				},
				{
					'time':'21',
					'value':99
				},
				{
					'time':'22',
					'value':145
				}
			]
		}

		if(type == '5'){
			data = [
				{
					'time':'16',
					'value':80
				},
				{
					'time':'17',
					'value':82
				},
				{
					'time':'18',
					'value':77
				},
				{
					'time':'19',
					'value':68
				},
				{
					'time':'20',
					'value':92
				},
				{
					'time':'21',
					'value':70
				},
				{
					'time':'22',
					'value':92
				}
			]
		}

		deferred.resolve(data);
		return deferred.promise;
	},
	getData:function(req, res){
		var deferred = q.defer();
		var data = JSON.parse(req.body.sendParams);
		deferred.resolve({
			page:data.page,
			rows:data.rows
		});
		return deferred.promise;
	}
}