var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');

gulp.task('sass', function () {
  gulp.src('./public/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('develop', function () {
  nodemon({ script: 'index.js',
            ext: 'html js css',
            ignore: ['ignored.js'],
            tasks: ['sass:watch ']
          })
    .on('restart', function () {
      console.log('restarted!');
    });
});

gulp.task('watch', function() {
  gulp.watch('public/sass/style.css', ['styles']);
});

gulp.task('sass:watch', function () {
  gulp.watch('public/sass/**/*.scss', ['sass']);
});
