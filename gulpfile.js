const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Compilação do SASS
gulp.task('sass', function () {
  return gulp.src('src/scss/styles.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

// Compressão de imagens
gulp.task('imagemin', function () {
  return gulp.src('src/images/bird-ga5d9ed257_1920.jpg')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});

gulp.task('imagemin', function () {
    return gulp.src('src/images/birds-g6b63afc7a_1920.jpg')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/images'));
  });

  gulp.task('imagemin', function () {
    return gulp.src('src/images/butterfly-g7f3546b64_1920.jpg')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/images'));
  });

  gulp.task('imagemin', function () {
    return gulp.src('src/images/hands-gc143a78ba_1920.jpg')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/images'));
  });

  gulp.task('imagemin', function () {
    return gulp.src('src/images/lilies-g19bcb21a4_1920.jpg')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/images'));
  });

  gulp.task('imagemin', function () {
    return gulp.src('src/images/street-gddeece843_1920.jpg')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/images'));
  });

// Compressão de código JavaScript
gulp.task('uglify', function () {
  return gulp.src('src/js/script.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// Tarefa padrão
gulp.task('default', gulp.parallel('sass', 'imagemin', 'uglify'));