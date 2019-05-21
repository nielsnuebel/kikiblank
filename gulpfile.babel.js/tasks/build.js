/**
 * Automatic Deploy
 *
 * @description: Deploy Task for an automated Build Process
 */

import { series, parallel } from 'gulp'

import { copy } from './copy'
import { styles } from './styles'

// Config
import { config } from '../config';

export const build = series(
  parallel(copy, styles)
);
