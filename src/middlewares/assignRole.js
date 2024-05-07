export default () => {
  return async (ctx, next) => {
    await next();
    if (ctx.request.url === '/api/auth/local/register' && ctx.response.status === 200) {
      const email = ctx.response.body.user.email;
      const name = ctx.response.body.user.password;

      console.log(`email: ${email} name: ${name}`);
    }
  };
};
