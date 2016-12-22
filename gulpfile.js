/**
 * require ����
 */

var gulp = require('gulp');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
var include = require('gulp-include');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

/**
 * task ���� ����
 */


// ���ΰ�ħ ���
gulp.task('check', function() {
    return gulp.src(['*', 'js/*', 'css/*', 'html/*'])
        .pipe(livereload());
});
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('*', ['check']);
    gulp.watch('js_src/**', ['concat', 'copy', 'check']);
    gulp.watch('css_scss/**', ['sass', 'check']);
    gulp.watch('html_src/**', ['include', 'check']);
});

// header , footer �и� - include ���

gulp.task('include', function(){

    var main = gulp.src(['html_src/*.html'])
        .pipe(include())
        .on('error', console.log)
        .pipe(gulp.dest('html/'));

    var sub = gulp.src(['html_src/sub/*.html'])
        .pipe(include())
        .on('error', console.log)
        .pipe(gulp.dest('html/sub/'));

});

// sass ���

gulp.task('sass', function(){
    return gulp.src('css_scss/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('css/'));
});

// concat ���

gulp.task('concat', function() {
    return gulp.src('js_src/*.js')
        .pipe(concat('function.js'))
        .pipe(gulp.dest('js/'));
});

// copy ���

gulp.task('copy', function () {
    return gulp.src('js_src/lib/**')
        .pipe(gulp.dest('js/lib/'));
});


/**
 * task ���� ����
 */


gulp.task('default', ['check', 'watch', 'include', 'sass', 'concat', 'copy']);