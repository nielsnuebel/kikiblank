/*
 * @title gulpfile.babel.js
 * @description A directory file loader to include all the gulp tasks
 *
 */

// Dependencies
import gulp from 'gulp';

import { watch } from './tasks/watch';
import { build } from './tasks/build';
import { copy } from './tasks/copy';
import { styles } from './tasks/styles';
exports.watch = watch;
exports.copyFiles = copy;
exports.styles = styles;
exports.build = build;
