const jwt = require("jsonwebtoken");
const ModelDb = require("../dbHelper");

module.exports = {
  loginCollet: async (ctx) => {
    const data = ctx.request.body;
    if (!data.password || !data.name) {
      return ctx.fail({
        code: 400,
        message: "参数错误",
      });
    }
    // 链接数据库查询 用户名 密码
    const result = await ModelDb.queryOne({ name: data.name });
    if (result) {
      const token = jwt.sign(
        {
          name: result.name,
          _id: result.id,
        },
        "my_token",
        { expiresIn: "2h" }
      );
      ctx.success({
        code: 200,
        token,
        data: result || "",
        message: "登录成功",
      });
    } else {
      ctx.fail({
        code: 400,
        message: "用户不存在",
      });
    }
  },
};
