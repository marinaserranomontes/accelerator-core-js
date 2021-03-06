module.exports = function(grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
      blanket_mocha: {
            options: {
                run: true,
                reporter: 'Min',
                threshold: 70
            },
            files: {
                src: 'test/*.html'
            }
      },
      karma : {
          options: {
              configFile: 'karma.conf.js',
              files: [
                  'node_modules/chai/chai.js',
                  'https://static.opentok.com/v2/js/opentok.min.js',
                  'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js',
                  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.js',
                  'src/communication.js',
                  'src/core.js',
                  'src/events.js',
                  'src/logging.js',
                  'src/state.js',
                  'src/util.js',
                  'test/communication-test.js',
                  'test/core-test.js',
                  'test/state-test.js',
                  'test/index.html'
              ]
          },
          dev: {
              browsers: ['Chrome']
          },
          prod: {
              singleRun: true,
              browsers: ['Chrome']
          }
      }
    });
    grunt.registerTask('default', ['blanket_mocha']);
};
