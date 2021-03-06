"use strict";


let uglify = require("uglify-es");
let fs     = require("fs");


let render = function(code, options={}) {
    let result = uglify.minify(code, options);
    if (result.error) throw new Error(result.error);
    return result.code;
}


let renderFile = function(filePath, options={}) {
    // for pug filter
    delete options.filename;

    let code = fs.readFileSync(filePath, "utf8");
    return render(code, options)
}


let renderAsync = function(code, options) {
    return new Promise(function(resolve, reject) {
        try {
            resolve(render(code, options));
        } catch(e) {
            reject(e);
        }
    });
}


let renderFileAsync = function(filePath, options) {
    return new Promise(function(resolve, reject) {
        try {
            resolve(renderFile(filePath, options));
        } catch(e) {
            reject(e);
        }
    });
}


module.exports = Object.assign(Object.create(null), {
    name: "uglify-es",
    outputFormat: "js",
    inputFormats: ["uglify-es", "jsmin", "js"],
    render,
    renderFile,
    renderAsync,
    renderFileAsync
});
