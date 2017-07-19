# jstransformer-uglify-es
UglifyES support for JSTransformers

## Installation

    npm install jstransformer-uglify-js

## API

```js
let uglify = require("jstransformer")(require("jstransformer-uglify-es"));

uglify.render("var x = 5; var y = 6;").body
//=> "var x=5,y=6"
```

## Pug filter

```
script
    include:uglify-es my-script.js
```

## License

[MIT](https://github.com/kerrytazi/jstransformer-uglify-es/blob/master/LICENSE)
