var sourceMap = require('source-map'),
    gaSource = require('./getaround-min.json');


//console.log(gaSource);
/*
var rawSourceMap = {
  version: 3,
  file: 'min.js',
  names: ['bar', 'baz', 'n'],
  sources: ['one.js', 'two.js'],
  sourceRoot: 'http://example.com/www/js/',
  mappings: 'CAAC,IAAI,IAAM,SAAUA,GAClB,OAAOC,IAAID;CCDb,IAAI,IAAM,SAAUE,GAClB,OAAOA'
};
*/
var smc = new sourceMap.SourceMapConsumer(gaSource);

//console.log(smc.sources);
// [ 'http://example.com/www/js/one.js',
//   'http://example.com/www/js/two.js' ]

console.log(smc.originalPositionFor({
  line: 8,
  column: 11949 
}));
// { source: 'http://example.com/www/js/two.js',
//   line: 2,
//   column: 10,
//   name: 'n' }

//console.log(smc.generatedPositionFor({
//  source: 'http://example.com/www/js/two.js',
//  line: 2,
//  column: 10
//}));
// { line: 2, column: 28 }

smc.eachMapping(function (m) {
  // ...
});
