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
      }  
    },
    copy: {
        main:{
            files: [
            {expand: true,cwd: 'src/', src: ['**/*.html'], dest: 'temp/'}    
            ]
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
  grunt.registerTask('default', ['jshint']);

  grunt.loadNpmTasks('grunt-contrib-copy');

};
