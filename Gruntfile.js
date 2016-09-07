module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js']
    },
    watch: {
      scripts: {
        files: ['**/*.js'],
        tasks: ['jshint']
      },
      svgs: {
        files: ['src/*.svg'],
        tasks: ['svgmin']
      }
    },
    svgmin: {
      dist: {
        files: {
          'dist/google-play-badge.svg': 'src/google-play-badge.svg'
        }
      }
    }
  });

  grunt.registerTask('default', ['jshint', 'svgmin']);
  grunt.registerTask('dev', ['jshint', 'svgmin', 'watch']);  
};