module.exports = {
    dist: {
        options: {
            sourceMap: true,
            separator: '\n',
        },
        src: [
            'bower_components/angular/angular.js',
            'bower_components/super-alert/dist/module.js',
            'bower_components/super-alert/dist/*.js',
            'bower_components/super-alert/dist/**/*.js',                            
            'dist/module.js',
            'dist/*.js',
            'dist/**/*.js'
        ],
        dest: 'sample/c.js'
    }
};
