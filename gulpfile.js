const gulp = require("gulp"),
    stylus = require("gulp-stylus"),
    pug = require("gulp-pug"),
    browserSync = require("browser-sync").create(),
    webpack = require("webpack"),
    gulpWebpack = require("webpack-stream");
autoprefixer = require("autoprefixer-stylus");

gulp.task("gulp-webpack", function() {
    return gulp
        .src(["/js/main.js"])
        .pipe(
            gulpWebpack(
                {
                    entry: {
                        app: "./source/scripts/main.js"
                    },
                    output: {
                        filename: "main.bundle.js"
                    },
                    mode: "production"
                },
                webpack
            )
        )
        .pipe(gulp.dest("js"));
});

gulp.task("stylus", function() {
    return gulp
        .src(["./source/styl/style.styl"])
        .pipe(
            stylus({
                use: [
                    autoprefixer(
                        "iOS >= 7",
                        "last 2 Chrome version",
                        "Explorer 7"
                    )
                ]
            })
        )
        .pipe(gulp.dest("./css/"));
});

gulp.task("pug", function buildHTML() {
    return gulp
        .src("source/*.pug")
        .pipe(
            pug({
                pretty: true,
                comments: true
            })
        )
        .pipe(gulp.dest("./"));
});

gulp.task("serve", ["stylus"], function() {
    browserSync.init({
        open: false,
        server: "./"
        // reloadDelay: 1000
    });

    gulp.watch(
        ["source/scripts/*.js", "source/scripts/utils/*.js"],
        ["gulp-webpack"]
    ).on("change", browserSync.reload);

    gulp.watch(["./source/styl/*.styl"], ["stylus"]).on(
        "change",
        browserSync.reload
    );

    gulp.watch("source/*.pug", ["pug"]).on("change", browserSync.reload);
});

gulp.task("default", ["serve"]);
