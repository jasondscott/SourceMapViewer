var sourceMap = require('source-map'),
    fs = require('fs');

fs.readFile('./getaround-min.map', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var smc = new sourceMap.SourceMapConsumer(data);

  console.log(smc.originalPositionFor({
    line: 8,
    column: 11949
  }));
});



