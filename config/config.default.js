'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1537170564708_1297';

  // add your config here
  config.middleware = [];

  // view
  config.view = {
    defaultViewEngine: 'nunjucks'
  }

  // api
  config.user = {
    url: 'http://127.0.0.1:7001'
  }

  // csrf token
  config.security = {
    csrf: {
      enable: false,
    },
  };
  // config.security = {
  //   csrf: {
  //     queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
  //     bodyName: '_csrf', // 通过 body 传递 CSRF token 的默认字段为 _csrf
  //     headerName: '_csrf'
  //   },
  // }

  return config;
};