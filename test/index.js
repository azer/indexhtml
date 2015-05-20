var indexhtml = require("../");
var test = require("prova");
var fs = require("fs");
var path = require("path");

test('generating html', function (t) {
  t.plan(1);

  var expected = fs.readFileSync(path.join(__dirname, './expected.html')).toString().replace(/\n\s*/g, '');

  var actual = indexhtml({
    title: 'hello world',
    js: 'bundle.js', // or [..] is ok
    css: ['default.css', 'pretty.css'], // or 'single.css' is ok
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    content: '<h1>yo</h1>'
  });

  t.equal(expected, actual.replace(/\n\s*/g, ''));
});
