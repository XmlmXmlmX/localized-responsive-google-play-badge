module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'src/main.js']
        },
        watch: {
            scripts: {
                files: ['./js/**/*.js', 'Gruntfile.js'],
                tasks: ['jshint', 'uglify']
            },
            svgs: {
                files: ['src/*.svg'],
                tasks: ['build-svg']
            },
            sass: {
                files: ['src/sass/*.scss'],
                tasks: ['sass', 'cssmin']
            }
        },
        svgmin: {
            dist: {
                files: {
                    'dist/google-play-badge.min.svg': 'dist/google-play-badge.svg'
                }
            }
        },
        sass: {
            options: {
                sourceMap: false
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: './src/sass',
                    src: ['*.scss'],
                    dest: './src/css/',
                    ext: '.css'
                }]
            }
        },
        uglify: {
            main: {
                files: {
                    'src/js/main.min.js': ['src/js/main.js']
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'src/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'src/css',
                    ext: '.min.css'
                }]
            }
        },
        'string-replace': {
            inline: {
                files: {
                    'dist/google-play-badge.svg': 'src/google-play-badge.svg',
                },
                options: {
                    replacements: [{
                            pattern: '<link href="css/main.css" type="text/css" rel="stylesheet" xmlns="http://www.w3.org/1999/xhtml"/>',
                            replacement: '<style type="text/css"><%= grunt.file.read("src/css/main.min.css") %></style>'
                        },
                        {
                            pattern: '<script xlink:href="js/main.js" />',
                            replacement: '<script type="text/javascript"><![CDATA[<%= grunt.file.read("src/js/main.min.js") %>]]></script>'
                        }
                    ]
                }
            }
        }
    });


    grunt.registerTask('build-svg', ['string-replace', 'svgmin']);
    grunt.registerTask('default', ['jshint', 'sass', 'cssmin', 'uglify', 'build-svg']);
    grunt.registerTask('dev', ['default', 'watch']);
};