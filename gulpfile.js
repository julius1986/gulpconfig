const { series, src, dest, parallel } = require('gulp');
var clean = require('gulp-clean');
const gulpHtmlmin = require('gulp-htmlmin');

function cleanDirectory(){
    return src("build")
    .pipe(clean());
}

//Убираем пробелы в Html
function htmlBuild(){
    return src("src/**/*.html")
    .pipe(gulpHtmlmin({ collapseWhitespace: true }))
    .pipe(dest("build"))
}

//Убираем пробелы в Html
function jsBuild(){
    return src("src/**/*.js")
    .pipe(dest("build"))
}

//Убираем пробелы в Html
function cssBuild(){
    return src("src/**/*.css")
    .pipe(dest("build"))
}

exports.default = series(cleanDirectory, parallel(htmlBuild, jsBuild, cssBuild));