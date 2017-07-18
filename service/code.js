var q = require('q');
var ccap = require('ccap');

module.exports = {
    getImageCode:function (req, res) {
        var deferred = q.defer();
        var captcha = ccap({
            width:256,
            height:60,
            offset:40
        });
        var ary = captcha.get();
        var text = ary[0];
        var imageBuffer = ary[1];
        deferred.resolve({
            text:text,
            imageBuffer:imageBuffer
        });
        return deferred.promise;
    }
}