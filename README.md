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
```
### .render
```js
let result = uglify.render("var x = 5; var y = 6;");
console.log(result.body);
// -> "var x=5,y=6;"
```
### .renderFile
```js
// test.js

let foo = 2;
let bar = 3;

console.log(foo + bar);
```
```js
// index.js

let result = uglify.renderFile("test.js");
console.log(result.body);
// -> "let a=2,b=3;console.log(a+b);"
```

## Pug filter

```
script
    include:uglify-es my-script.js
```

## License

[MIT][mit-url]

[uglify-es-url]: https://www.npmjs.com/package/uglify-es
[jstransformer-url]: https://www.npmjs.com/package/jstransformer
[mit-url]: https://github.com/kerrytazi/jstransformer-uglify-es/blob/master/LICENSE.md
[npm-image]: https://img.shields.io/npm/v/jstransformer-uglify-es.svg
[npm-url]: https://npmjs.org/package/jstransformer-uglify-es
[downloads-image]: https://img.shields.io/npm/dm/jstransformer-uglify-es.svg
[downloads-url]: https://npmjs.org/package/jstransformer-uglify-es
