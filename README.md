## indexhtml

Generate a customized index.html file

## Install

```bash
$ npm install indexhtml
```

## Usage

```js
var indexhtml = require('indexhtml')

indexhtml({
  title: 'hello world',
  js: 'bundle.js', // or [..] is ok
  css: ['default.css', 'pretty.css'], // or 'single.css' is ok
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  content: '<h1>yo</h1>'
})
```

will output:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>hello world</title>
    <link rel="stylesheet" href="default.css" />
    <link rel="stylesheet" href="pretty.css" />
  </head>
  <body>
    <h1>yo</h1>
    <script type="text/javascript" src="bundle.js"></script>
  </body>
</html>
```
