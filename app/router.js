'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller
  } = app;
  router.resources('home', '/', controller.home);
  router.resources('users', '/users', controller.user);
};