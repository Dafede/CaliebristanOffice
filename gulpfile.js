const gulp = require('gulp');
const browserSync = require('browser-sync').create();


gulp.task('browser-sync', () => {
    browserSync.init({
			proxy: 'localhost/ManagePaper/index.html',
    });
});

gulp.task('watch', () => {
		gulp.watch('css/*.css').on('change', browserSync.reload);
		gulp.watch('*.html').on('change', browserSync.reload);
		gulp.watch('js/*.js').on('change', browserSync.reload);
});

//gulp.task('default', ['browser-sync', 'watch']);

gulp.task('default', gulp.parallel('browser-sync', 'watch'));