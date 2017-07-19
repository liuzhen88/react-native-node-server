var q = require('q');
var ccap = require('ccap');
var fs = require('fs');


var tool = {
    writeImageBuffer:function (buffer, callback) {
        fs.writeFile('./buffer.jpg',buffer,function (err) {
           if(err){
               callback(err);
           }else{
               var url = 'http://120.25.152.42:8888/buffer.jpg'
               callback('',url);
           }
        });
    }
}

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
        tool.writeImageBuffer(imageBuffer,function (err, imageUrl) {
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve({
                    text:text,
                    imageUrl:imageUrl
                });
            }
        });
        return deferred.promise;
    }
}