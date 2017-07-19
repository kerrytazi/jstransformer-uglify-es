"use strict";


let uglify = require("uglify-es");
let fs     = require("fs");


let render = function(code) {
    let result = uglify.minify(code);
    if (result.error) throw new Error(result.error);
    return result.code;
}


let renderFile = function(path) {
    let code = fs.readFileSync(path, "utf8");
    let result = uglify.minify(code);
    if (result.error) throw new Error(result.error);
    return result.code;
}


module.exports = Object.assign(Object.create(null), {
    name: "uglify-es",
    outputFormat: "js",
    inputFormats: ["uglify-es", "jsmin", "js"],
    render,
    renderFile
});
