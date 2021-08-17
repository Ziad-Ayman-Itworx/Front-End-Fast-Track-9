const { src, dest, parallel } = require("gulp");
const concat = require('gulp-concat');
const uglify = require("gulp-uglify");

function loadJS() {
    return src(["shared-scripts/app.js", "components/**/*.js"])
        .pipe(uglify())
        .pipe(src("node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"))
        .pipe(concat("app.min.js"))
        .pipe(dest("dist"));
}

exports.build = loadJS;