var gulp = require('gulp')
var postcss = require('gulp-postcss')
var cssmin = require('gulp-cssmin')
var salad = require('postcss-salad')
var scss = require('gulp-sass')

gulp.task('compilecss', function() {
    gulp.src('./src/theme/index.scss')
    .pipe(scss())
    .pipe(postcss([salad]))
    .pipe(cssmin())
    .pipe(gulp.dest('./lib'))
})

gulp.task('build',['compilecss'])
gulp.task('watch', function() {
    gulp.watch('./src/components/**/src/*.scss',['compilecss'])
    gulp.watch('./src/theme/*.scss',['compilecss'])
})