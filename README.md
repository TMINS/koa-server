# koa-server

koa 学习项目 持续更新

问题
接口中异步查询数据库 返回 404 notfound -> 原因 中间件 next() 时 -> async + await 保持同步流程 中间件也需保持同步流程 方便排查
