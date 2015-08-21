var gulp = require('gulp'),
	gutil = require('gulp-util'),
	concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    ngAnnotate = require('gulp-ng-annotate'),
    purify = require('gulp-purifycss'),
    uglify = require('gulp-uglifyjs'),
    paths = {
        scripts: ['app/*.js'],
        css: ['./public/css/*.css'],
        html: [
        	'./public/index.html',
        	'./public/js/*.js',
        	'./public/share/share.php',
        	'./public/views/*.html'
        ]
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

// Purify CSS
gulp.task('css', function() {
	return gulp.src( paths.css )
	.pipe(purify( paths.html ))
	.pipe(gulp.dest('./public/css/'));
});


gulp.task('default', ['lint', 'js', 'css']);