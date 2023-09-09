const webpack = require("webpack-stream")

const js = () => {
  return $.gulp.src($.path.js.src, { sourcemaps: $.app.isDev })
    .pipe($.gp.plumber({
      errorHandler: $.gp.notify.onError(error => ({
        title: "JavaScript",
        message: error.message
      }))
    }))
    .pipe($.gp.babel())
    .pipe(webpack($.app.webpack))
    .pipe($.gp.uglify())
    .pipe($.gulp.dest($.path.js.dest, {sourcemaps: $.app.isDev}));
};

module.exports = js;
