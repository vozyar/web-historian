var path = require('path');
var archive = require('../helpers/archive-helpers');
var http = require('http');
var fs = require('fs');
// require more modules/folders here!

exports.handleRequest = function (req, response) {

  if (req.method === 'GET' && req.url === '/'){
    console.log('hello')//public/index.html');
    fs.readFile('./web/public/index.html', 'utf8',function(err, data){
      if (err){
        throw err;
      }

      response.writeHeader(200, {"Content-type": "text/html"});
      console.log('data:', data);
      //response.write()
      response.end(data);
done()
    });
  }
  console.log(archive.paths.siteAssets+'/index.html');
  //res.end(archive.paths.list);


};
