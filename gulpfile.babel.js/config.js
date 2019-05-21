export const config = {
  stylelint: false,
  browserSyncConfig: {
    ghostMode: {
      clicks: true,
      scroll: true,
      links: true,
      forms: true
    },
    server: {
      baseDir: ['/dist/']
    },
    proxy: 'http://kikiblank.kick',
    https: false,
    open: false,
    debugInfo: false,
    watchTask: false,
    notify: {
      styles: [
        'padding: 8px 16px;',
        'position: fixed;',
        'font-size: 12px;',
        'font-weight: bold',
        'z-index: 9999;',
        'top: inherit',
        'border-radius: 0',
        'right: 0;',
        'top: 0;',
        'color: #f4f8f9;',
        'background-color: #026277;',
        'text-transform: uppercase'
      ]
    }
  },
  paths: {
    copy: {
      src: ['src/structure/**/**', 'src/structure/**/.*'],
      dest: 'dist/'
    },
    styles: {
      src: 'src/styles/*.scss',
      watch: 'src/styles/**/*.scss',
      modules: 'src/modules/**/*.scss',
      dest: 'dist/templates/kiki/assets/css',
      lint: 'src/styles/**/*.s+(a|c)ss'
    },
    templates: {
      watch: ['src/structure/**/**/*.{php,xml,js}']
    }
  }
};

export const isProd = process.env.NODE_ENV === 'production';
