module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            expanded: {
                options: {
                    style: 'expanded',
                    sourcemap: 'auto'
                },
                files: {
                    'dist/flex-grid.css': 'src/flex-grid.scss'
                }
            },
            compressed: {
                options: {
                    style: 'compressed',
                    sourcemap: 'auto'
                },
                files: {
                    'dist/flex-grid.min.css': 'src/flex-grid.scss'
                }
            }
        },

        scsslint: {
            dev: [
                'src/**/*.scss',
            ],
            options: {
                config: '.scss-lint.yml',
                colorizeOutput: true
            },
        },

        autoprefixer: {
            dist: {
                options: {
                    map: true
                },
                files:{
                    'dist/flex-grid.css': 'dist/flex-grid.css',
                    'dist/flex-grid.min.css': 'dist/flex-grid.min.css'
                }
            }
        },

        watch: {
            css: {
                files: ['src/**/*.scss'],
                tasks: ['sass:compressed'],
                options: {
                    spawn: true,
                }
            },
            livereload: {
                options: { livereload: true },
                files: ['**/*.css', '**/*.html'],
            },
        }

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-scss-lint');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('dist', ['sass', 'autoprefixer']);
    grunt.registerTask('lint', ['scsslint']);
    grunt.registerTask('dev', ['watch']);

};