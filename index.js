"use strict";


let uglify = require("uglify-es");
let fs     = require("fs");


let render = function(code, options={}) {
    let result = uglify.minify(code, options);
    return result.code || throw new Error(result.error);
}


let renderFile = function(path, options={}) {
    let code = fs.readFileSync("test.js", "utf8");
    let result = uglify.minify(code, options);
    return result.code || throw new Error(result.error);
}


module.exports = Object.assign(Object.create(null), {
    name: "uglify-es",
    outputFormat: "js",
    inputFormats: ["uglify-es", "jsmin", "js"],
    render,
    renderFile
});
