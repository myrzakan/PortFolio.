// Сервер
function server() {
  $.browserSync.init({
    server: {
      baseDir: $.path.root
    }
  });
}

module.exports = server