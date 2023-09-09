
// Удаление деректории 
function clean() {
  const publicPath = $.pathCl.resolve(__dirname, "../../public");
  console.log("Cleaning directory:", publicPath); // Вывод пути для отладки

  return $.gulp.src(publicPath, {
    read: false,
    allowEmpty: true
  })
  .pipe($.gp.clean({ force: true,  }))
  .on('end', () => {
    console.log("Directory cleaned successfully"); // Вывод, когда задача завершена
  });
}


module.exports = clean
