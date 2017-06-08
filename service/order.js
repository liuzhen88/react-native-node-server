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
	}
}