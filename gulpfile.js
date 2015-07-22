var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("toEs6", function () {
  return gulp.src("src/main.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

// Watch Our Files
gulp.task('watch', function() {
  gulp.watch('src/*.js', ['toEs6']);
});

gulp.task('default',['toEs6','watch']);