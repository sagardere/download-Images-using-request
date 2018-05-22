var fs = require('fs'),
  request = require('request');

var download = function(url, filename, callback){
  request.head(url, function(err, res, body){
    console.log('@content-type:', res.headers['content-type']);
    console.log('@content-length:', res.headers['content-length']);
    request(url).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

download('http://dtol-member-images.s3-website-us-east-1.amazonaws.com/1274/Images/4082.jpg', 'download.jpg', function(){
  console.log('Done Images Download..');
});






