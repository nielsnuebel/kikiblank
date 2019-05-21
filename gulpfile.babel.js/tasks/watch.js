/*
 * @title Watch
 * @description A task to start the server and watch for changes.
 */

// Dependencies
import gulp from 'gulp';
import { series } from 'gulp';

// Tasks
import { reload, serve } from './server';
import { styles } from './styles';
import { copy } from './copy';

// Config
import { config } from '../config';

function watchFiles() {
  gulp.watch(config.paths.templates.watch, series(copy, reload));
  gulp.watch([config.paths.styles.watch], styles);
}

export const watch = series(
  // this task only serves (depending on your config) and watches files
  serve,
  watchFiles
);
