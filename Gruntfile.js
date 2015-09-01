module.exports = function(grunt) {
  grunt.initConfig({

    connect: {
      server: {
        options: {
          port: 9001,
        }
      }
    },

    sass: {
      dist: {
        options: {
          style: "expanded"
        },
        files: [{
          expand: true,
          cwd: ".",
          src: '*.scss',
          dest: '.',
          ext: '.css'
        }]
      }
    },

    watch: {
      css: {
        files: ["**/*.scss"],
        tasks: ["sass"]
      },
      options: {
        livereload: true,
      },
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('serve', ["connect", "watch"]);

  grunt.event.on('watch', function(action, filepath, target) {
    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });
}
