#使用 gulp-babel把es6代码转换成es5

###先安装必要的包
```
npm install
```

##然后根据需要修改路径

```javascript
gulp.task("toEs6", function () {
  return gulp.src("src/main.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});
```

##接着运行
``` 
gulp
```