"use strict";


let uglify = require("uglify-es");
let fs     = require("fs");


let render = function(code, options={}) {
    return uglify.minify(code, options).code;
}


let renderFile = function(path, options={}) {
    const code = fs.readFileSync("test.js", "utf8");
    return uglify.minify(code, options).code;
}


module.exports = Object.assign(Object.create(null), {
    name: "uglify-es",
    outputFormat: "js",
    inputFormat: ["js"],
    render,
    renderFile
});
