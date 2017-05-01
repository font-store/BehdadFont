var gulp = require('gulp');
var bs = require('browser-sync').create(); // create a browser sync instance.
var reload      = bs.reload;
var st = bs.stream;
gulp.task('start', function () {
	

	bs.init({
		server: {
			baseDir: "./"
		}	
		
	});
	
   gulp.watch("css/*.css").on('change',reload);
   gulp.watch("js/*.js").on('change',reload);
   gulp.watch("fonts/*.*").on('change',reload);
    gulp.watch("*.html").on('change', reload);
});


