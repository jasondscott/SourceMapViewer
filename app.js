#!/usr/bin/env node

var sourceMap = require('source-map'),
    fs = require('fs'),
    http = require('http'),
    argv = require('minimist')(process.argv.slice(2));

if (!(argv && argv.path && argv.line && argv.col)) {
  console.log("Usage: app.js --path=/js/140805174136/getaround-min.js.map --line=8 --col=11930")
  return;
}

var options = {
  hostname: 'www.getaround.com',
  path: argv.path
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
    line: argv.line,
    column: argv.col
  }));
}

