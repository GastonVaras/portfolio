// Al iniciar en terminal: 
// 1- npm init 
// 2- npm install gulp gulp-sass sass --save-dev
// 3- gulp

const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')

// Cada vez que se hacen cambios en sass se corre la funcion buildStyles para actualizar los archivos css
function buildStyles() {
  return src('libreria/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(purgecss({ content: ['*.html'] }))
    .pipe(dest('style'))
}

function watchTask() {
  watch(['libreria/**/*.scss', '*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)

// Para purgar el css que no usamos necesitamos instalar: npm install gulp-purgecss --save-dev