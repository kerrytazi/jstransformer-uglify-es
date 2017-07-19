# jstransformer-uglify-es
[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

[uglify-es](https://www.npmjs.com/package/uglify-es) support for [jstransformer](https://www.npmjs.com/package/jstransformer)

## Installation

    npm install jstransformer-uglify-es

## API

### Initialization
```js
let uglify = require("jstransformer-uglify-es");
// or
let jstransformer = require("jstransformer");
let uglify = jstransformer(require("jstransformer-uglify-es"));
```
### Minify code string
```js
uglify.render("var x = 5; var y = 6;");
// -> "var x=5,y=6;"
```
### Or read from file
```js
// test.js

let foo = 2;
let bar = 3;

console.log(foo + bar);
```
```js
// index.js

uglify.renderFile("test.js");
// -> "let a=2,b=3;console.log(a+b);"
```

## Pug filter

```
script
    include:uglify-es my-script.js
```

## License

[MIT](https://github.com/kerrytazi/jstransformer-uglify-es/blob/master/LICENSE)

[npm-image]: https://img.shields.io/npm/v/jstransformer-uglify-es.svg
[npm-url]: https://npmjs.org/package/jstransformer-uglify-es
[downloads-image]: https://img.shields.io/npm/dm/jstransformer-uglify-es.svg
[downloads-url]: https://npmjs.org/package/jstransformer-uglify-es
