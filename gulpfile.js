// Hydrogen / Test / Gulpfile

"use strict";

// Requirements
const { series, parallel, src, dest, watch } = require('gulp');
const autoprefixer = require('autoprefixer');
const browsersync = require('browser-sync').create();
const del = require('del');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');

sass.compiler = require('sass');

// Test Scripts

    // Move Test Project Files

        // Move Test HMTL
        function moveTestHTML() {
            return src("dev/index.html")
            .pipe(dest("cache"));
        }
        // Move Test Sass
        function moveTestSass() {
            return src("dev/app.scss")
            .pipe(dest("cache"));
        }
        // Move Test JS
        function moveTestJS() {
            return src("node_modules/@hydrogen-design-system/system/dist/cdn/h2-system.min.js")
            .pipe(dest("cache"));
        }
        // Move Cash
        function moveCash() {
            return src("node_modules/@hydrogen-design-system/system/dist/cdn/cash/cash.min.js")
            .pipe(dest("cache"));
        }
        // Move Test Component JS
        function moveTestComponentJS() {
            return src("node_modules/@hydrogen-design-system/component-accordion/dist/version/scripts/*.js")
            .pipe(dest("cache"));
        }
        // Move Hydrogen JS
        function moveH2TestJS() {
            return src("dev/app.js")
            .pipe(dest("cache"));
        }

    // Compile
    function compileTestSass() {
        return src('cache/app.scss')
        .pipe(sass())
        .pipe(postcss([autoprefixer()]))
        .pipe(dest('cache'));
    }

    // Move images.
    function moveImages() {
        return src('dev/img/**/*')
        .pipe(dest('cache/img'));
    }

    // Move Favicons
    function moveDevFavicons() {
        return src('dev/favicons/**/*')
        .pipe(dest('cache/favicons'));
    }

    // Clean Cache
    function cleanCache() {
        return del('cache/**/*')
    }

    // TestScript
    const testScript = series(cleanCache, moveTestHTML, moveTestSass, moveTestJS, moveCash, moveH2TestJS, moveTestComponentJS, moveImages, moveDevFavicons, compileTestSass);

    // Watch
    function watchTestFiles() {
        watch(['dev/**/*'], series(testScript, browserSyncReload));
    }

    // Browsersync
    function browserSync(done) {
        browsersync.init({
            server: {
                baseDir: 'cache'
            },
        });
        done();
    }
    function browserSyncReload(done) {
        return src('cache/*.html')
        .pipe(browsersync.reload({
            stream: true
        }));
    }

    exports.default = series(testScript, parallel(browserSync, watchTestFiles));