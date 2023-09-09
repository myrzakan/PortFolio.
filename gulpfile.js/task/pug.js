
// Обработка PUG
const pug = () => {
  return $.gulp.src($.path.pug.src)
    .pipe($.gp.plumber({
      errorHandler: $.gp.notify.onError(error => ({
        title: "Pug",
        message: error.message
      }))
    }))
    .pipe($.gp.pug($.app.pug))
    .pipe($.gp.webpHtml())
    .pipe($.gulp.dest($.path.pug.dest))
};


module.exports = pug