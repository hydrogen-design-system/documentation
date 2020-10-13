// Hydrogen / Test / Gulpfile

"use strict";

// Requirements
const { series, parallel, src, dest, watch } = require('gulp');
const autoprefixer = require('autoprefixer');
const browsersync = require('browser-sync').create();
const del = require('del');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const twig = require('gulp-twig');
const gulpData = require('gulp-data');
const htmlmin = require('gulp-htmlmin');
const fs = require('fs');

sass.compiler = require('sass');

// Test Scripts

    // Move Test Project Files

        // Move Test HMTL
        // function moveTestHTML() {
        //     return src("src/index.html")
        //     .pipe(dest("cache"));
        // }
        // Twig
        function template() {
            return src('./src/markup/**/*.twig')
            .pipe(gulpData(function(file) {
                return JSON.parse(fs.readFileSync('./src/data/docs.json'));
            }))
            .pipe(twig())
            .pipe(htmlmin({
                collapseWhitespace: true,
                removeComments: true
            }))
            .pipe(dest('cache'));
        }
        // Move Test Sass
        function moveTestSass() {
            return src("src/app.scss")
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
            return src("src/app.js")
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
        return src('src/img/**/*')
        .pipe(dest('cache/img'));
    }

    // Move Favicons
    function moveDevFavicons() {
        return src('src/favicons/**/*')
        .pipe(dest('cache/favicons'));
    }

    // Clean Cache
    function cleanCache() {
        return del('cache/**/*')
    }

    // TestScript
    const testScript = series(cleanCache, template, moveTestSass, moveTestJS, moveCash, moveH2TestJS, moveTestComponentJS, moveImages, moveDevFavicons, compileTestSass);

    // Watch
    function watchTestFiles() {
        watch(['src/**/*'], series(testScript, browserSyncReload));
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

    // Build Docs

    // Move Test Project Files

        // Move Test HMTL
        function docsTemplate() {
            return src('./src/markup/**/*.twig')
            .pipe(gulpData(function(file) {
                return JSON.parse(fs.readFileSync('./src/data/docs.json'));
            }))
            .pipe(twig())
            .pipe(htmlmin({
                collapseWhitespace: true,
                removeComments: true
            }))
            .pipe(dest('docs'));
        }
        // Move Test Sass
        function moveDocsSass() {
            return src("src/app.scss")
            .pipe(dest("docs"));
        }
        // Move Test JS
        function moveDocsJS() {
            return src("node_modules/@hydrogen-design-system/system/dist/cdn/h2-system.min.js")
            .pipe(dest("docs"));
        }
        // Move Cash
        function moveDocsCash() {
            return src("node_modules/@hydrogen-design-system/system/dist/cdn/cash/cash.min.js")
            .pipe(dest("docs"));
        }
        // Move Test Component JS
        function moveDocsComponentJS() {
            return src("node_modules/@hydrogen-design-system/component-accordion/dist/version/scripts/*.js")
            .pipe(dest("docs"));
        }
        // Move Hydrogen JS
        function moveDocsH2AppJS() {
            return src("src/app.js")
            .pipe(dest("docs"));
        }

    // Compile
    function compileDocsSass() {
        return src('docs/app.scss')
        .pipe(sass())
        .pipe(postcss([autoprefixer()]))
        .pipe(dest('docs'));
    }

    // Move images.
    function moveDocsImages() {
        return src('src/img/**/*')
        .pipe(dest('docs/img'));
    }

    // Move Favicons
    function moveDocsFavicons() {
        return src('src/favicons/**/*')
        .pipe(dest('docs/favicons'));
    }

    // Clean Cache
    function cleanDocs() {
        return del(['docs/**/*', '!docs/CNAME']);
    }

    // Clean Build Files
    function cleanBuild() {
        return del('app.scss');
    }

    exports.build = series(
        cleanDocs, 
        docsTemplate,
        moveDocsSass,
        moveDocsJS,
        moveDocsCash,
        moveDocsComponentJS,
        moveDocsH2AppJS,
        compileDocsSass,
        moveDocsImages,
        moveDocsFavicons,
        cleanBuild
    );