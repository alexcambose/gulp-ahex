# gulp-ahex
Alpha hexadecimal [gulp](https://gulpjs.com/) plugin
## Installation
```
npm install -S gulp-ahex
```

[npm](https://www.npmjs.com/package/gulp-ahex)
## Usage
`gulpfile.js`
```js
const gulp = require('gulp');
const ahex = require('ahex.js');

gulp.task('css', function(){
  return gulp.src('./src/style.css')
    .pipe(ahex())
    .pipe(gulp.dest('./dist/'))
});

gulp.task('default', [ 'css' ]);
```
input file `src/style.css`
```css
body{
  color: #00ff0077;
}
```
output file `dist/style.css`
```css
body{
  color: rgba(0, 255, 0, 0.47);
}
```

Go [here](https://github.com/alexcambose/ahex) for more documentation about writing ahex colors
