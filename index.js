var fs = require("fs");
var path = require("path");
var template = fs.readFileSync(path.join(__dirname, 'template.html'));
var render = require("format-text");

module.exports = generate;

function generate (options) {
  if (typeof options.js == 'string') options.js = [options.js];
  if (typeof options.css == 'string') options.css = [options.css];
  if (options.meta && !Array.isArray(options.meta)) options.meta = [options.meta];

  return render(template, {
    title: options.title || '',
    content: options.content || '',
    js: options.js.map(script).join('\n'),
    css: options.css.map(link).join('\n'),
    meta: options.meta.map(meta).join('\n')
  });
}

function script (src) {
  return '<script type="text/javascript" src="' + src + '"></script>';
}

function link (href) {
  return '<link rel="stylesheet" href="' + href + '" />';
}

function meta (options) {
  var buf = '<meta ';

  var key;
  for (key in options) {
    if (key == 'close' && options[key] === true) continue;
    buf += ' ' + key + '="' + options[key] + '"';
  }

  if (options.close === true) {
    buf += '/';
  }

  buf += '>';

  return buf;
}
