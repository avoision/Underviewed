var gulp = require('gulp'),
	gutil = require('gulp-util'),
	concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    ngAnnotate = require('gulp-ng-annotate'),
    uglify = require('gulp-uglifyjs'),
    paths = {
        scripts: ['app/*.js']
	};


// Linting functionality
gulp.task('lint', function() {
    gulp.src(paths.scripts)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

// JS Concat
gulp.task('js', function() {
	gulp.src([
		'./src/js/app/uv.module.js',
		'./src/js/app/**/*.js'
	])
	.pipe(concat('all.js'))
	.pipe(ngAnnotate())
	.pipe(uglify())
	.pipe(gulp.dest('./public/js/'));
});

gulp.task('default', ['lint', 'js']);