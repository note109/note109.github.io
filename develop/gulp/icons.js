import gulp from "gulp";
import svgSprite from "gulp-svg-sprite";

const config = {
  mode: {
    symbol: {
      render: {
        css: true,
      },
      dest: "icons",
      example: true,
    },
  },
};

gulp.task("concatSvgIcon", () => {
  gulp.src("assets/raw_icons/*.svg")
    .pipe(svgSprite(config))
    .pipe(gulp.dest("assets"));
});

gulp.task("icons", ["concatSvgIcon"]);
