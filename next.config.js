// next.config.js
const withSass = require('@zeit/next-sass');
const WithCSS = require('@zeit/next-css');

module.exports = WithCSS(
  withSass({
    target: 'serverless',
    webpack: config => {
      config.node = { fs: 'empty' };
      return config;
    }
  })
);
