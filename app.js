const Koa = require("koa");
const { Port } = require("./config");
const koajwt = require("koa-jwt"); // token
const routerResponse = require("./middleware/routerResponse"); // 返回体 中间件
const error = require("./middleware/error"); //全局错误处理

const koaBody = require("koa-body");

const app = new Koa();
const router = require("./router/index");

app.use(
  koajwt({
    secret: "my_token",
  }).unless({
    path: [/\/login/],
  })
);

// 全局错误处理
app.use(error);
// 请求体中间件
app.use(
  koaBody({
    multipart: true,
    patchKoa: true,
  })
);
app.use(routerResponse());

// 路由
app.use(router.routes()).use(router.allowedMethods());

app.listen(Port, () => {
  console.log(
    `Koa is listening in http://localhost:${Port} ----------------------------------`
  );
});
