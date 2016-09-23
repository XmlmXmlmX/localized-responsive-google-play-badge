var gulp = require('gulp');
var panini = require('panini');
var fs = require('fs');
var badgeSourceSettings = JSON.parse(fs.readFileSync('./badgeSourceSettings.json'));
var remoteSrc = require('gulp-remote-src');
var gutil = require('gulp-util');

if (!String.prototype.format) {
    String.prototype.format = function() {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function(match, number) {
            return typeof args[number] != 'undefined' ?
                args[number] :
                match;
        });
    };
}

function getBadgeSources() {
    var sources = [];

    badgeSourceSettings.countryCodes.forEach(function(element) {
        sources.push(badgeSourceSettings.filenameFormat.format(element, badgeSourceSettings.extension));
    }, this);

    return sources;
}

gulp.task('download-badges', function() {
    remoteSrc(getBadgeSources(), {
            base: badgeSourceSettings.baseUrl,
            requestOptions: {
                'proxy': "http://shsl:s987123H%26@alproxy1.my-tts.net:8080"
            }
        })
        .pipe(gulp.dest('./src/img/eps'));
});

gulp.task('test', function(cb) {
    var sb = '';

    badgeSourceSettings.countryCodes.forEach(function(entry) {
        sb += '- "' + entry + '"\r\n';
    });

    fs.writeFile('test/panini/data/languages.yml', sb, cb);
    gulp.src('test/panini/pages/**/*.html')
        .pipe(panini({
            root: 'test/panini/pages/',
            layouts: 'test/panini/layouts/',
            partials: 'test/panini/partials/',
            helpers: 'test/panini/helpers/',
            data: 'test/panini/data/'
        }))
        .pipe(gulp.dest('test'));
});

gulp.task('default', ['test']);