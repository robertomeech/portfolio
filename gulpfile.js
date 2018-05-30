const gulp = require('gulp'),
    connect = require('gulp-connect');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
//GULP CONNECT TO WATCH HTML --> LIVE RELOAD
gulp.task('connect', function () {
    connect.server({
        root: 'app',
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('./app/*.html')
        .pipe(gulp.dest('./app'))
        .pipe(connect.reload());
});
gulp.task('styles', () => {
    return gulp.src('./dev/styles/**.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./public/styles'))
        .pipe(reload({ stream: true }));
});
gulp.task('watch', function () {
    gulp.watch(['./app/*.html'], ['html']);
});

gulp.task('default', ['connect', 'watch']);
//GULP CONNECT ENDS
gulp.task('scripts', () => {
    return gulp.src('./dev/scripts/site.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('./public/scripts'))
        .pipe(reload({ stream: true }));
});
gulp.task('browser-sync', () => {
    browserSync.init({
        server: './'
    })
});
gulp.task('default', ['browser-sync', 'scripts', 'styles'], () => {
    gulp.watch('dev/**/*.js', ['scripts']);
    gulp.watch('dev/**/*.scss', ['styles']);
    gulp.watch('./public/styles/style.css', reload);
    gulp.watch('./index.html', reload);

});