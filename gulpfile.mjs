import gulp from "gulp";
import imagemin from "gulp-imagemin";
import imageminWebp from "imagemin-webp";
import rename from "gulp-rename";
import sharp from "sharp";
import through2 from "through2";

gulp.task("images", () => {
  return gulp
    .src("public/images/**/*.{png,jpg}")
    .pipe(imagemin())
    .pipe(gulp.dest("public/images"));
});

gulp.task("avif", () => {
  return gulp
    .src("public/images/**/*.{png,jpg}")
    .pipe(
      through2.obj(async (file, _, cb) => {
        try {
          const data = await sharp(file.contents)
            .avif({ quality: 50, effort: 4 })
            .toBuffer();
          file.contents = data;
          return cb(null, file);
        } catch (error) {
          console.error(error);
          return cb(null, file);
        }
      })
    )
    .pipe(rename({ extname: ".avif" }))
    .pipe(gulp.dest("public/images"));
});

gulp.task("webp", () => {
  return gulp
    .src("public/images/**/*.{png,jpg}")
    .pipe(imagemin([imageminWebp({ quality: 80 })]))
    .pipe(rename({ extname: ".webp" }))
    .pipe(gulp.dest("public/images"));
});
