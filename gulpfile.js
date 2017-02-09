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
    pump = require('pump'),
    cleanCSS = require('gulp-clean-css'),
    jsonminify = require('gulp-jsonminify'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rigger = require('gulp-rigger'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;

var path = {
build: { //Тут мы укажем куда складывать готовые после сборки файлы
    html: 'build/',
    snippets: 'build/snippets/',
    js: 'build/js/',
    data: 'build/data',
    css: 'build/css/',
    img: 'build/img/',
    fonts: 'build/fonts/'
},
src: { //Пути откуда брать исходники
    html: 'src/*.pug', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
    js: 'src/js/main.js',//В стилях и скриптах нам понадобятся только main файлы
    data: 'src/data/*.json',
    style: 'src/scss/*.scss',
    snippets: 'src/snippets/*/*.pug',
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

