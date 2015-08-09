module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            expanded: {
                options: {
                    style: 'expanded',
                    sourcemap: 'none'
                },
                files: {
                    'dist/flex-grid.css': 'src/flex-grid.scss'
                }
            },
            compressed: {
                options: {
                    style: 'compressed',
                    sourcemap: 'none'
                },
                files: {
                    'dist/flex-grid.min.css': 'src/flex-grid.scss'
                }
            }
        },

        autoprefixer: {
            dist: {
                files:{
                    'dist/flex-grid.css': 'dist/flex-grid.css',
                    'dist/flex-grid.min.css': 'dist/flex-grid.min.css'
                }
            }
        },

        csso: {
            compressed: {
                options: {
                    report: 'min',
                },
                files:{
                    'dist/flex-grid.min.css': 'dist/flex-grid.min.css'
                }
            }
        },

        watch: {
            css: {
                files: ['src/**/*.scss'],
                tasks: ['sass:expanded'],
                options: {
                    spawn: false,
                }
            }
            livereload: {
                options: { livereload: true },
                files: ['**/*.css', '**/*.html'],
            },
        }

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-csso');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('dist', ['sass:expanded', 'sass:compressed', 'autoprefixer', 'csso:compressed']);
    grunt.registerTask('dev', ['watch']);

};