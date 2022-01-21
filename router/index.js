const router = require("koa-router")();

const moudleUser = require("./routes/user");

router.use(moudleUser);

module.exports = router;
