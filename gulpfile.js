var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var path = require('path');
var fs = require('fs');

gulp.task('sass', function () {
  gulp.src('./public/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulp.dest('./public/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('./public/dist/css'));
});

gulp.task('scripts', function() {
  return gulp.src('./public/js/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./public/dist/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./public/dist/js'));
});

gulp.task('sass:watch', function () {
  gulp.watch('public/sass/**/*.scss', ['sass']);
});

gulp.task('develop', function () {
  nodemon({ script: 'index.js',
            ext: 'html js css',
            env: {'NODE_ENV': 'development'},
            tasks: function(changedFiles) {
              var tasks = [];
              changedFiles.forEach(function(file) {
                if(path.extname(file) === '.scss' && !~tasks.indexOf('sass:watch')) {
                  tasks.push('sass:watch');
                }
              });
              return tasks;
            }
          });
});
