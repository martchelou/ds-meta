module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'public/css/main.min.css': 'assets/sass/index.scss'
                }
            }
        }, // end sass
        uglify: {
            options: { mangle: false },
            concatCompress: {
                files: {
                    'public/js/main.min.js': [
                        'assets/js/fn_base.js'
                    ]
                }
            }
        }, // end uglify
        watch: {
            css: { files: ['assets/sass/*.scss'], tasks: ['sass'] },
            js: { files: ['assets/js/*.js'], tasks: ['uglify'] }
        } // end watch
    });
    // task
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // alias
    grunt.registerTask('default', ['sass', 'uglify']);
    grunt.registerTask('dev', ['watch']);
};