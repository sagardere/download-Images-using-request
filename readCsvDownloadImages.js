var csv = require("fast-csv");
var stream = fs.createReadStream("inputFile.csv");
var download = require('image-downloader');

var ImageArray = [];

csv
.fromStream(stream, {headers :true})
 
.on("data", function(data){
    //push each url into Array
 	ImageArray.push(data.ImageName);	
 	
 })
 
.on("end", function(){
    
   for (var i = 0; i < ImageArray.length; i++) {
   	
    url = ImageArray[i];
    var options = {
	  url: url,
	  dest: './DownloadImages/'                  
	}
	 
	download.image(options)
	  .then(({ filename, image }) => {
	    console.log('@File saved to : ' + filename)
	  }).catch((err) => {
	  	console.log('@err :' + err);
	    throw err
	  })
	}
})

