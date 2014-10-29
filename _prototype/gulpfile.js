var gulp = require("gulp"),
		bower = require("bower"),
		compass    = require("gulp-compass"),
		jshint     = require("gulp-jshint"),
		concat     = require("gulp-concat"),
		uglify     = require("gulp-uglify"),
		prefix     = require("gulp-autoprefixer"),
		rename     = require("gulp-rename"),
		gutil      = require("gulp-util"),
		minifyCSS  = require("gulp-minify-css");

globals = {
	// Working Directory
	dev: "app",
	// Compiled Code
	prod: "dist"
};

paths = {
	app: {
		"scripts": globals.dev + "/scripts",
		"styles": globals.dev + "/styles",
		"images": globals.dev + "/images",
		"fonts": globals.dev + "/fonts"
	},
	dist: {
		"scripts": globals.prod + "/js",
		"styles": globals.prod + "/css",
		"images": globals.prod + "/img",
		"fonts": globals.prod + "/fonts"
	}
};

gulp.task("fonts", function() {
  gulp.src(paths.app.fonts + "/*")
  .pipe(gulp.dest(paths.dist.fonts));
});

gulp.task("compass", function() {
	gulp.src(paths.app.styles + "/*.scss")
		.pipe(compass({
			css: paths.dist.styles,
			sass: paths.app.styles
		}))
		.pipe(prefix())
		.pipe(minifyCSS())
		.pipe(rename("styles.min.css"))
		.pipe(gulp.dest(paths.dist.styles))
});

gulp.task("scripts", function() {
	gulp.src(paths.app.scripts + "/*.js")
		.pipe(uglify())
		.pipe(concat("front-end.min.js"))
		.pipe(gulp.dest(paths.dist.scripts));
});

gulp.task("images", function() {
    gulp.src(paths.app.images + "/*")
        .pipe(gulp.dest(paths.dist.images));
});

gulp.task("watch", function() {
	gulp.watch(paths.app.styles + "/*.scss", [ "compass" ] );
	gulp.watch(paths.app.jade + "/*.jade", [ "jade" ] );
	gulp.watch(paths.app.fonts + "/*", [ "fonts" ] );
	gulp.watch(paths.app.scripts + "/*.js", [ "scripts" ] );
	gulp.watch(paths.app.images + "/*", [ "images" ] );
});

gulp.task("default", [
	"compass",
	"images",
	"scripts",
	"fonts",
	"watch"
]);
