'use strict';

const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class UserController extends Controller {
  async index() {
    const ctx = this.ctx;
    const params = ctx.query;
    const data = await ctx.service.user.index(params);
    ctx.body = {
      code: data.data.code,
      msg: data.data.msg,
      count: data.data.count,
      data: data.data.data
    }
  }

  async update() {
    const ctx = this.ctx;
    const params = ctx.request.body;
    console.log(params);
    if (params.sex == '男') {
      params.sex = 1
    } else {
      params.sex = 0
    }
    const data = await ctx.service.user.update(params);
    ctx.body = {
      code: data.data.code,
      msg: data.data.msg,
      count: data.data.count,
      data: data.data.data
    }
  }

  async destroy() {
    const ctx = this.ctx;
    const id = ctx.request.body.id;

    const data = await ctx.service.user.destroy(id);
    ctx.body = {
      code: data.data.code,
      msg: data.data.msg,
      count: data.data.count,
      data: data.data.data
    }
  }


}

module.exports = UserController;