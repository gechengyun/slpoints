const path = require('path');
var prod = process.env.NODE_ENV === 'production';

module.exports = {
  wpyExt: '.wpy',
  eslint: true,
  cliLogs: !prod,
  build: {
    web: {
      htmlTemplate: path.join('src', 'index.template.html'),
      htmlOutput: path.join('web', 'index.html'),
      jsOutput: path.join('web', 'index.js')
    }
  },
  resolve: {
    alias: {
      counter: path.join(__dirname, 'src/components/counter'),
      '@': path.join(__dirname, 'src')
    },
    aliasFields: ['wepy', 'weapp'],
    modules: ['node_modules']
  },
  compilers: {
    less: {
      compress: prod
    },
    /* sass: {
      outputStyle: 'compressed'
    }, */
    babel: {
      sourceMap: true,
      presets: [
        'env'
      ],
      plugins: [
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-object-rest-spread',
        'transform-export-extensions'
      ]
    }
  },
  plugins: {
    replace: {
      filter: /\.wxml$/,
      config: {
        find: /<\!-- wepyhtml-repeat start -->([\W\w]+?)<\!-- wepyhtml-repeat end -->/,
        replace(match, tpl) {
          let result = '';
          let prefix = '';
          tpl = tpl.replace(/\{\{\s*(\$.*?\$)thisIsMe\s*\}\}/, (match, p) => {
            prefix = p;
            return '';
          });
          for (let i = 0; i <= 20; i++) {
            result += '\n' + tpl
            .replace('wepyhtml-0', 'wepyhtml-' + i)
            .replace(/<\!-- next template -->/g, () => {
              return i === 20 ? '' : `<template is="wepyhtml-${i + 1}" wx:if="{{ item.children }}" data="{{ ${prefix}content: item.children, ${prefix}imgInsteadOfVideo: ${prefix}imgInsteadOfVideo }}"></template>`;
            });
          }
          return result;
        }
      }
    }
  },
  appConfig: {
    noPromiseAPI: ['createSelectorQuery'],
    // baseUrl: process.env.NODE_ENV === 'production' ? 'https://api.test.btgonline.net' : 'https://api.test.btgonline.net',
    // webSocketUrl: process.env.NODE_ENV === 'production' ? 'wss://api.test.btgonline.net/point/webSocket' : 'wss://api.test.btgonline.net/point/webSocket',
    baseUrl: process.env.NODE_ENV === 'production' ? 'https://customer.api.btgsmartlink.net' : 'https://customer.api.btgsmartlink.net',
    webSocketUrl: process.env.NODE_ENV === 'production' ? 'wss://customer.api.btgsmartlink.net/point/webSocket' : 'wss://customer.api.btgsmartlink.net/point/webSocket',
    webViewUrl: process.env.NODE_ENV === 'production' ? 'https://wx.btgsmartlink.net' : 'https://wx.btgsmartlink.net'
  }
};

if (prod) {
  // 压缩sass
  // module.exports.compilers['sass'] = {outputStyle: 'compressed'}

  // 压缩js
  module.exports.plugins = {
    uglifyjs: {
      filter: /\.js$/,
      config: {
      }
    },
    imagemin: {
      filter: /\.(jpg|png|jpeg)$/,
      config: {
        jpg: {
          quality: 80
        },
        png: {
          quality: 80
        }
      }
    }
  };
}
