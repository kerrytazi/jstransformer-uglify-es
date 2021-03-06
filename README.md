# jstransformer-uglify-es
[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

[uglify-es][uglify-es-url] support for [jstransformer][jstransformer-url]

## Installation

    npm install jstransformer-uglify-es

## API

### Initialization
```js
let jstransformer = require("jstransformer");
let uglify = jstransformer(require("jstransformer-uglify-es"));

let options = {
    compress: {
        toplevel: true
    }
}
```
[More about uglify-es minify options.][more-minify-url]
### .render(code[, options])
```js
let code = "var x = 5; var y = 6; console.log(x + y);";
let result = uglify.render(code, options);
result.body // -> "console.log(11);"
```
### .renderFile(filePath[, options])
```js
// test.js

let foo = 4;
let bar = 8;

const add = function(a, b) {
    return a + b;
}

console.log(add(foo, bar));
```
```js
// index.js

let result = uglify.renderFile("test.js", options);
result.body // -> "console.log(function(n,o){return n+o}(4,8));"
```
### .renderAsync(code[, options])
The same as `.render` but return new Promise.
### .renderFileAsync(filePath[, options])
The same as `.renderFile` but return new Promise.
## Pug filter
```
script
    include:uglify-es(compress={toplevel:true}) my-script.js
```
[More about pug filters.][more-pug-url]
## License

[MIT][mit-url]

[uglify-es-url]: https://www.npmjs.com/package/uglify-es
[jstransformer-url]: https://www.npmjs.com/package/jstransformer
[mit-url]: https://github.com/kerrytazi/jstransformer-uglify-es/blob/master/LICENSE.md
[more-pug-url]: https://pugjs.org/language/filters.html
[more-minify-url]: https://www.npmjs.com/package/uglify-es#minify-options
[npm-image]: https://img.shields.io/npm/v/jstransformer-uglify-es.svg
[npm-url]: https://npmjs.org/package/jstransformer-uglify-es
[downloads-image]: https://img.shields.io/npm/dm/jstransformer-uglify-es.svg
[downloads-url]: https://npmjs.org/package/jstransformer-uglify-es
