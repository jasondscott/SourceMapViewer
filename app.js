#!/usr/bin/env node

var sourceMap = require('source-map'),
    fs = require('fs'),
    http = require('http');

//fs.readFile('./getaround-min.map', 'utf8', function (err,data) {
//  if (err) {
//    return console.log(err);
//  }
//  getLineInfo(data);
//});


var options = {
  hostname: 'www.getaround.com',
  path: '/js/140805174136/getaround-min.js.map'
};

var callback = function(response) {
  var str = '';

  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function () {
//    console.log(str);
    getLineInfo(str);
  });
};

http.request(options, callback).end();


function getLineInfo(data) {
  var smc = new sourceMap.SourceMapConsumer(data);

  console.log(smc.originalPositionFor({
    line: 8,
    column: 11949
  }));
}

