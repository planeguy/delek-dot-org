var Builder = require('jspm').Builder;
var gulp = require('gulp');
var sass = require('gulp-sass');
require('./object.assign.js');

function build(dest, options){
    var builder = new Builder();
    return builder.loadConfig('jspm.config.js')
    .then(function(){
        return builder.buildStatic(
            'src/main.js',
            dest + '/main.js',
            Object.assign({
                minify: true,
                sourceMaps: false
            }, (options || {}))
        );
    });
}

function copyassetsto(dest){
    return gulp.src([
        './assets/**'
    ]).pipe(gulp.dest(dest));
}

function cssfromsass(dest){
    gulp.src(['./scss/delek-dot-org.scss'])
    .pipe(sass())
    .pipe(gulp.dest(dest));
}

gulp.task('dev:assets',[],function(){ return copyassetsto('dev'); });
gulp.task('dev:sass',[], function(){ return cssfromsass('dev');});
gulp.task('dev:code',[], function(){ return build('./dev', {minify: false, sourceMaps:true}); });

gulp.task('dev', ['dev:assets','dev:code', 'dev:sass']);

gulp.task('watch',['dev'],function () {
    gulp.watch(['./assets/**'],['dev:assets']);
    gulp.watch(['./src/**'],['dev:code']);
    gulp.watch(['./scss/**'],['dev:sass']);
});


gulp.task('dist:assets',[],function(){ return copyassetsto('dist');});
gulp.task('dist:code',[], function(){ return build('./dist'); })
gulp.task('dist', ['dist:assets','dist:code'] );