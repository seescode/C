module.exports = function (grunt) {
	var path = require('path');
    
	//Load configs
	require('load-grunt-config')(grunt, 
    {
        data: {
            liveReloadPort: 11335,
            serverPort: 9001
        }
    });
    
    grunt.registerTask('build-ui', ['clean', 'ngAnnotate', 'ngtemplates', 'concat']);
    grunt.registerTask('default', ['build-ui', 'connect', 'open', 'watch']); 
};