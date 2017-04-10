module.exports = function(grunt) {
  
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/js/*.js']
    },
    watch: {
      jshint:{
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      },
      web:{
        options:{livereload:true},
        files: ['src/**/*.html','src/**/*.js','src/**/*.css','src/**/*.less']
      },
      html:{
        files: ['src/**/*.html'],
        tasks: ['copy']
      },
      less:{
        files:["src/css/resume.less"],
        tasks: ['less']
      }
    },
    copy: {
        index:{
            files: [
            {expand: true,cwd: 'src/', src: ['*.html'], dest: 'build/'}    
            ]
        },
        static:{
            files: [
            {expand: true,cwd: 'src/templates', src: ['*.html'], dest: 'build/static/templates'}    
            ]
        }
    },
    express: {
      dev: {
        options: {
          script: 'app.js',
          background: true,
          port: 9006,
        }
      }
    },
    less:{
      css:{
        files:{
          "build/static/css/resume.css":"src/css/resume.less"
        }
      }
    }
  });

  grunt.registerTask('foo',['copy']);
  grunt.registerTask('build-less',['less']);
  grunt.registerTask('server', ['express', 'watch']);
  grunt.registerTask('default', ['server']);
  grunt.loadNpmTasks('grunt-contrib-copy');

};
