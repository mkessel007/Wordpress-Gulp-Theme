var gulp = require('gulp'); 

var bower = require('bower');

var compass    = require('gulp-compass');
var coffee    = require('gulp-coffee');
var jade       = require('gulp-jade');
var jshint     = require('gulp-jshint');
var concat     = require('gulp-concat');
var uglify     = require('gulp-uglify');
var prefix     = require('gulp-autoprefixer'); 
var rename     = require('gulp-rename');
var gutil      = require('gulp-util');
var minifyCSS  = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var webserver  = require('gulp-webserver');
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
		"jade": globals.dev + "/jade",
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

var getPort = function(o, char_lim){
	var getNum = function(){
	  return Math.round(Math.random()*10).toString();
	};
	var a = getNum();
	var b = getNum();
	var c = getNum();
	var port = o.toString() + a + b + c;
	if(port.length > char_lim) {
		port = port.substring(0,char_lim);
	}
	return parseInt(port);
};

gulp.task('webserver', function() {
  gulp.src(globals.prod)
	.pipe(webserver({
		port: getPort(8, 4),
		livereload: true,
		//debug current directory
		// directoryListing: true,
		open: true
	}));
});

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

gulp.task('jade', function() {
	gulp.src(paths.app.jade + '/*.jade')
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest(globals.prod))
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
	'jade',
	'images',
	'scripts',
	'fonts',
	'watch',
	'webserver' 
]);
