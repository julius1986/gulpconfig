const {
    series,
    src,
    dest,
    parallel,
    watch
} = require('gulp');
var clean = require('gulp-clean');
const gulpHtmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');

function cleanDirectory() {
    return src("build/**/*").pipe(clean());
}

//Убираем пробелы в Html
function htmlBuild() {
    return src("src/**/*.html")
        .pipe(gulpHtmlmin({
            collapseWhitespace: true
        }))
        .pipe(dest("build"))
}

//Убираем пробелы в Html
function jsBuild() {
    return src("src/**/*.js")
        .pipe(dest("build"))
}

//Убираем пробелы в Html
function cssBuild() {
    //можно указать 1 главный css файл на входе
    return src("src/**/*.css")
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(dest('build'));
}

//Убираем пробелы в Html
function watchFiles() {
    return [
        watch("src/**/*.html", parallel(htmlBuild)),
        watch("src/**/*.js", parallel(jsBuild)),
        watch("src/**/*.css", parallel(cssBuild))
    ];   
}

exports.default = series(cleanDirectory, parallel(htmlBuild, jsBuild, cssBuild));
exports.watch = series(watchFiles);
