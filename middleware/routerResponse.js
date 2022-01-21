function routerResponse(option = {}) {
  return async function (ctx, next) {
    ctx.success = function (data) {
      ctx.type = option.type || "json";
      ctx.body = {
        code: data.code || option.code || 200,
        message: data.message || option.message || "success",
        ...data,
      };
    };
    ctx.fail = function (error) {
      ctx.type = option.type || "json";
      ctx.body = {
        code: error.code || 500,
        message: error.message || "fail",
      };
    };
    await next();
  };
}

module.exports = routerResponse;
