module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
//     uglify: {
//      options: {
//        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
//      },
//      build: {
//        src: 'src/<%= pkg.name %>.js',
//        dest: 'build/<%= pkg.name %>.min.js'
//      }
//    }
      sass: {
        options: {
            includePaths: [
            'bower_components/bootstrap-sass/assets/stylesheets',
            require("bourbon").includePaths,
            require("bourbon-neat").includePaths
            ]
        },
        dist: {
            files: {
                'css/main.css': 'css/sass/main.scss',
                'css/main-bourbon.css': 'css/sass/main-bourbon.scss',
            }
        }
    },
    watch: {
      source: {
        files: ['css/sass/**/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true, // needed to run LiveReload
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    

  // Default task(s).
  grunt.registerTask('default', ['sass', 'watch']);

};