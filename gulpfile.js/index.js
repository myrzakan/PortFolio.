global.$ = {
  // Пакеты
  gulp: require("gulp"),
  browserSync: require("browser-sync").create(),
  gp: require("gulp-load-plugins")(),
  pathCl: require("path"),
  sass: require("gulp-sass")(require("sass")),
  weps: require("webpack-stream"),
  
  // Конфигурация
  path: require("./config/path"),
  app: require("./config/app"),
}

// Задачи 
const requireDir = require("require-dir")
const task = requireDir("./task", { recurse: true })

// Наблюдение
const watcher = () => {
  $.gulp.watch($.path.pug.watch, $.gulp.series(task.pug)).on("all", $.browserSync.reload);
  $.gulp.watch($.path.html.watch, $.gulp.series(task.html)).on("all", $.browserSync.reload);
  $.gulp.watch($.path.scss.watch, $.gulp.series(task.scss)).on("all", $.browserSync.reload);
  $.gulp.watch($.path.css.watch, $.gulp.series(task.css)).on("all", $.browserSync.reload);
  $.gulp.watch($.path.js.watch, $.gulp.series(task.js)).on("all", $.browserSync.reload);
  $.gulp.watch($.path.img.watch, $.gulp.series(task.img)).on("all", $.browserSync.reload);
};


// Html
const build = $.gulp.series (
  task.clean,
  $.gulp.parallel(task.html, task.scss, task.js, task.img,)
)

const dev = $.gulp.series (
  build,
  $.gulp.parallel(watcher, task.server)
)

// Pug
const buildPug = $.gulp.series (
  task.clean,
  $.gulp.parallel(task.pug, task.scss, task.js, task.img)
);

const devPug = $.gulp.series (
  buildPug,
  $.gulp.parallel(watcher, task.server)
);

// Задачи
exports.pug = task.pug;
exports.clean = task.clean; 
exports.scss = task.scss
exports.js = task.js
exports.img = task.img
exports.css = task.css

// Сборка Html
exports.dev = dev
exports.build = build
exports.default = $.app.isProd ? build : dev

// Сборка для Pug
exports.devPug = devPug;
exports.buildPug = buildPug;

