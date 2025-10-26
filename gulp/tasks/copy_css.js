export const copyCss = () => {
    console.log("Запуск задачи copyCss...");
    return app.gulp
        .src(app.path.src.css)
        .pipe(app.gulp.dest(app.path.build.cssRaw));
};
