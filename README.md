SourceMapViewer
===============

A source map view that maps minified line/column info to original

Requirements
=============
* Node.js

Install
========
* Clone the repo
* run ```npm install```

Usage
=======

Sentry normally gives an error like:
```
Error: POST //edit/Aposricochet - 200 SyntaxError: JSON.parse: unexpected character at line 1 column 1 of t…
  at ? (/js/140805174136/getaround-min.js:8:11930)
  at n (/js/140805174136/getaround-min.js:8:10436)
  at lt.event.dispatch (/js/140805174136/getaround-min.js:2:6933)
  at lt.event.add/v.handle (/js/140805174136/getaround-min.js:2:3596)
  at lt.event.trigger (/js/140805174136/getaround-min.js:2:6062)
...
(2 additional frame(s) were not displayed)
```

For now you will need to do this for each line e.g. for
```
at ? (/js/140805174136/getaround-min.js:8:11930)
```
Run:
```
app.js --path=/js/140805174136/getaround-min.js.map --line=8 --col=11930
```
**Notice** that the path is .map, this is the path to the .map file not the min.js file.

