module.exports = {
    dist: {
        options: {
            sourceMap: true,
            separator: '\n',
        },
        src: [
            'node_modules/angular/angular.js',
            'node_modules/@abot/super-alert/dist/module.js',
            'node_modules/@abot/super-alert/dist/*.js',
            'node_modules/@abot/super-alert/dist/**/*.js',                            
            'dist/module.js',
            'dist/*.js',
            'dist/**/*.js'
        ],
        dest: 'sample/c.js'
    }
};
