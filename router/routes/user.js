const router = require("koa-router")();

const userCollet = require("../../controller/user");

router.post("/login", userCollet.loginCollet);

module.exports = router.routes();
