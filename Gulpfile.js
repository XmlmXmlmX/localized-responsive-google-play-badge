var gulp = require('gulp');
var fs = require('fs');
var cloudConvertSettings = JSON.parse(fs.readFileSync('./cloudConvertSettings.json'));
var cloudconvert = new(require('cloudconvert'))(cloudConvertSettings.apiKey);
var remoteSrc = require('gulp-remote-src');

gulp.task('default', function() {
    console.log(cloudConvertSettings.apiKey);
    fs.createReadStream('./src/img/de_badge_web_generic.eps')
        .pipe(cloudconvert.convert({
            inputformat: 'eps',
            outputformat: 'svg'
        }))
        .pipe(fs.createWriteStream('de_badge_web_generic.svg'))
        .on('finish', function() {
            console.log('Done!');
        });

    /*
        remoteSrc(['en_badge_web_generic.eps', 'de_badge_web_generic.eps'], {
                base: 'https://play.google.com/intl/en_us/badges/images/generic/'
            })
            .pipe(cloudconvert.convert({
                inputformat: 'eps',
                outputformat: 'svg'
            }))
            .pipe(gulp.dest('./src/img/'));
        /*

        fs.createReadStream('tests/input.png')
            .pipe(cloudconvert.convert({
                inputformat: 'eps',
                outputformat: 'svg'
            }))
            .pipe(fs.createWriteStream('out.jpg'))
            .on('finish', function() {
                console.log('Done!');
            });*/
});
