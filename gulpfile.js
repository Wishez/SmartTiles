'use strict';

var gulp = require('gulp'),
    pug = require('gulp-pug'),
    watch = require('gulp-watch'),
    modernizr = require('gulp-modernizr'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    compass = require('gulp-compass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cleanCSS = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    jshint = require('gulp-jshint'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;

var path = {
build: { //Тут мы укажем куда складывать готовые после сборки файлы
    html: 'build/',
    js: 'build/js/',
    css: 'build/css/',
    img: 'build/img/',
    fonts: 'build/fonts/'
},
src: { //Пути откуда брать исходники
    html: 'src/*.pug', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
    js: 'src/js/*.js',//В стилях и скриптах нам понадобятся только main файлы
    style: 'src/scss/*.scss',
    img: 'src/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
    fonts: 'src/fonts/**/*.*'
},
watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
    html: 'src/**/*.pug',
    js: 'src/**/*.js',
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
        .pipe(gulp.dest(path.build.html)) //Выплюнем их в папку build
        .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
});

gulp.task('js', function () {
    gulp.src(path.src.js) //Найдём наш main файл
        .pipe(rigger()) //Прогоним через rigger
        .pipe(sourcemaps.init()) //Инициализируем sourcemap
        .pipe(modernizr())
        .pipe(jshint())
        .pipe(uglify()) //Сожмём наш js
        .pipe(sourcemaps.write()) //Пропишем карты
        .pipe(gulp.dest(path.build.js)) //Выплюнем готовый файл в build
        .pipe(reload({stream: true})) //Перезагрузим сервер
});

gulp.task('style', function () {
    gulp.src(path.src.style) //Выбираем main.scss
        .pipe(sourcemaps.init())//As well as js
        .pipe(compass({
      		config_file: './config.rb',
      		css: 'build/css',
      		sass: 'src/scss'
    	}))
        .pipe(prefixer()) //Add vendor prefixs //Compress
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css)) //Кладём в build
        .pipe(reload({stream: true}))
});

gulp.task('image', function() {
    gulp.src(path.src.img) //Выбераем наши картинки
        .pipe(imagemin ({ //Сожмём их
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img)) //И бросим в build
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
    watch([path.watch.js], function(event, cb){
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

