/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    // Task configuration.
    watch: {
      svg: {
        files: ['svg/**/*'],
        tasks: ['svgstore'],
      }
    },
    // copy: {
    //   svg: {
    //     files: [{
    //       expand: true,
    //       dot: true,
    //       cwd: 'export',
    //       dest: 'svg/',
    //       src: [
    //         'svg_*.svg'
    //       ],
    //       rename: function(dest, src) {
    //         return dest + src.replace('icon_', '');
    //       }
    //     }]
    //   }
    // },
    svgstore: {
      options: {
        prefix: 'symbol-', // This will prefix each <symbol> ID
        formatting: {
          indent_size: 2
        },
        includedemo: true
      },
      default: {
        files: {
          'build/svg-icons.svg': ['svg/*.svg'],
        }
      },
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-svgstore');

  // Default task.
  grunt.registerTask('default', ['svgstore']);

};
