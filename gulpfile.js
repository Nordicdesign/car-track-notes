var gulp = require('gulp');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var nunjucksRender = require('gulp-nunjucks-render');
var browserSync = require('browser-sync');
var del = require('del');
var runSequence = require('run-sequence');


gulp.task('sass', function () {
    gulp.src('src/styles/scss/main.scss')
        .pipe(sass({includePaths: ['src/styles/scss']}))
        .pipe(gulp.dest('docs/styles'));
});

gulp.task('useref', ['copy:js'], function(){
  return gulp.src('docs/**/*.html')
    .pipe(useref())
    .pipe(gulp.dest('docs'))
});

gulp.task('nunjucks', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('src/**/*.+(html|nunjucks)')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['src/templates']
    }))
  // output files in app folder
  .pipe(gulp.dest('docs'))
});


gulp.task('browser-sync', function() {
    browserSync.init(["src/styles/*.css", "src/js/*.js", "src/*.html"], {
        server: {
            baseDir: "./docs/"
        }
    });
});

gulp.task('copy:images', function() {
  return gulp.src('src/images/**/*')
  .pipe(gulp.dest('docs/images'))
})

gulp.task('copy:js', function() {
  return gulp.src('src/js/**/*')
  .pipe(gulp.dest('docs/js'))
})


gulp.task('clean:dist', function() {
  return del.sync('docs');
})

gulp.task('clean:temp', function() {
  return del.sync('docs/templates');
})


gulp.task('watch', ['default','browser-sync'], function() {
  gulp.watch("src/**/*.scss", ['sass']).on('change', browserSync.reload);
  gulp.watch("src/**/*.+(html|nunjucks)", ['nunjucks']).on('change', browserSync.reload);
  gulp.watch("src/js/**/*.js", ['copy:js']).on('change', browserSync.reload);
  gulp.watch("src/images/**/*.+(png|gif|jpg)", ['copy:images']).on('change', browserSync.reload);
  // gulp.watch("src/js/*.js", browserSync.reload);
});

gulp.task('default', function(callback) {
  // nunjucks at the end of the sequence works as everything is ready
  runSequence('clean:dist', 'nunjucks',['sass', 'copy:images', 'copy:js'],'clean:temp', callback)
});


gulp.task('build', function(callback) {
  // nunjucks at the end of the sequence works as everything is ready
  runSequence('clean:dist', 'nunjucks',['sass', 'copy:images'],'clean:temp','useref', callback)
});
