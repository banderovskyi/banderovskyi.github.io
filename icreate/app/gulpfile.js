'use strict';

var gulp = require('gulp'),
    mainBowerFiles = require('main-bower-files'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;

var path = {
    vendor: {
        js: 'app/assets/js/',
        css: 'app/assets/css/'
    },
    dist: { //Тут мы укажем куда складывать готовые после сборки файлы
        html: 'dist/',
        js: 'dist/assets/js/',
        scss: 'dist/assets/css/',
        css: 'dist/assets/css/',
        img: 'dist/assets/img/',
        fonts: 'dist/assets/fonts/'
    },
    app: { //Пути откуда брать исходники
        html: 'app/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        js: 'app/assets/js/*.js',//В стилях и скриптах нам понадобятся только main файлы
        scss: 'app/assets/css/*.scss',
        css: 'app/assets/css/*.css',
        img: 'app/assets/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        fonts: 'app/assets/fonts/**/*.*'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: './app/**/*.html',
        js: './app/assets/js/**/*.js',
        scss: './app/assets/css/**/*.scss',
        css: './app/assets/css/**/*.css',
        img: './app/assets/img/**/*.*',
        fonts: './app/assets/fonts/**/*.*'
    },
    clean: './dist'
};


var config = {
    server: {
        baseDir: "./dist"
    },
    //tunnel: true,
    host: 'localhost',
    port: 8035,
    logPrefix: "RomanPre"
};


gulp.task('html:build', function () {
    return gulp.src(path.app.html) //Выберем файлы по нужному пути
        .pipe(gulp.dest(path.dist.html)) //Выплюнем их в папку build
        .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
});

gulp.task('js:build', function () {
    return gulp.src(path.app.js) //Найдем наш main файл
        .pipe(uglify()) //Сожмем наш js
        .pipe(gulp.dest(path.dist.js)) //Выплюнем готовый файл в build
        .pipe(reload({stream: true})); //И перезагрузим сервер
});

gulp.task('scss:build', function () {
    return gulp.src(path.app.scss) //Выберем наш main.scss
        .pipe(sass()) //Скомпилируем
        .pipe(prefixer({
            browsers: ['last 4 versions'],
            cascade: false
        })) //Добавим вендорные префиксы
        .pipe(cleanCSS()) //Сожмем
        .pipe(gulp.dest(path.dist.scss)) //И в build
        .pipe(reload({stream: true}));
});

gulp.task('css:build', function () {
    return gulp.src(path.app.css) //Выберем наш main.css
        .pipe(gulp.dest(path.dist.css)) //И в build
        .pipe(reload({stream: true}));
});

gulp.task('build',
    gulp.series(
        'html:build',
        'js:build',
        'scss:build',
        'css:build'
    )
);

gulp.task('webserver', function () {
    browserSync(config);

    gulp.watch(path.watch.html, gulp.series('html:build'));
    gulp.watch(path.watch.scss, gulp.series('scss:build'));
    gulp.watch(path.watch.css, gulp.series('css:build'));
    gulp.watch(path.watch.js, gulp.series('js:build'));
});


gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('default',
    gulp.series(
        'build',
        'webserver'
    )
);