'use strict'
// save the default register controller
const register = plugin.controllers.auth.register

// extend register controller
plugin.controllers.auth.register = async (ctx) => {
  // call register controller
  await register(ctx)

  // then get userId from register response
  const userId = ctx.response.body.user.id

  // save custom data registration with update service
  const user = await strapi.entityService.update('plugin::users-permissions.user', userId, {
    data: {
      fullname: ctx.request.body.fullname,
      city: ctx.request.body.city,
   },
  });

  // return the response as you want
  ctx.body = { data: `Congrats ${user.fullname}! your account has registered successfully.` }
}
