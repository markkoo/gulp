var gulp = require('gulp');
var sass = require('gulp-sass');
var inlineCss = require('gulp-inline-css');

gulp.task('default', function() {
  return gulp.src('./index.html')
      .pipe(inlineCss({
        removeHtmlSelectors : true
      }))
      .pipe(gulp.dest('./index.html'));
});

// gulp.task('sass', function(){
//   return gulp.src('app/scss/**/*.scss')
//     .pipe(sass()) // Converts Sass to CSS with gulp-sass
//     .pipe(gulp.dest('app/css'))
// });


gulp.task('watch', function(){
  gulp.watch('./*.html', gulp.series('default')); 
  // gulp.watch('app/scss/**/*.scss', gulp.series('sass')); 
  // Other watchers
})


