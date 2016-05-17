var jshint = require('gulp-jshint');
var gulp = require('gulp');
var karma = require('karma').Server;
var jasmine = require('gulp-jasmine');

gulp.task('test', function(done) {
	new karma({
		configFile: __dirname + '/karma.conf.js'
	}, done).start();
});

gulp.task('jshint', function() {
	return gulp.src('test/*.js', 'app.js')
    	.pipe(jshint())
    	.pipe(jshint.reporter('default'));
});

gulp.task('watch', function(){
	gulp.watch('test/test.js', ['test']);
	gulp.watch('app.js', ['jshint']);
});

gulp.task('default', ['watch']);