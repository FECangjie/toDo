/**
 * @file: 同步更改
 * @aythor: wangshiying@lianjia.com
 */
var gulp = require('gulp')
var browserSync = require('browser-sync')

gulp.task('browserSync', function() {
  browserSync.init(
    {
      proxy: 'http://localhost:8002/',
      files: "**",
      reloadDelay: 2000,
      reloadDebounce: 2000,
      open: false
    }
  )
})
