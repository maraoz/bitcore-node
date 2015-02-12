'use strict';

var gulp = require('gulp');
var bitcoreTasks = require('bitcore-build');

bitcoreTasks('node', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
