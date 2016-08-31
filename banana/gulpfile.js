// Modules :)
// ===========================================
const gulp = require('gulp');
const banana = require('gulp-banana');
const babel = require('gulp-babel');
const connect = require('gulp-connect');

// BananaCSS
// ===========================================
gulp.task('banana', () => {
  gulp.src('src/styles/main.bnn')
    .pipe(banana({
      compress: false
    }))
    .pipe(gulp.dest('out/styles/'))
    .pipe(connect.reload());
});

// Babel
// ===========================================
gulp.task('babel', () => {
  gulp.src('src/scripts/**.js')
    .pipe(babel({
      presets: ['es2015']
     }))
    .pipe(gulp.dest('our/scripts/'))
    .pipe(connect.reload());
});

// Watch
// ===========================================
gulp.task('watch', () => {
	gulp.watch(['src/styles/**/**.css'], ['banana']);
  gulp.watch(['src/scripts/**.js'], ['babel']);
});

// Server
// ===========================================
gulp.task('connect', () => {
	connect.server({
		root: 'out',
		livereload: true
	});
});

// More Tasks
// ===========================================
gulp.task('serve', ['connect', 'watch']);
gulp.task('build', ['babel', 'banana']);
