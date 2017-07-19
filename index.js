"use strict";


let uglify = require("uglify-es");


let render = function(str, options={}) {
    options.fromString = true;
    return uglify.minify(str, options).code;
}


let renderFile = function(file, options={}) {
    options.fromString = false;
    return uglify.minify(file, options).code;
}


module.exports = Object.assign(Object.create(null), {
    name: "uglify-es",
    outputFormat: "js",
    inputFormat: ["js"],
    render,
    renderFile
}
