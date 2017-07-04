var q = require('q');
var JPush = require("../lib/JPush/JPush.js");

module.exports = {
	testPush:function(req, res){
		var deferred = q.defer();
		var client = JPush.buildClient('517f6ac489048c7d07871d9e', '728b4e2591f7f13890f6fd6f');
		client.push().setPlatform(JPush.ALL)
	    .setAudience(JPush.ALL)
	    .setNotification('Hi, JPush', JPush.ios('ios alert', 'happy', 5))
	    .send(function(err, res) {
	        if (err) {
	            console.log(err.message)
	            deferred.reject('error');
	        } else {
	            console.log('Sendno: ' + res.sendno)
	            console.log('Msg_id: ' + res.msg_id)
	            deferred.resolve('success');
	        }
	    });

		return deferred.promise;
	}
}