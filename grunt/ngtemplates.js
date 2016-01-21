module.exports = {
    
    //[NOTE] the module name (atom.c) has to be manually updated for each lib
	"atom.c": {
		src: 'src/**/*.html',
		dest: 'dist/templates.js',
		options: {
			url: function (url) {                              
				return url.replace(/^src/, '');
			}
		}
    }
};
