var gulp = require('gulp'); 

var bower = require('bower');

var compass    = require('gulp-compass');
var coffee    = require('gulp-coffee');
var jshint     = require('gulp-jshint');
var concat     = require('gulp-concat');
var uglify     = require('gulp-uglify');
var prefix     = require('gulp-autoprefixer'); 
var rename     = require('gulp-rename');
var gutil      = require('gulp-util');
var minifyCSS  = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var images     = require('gulp-imagemin');
var pngcrush = require('imagemin-pngcrush');

globals = {
	// Working Directory
	dev: "app",
	// Compiled Code
	prod: "dist"
};

paths = {
	app : {
		"scripts": globals.dev + "/scripts",
		"styles": globals.dev + "/styles",
		"images": globals.dev + "/images",
		"fonts": globals.dev + "/fonts"
	},
	dist : {
		"scripts": globals.prod + "/js",
		"styles": globals.prod + "/css",
		"images": globals.prod + "/img",
		"fonts": globals.prod + "/fonts"
	}
};

gulp.task('fonts', function(){
  gulp.src(paths.app.fonts + '/*')
  .pipe(gulp.dest(paths.dist.fonts));
});

gulp.task('compass', function() {
	gulp.src(paths.app.styles + '/*.scss')
		.pipe(compass({
			css: paths.dist.styles,
			sass: paths.app.styles,
		}))
		.pipe(prefix())
		.pipe(minifyCSS())
		.pipe(rename("styles.min.css"))
		.pipe(gulp.dest(paths.dist.styles))
		.on('error', function(err) {
			gutil.log("went to shit!");
		});
});

gulp.task('scripts', function() {
	gulp.src(paths.app.scripts + "/*.js")
		.pipe(uglify())
		.pipe(concat('front-end.min.js'))
		.pipe(gulp.dest(paths.dist.scripts));
});

gulp.task('images', function () {
    gulp.src(paths.app.images + "/*")
        .pipe(images({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngcrush()]
        }))
        .pipe(gulp.dest(paths.dist.images));
});

gulp.task('watch', function() {
	gulp.watch(paths.app.styles + '/*.scss', ['compass']);
	gulp.watch(paths.app.jade + '/*.jade', ['jade']);
	gulp.watch(paths.app.fonts + '/*', ['fonts']);
	gulp.watch(paths.app.scripts + '/*.js', ['scripts']);
	gulp.watch(paths.app.images + '/*', ['images']);
});

gulp.task('default', [
	'compass', 
	'images',
	'scripts',
	'fonts',
	'watch'
]);
