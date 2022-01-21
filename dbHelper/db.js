const mongoose = require("mongoose");
const config = require("../config");
const DB_URL = config.DB_URL;

mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });

mongoose.connection.on("connected", function () {
  console.log("Mongoose Connected -------------------");
});
/**
 * 连接异常 error 数据库连接错误
 */
mongoose.connection.on("error", function (err) {
  console.log("Mongoose connection error: " + err);
});
/**
 * 连接断开 disconnected 连接异常断开
 */
mongoose.connection.on("disconnected", function () {
  console.log("Mongoose connection disconnected");
});

module.exports = mongoose;
