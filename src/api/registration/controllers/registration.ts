'use strict'
/**
 * A set of functions called "actions" for `registration`
 */
const crypto = require('crypto');
const _ = require('lodash');
const { concat, compact, isArray } = require('lodash/fp');
const utils = require('@strapi/utils');
const {
  contentTypes: { getNonWritableAttributes },
} = require('@strapi/utils');
const getService = (name) => {
  return strapi.plugin('users-permissions').service(name);
};
const {ValidateRegisterBody} = require('../validate/auth');

const { getAbsoluteAdminUrl, getAbsoluteServerUrl, sanitize } = utils;
const { ApplicationError, ValidationError, ForbiddenError } = utils.errors;

const sanitizeUser = (user, ctx) => {
  const { auth } = ctx.state;
  const userSchema = strapi.getModel('plugin::users-permissions.user');

  return sanitize.contentAPI.output(user, userSchema, { auth });
};

export default {
  registration: async (ctx, next) => {
    try {
      ctx.body = 'ok and more';
    } catch (err) {
      ctx.body = err;
    }
  }
};
