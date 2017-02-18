'use strict';

var gulp = require('gulp'),
    pug = require('gulp-pug'),
    babel = require('gulp-babel'),
    sass = require('gulp-sass'),
    compass = require('gulp-compass'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    jshint = require('gulp-jshint'),
    uglifyjs = require('uglify-js'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    jsonminify = require('gulp-jsonminify'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rigger = require('gulp-rigger'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    concat = require('gulp-concat'),
    reload = browserSync.reload;

var path = {
build: {
    html: 'build/',
    snippets: 'build/snippets/',
    js: 'build/js/',
    data: 'build/data',
    css: 'build/css/',
    img: 'build/img/',
    fonts: 'build/fonts/'
},
src: { 
    html: 'src/*.pug', 
    js: 'src/js/main.js',
    data: 'src/data/*.json',
    style: 'src/scss/*.scss',
    snippets: 'src/snippets/*/*.pug',
    img: 'src/img/**/*.*',
    fonts: 'src/fonts/**/*.*'
},
watch: {
    html: 'src/**/*.pug',
    js: 'src/**/*.js',
    data: 'src/**/*.json',
    style: 'src/**/*.scss',
    image: 'src/img/**/*.*',
    fonts: 'src/fonts/**/*.*'
},
clean: './build'
};


var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend_Devil"
};

gulp.task('serve', function() {
    browserSync(config);
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('html', function buildHTML() {
    gulp.src(path.src.html) //Выберем файлы по нужному пути
        .pipe(pug()) //
        .pipe(gulp.dest(path.build.html)); //Выплюнем их в папку build
    gulp.src(path.src.snippets) //Выберем файлы по нужному пути
        .pipe(pug()) //
        .pipe(gulp.dest(path.build.snippets))
        .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
});
gulp.task('js', function () {
    gulp.src(path.watch.js)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
    gulp.src(path.src.js) //Найдём наш main файл
        .pipe(rigger()) //Прогоним через rigger
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(sourcemaps.init()) //Инициализируем sourcemap
        .pipe(uglify())
        .pipe(sourcemaps.write()) //Пропишем карты
        .pipe(gulp.dest(path.build.js)) //Выплюнем готовый файл в build
    gulp.src(path.src.data)
        .pipe(jsonminify())
        .pipe(gulp.dest(path.build.data))
        .pipe(reload({stream: true})) //Перезагрузим сервер
});

gulp.task('style', function () {
    gulp.src(path.src.style)
        .pipe(sourcemaps.init())
        .pipe(compass({
      		config_file: './config.rb',
      		css: 'build/css',
      		sass: 'src/scss'
    	}))
        .pipe(prefixer())
        //Compress
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}))
});

gulp.task('image', function() {
    gulp.src(path.src.img)
        .pipe(imagemin ({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({stream: true}));
});

gulp.task('fonts', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('build', [
    'html',
    'js',
    'style',
    'fonts',
    'image'
]);

gulp.task('watch', function() {
    watch([path.watch.html], function(event, cb) {
        gulp.start('html');
    });
    watch([path.watch.style], function(event, cb){
        gulp.start('style');
    });
    watch([path.watch.js, path.watch.data], function(event, cb){
        gulp.start('js');
    });
    watch([path.watch.image], function(event, cb){
        gulp.start('image');
    });
    watch([path.watch.fonts], function(event, cb){
        gulp.start('fonts');
    });
});

gulp.task('default', ['build', 'serve', 'watch']);

